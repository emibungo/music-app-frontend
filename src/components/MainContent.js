const Deact = require("../libs/deact");
const Button = require("./Button");
const CreateArtistCard = require("./CreateArtistCard");
// const Container = require("./Container")

function MainContent() {
  return Deact.create("main", { class: "main-content" }, "");
}

// Button({
//   class: "button__show-artist"
// },
// "Show me an Artist Card!"
// )
module.exports = MainContent;
