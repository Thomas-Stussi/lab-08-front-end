/* eslint-disable */

import request from 'superagent';

const URL = 'https://git.heroku.com/my-first-sql-2020.git';

export function fetchFoods() {
    return request.get(`${URL}/foods`);
    }

export function fetchFood(id) {
    return request.get(`${URL}/foods/${id}`);
    }