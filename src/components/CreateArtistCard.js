const Deact = require("../libs/deact");
// const Container = require("./Container")

function CreateArtistCard(artistName) {
  return Deact.create("section", { class: "artist-card" }, artistName);
}
module.exports = CreateArtistCard;
