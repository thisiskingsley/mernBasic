//REDUCERS
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { productsReducer } from './productsReducer';
import { productReducer } from './productReducer';

export default combineReducers({
	products: productsReducer,
	product: productReducer,
	form: formReducer,
});
