/* eslint-disable no-console */

import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import MissionsList from './MissionsList';
import RocketList from './RocketList';

const ProfileContainer = () => {
  const states = useSelector((state) => state.missionsReducer, shallowEqual);
  const statesR = useSelector((state) => state.rocketReducer, shallowEqual);

  const newStates = states.filter((next) => next.reserved);
  const newStatesR = statesR.filter((next) => next.reserved);

  return (
    <div className="container w-100 d-flex">
      <MissionsList
        lists={newStates}
        count={newStates.length}
      />
      <RocketList
        listsR={newStatesR}
        countR={newStatesR.length}
      />
    </div>
  );
};

export default ProfileContainer;
