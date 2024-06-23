import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateWorkout = ({ addWorkout }) => {
  const [form, setForm] = useState({
    name: "",
    date: "",
    duration: "",
    calories: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkout({
      ...form,
      id: Date.now(), // generate a unique id
      calories: parseInt(form.calories, 10), // convert calories to number
    });
    navigate("/workouts");
  };

  return (
    <div>
      <h2>Create Workout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Workout Name"
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="duration"
          value={form.duration}
          onChange={handleChange}
          placeholder="Duration"
          required
        />
        <input
          type="number"
          name="calories"
          value={form.calories}
          onChange={handleChange}
          placeholder="Calories Burned"
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateWorkout;
