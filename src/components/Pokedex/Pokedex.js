import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokedex } from '../../redux/actions';
import PropTypes from 'prop-types';
import LoadingProgress from '../global/LoadingProgress';
import ErrorMessage from '../global/ErrorMessage';
import { isEmpty } from 'lodash';

function Pokedex(props) {
  const {
    retrievePokedex,
    pokedex,
    isLoadingPokedex,
    loadPokedexError
   } = props

  useEffect(() => {
    // Fetch Pokedex
    retrievePokedex()
  }, [retrievePokedex])

  console.log(pokedex)

  return (
    <>
      {isLoadingPokedex && <LoadingProgress />}
      {!isLoadingPokedex && !isEmpty(loadPokedexError) && <ErrorMessage />}
      {!isLoadingPokedex && isEmpty(loadPokedexError) && (
        <>
          This is Pokedex page.
        </>
      )}
    </>
  )
};

const mapStateToProps = state => {
  return {
    pokedex: state.pokedex.pokedex,
    isLoadingPokedex: state.pokedex.isLoadingPokedex,
    loadPokedexError: state.pokedex.loadPokedexError
  }
};

const mapDispatchToProps = dispatch => {
  return {
    retrievePokedex: () => dispatch(fetchPokedex())
  }
};

Pokedex.propTypes = {
  pokedex: PropTypes.array,
  isLoadingPokedex: PropTypes.bool,
  loadPokedexError: PropTypes.object,
  retrievePokedex: PropTypes.func
}

Pokedex.defaultProps = {
  pokedex: [],
  isLoadingPokedex: false,
  loadPokedexError: {},
  retrievePokedex: undefined
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
