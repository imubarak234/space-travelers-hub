const ADD_MISSION = 'space-travelers-hub/missions/ADD_MISSION';
//  const REMOVE_MISSION = 'space-travelers-hub/missions/REMOVE_MISSION';

const initialState = [];

export const addMission = (payload) => ({
  type: ADD_MISSION,
  payload,
});

export const sort = (args) => {
  const ans = [];
  for (let x = 0; x < args.length; x += 1) {
    const newObj = {
      mission_id: args[x].mission_id,
      mission_name: args[x].mission_name,
      description: args[x].description,
    };
    ans.push(newObj);
  }
  return ans;
};

export const addAsync = () => (dispatch) => fetch('https://api.spacexdata.com/v3/missions')
  .then((response) => response.json())
  .then((data) => {
    const newData = sort(data);
    newData.map((info) => dispatch(addMission(info)));
  });

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default missionsReducer;
