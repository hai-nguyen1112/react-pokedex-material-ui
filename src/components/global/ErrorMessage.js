import React from 'react';
import ViewPortContainer from './ViewPortContainer';
import Paper from '@material-ui/core/Paper';
import './ErrorMessage.scss';
import { Link } from 'react-router-dom';

export default function ErrorMessage() {
  return(
    <ViewPortContainer>
      <Paper className='alert' elevation={3}>
        <p><strong>Oops! Something went wrong.</strong></p>
        <p>Click <Link className='home__link' to='/home'>here</Link> to go back to the Home page.</p>
        <p>Sorry for any inconvenience caused.</p>
      </Paper>
    </ViewPortContainer>
  )
};
