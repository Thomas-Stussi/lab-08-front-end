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
        </header>
        <main>
          {
            this.state.foods.map((food) => {
              return <div className="foodItems" style={{ margin: 5, padding: 5, border: 'solid 3px white'}}>
               Name: {food.name} <br/> Deliciousness: {food.deliciousness} <br/>Meal: {food.meal} <br/> Vegetarian?: {food.can_be_vegetarian ? 'True' : 'False'} <br/> <img className="picture" src={food.img} />
            
              </div>
            })
          }
        </main>
        </div>
    )
}
}

export default App;