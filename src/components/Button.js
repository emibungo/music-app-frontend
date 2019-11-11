const Deact = require('../libs/deact')

function Button(attributes, buttonText) {
    return Deact.create(
        "button", {attributes}, buttonText
    );
}

module.exports = Button;