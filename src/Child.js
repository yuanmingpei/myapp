import React from 'react';
class Child extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:'ccc'
    }
  }
  componentDidMount(){
    console.log('子组件componentDidMount');
    // console.log(this.props);
    // debugger
    // this.props.self(this)
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('子组件getDerivedStateFromProps',nextProps,prevState);
    return null
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('子组件shouldComponentUpdate',nextProps,nextState);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('子组件getSnapshotBeforeUpdate',prevProps,prevState);
    return 'ttt';
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('子组件componentDidUpdate',prevProps,prevState,snapshot)
  }
  render(){
    console.log('子组件render')
    return (<div>子组件</div>)
  }

  console(){
    console.log('子组件的方法');
  }
}
export default Child
