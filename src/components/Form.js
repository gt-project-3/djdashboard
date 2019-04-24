import React from 'react';

import { Button, Textfield } from './index';

export default function Form(props) {
  const { handleChange, handleClick  } = props;
  const { email, username, password, eventDate, eventAddress, cover} = props.data
  return (
    <form>
      <label>I'm A Form</label>
      <Textfield name="email" type="email" value={email} onChange={handleChange} />
      <Textfield name="password" type="password" value={password} onChange={handleChange} />
      <Textfield
        name="eventDate"
        type="datetime-local"
        value={eventDate}
        onChange={handleChange}
      />
      <Textfield name="eventAddress" type="address" value={eventAddress} onChange={handleChange} />
      <Textfield name="cover" type="number" value={cover} onChange={handleChange} />
      <Button handleClick={handleClick} />
    </form>
  );
}
