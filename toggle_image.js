function getText(event)  {
  const imageId = event.target.id;
  const query = 'label[for="'+ imageId + '"]'
  const text = 
        document.querySelector(query).innerText;
  
  document.getElementById('result').innerText = text;
}