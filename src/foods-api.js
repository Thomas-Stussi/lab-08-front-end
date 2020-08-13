/* eslint-disable */

import request from 'superagent';

const URL = 'https://my-first-sql-2020.herokuapp.com';

export function fetchFoods() {
    return request.get(`${URL}/foods`);
    }

export function fetchFood(id) {
    return request.get(`${URL}/foods/${id}`);
    }