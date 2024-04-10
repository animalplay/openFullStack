const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json())

app.use(morgan('tiny'))

const port = 3000

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get('/', (req, res) => {
  res.send('<h1>PhoneBook</h1>')
})

app.get('/api/persons', (req, res) => {
  console.log(persons)
  res.send(persons)
})

app.get('/info', (req, res) => {
  
  const personas = persons.length
  const fechaActual = new Date()
  const hoy = fechaActual.toLocaleDateString()
  const horaActual = fechaActual.toLocaleTimeString()
  const zonaGeografica = Intl.DateTimeFormat().resolvedOptions().timeZone

  const respuesta = `
  <p>
    PhoneBook has info for ${personas} persons  </br>
    ${hoy} at ${horaActual} (${zonaGeografica})
  </p>`;

  res.send(respuesta)
})

app.get('/api/persons/:id', (req, res)=> {
  const id = req.params.id
  const person = persons.find(person => Number(id) === person.id)
  
  if(person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res)=>{
  const id = req.params.id
  persons = persons.filter(person => Number(id) !== person.id)
  console.log(persons)

  res.status(204).end()
})

const generateID = () => Math.floor(Math.random() * 10000) + 1

app.post('/api/persons', (req, res) => {
  const body = req.body;

  if (!body.number || !body.name  ||  body.name.trim() === '' ||  body.number.trim() === '')  {
    console.log(body);
    return res.status(400).json({ error: 'content missing' });
  }

  const nameExists = persons.some(person => person.name === body.name);
  const numberExists = persons.some(person => person.number === body.number);

  if (nameExists || numberExists) {
    return res.status(400).json({ error: 'name and number must be unique' });
  }

  const person = {
    id: generateID(),
    name: String(body.name),
    number: String(body.number)
  };

  console.log(person);
  persons = persons.concat(person);

  res.json(person);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
