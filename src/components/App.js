const Deact = require("../libs/deact");
const MainContent = require("../components/MainContent");
const MainHeader = require("../components/MainHeader");
const CreateArtistCard = require("../components/CreateArtistCard");

function App() {
  return Deact.create("section", { class: `app-container` }, [
    MainHeader(),
    MainContent(),
    CreateArtistCard()
  ]);
}

module.exports = App;
