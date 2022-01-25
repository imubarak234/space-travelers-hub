const ADD_MISSION = 'space-travelers-hub/missions/ADD_MISSION';
//  const REMOVE_MISSION = 'space-travelers-hub/missions/REMOVE_MISSION';

const initialState = [];

export const ADD_MISSION = (payload) => ({
  type: ADD_MISSION,
  payload,
})

 const missionsReducer = (state = initialState, action) => {
   switch (action.type){
     case ADD_MISSION:
       return [...state, action.payload];
      default: 
        return state;
   }
 }

 export default missionsReducer;
