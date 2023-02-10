function randomImage() {
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((res) => res.json())
    .then((data) => {
      const imgUrl = data.message;
      const imgDiv = document.createElement("div");
      const img = document.createElement("img");
      img.src = imgUrl;
      document.body.prepend(imgDiv);
      imgDiv.append(img);
    });
}

// randomImage();
const submitButton = document.getElementById("get-animal-by-catogry");
const selectCategory = document.getElementById("category-select");
const formBreeds = document.getElementById("form-breeds");
console.log(selectCategory.value);

fetch("https://dog.ceo/api/breeds/list/all")
  .then((res) => res.json())
  .then((data) => {
    const keys = Object.keys(data.message);
    keys.forEach((breed) => {
      const categoriesOption = document.createElement("option");
      categoriesOption.textContent = breed;
      selectCategory.append(categoriesOption);
      submitButton.removeAttribute("disabled");
    });
  });
const imgDiv = document.createElement("div");
const img = document.createElement("img");
const formAnimals = document.getElementById("form-breeds");
formAnimals.addEventListener("submit", (event) => {
  event.preventDefault();

  const breedCategory = selectCategory.value;
  fetch(`https://dog.ceo/api/breed/${breedCategory}/images/random`)
    .then((res) => res.json())
    .then((data) => {
      const imgUrl = data.message;
      img.src = imgUrl;
      imgDiv.append(img);
      formBreeds.after(imgDiv);
    });
});
//Pasibaigti su papildomom sub veislem
