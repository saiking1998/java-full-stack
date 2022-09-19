import React from 'react';
import people from './component/Data'
import { FaChevronLeft,FaChevronRight,FaQuoteRight } from 'react-icons/fa';
class Rewiew extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index:0

        }
        this.randomPerson = this.randomPerson.bind(this)
        this.prevPerson = this.prevPerson.bind(this)
        this.nextPerson = this.nextPerson.bind(this)
    }
    randomPerson = ()=>{
        let randomIndex = Math.floor(Math.random()*people.length)
    this.setState({index: randomIndex})

    }
    prevPerson = ()=>{
        if(this.state.index ==0){
             this.setState({index:people.length-1})
        }
        else{
            this.setState({
                index : this.state.index-1
            })
        }
    }
    nextPerson = ()=>{
        if(this.state.index == people.length-1){
             this.setState({index:0})
        }
        else{
            this.setState({
                index : this.state.index+1
            })
        }
    }
    render() {
        const {name,job,image,text}= people[this.state.index]
        return (
            <article className="review">
                
                <div className="img-container">
                    <img src={image} alt={name} className="person-img"/>

                    <span className="quote-icon">
                        <FaQuoteRight />
                        </span>

                    
                    </div>
                    <h4 className="author">{name}</h4>
                    <p className="job">{job}</p>
                    <p className="info">{text}</p>
                <div className="button-container">
                    <button className="prev-btn" onClick={this.prevPerson}><FaChevronLeft /></button>
                    <button className="next-btn" onClick={this.nextPerson}><FaChevronRight /></button>
                    
                    
                    </div>
                    <button className="random-btn" onClick={this.randomPerson}>Suprise me</button>
                </article>
             
        )
    }
}
export default Rewiew