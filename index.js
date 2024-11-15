function generatePoem(event) {
    event.preventDefault();

   
    let poemBox = document.querySelector("#poem");

    new Typewriter('#poem', {
  strings: ['Hello World'],
        autoStart: true,
        loop:true
});
}

let poemFormElement = document.querySelector("#poem-generator-form")
poemFormElement.addEventListener("submit", generatePoem)