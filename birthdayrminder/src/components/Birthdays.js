import React,{Component} from 'react';
import Data from '../resources/Data';
import List from './List';

class Birthdays extends Component {
    constructor(props){
        super(props);
        this.state = {
            people:Data
        }
        this.Clearall = this.Clearall.bind(this)
    }
    Clearall(){
        this.setState({people:[]})
    }
    DeleteThis=(id)=>{
        // this.setState({people:this.state.people.})
        setTimeout(()=>{
            this.setState({people:this.state.people.filter(peop=>peop.id!==id)})
        },3000)
        
        // people = people.filter(peop=>peop.id !== id)
        }
    render() {
       
        return (
           
                <main>
                <section className="container">
                <h3>{this.state.people.length} Birthdays today....</h3>
                <List people={this.state.people} DeleteThis ={this.DeleteThis}/>
                <button onClick={this.Clearall} >Clear all</button>
                </section>
                  

                </main>
                
            
        )
    }
}
export default  Birthdays;