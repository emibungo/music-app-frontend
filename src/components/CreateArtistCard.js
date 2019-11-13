const Http = require("../utils/http");
const Deact = require("../libs/deact");

function CreateArtistCard(content) {
  return Deact.create("section", { class: "artist-card " }, [
    Deact.create("h2", { class: `artist-card__name` }, content.name),
    Deact.create("img", { class: `artist-card__image`, src: content.image }, "")
  ]);
}

module.exports = CreateArtistCard;

// return Deact.create("section", { class: `student-card` }, [
//   Deact.create("h3", { class: `student-card__name` }, student.name),
//   Deact.create(
//     "img",
//     { class: `student-card__avatar`, src: student.imageUrl },
//     ""
//   ),
//   Deact.create("p", { class: `student-card__language` }, student.language)
// ]);
// }
