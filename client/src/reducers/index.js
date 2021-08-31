import { combineReducers } from 'redux';

import authReducers from './authReducers';

export default combineReducers({
  auth: authReducers,
});

//kljuc glavni od naseg reducera
