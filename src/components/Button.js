const Deact = require('../libs/deact')

function Button(attributes, buttonText, callback) {
    const button = Deact.create(
        "button", {attributes}, [buttonText,callback]
    );

    button.addEventListener("click", callback);
    return button;
}

module.exports = Button;