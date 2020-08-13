/* eslint-disable */
import React from 'react';
import { fetchFoods } from './foods-api.js';
import './App.css';

class App extends React.Component {
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
      <div className="App">
        <header className="App-header">
          <h2>foods:</h2>
          {
            this.state.foods.map((food) => {
              return <div style={{ margin: 5, padding: 5, border: 'solid 3px white'}}>
               Name: {food.name} Deliciousness: {food.deliciousness} Vegetarian: {food.can_be_vegetarian} Meal: {food.meal}
              </div>
            })
          }
        </header>
        </div>
    )
}
}

export default App;