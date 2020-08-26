import React from 'react';
import ViewPortContainer from './ViewPortContainer';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function LoadingProgress() {
  return(
    <ViewPortContainer>
      <CircularProgress color='secondary' size={80} thickness={4} />
    </ViewPortContainer>
  )
};
