const Deact = require("../libs/deact");
// const Nav = require("./Nav");
// const AppTitle = require("./AppTitle");

function MainHeader() {
  return Deact.create(
    "header",
    {
      class: "main-header"
    },
    
    "Crypt of Death Metal"
  );
}

module.exports = MainHeader;
