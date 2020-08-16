import React, { Component } from 'react'
import { fetchFood, deleteFood, updateFood, fetchMeals } from './foods-api.js';


export default class DetailPage extends Component {
    state = {
        meals: [],
        food: {},
        name: '',
        deliciousness: 1,
        can_be_vegetarian: false,
        img: '',
        meal: {},
        meal_name: ''
    }

    componentDidMount = async () => {
        const data = await fetchFood(this.props.match.params.id)
        const mealsData = await fetchMeals();
        const matchingMeal = mealsData.body.find(meal => meal.meal === data.body.meal_name)

    
        this.setState({
            meals: mealsData.body,
            food: data.body,
            name: data.body.name,
            deliciousness: data.body.deliciousness,
            can_be_vegetarian: data.body.can_be_vegetarian,
            img: data.body.img,
            meal_id: matchingMeal.id,
            meal_name: matchingMeal.meal
        })
      }

      handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await updateFood(
            this.props.match.params.id,
            {
            name: this.state.name,
            deliciousness: this.state.deliciousness,
            can_be_vegetarian: this.state.can_be_vegetarian,
            img: this.state.img,
            meal_id: this.state.meal_id
        });

        const updatedFood = await fetchFood(this.props.match.params.id)

        this.setState({
            name: 'pepperoni',
            deliciousness: 6,
            can_be_vegetarian: false,
            meal_id: 3,
            img: 'https://flaticons.net/icon.php?slug_category=people&slug_icon=chef',
            food: updatedFood.body
        })
    } catch(e) {
        console.log(e.message)
    }
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

    handleDelete = async () => {
        console.log(this.props.match.params.id);
        try{
            await deleteFood(this.props.match.params.id);
            this.props.history.push('/');
        } catch(e) {
            console.log(e.message);
        }
        
    }
    
    render() {
        return (
            <main>
                <div>
                <h2>
                    {this.state.food.name}:
                </h2>
                <img src={this.state.food.img} alt={this.state.food.name} className="detailImage" />
                <button style={{ background: 'crimson'}} onClick={this.handleDelete}>Delete</button>
                </div>
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
                        <select id='select' onChange={this.handleMealChange} value={this.state.meal_name}>
                            {
                                this.state.meals.map((meal) => <option value={meal.id}>{meal.meal}</option>)
                            }
                        </select>
                    </label>
                    <label>
                        Image URL: 
                        <input onChange={this.handleImgChange} value={this.state.img} />
                    </label>
                    <button>Update Dish!</button>
                </form>
                                
            </main>
        )
    }
}