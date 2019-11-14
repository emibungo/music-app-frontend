const Deact = require("../libs/deact");


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
