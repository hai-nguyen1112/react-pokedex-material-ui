import React from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import './ViewPortContainer.scss';

export default function ViewPortContainer(props) {

  return(
    <Container className='viewport__container' disableGutters={true}>
      {props.children}
    </Container>
  )
};

ViewPortContainer.propTypes = {
  children: PropTypes.node
}

ViewPortContainer.defaultProps = {
  children: null
}
