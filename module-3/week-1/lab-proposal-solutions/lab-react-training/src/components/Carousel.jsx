import React, { Component } from 'react'

export class Carousel extends Component {
    state = {
        count: Math.floor(Math.random() * this.props.imgs.length)
    }

    handleLeft = () => {
        this.setState({
            count: (((this.state.count -1) % 4) + this.props.imgs.length) % 4
        })
    }
    handleRight = () => {
        this.setState({
            count: (this.state.count +1) % 4
        })
    }

    render() {
        console.log('count! : ', this.state.count)
        return (
            <div className='carousel-container'>
                <button onClick={this.handleLeft}>Left</button>
                <img src={this.props.imgs[this.state.count]} alt="fun" />
                <button onClick={this.handleRight}>Right</button>
            </div>
        )
    }
}

export default Carousel
