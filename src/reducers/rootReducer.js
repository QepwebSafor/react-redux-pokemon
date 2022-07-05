import { combineReducers } from 'redux';
import pokemonReducer from '../slices/pokemon';
import uiReducer from '../slices/ui';

const Rootreducer = combineReducers({
   
  pokemon: pokemonReducer,
  ui: uiReducer,
});

export default Rootreducer;