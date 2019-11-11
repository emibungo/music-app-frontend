const Deact = require("../libs/deact");
// const Container = require("./Container")

function CreateArtistCard(name, imageUrl) {
  Deact.render(name, document.querySelector(".artist-card"));
  Deact.render(imageUrl, document.querySelector(".artist-card"));

  // return Deact.create("section", { class: "artist-card" }, "");
}
module.exports = CreateArtistCard;
