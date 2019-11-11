const Deact = require("../libs/deact");
// const Container = require("./Container")

function CreateArtistCard() {
  return Deact.create("section", { class: "artist" }, "artist!");
}

module.exports = CreateArtistCard;
