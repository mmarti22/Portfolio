const projects = [
    {
        name: 'Mesozoic Park',
        image: "./src/images/logo.png",
        description: 'Time travel website to the Mesozoic era',
        link: "https://github.com/mmarti22/MESOZOIC-PARK"
    },
    {
        name: 'Portfolio',
        image: "./src/images/portfolio.png",
        description: 'My portfolio',
        link: "https://github.com/mmarti22/Portfolio"
    },
    {
        name: 'Another project',
        image: "./src/images/ein.jpg",
        link: 'http://github.com/mmarti22'
    }
];

const getData = async () => {
  let peopleList = '';
  projects.forEach(person => {
    peopleList += `
      <div class="card" style="width: 18rem;">
                <img src=${person.image} class="card-img-top" alt="dinousaur">
                <div class="card-body project1 ">
                    <h5 class="card-title">${person.name}</h5>
                    <p class="card-text">${person.description}</p>
                    <a href="${person.link}" class="btn btn-primary">GitHub</a>
                    
                </div>
            </div>
    `;
  });
  document.getElementById('objectList').innerHTML = peopleList;
};
getData();
