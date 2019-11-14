const Http = require("../utils/http");
const Deact = require("../libs/deact");

function CreateArtistCard(content) {
  return Deact.create("section", { class: "artist-card " }, [
    Deact.create("h2", { class: `artist-card__name` }, content.name),
    Deact.create("img", { class: `artist-card__image`, src: content.image }, "")
  ]);
}

module.exports = CreateArtistCard;
