import React, {useState, useEffect} from 'react';
import TeamForm from './components/Form'
import axios from 'axios'
import './App.css';

// const teamMembersList = [
//   {teamMemberName: 'Robert', occupation: 'Gardener'},
//   {teamMemberName: 'Earl', occupation: 'Handyman'},
//   {teamMemberName: 'Carl', occupation: 'Unemployed'},
//   {teamMemberName: 'Douglas', occupation: 'Janitor'}
// ]

const initialFormValues = { name: "", email: "", role: '' }

export default function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submit = () => {
    const newTM = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };
    if (!newTM.name || !newTM.email || !newTM.role) return;
    setTeamMembers([...teamMembers, newTM]);
    setFormValues(initialFormValues)
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Join Our Team Today!</h1>
        <TeamForm 
          values={formValues}
          update={updateForm}
          submit={submit}
        />
        <h3 style={{textDecoration: 'underline'}}>Newest Team Members:</h3>
        {teamMembers.map((TM, idx) => {
          return (
            <p key={idx} style={{margin: '0.5%'}}>
              {TM.name} is a {TM.role}. Contact them here: {TM.email}
            </p>
          );
        })}
      </header>
    </div>
  )
}
