const Deact = require("../libs/deact");
// const Container = require("./Container")

function CreateArtistCard(content) {
  return Deact.create("section", { class: "artist-card" }, content);
}
module.exports = CreateArtistCard;
