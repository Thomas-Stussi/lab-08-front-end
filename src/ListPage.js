/* eslint-disable */
import React from 'react';
import { fetchFoods } from './foods-api.js';
import './App.css';
import { Link } from 'react-router-dom';

class ListPage extends React.Component {
  state = {
    foods: [] 
  }

  componentDidMount = async () => {
    const data = await fetchFoods()
    
    this.setState({
      foods: data.body
    })
  }

  render() {

    return (
        <main>
          {
            this.state.foods.map((food) => {
              return <Link to={`/detail/${food.id}`} key={`${food.id}-${food.name}`} className="foodItems">
               Name: {food.name} <br/> Deliciousness: {food.deliciousness} <br/>Meal: {food.meal} <br/> Vegetarian?: {food.can_be_vegetarian ? 'True' : 'False'} <br/> <img className="picture" src={food.img} />
            
              </Link>
            })
          }
        </main>
    )
}
}

export default ListPage;