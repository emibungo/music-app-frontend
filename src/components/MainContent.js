const Deact = require("../libs/deact");
const Button = require("./Button");
const CreateArtistCard = require("./CreateArtistCard");
// const Container = require("./Container")
const RenderArtists = require("./GetArtists");

function MainContent() {
  return Deact.create("main", { class: "main-content" }, [RenderArtists()]);
}

module.exports = MainContent;
