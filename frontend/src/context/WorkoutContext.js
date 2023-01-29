import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };

    case "CREATE_WORKOUTS":
      return {
        //adds a new workout (action.payload) to the previous workout array [state.workouts]
        workouts: [action.payload, ...state.workouts],
      };

    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter(
          (item) => item._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null, //initial value for the state
  });

  //this is how we update the state object
  //payload property represents any data we need to make changes to out state
  // dispatch({type: 'CREATE_WORKOUT', payload:})

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
