import React from "react";
import { useWorkoutsContext } from '../hooks/useWorkoutContext'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE',
    })

    const data = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: data})
    }
  };


  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <span onClick={handleClick}> X </span>
    </div>
  );
};

export default WorkoutDetails;
