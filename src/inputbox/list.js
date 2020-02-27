import React from 'react';
class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    console.log(this.props)
  }

  delete =(index)=>{
    return ()=>{
      this.props.del(index)
    }
  }


  render(){
    const {list} = this.props
    return (
        <div>
          <ul>
            {list.map((item,index)=>{
              return (
                  <li key={index} onClick={this.delete(index)}>{item}</li>
              )
            })}
          </ul>

        </div>
    )
  }
}
export default List;