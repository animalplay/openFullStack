// App.js
import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import personService from "./services/personService";
import { Notification } from "./components/Notification";


function App() {
  const [nameToFilter, setNameToFilter] = useState("");
  const [persons, setPersons] = useState([]);
  const [message, setMessage] = useState("");
  const [style, setStyle] = useState("ok");

  useEffect(() => {
    personService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons);
      })
      .catch((error) => {
        console.error("Error al obtener personas:", error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setNameToFilter(event.target.value);
  };

  const filteredPersons =
    nameToFilter.trim() === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(nameToFilter.toLowerCase())
        );

  const addPerson = (newPerson) => {
    //Revisando que hayan usuarios repetidos
    if (persons.some((person) => person.name === newPerson.name)) {
      console.log("Usuarios repetidos");

      const person = persons.find((person) => newPerson.name == person.name);
      const { id } = person
      console.log("persona repetida", person);

      //Validando que los numeros sean iguales
      if (person.number !== newPerson.number) {
        if (
          confirm(
            `${person.name} is already added in phonebook, do you want to replace the old number with the new one?`
          )
        ) {
          const updatingPerson = { ...person, number: newPerson.number }; //Creando objeto actualizado
          personService
            .update(id, updatingPerson)
            .then((returnedPerson) => {
              console.log("Actualizado", updatingPerson);
              setPersons(
                persons.map((person) =>
                  person.id !== id ? person : returnedPerson
                )
              )
              setMessage(`${updatingPerson.name} updated successfully`);
              setTimeout(() => {
                setMessage(null);
              }, 5000);
            })
            .catch(() =>{
              setMessage(
                `ERROR: Information of ${updatingPerson.name} has already been removed from server`
              );
              setStyle('error');
              setTimeout(() => {
                setMessage(null);
                setStyle('ok');
              }, 5000);

              setPersons(
                persons.filter((person) => person.id !== updatingPerson.id)
              );
            })
        }
      } else {
        alert("Name and number already in phonebook");
      }
    } else {
      //Si la persona es nueva.
      console.log("New Person");
      personService
        .create(newPerson)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          console.log("Creado", returnedPerson);

          setMessage(`Added ${returnedPerson.name}`);
          setTimeout(() => { 
            setMessage(null);
          }, 5000)
        })
        .catch((error) => {
          console.error("Error al agregar personas:", error);
          setMessage(
            `ERROR: Information of ${newPerson.name} could not be added to server`
          );
          setStyle('error');
          setTimeout(() => {
            setMessage(null);
            setStyle('ok');
          }, 5000);
        });
    }
  };

  const deletePerson = (id) => {
    const eliminatedPerson = persons.find((person) => id == person.id);
    if (confirm(`Delete ${eliminatedPerson.name} ?`)) {
      personService.remove(id)
      .then((returnedPerson) => {
        console.log("Eliminado", returnedPerson);
        setPersons(persons.filter((person) => person.id != id));

        setMessage(`Delete ${eliminatedPerson.name}`);
          setTimeout(() => { 
            setMessage(null);
          }, 5000)
      })
      .catch(() =>{
        setMessage(
          `ERROR: Information of ${eliminatedPerson.name} has already been removed from server`
        );
        setStyle('Error');
        setTimeout(() => {
          setMessage(null);
          setStyle('ok');
        }, 5000);

        setPersons(
          persons.filter((person) => person.id !== eliminatedPerson.id)
        );
      })
    }
  };

  return (
    <>
      <h2>Search person</h2>
      <Filter value={nameToFilter} onChange={handleSearchChange} />

      <h2>PhoneBook</h2>

      <Notification message={message} style={style} />

      <PersonForm onAddPerson={addPerson} />

      <h2>Numbers</h2>

      <PersonList persons={filteredPersons} onDelete={deletePerson} />
    </>
  );
}

export default App;
