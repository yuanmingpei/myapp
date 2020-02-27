import React from 'react';
import Add from './add';
import List from './list';
class InputBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:[
          111,
          222,
          333
      ]
    };
  }
  componentDidMount(){
    // console.log(this.chi);
  }

  //父组件拿到子组件传过来的值
  add = (val)=> {
    this.state.data.unshift(val);
    this.setState(this.state);
  }

  deleteValue =(index)=>{
    this.state.data.splice(index,1);
    this.setState(this.state);
  }

  render(){
    return (
        <div>
          <Add getAdd={this.add}/>
          <List del={this.deleteValue} list={this.state.data}/>
        </div>
    )
  }
}
export default InputBox;