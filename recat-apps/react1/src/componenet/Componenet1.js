import React,{Component} from 'react';


class Component1 extends Component {
  constructor(props){
    super(props);
   
    this.state = {
      gg:'sai',
      gg1:'krishna'
    }
  }
chabgegg = ()=>{
  // this.setState({gg: 'India'})
  this.setState  ({
    gg:'India',
    gg1 : 'America'

  })
  } 
  render() {
   const{gg,gg1}= this.state
      return (
        <>
        {/* <h1>Hello {props.countryname}{props.gg ? ' and '+props.gg : ''}</h1> */}
        <h1>Hello {gg} and {gg1}</h1>
        
        <p>Hello World is the text we need to display Hello World is the text we need to display Hello World is the text we need to display Hello World is the text we need to display Hello World is the text we need to display Hello World is the text we need to display Hello World is the text we need to display </p>
        <button onClick={this.chabgegg}>change gg</button>
        </>
    );
      
  }
}

// const HelloWorld =(props)=>{

//     return (
//     <>
//     {/* <h1>Hello {props.countryname}{props.gg ? ' and '+props.gg : ''}</h1> */}
//     <h1>Hello {props.countryname}{props.gg && ' and '+props.gg}</h1>
    
//     <p>Hello World is the text we need to display</p>
//     </>
// )
// }
export default Component1