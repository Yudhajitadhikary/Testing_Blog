import React, { Component } from 'react';
import Component1 from './Component1'
class Component2 extends Component {
    constructor(props) {
        super(props);
       
        this.Click = this.Click.bind(this);
        }
        Click() {
           this.props.action()
          }
    render() {
        const {count}=this.props
        return (
            <div>
            <button id='button' onClick={this.Click}>Count Total</button>
               <div>{count}</div>
               <Component1/>
            </div>
        );
    }
}

export default Component2;