import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 30rem;
  input {
    margin: 2%;
    padding: 0.5rem;
  }
  select {
    margin: 2%;
    padding: 0.5rem;
  }
  button {
    margin: 2%;
    padding: 0.5rem;
  }
`

export default function TeamForm({values, update, submit}) {

  const onChange = evt => {
    const {name, value} = evt.target;
    update(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  return (
    <div>
      <StyledForm onSubmit={onSubmit}>
        <input 
          type='text'
          name='name'
          onChange={onChange}
          value={values.name}
          placeholder='Type your name'
          maxLength='15'
        />
        <input 
          type='email'
          name='email'
          onChange={onChange}
          value={values.email}
          placeholder='Type your email'
          maxLength='25'
        />
        <select name='role' value={values.role} onChange={onChange}>
          <option value=''>---select role---</option>
          <option value='Backend Engineer'>Backend Engineer</option>
          <option value='Frontend Engineer'>Frontend Engineer</option>
          <option value='Designer'>Designer</option>
          <option value='Leech'>Leech</option>
          <option value='Sewer Rat'>Sewer Rat</option>
          <option value='Wild Alaskan Salmon'>Wild Alaskan Salmon</option>
          <option value='Prairie Dog'>Prairie Dog</option>
          <option value='Chimp'>Chimp</option>
          <option value='Halibut'>Halibut</option>
          <option value='Billy Goat'>Billy Goat</option>
          <option value='Earthworm'>Earthworm</option>
        </select>
        <button>Submit</button>
      </StyledForm>
    </div>
  )
}