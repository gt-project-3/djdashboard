const message = {
    user: 'JC',
    message: 'Oh shit got a flat'
}


const BackEndLoadMessages = (message) => {

  fetch('http://localhost:3001/event/message/5ccb7d48c3c78ecef4a8f5dd',{
      method: 'PUT',
      body:message,
      
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

}

BackEndLoadMessages(message)