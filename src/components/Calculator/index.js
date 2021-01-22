import React, {Component} from 'react';
import './style.css';

class Index extends Component {
    render() {
        return (
            <div className="calculator">
                <input className="calculator__number-input" type="number"/>
                <div className="calculator__button-grid">
                    <button className="calculator__number-button">1</button>
                    <button className="calculator__number-button">2</button>
                    <button className="calculator__number-button">3</button>
                    <button className="calculator__number-button">4</button>
                    <button className="calculator__number-button">5</button>
                    <button className="calculator__number-button">6</button>
                    <button className="calculator__number-button">7</button>
                    <button className="calculator__number-button">8</button>
                    <button className="calculator__number-button">9</button>
                    <button className="calculator__number-button">0</button>
                    <button className="calculator__number-button">+</button>
                    <button className="calculator__number-button">-</button>
                    <button className="calculator__number-button">*</button>
                    <button className="calculator__number-button">.</button>
                    <button className="calculator__number-button">^</button>
                    <button className="calculator__number-button">&#8730;</button>
                    <button className="calculator__number-button">&#8592;</button>
                    <button className="calculator__number-button">.</button>
                    <button className="calculator__number-button">C</button>
                </div>
            </div>
        );
    }
}

export default Index;