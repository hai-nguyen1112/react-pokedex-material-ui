import * as actionTypes from './actionTypes';
import axios from '../utils/axiosInstance'

// Fetch Pokedex
export const fetchPokedex = () => {
  return dispatch => {
    dispatch(fetchPokedexStart())

    axios({
      url: '/pokemon',
      method: 'GET'
    })
    .then(response => dispatch(fetchPokedexSuccess(response.data)))
    .catch(error => dispatch(fetchPokedexFailure(error)))
  }
};

const fetchPokedexStart = () => {
  return {
    type: actionTypes.FETCH_POKEDEX_START,
    isLoadingPokedex: true,
    loadPokedexError: null
  }
};

const fetchPokedexSuccess = pokedex => {
  return {
    type: actionTypes.FETCH_POKEDEX_SUCCESS,
    pokedex: pokedex,
    isLoadingPokedex: false,
    loadPokedexError: null
  }
};

const fetchPokedexFailure = error => {
  return {
    type: actionTypes.FETCH_POKEDEX_FAILURE,
    isLoadingPokedex: false,
    loadPokedexError: error
  }
};
