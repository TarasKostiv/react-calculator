import React, {Component} from 'react'
import './style.css'

class Index extends Component {
    render() {
        return (
            <div className={'input'}>
                <p>{this.props.result}</p>
            </div>
        )
    }
}

export default Index