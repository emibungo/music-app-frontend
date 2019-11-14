const CreateArtistCard = require("./CreateArtistCard");
const Http = require("../utils/http");
const Deact = require("../libs/deact");

module.exports = {
  CreateArtistPage(artist) {
    document.querySelector(".main-content").innerHTML = "";

    let artistCard = CreateArtistCard(artist);
    Deact.render(artistCard, document.querySelector(".main-content"));
  }
};
