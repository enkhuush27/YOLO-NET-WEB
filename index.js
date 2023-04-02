fetch('/test.json')
  .then(response => response.json())
  .then(data => {
    const title = document.getElementById("hhe");   
    const h2 = document.createElement('h2');
    h2.textContent = `${data.title}`;
    title.appendChild(h2);
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });