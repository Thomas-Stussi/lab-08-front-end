/* eslint-disable */

import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'https://my-first-sql-2020.herokuapp.com';

export function fetchFoods() {
    return request.get(`${URL}/foods`);
}

export function fetchFood(id) {
    return request.get(`${URL}/foods/${id}`);
}

export function createFood(foodData) {
    return request.post(`${URL}/foods`, foodData)
}

export function fetchMeals() {
    return request.get(`${URL}/meals`)
}

export function deleteFood(id) {
    return request.delete(`${URL}/foods/${id}`)
}

export function updateFood(id, updatedFood) {
    return request.put(`${URL}/foods/${id}`, updatedFood)
}