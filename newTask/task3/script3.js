const searchForm = document.getElementById("searh-form");
const textArea = document.getElementById("text-area");
const pText = document.createElement("p");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const textAreaValue = event.target["text-area"].value;
  fetch(`https://api.agify.io?name=${textAreaValue}`)
    .then((res) => res.json())
    .then((data) => {
      const name = data.name;
      const age = data.age;
      searchForm.after(pText);
      pText.textContent = `The one who has people is his name (${name}) the average age is (${age})`;

      fetch(`https://api.nationalize.io/?name=${textAreaValue}`)
        .then((res) => res.json())
        .then((data) => {
          const country = data.country[0].country_id;
          pText.textContent += ` Country: ${country}`;

          fetch(`https://api.genderize.io/?name=${textAreaValue}`)
            .then((res) => res.json())
            .then((data) => {
              const gender = data.gender;
              pText.textContent += ` Gender: ${gender}`;
            });
        });
    });
});
