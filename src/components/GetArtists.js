const Http = require("../utils/http");
const CreateArtistCard = require("./CreateArtistCard");
const CreateArtistPage = require("./CreateArtistPage");
const Deact = require("../libs/deact");

function renderArtists() {
  Http.getRequest("http://localhost:3000/artists", function(response) {
    const artists = response.Artists;
    artists.forEach(function(artist) {
      console.log(artist._id);

      let artistCard = CreateArtistCard(artist);
      Deact.render(artistCard, document.querySelector(".main-content"));
      addClickEventToCards(artistCard, () => {
        console.log("click event " + artist.name + " " + artist._id);
        console.log(artist);
        CreateArtistPage.CreateArtistPage(artist);
      });
    });
  });
}

function addClickEventToCards(element, callback) {
  element.addEventListener("click", callback);
}

module.exports = renderArtists;
