let content1, content2, content3; 

fetch('./test.json')
  .then(response => response.json())
  .then(data => { 
    console.log(data);  
    let content1 = `
      <img src="${data[0].image.background}" alt="Jisoo BlackPink" class="background">
      <img src="${data[0].image.subback}" alt="Jisoo" class="subback">
      <h2>${data[0].title}"</h2>
      <p>${data[0].description}</p> `

    let content2 = `
      <h2>${data[1].title}"</h2>
      <p>${data[1].description}</p>
    ` 
    let content3 = `
    <h2>${data[2].title}"</h2>
    <p>${data[2].description}</p>
  ` 

    document.querySelector(".top-content-1").innerHTML = content1;
    document.querySelector(".top-content-2").innerHTML = content2; 
    document.querySelector(".top-content-3").innerHTML = content3;
  });