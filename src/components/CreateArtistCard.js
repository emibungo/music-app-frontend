// const Deact = require("../libs/deact");
// // const Container = require("./Container")

// function CreateArtistCard() {
//   return Deact.create("section", { class: `artist-cards` }, "");

//   // Deact.render(document.querySelector(".artist-card"));

//   // Deact.create("section", { class: "artist-cards" }, "");
// }
// module.exports = CreateArtistCard;

const Deact = require("../libs/deact");
// const Container = require("./Container")

function CreateArtistCard(content) {
  return Deact.create("section", { class: "artist-card" }, content);
}
module.exports = CreateArtistCard;
