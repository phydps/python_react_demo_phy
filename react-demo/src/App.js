// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListsTest from './ListTest';
import MyTable from './views/Layout/index';

//函数组件
function HelloFn(){
  const clickOnHandler = () => {
    alert('点击类函数组件的方法')
  }

  return <div onClick={clickOnHandler}>组件Hello</div>
}


class InputComponent extends React.Component{
  state = {
    message: 'this is message',
  }

  changeHandler = (e) => {
    this.setState({
      message: e.target.value
    })
    console.log('input数据',this.state.message)
  }

  render(){
    return(
      <div>
        {/* 绑定value 绑定事件 */}
        <input value={this.state.message} onChange={this.changeHandler} />
      </div>
    )
  }
}

class CSon extends React.Component{
  render(){
    return(
      <div>
        子组件2{this.props.msg}
      </div>
    )
  }
}

function FSon(props){
  <div>
    子组件1{
      props.msg
    }
  </div>
}

//类组件
class HelloC extends React.Component{
  handler(){
    alert('类组件来的方法点击')
  }
  render(){
    return (
      <div>
        <p>类组件</p>
        <button onClick={this.handler}>click me</button>
      </div>
    )
  }
}


function Son(props){
  
  const clickOnHandler = () =>{
    props.changeMsg('this is newMessage')
  }

  return(
    <div>
      子组件
      {props.msg}
      <button onClick={clickOnHandler}>click</button>
    </div>
  )
}
// function App() {
//   return (
//     <div className="App">
      {/* <header className="App-header">
        <img src="logo" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <HelloFn></HelloFn>
      <HelloFn/>
      <HelloC/>
      <InputComponent/>
      <FSon msg=""/> */}
//     </div>
//   );
// }

class App extends React.Component{
  state = {
    message: 'this is message'
  }

  // 提供回调函数
  changeMessage = (newMsg) => {
    console.log('子组件传递过来的值',newMsg)
    this.setState({
      message: newMsg
    })
  }

  render(){
    return (
      <div>
        <div>Python+React前后端分离</div>
        {/* <Son
         msg={this.state.message}
         changeMsg={this.changeMessage}
        />
        <ListsTest /> */}
        <MyTable />
      </div>
    )
  }
}

export default App;
