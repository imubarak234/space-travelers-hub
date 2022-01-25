import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import MissionsGrid from './MissionsGrid';

const MissionsContainer = () => {
  const states = useSelector((state) => state.missionsReducer, shallowEqual);

  return (
    <div className="container-fluid h-auto pb-5">
      <MissionsGrid list={states} />
    </div>
  );
};

export default MissionsContainer;
