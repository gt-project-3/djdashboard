import React from 'react';

import { Button, Textfield } from './index';

export default function Form(props) {
  const { handleChange, handleClick  } = props;
  const { email, username, password, eventDate, eventAddress, cover} = props.data
  return (
    <form>
      <label>I'm A Form</label>
      <Textfield name="email" type="email" valueProp={email} onChange={handleChange} />
      <Textfield name="password" type="password" valueProp={password} onChange={handleChange} />
      <Textfield
        name="eventDate"
        type="datetime-local"
        valueProp={eventDate}
        onChange={handleChange}
      />
      <Textfield name="eventAddress" type="address" valueProp={eventAddress} onChange={handleChange} />
      <Textfield name="cover" type="number" valueProp={cover} onChange={handleChange} />
      <Button handleClick={handleClick} />
    </form>
  );
}
