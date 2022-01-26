import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import MissionsList from './MissionsList';

const ProfileContainer = () => {
  const states = useSelector((state) => state.missionsReducer, shallowEqual);
  const newStates = states.filter((next) => next.reserved);

  return (
    <div className="container w-50">
      <MissionsList
        lists={newStates}
      />
    </div>
  );
};

export default ProfileContainer;
