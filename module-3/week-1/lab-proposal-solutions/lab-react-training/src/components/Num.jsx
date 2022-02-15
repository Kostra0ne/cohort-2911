import React, { Component } from 'react'
import '../css/Number.css'


export class Number extends Component {
    render() {
        return (
            <div key={this.props.num} className='cell'>
                {this.props.num}
            </div>
        )
    }
}

export default Number
