import React, { useState } from "react";
import { Link } from "react-router-dom";

const Workouts = ({ workoutList }) => {
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedWorkouts = [...workoutList].sort((a, b) => {
    return sortOrder === "asc"
      ? a.calories - b.calories
      : b.calories - a.calories;
  });

  return (
    <div>
      <h2>Workout List</h2>
      <button onClick={() => setSortOrder("asc")}>Sort Ascending</button>
      <button onClick={() => setSortOrder("desc")}>Sort Descending</button>
      <ul>
        {sortedWorkouts.map((workout) => (
          <li key={workout.id}>
            <Link to={`/workouts/${workout.id}`}>
              {workout.name} - {workout.date}
              <br />
              Calories Burned: {workout.calories}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;
