import React from 'react'
import Button from './Button'
import './Calculator.css'
import Keypad from './Keypad'
import Display from './Display'

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:''
        }
        this.handleclick = this.handleClick.bind(this)
        this.calculate = this.Calculate.bind(this)
    }
      Calculate =()=>{
          try{
            const result = eval(this.state.data)
        this.setState({data:result})
          }catch{
              this.setState({data:"error invalid syntax"})
          }
       
      }
    handleClick = (e) => {
       const value = e.target.getAttribute('data-value')
       switch (value) {
           case 'clear':
               this.setState({data:''})
               break
               case '=':
                   this.calculate()
                   break
                   default:
                       this.setState({data:this.state.data+value})

       }
    }
    render() {
        return (
            <div className="Calculator">
            <Display data={this.state.data}/>
            <Keypad>
                <Button onClick={this.handleClick} label="C" value='clear'/>
                <Button onClick={this.handleClick} label="7" value='7'/>
                <Button  onClick={this.handleClick}label="4" value='4'/>
                <Button onClick={this.handleClick} label="1" value='1'/>
                <Button onClick={this.handleClick} label="0" value='0'/>

                <Button onClick={this.handleClick} label="/" value='/'/>
                <Button onClick={this.handleClick} label="8" value='8'/>
                <Button onClick={this.handleClick} label="5" value='5'/>
                <Button label="2" value='2'/>
                <Button  onClick={this.handleClick}label="." value='.'/>

                <Button onClick={this.handleClick} label="x" value='x'/>
                <Button onClick={this.handleClick} label="9" value='9'/>
                <Button onClick={this.handleClick} label="6" value='6'/>
                <Button onClick={this.handleClick} label="3" value='3'/>
                <Button onClick={this.handleClick} label="" value='null'/>

                <Button onClick={this.handleClick} label="-" value='-'/>
                <Button onClick={this.handleClick} label="+" size="2" value='+'/>
                <Button onClick={this.handleClick} label="=" value='=' size="2"/>
             
            </Keypad>
            </div>
        )
    }
}

export default Calculator