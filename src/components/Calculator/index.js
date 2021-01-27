import React, {Component} from 'react'
import './style.css'
import Input from '../Input'
import KeyPad from '../KeyPad'

class Index extends Component {
    state = {
        result: '',
    }

    error = () => {
        this.setState({
            result: 'ERROR'
        })
    }

    calculate = () =>{
        this.setState({
            result:  eval(this.state.result).toPrecision(3)
        })
    }

    buttonPressed = (nameOfNumber) => {
        try{
            if(nameOfNumber === '='){
            this.calculate()
        } else if (nameOfNumber ==='C'){
            this.setState({
                result: ''
            })
        } else if(nameOfNumber === 'CE'){
            this.setState({
                result: this.state.result.slice(0, -1)
            })
        } else if(nameOfNumber === '²'){
            this.setState({
                result: Math.pow(this.state.result, 2)
            })
        } else if(nameOfNumber === '√'){
                this.setState({
                    result: Math.sqrt(this.state.result).toPrecision(4)
                })
            }
        else {
            this.setState({
                result: this.state.result + nameOfNumber
            })
        }} catch (e){
            this.error()
        }

    }
    render() {
        const {result} = this.state
        return (
            <div className={'calculator'}>
                <Input result={result}/>
                <KeyPad buttonPressed={this.buttonPressed}/>
            </div>
        )
    }
}

export default Index