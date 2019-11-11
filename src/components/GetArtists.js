const Http = require("../utils/http");
const ArtistCard = require("./CreateArtistCard");
const Deact = require("../libs/deact");

function renderArtists() {
  //   document.querySelector(".main-content").innerHTML = "";

  Http.getRequest("http://localhost:3000/artists", function(response) {
    const artists = response.Artists;
    artists.forEach(function(artist) {
      // const obj = JSON.parse(artist);
      console.log(artist);
      // console.log(obj.name);
      const name = toString(artist.name);
      const image = toString(artist.image);
      ArtistCard(name, image);
    });
  });
}

module.exports = renderArtists;
