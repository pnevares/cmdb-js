fetch('//localhost:8082/api')
  .then(res => res.json())
  .then(json => document.body.innerHTML = `message from api: ${json.message}`);
