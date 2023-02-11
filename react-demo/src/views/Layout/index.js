import { Divider, Popconfirm, Space, Table, Tag, Button, Drawer, Form, Input, Select, message } from 'antd';
import service from '../../api/test.js';
import React,{Component} from 'react';
import FormItem from 'antd/es/form/FormItem';
// import MyFormModal from './formModal';

class MyTable extends Component{
  formRef = React.createRef();
  state = {
    data : [],
    columns: [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '家庭地址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '手机号码',
        dataIndex: 'mobile',
        key: 'mobile',
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        render: (_, { sex }) => {
          let color = sex === 'male' ? 'geekblue' : 'green';
          if (sex === 'other') {
            color = 'volcano';
          }
          return <Tag color={color} key={sex}>
          {sex.toUpperCase()}
        </Tag>
        }
      },
      {
        title: '操作',
        key: 'action',
        textAlign:'right',
        render: (_,record) => 
          <Space size="middle">
            <a onClick={ () => this.handleModify(record) }>修改</a>
            <Divider type="vertical" />
            <Popconfirm
             title="确定要删除吗？"
             onConfirm={ () => this.handleDelete(record) }
             okText="确定"
             cancelText="取消"
            >
              删除
            </Popconfirm>
          </Space>
        
      }
    ],
    open: false,
    modalFlag: '', // 新增or编辑的标识
    modalForm:{}
  }

  componentDidMount(){
    this.getData()
    console.log('数据',this.formRef.current)
  }
  // 删除
  handleDelete = (item) => {
    console.log(item)
    service.deleteApi(item.id).then((res) => {
      if(res.code === 200){
        message.success(res.msg)
        this.getData()
      }
    }).catch(err => {
      message.error(err.message)
    })
  }
  // 编辑
  handleModify = (item) => {
    this.setState({
      open: true,
      modalFlag: 'modify',
      modalForm: item
    },() => {
      this.formRef.current.setFieldsValue({
        ...this.state.modalForm
      })
    }
    )
  }
  getData = () => {
    service.queryApi().then((res) => {
      console.log(res)
      const list = res.data.map((item, index) =>{
        item.key = index
        return item
      })
      this.setState(
        {
          data : list
        }
      )
    }).catch(err => {
      message.error(err.message)
    })
  }
  onCloseDrawer = () => {
    this.setState(
      {
        open : false,
        modalForm: {}
      }
    )
  }
  onReset = () => {
    this.formRef.current.resetFields();
  }
  openModal = (flag) => {
    this.setState({
      open: true,
      modalFlag: flag,
    })
    this.formRef.current.resetFields();
  }
  handleSubmit = (e) => {
    console.log(e)
    // 区分新增还是编辑
    if('add' === this.state.modalFlag) {
      service.addApi(e).then((res) => {
        if(res.code === 200){
          message.success(res.msg)
          this.onCloseDrawer()
          this.getData()
        }
      }).catch(err => {
        message.error(err.message)
      })
    } else {
      const params = {...e}
      params['id'] = this.state.modalForm.id;
      service.updateApi(params).then((res) => {
        if(res.code === 200){
          message.success(res.msg)
          this.onCloseDrawer()
          this.getData()
        }else {
          message.error(res.msg)
        }
      }).catch(err => {
        message.error(err.message)
      })
    }

  }
  
  render(){
    const { columns, data, open, modalForm,modalFlag } = this.state;
    const formItemLayout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 10,
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    };
    const sexOptions = [
      {value:'female',label: '女'},
      {value:'male',label: '男'},
      {value:'other',label: '暂不设置'}
    ]
    return(
      <>
        <Button onClick={() => this.openModal('add')}>新增</Button>
        <Table columns={columns} dataSource={data} />
        <Drawer
          title={modalFlag === 'add' ? '新增':'编辑'}
          open={open}
          onClose={this.onCloseDrawer}
        >
          {/* <MyFormModal /> */}
          <Form onFinish={this.handleSubmit} ref={this.formRef}>
            <Form.Item
             {...formItemLayout}
             label='姓名'
             name="name"
             rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
             {...formItemLayout}
             label='年龄'
             name="age"
             rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
             {...formItemLayout}
             label='性别'
             name="sex"
             rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                options={sexOptions}
              />
            </Form.Item>
            <Form.Item
             {...formItemLayout}
             label='手机号码'
             name="mobile"
             rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input maxLength='11'/>
            </Form.Item>
            <Form.Item
             {...formItemLayout}
             label='地址'
             name="address"
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button htmlType="button" onClick={this.onReset}>
                重置
              </Button>
            </Form.Item>
          </Form>
        </Drawer>
      </>
    )
  }
}

export default MyTable;