import React from 'react';
import Child from './Child'
class Parent extends React.Component{
  constructor(props){
    super(props);
    // this.chi = React.createRef();
    this.state = {
      name:''
    };
  }
  componentDidMount(){
    // console.log(this.chi);
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(nextProps,prevState);
  //   // return null
  // }

  onRef(comp){
    // debugger
    // console.log(111);
    // console.log(comp);
    // this.child = comp;
  }
  console(){
    // this.chi.console()
    this.setState({
      name:'aaa'
    })
  }
  render(){
    return (
        <div>
          <button onClick={this.console.bind(this)}>点击执行子组件方法</button>
          {/*<Child self={this.onRef.bind(this)}/>*/}
          <Child ref={(el)=>{this.chi = el}} data={this.state.name}/>
        </div>
    )
  }
}
export default Parent;