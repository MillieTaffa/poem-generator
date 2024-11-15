//apiKey = a1f90bc0bf23da8c35fe325tob5f8845
//apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
function displayPoem(response) {
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        loop: false,
        delay:"natural",
});
}

function generatePoem(event) {
    event.preventDefault();

    let apiKey = "a1f90bc0bf23da8c35fe325tob5f8845";
    let prompt = "Genereate a poem"
    let context = "You're a poet, able to speak any language fluently. Write a 4 stanza, 4 line poem you write according to html, each line is seperated by a <br> and each paragraph is followed by 2 <br>, don't add a title to the poem."
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

   axios.get(apiUrl).then(displayPoem)


}

let poemFormElement = document.querySelector("#poem-generator-form")
poemFormElement.addEventListener("submit", generatePoem)