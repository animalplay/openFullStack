// PersonForm.js
import { useState } from 'react';

function PersonForm({ onAddPerson }) {
  const initialState = {
    name: "",
    number: "",
  };

  const [newPerson, setNewPerson] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPerson((prevNewPerson) => ({
      ...prevNewPerson,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPerson(newPerson);
    setNewPerson(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Contact</legend>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          onChange={handleChange}
          value={newPerson.name}
        />

        <label htmlFor="number">Number phone:</label>
        <input
          type="tel"
          id="number"
          name="number"
          placeholder="123-45-678"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          required
          value={newPerson.number}
          onChange={handleChange}
        />
      </fieldset>
      <button>Add contact</button>
    </form>
  );
}

export default PersonForm;
