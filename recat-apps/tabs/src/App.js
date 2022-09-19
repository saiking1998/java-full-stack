import React from 'react'
import './App.css';
import Tabs from './components/Tabs'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabNames: ["Home","About","Features"]
    }
  }
  render() {
    return (
      <div className='App'>
        <div className='browser'>
         <Tabs tabNames={this.state.tabNames}/>
          <div className='viewport'>Pages Go Here</div>
        </div>


      </div>
    )
  }
}
export default App;
