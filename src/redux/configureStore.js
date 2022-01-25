import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer, { sort, addMission } from './Missions/Missions';

const reducer = combineReducers({
  missionsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

const refresh = async () => {
  await fetch('https://api.spacexdata.com/v3/missions')
    .then((response) => response.json())
    .then((data) => {
      const newData = sort(data);
      newData.map((info) => store.dispatch(addMission(info)));
    });
};

refresh();

export default store;
