const Deact = require("../libs/deact");
const MainContent = require("../components/MainContent");
const MainHeader = require("../components/MainHeader");
const CreateArtistCard = require("../components/CreateArtistCard");
const RenderArtists = require("./GetArtists");
const Button = require("./Button");

function App() {
  return Deact.create("section", { class: `app-container` }, [
    MainHeader(),
    MainContent(),
    RenderArtists()
  ]);
}

module.exports = App;
