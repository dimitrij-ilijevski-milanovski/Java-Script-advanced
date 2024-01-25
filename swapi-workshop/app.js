const people = document.getElementsByClassName("people all");
const starships = document.getElementsByClassName("starships all");

const PEOPLE_URL = "https://swapi.dev/api/people/?page=1";

function getSwarWarsPeople() {
  fetch(PEOPLE_URL)
    .then((response) => response.json())
    .then((displayStats) => {
      console.log(displayStats);
    })
    .catch((error) => console.log(error));
}
