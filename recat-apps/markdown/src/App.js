import React from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';

// function App() {
//   return (
//     <div className="App">
//       yxu7txyucty
//     </div>
//   );
// }
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      markdown:"",
      loading:true
    }
    this.handleChange = this.handleChange.bind(this);
    this.chnageloadingVar = this.chnageloadingVar.bind(this);
  }
  chnageloadingVar(){
       this.setState({loading:false})
  }
  handleChange(e){
    this.setState({
      markdown : e.target.value
    })
  }
  render() {
    if(this.state.loading){
      setTimeout(this.chnageloadingVar,3000)
      return(<div><h1>....Loading....</h1></div>)
    }
    return (
      <div className="App">
        <textarea onChange={this.handleChange}/>
        <ReactMarkdown className='Preview' children={this.state.markdown}/>
        </div>
    )
  }
}
export default App;
