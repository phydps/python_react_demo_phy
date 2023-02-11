import { Form,Input,Select,Button } from 'antd';
import React from 'react';
import FormItem from 'antd/es/form/FormItem';

class NewOrModifyForm extends React.Component{
  render(){
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
    return (
      <Form onFinish={this.handleSubmit}>
        <FormItem
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
        </FormItem>
        <FormItem
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
        </FormItem>
        <FormItem
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
        </FormItem>
        <FormItem
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
        </FormItem>
        <FormItem
          {...formItemLayout}
          label='地址'
          name="address"
        >
          <Input.TextArea />
        </FormItem>
        <FormItem {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button htmlType="button" onClick={this.onReset}>
            重置
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create(NewOrModifyForm);