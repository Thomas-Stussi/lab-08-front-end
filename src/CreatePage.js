import React, { Component } from 'react'
import { createFood, fetchMeals } from './foods-api.js';
import './App.css';

export default class CreatePage extends Component {
    state = {
        name: 'pepperoni',
        deliciousness: 6,
        can_be_vegetarian: false,
        meal_id: 3,
        img: 'https://flaticons.net/icon.php?slug_category=people&slug_icon=chef',
        meals: []
    }

    componentDidMount = async () => {
        const mealsData = await fetchMeals();

        this.setState({
            meals: mealsData.body
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await createFood({
            name: this.state.name,
            deliciousness: this.state.deliciousness,
            can_be_vegetarian: this.state.can_be_vegetarian,
            img: this.state.img,
            meal_id: this.state.meal_id
        });

        this.setState({
            name: 'pepperoni',
            deliciousness: 6,
            can_be_vegetarian: false,
            meal_id: 3,
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
        if(e.target.checked) {
            this.setState({ can_be_vegetarian: true });
        } else {
            this.setState({ can_be_vegetarian: false });
        }
       
    }

    handleMealChange = e => {
        this.setState({ meal_id: e.target.value });
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
                            {
                                this.state.meals.map((meal) => <option value={meal.id}>{meal.meal}</option>)
                            }
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