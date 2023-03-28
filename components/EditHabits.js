import { useState, FormEvent } from 'react';


export default function EditHabitForm({ habit, onSubmit }) {
  const [name, setName] = useState(habit.name);
  const [description, setDescription] = useState(habit.description);
  const [frequency, setFrequency] = useState(habit.frequency);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ id: habit.id, name, description, frequency });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          className="form-control"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="frequency">Frequency:</label>
        <select
          id="frequency"
          className="form-control"
          value={frequency}
          onChange={(event) => setFrequency(event.target.value)}
        >
          <option value="">Select Frequency</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Save Changes
      </button>
    </form>
  );
}
