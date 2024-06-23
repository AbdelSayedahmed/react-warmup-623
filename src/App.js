import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Workouts from "./components/workouts/Workouts";
import WorkoutDetails from "./components/workout/WorkoutDetails";
import CreateWorkout from "./components/createWorkout/CreateWorkout";

function App() {
  const [workoutList, setWorkoutList] = useState([
    {
      id: 1,
      name: "Morning Run",
      date: "2023-06-21",
      duration: "30 minutes",
      calories: 300,
    },
    {
      id: 2,
      name: "Evening Yoga",
      date: "2023-06-22",
      duration: "45 minutes",
      calories: 200,
    },
    {
      id: 3,
      name: "Afternoon Swim",
      date: "2023-06-23",
      duration: "60 minutes",
      calories: 500,
    },
    {
      id: 4,
      name: "Night Walk",
      date: "2023-06-24",
      duration: "40 minutes",
      calories: 150,
    },
    {
      id: 5,
      name: "Cycling",
      date: "2023-06-25",
      duration: "50 minutes",
      calories: 400,
    },
    {
      id: 6,
      name: "HIIT Workout",
      date: "2023-06-26",
      duration: "30 minutes",
      calories: 450,
    },
    {
      id: 7,
      name: "Strength Training",
      date: "2023-06-27",
      duration: "45 minutes",
      calories: 350,
    },
  ]);

  const addWorkout = (newWorkout) => {
    setWorkoutList([...workoutList, newWorkout]);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/workouts"
              element={<Workouts workoutList={workoutList} />}
            />
            <Route
              path="/workouts/:id"
              element={<WorkoutDetails workoutList={workoutList} />}
            />
            <Route
              path="/create"
              element={<CreateWorkout addWorkout={addWorkout} />}
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
