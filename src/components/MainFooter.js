const Deact = require("../libs/deact");

function MainFooter() {
  return Deact.create("footer", { class: "main-footer" }, [
    Deact.create("button", { class: "home-button" }, "Return Home")
  ]);
}

module.exports = MainFooter;
