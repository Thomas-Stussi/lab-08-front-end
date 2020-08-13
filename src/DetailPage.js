import React, { Component } from 'react'
import { fetchFood } from './foods-api.js';

export default class DetailPage extends Component {
    state = {
        food: {}
    }

    componentDidMount = async () => {
        const data = await fetchFood(this.props.match.params.id)
    
        this.setState({
          food: data.body
        })
      }
    

    render() {
        return (
            <main>
                <h2>
                    {this.state.food.name}:
                </h2>
                <img src={this.state.food.img} alt={this.state.food.name} className="detailImage" />
            </main>
        )
    }
}