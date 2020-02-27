import React from 'react';
class Add extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }
  componentDidMount(){


  }

  addHandle = ()=> {
    console.log(this.input.value);
    this.props.getAdd(this.input.value)
  }


  render(){
    return (
        <div>
          <input type="text" ref={(i)=>(this.input = i)}/>
          <button onClick={this.addHandle}>增加</button>
        </div>
    )
  }
}
export default Add;