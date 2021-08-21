//ACTIONS

import { FETCH_PRODUCTS, FETCH_PRODUCT } from './types';
import axios from 'axios';
import history from '../history';

export const fetchProducts = () => async dispatch => {
	const response = await axios.get('http://localhost:3001/products');

	dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = id => async dispatch => {
	const response = await axios.get(`http://localhost:3001/products/${id}`);

	dispatch({ type: FETCH_PRODUCT, payload: response.data });
};

export const createProduct = formValues => async dispatch => {
	await axios.post('http://localhost:3001/products', formValues);

	history.push('/');
};

export const updateProduct = (formValues, id) => async dispatch => {
	await axios.put(`http://localhost:3001/products/${id}`, formValues);

	history.push('/');
};

export const deleteProduct = id => async dispatch => {
	await axios.delete(`http://localhost:3001/products/${id}`);

	history.push('/');
};
