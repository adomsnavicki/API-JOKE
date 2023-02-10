const textPlace = document.getElementById("joke-area");
const form = document.getElementById("category-form");

let button = document.getElementById("jokes-button");
button.addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((jokes) => {
      textPlace.textContent = jokes.value;
    });
});
const categorySelect = document.querySelector("#category-select");

fetch("https://api.chucknorris.io/jokes/categories")
  .then((res) => res.json())
  .then((categories) => {
    categories.map((category) => {
      const categoryOption = document.createElement("option");
      categoryOption.textContent = category;
      categorySelect.append(categoryOption);
    });
  });

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let selectCategory = categorySelect.value;
  fetch(`https://api.chucknorris.io/jokes/random?category=${selectCategory}`)
    .then((response) => response.json())
    .then((joke) => {
      textPlace.textContent = joke.value;
    });
});

//SEARCH RANDOM JOKE
const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const textAreaValue = event.target["search-input"].value;

  fetch(`https://api.chucknorris.io/jokes/search?query=${textAreaValue}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        textPlace.textContent = `${data.error}  (${data.message})`;
        return;
      }
      const jokesFindNumber = data.total;
      const jokeFindArray = data.result;
      if (jokesFindNumber > 0) {
        const index = Math.floor(Math.random() * jokesFindNumber);
        const searchResult = jokeFindArray[index].value;
        textPlace.textContent = searchResult;
        return;
      }
      textPlace.textContent = "No jokes :(";
    });
});
