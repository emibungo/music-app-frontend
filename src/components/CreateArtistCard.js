const Http = require("../utils/http");
const Deact = require("../libs/deact");

function CreateArtistCard(content) {
  return Deact.create("section", { class: "artist-card " }, content.name);
}

module.exports = CreateArtistCard;
