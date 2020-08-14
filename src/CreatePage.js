import React, { Component } from 'react'
import { createFood } from './foods-api.js';
import './App.css';

export default class CreatePage extends Component {
    state = {
        name: 'pepperoni',
        deliciousness: 6,
        can_be_vegetarian: false,
        meal: 'dinner',
        img: 'https://flaticons.net/icon.php?slug_category=people&slug_icon=chef',
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await createFood({
            name: this.state.name,
            deliciousness: this.state.deliciousness,
            can_be_vegetarian: this.state.can_be_vegetarian,
            meal: this.state.meal,
            img: this.state.img,
        });

        this.setState({
            name: 'pepperoni',
            deliciousness: 6,
            can_be_vegetarian: false,
            meal: 'dinner',
            img: 'https://flaticons.net/icon.php?slug_category=people&slug_icon=chef',
        })
        
        this.props.history.push('/');
    }

    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    handleDeliciousnessChange = e => {
        this.setState({ deliciousness: e.target.value });
    }

    handleVeggieChange = e => {
       this.setState({ can_be_vegetarian: true });
    }

    handleMealChange = e => {
        this.setState({ meal: e.target.value });
    }

    handleImgChange = e => {
        this.setState({ img: e.target.value });
    }

    render() {
        return (
            <main>
                <h2>COOKIN' TIME!</h2>
                <form  className="content" onSubmit={this.handleSubmit}>
                    <label>
                        Name: 
                        <input onChange={this.handleNameChange} value={this.state.name} />
                    </label>
                    <label>
                        Deliciousness: 
                        <input onChange={this.handleDeliciousnessChange} type="number" value={this.state.deliciousness} />
                    </label>
                    <label>
                        Possibly Vegetarian?: 
                        <input type="checkbox" onChange={this.handleVeggieChange} />
                        Check for True
                    </label>
                    <label>
                        Meal: 
                        <select onChange={this.handleMealChange} value={this.state.meal}>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="snack">Snack</option>
                        </select>
                    </label>
                    <label>
                        Image URL: 
                        <input onChange={this.handleImgChange} value={this.state.img} />
                    </label>
                    <button>Get Cookin'!</button>
                </form>
            </main>
        )
    }
};