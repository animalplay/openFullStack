
function PersonList({ persons, onDelete }) {
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>
          <article>
            <span>{person.name}</span> -- <strong> {person.number} </strong>
            <button onClick={() => onDelete(person.id)}>Delete</button>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default PersonList;
