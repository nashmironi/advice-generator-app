// const options = {
//   params: {
//     page: "0",
//     per_page: "25",
//   },
//   headers: {
//     "X-RapidAPI-Key": "fec6aae8fdmshd9a98c3d41e3562p191728jsn17158dc54a06",
//     "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
//   },
// };
let inputElement = document.querySelector(".random"); ////HTML-zea mibmuli
let inputNumber = document.querySelector(".number");

const getPosts = async () => {
  try {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const answer = response.data.slip;
    console.log(answer.advice);
    inputElement.innerHTML = "&quot;" + answer.advice + "&quot;";
    inputNumber.textContent = answer.id;
  } catch (error) {}
};

getPosts();
