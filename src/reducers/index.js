// In this file, I combine all reducers which supply data to the store

import { combineReducers } from 'redux';
import promoCodeReducer from './promoCodeReducer';

export default combineReducers({
  promoCode: promoCodeReducer
});
