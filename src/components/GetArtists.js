// const Http = require("../utils/http");
// const ArtistCard = require("./CreateArtistCard");
// const Deact = require("../libs/deact");

// function renderArtists() {
//   // document.querySelector(".main-content").innerHTML = "";

//   Http.getRequest("http://localhost:3000/artists", function(response) {
//     const artists = response.Artists;
//     artists.forEach(function(artist) {
//       console.log(artist._id);

//       Deact.create("section", { class: `artist-cards` }, "");

//       // ArtistCard([artist.name, artist.image]);

//       return Deact.create("section", { class: `artist-card` }, [
//         Deact.create("h3", { class: `artist-card__name` }, artist.name),
//         Deact.create(
//           "img",
//           { class: `artist-card__avatar`, src: artist.image },
//           ""
//         )
//       ]);
//     });
//   });
// }

// module.exports = renderArtists;

const Http = require("../utils/http");
const ArtistCard = require("./CreateArtistCard");
const Deact = require("../libs/deact");

function renderArtists() {
  //   document.querySelector(".main-content").innerHTML = "";

  Http.getRequest("http://localhost:3000/artists", function(response) {
    const artists = response.Artists;
    artists.forEach(function(artist) {
      // const obj = JSON.parse(artist);
      console.log(artist._id);
      // console.log(obj.name);
      Deact.render(
        ArtistCard(artist.name),
        document.querySelector(".main-content")
      );
    });
  });
}

module.exports = renderArtists;
