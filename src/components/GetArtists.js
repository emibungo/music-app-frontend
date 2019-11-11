const Http = require("../utils/http");
const ArtistCard = require("./CreateArtistCard");

function renderArtists() {
  //   document.querySelector(".main-content").innerHTML = "";

  Http.getRequest("http://localhost:3000/artists", function(response) {
    const artists = [response];
    artists.forEach(function(artist) {
      return console.log(artist);
      //   Deact.render(ArtistCard(artist), document.querySelector(".artist-cards"));
    });
  });
}

module.exports = renderArtists;
