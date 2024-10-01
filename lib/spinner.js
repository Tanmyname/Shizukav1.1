var spin = require('spinnies');

var spinner = {
    "interval": 100,
    "frames": [
        "",
        "Recode by @Tan",
        "@Tan by Recode",
        "Recode by @Tan",
        "@Tan by Recode",
        "Recode by @Tan",
        "@Tan by recode",
        "Recode by @Tan",
        "@Tan by recode",
        "Recode by @Tan",
        "@Tan by Recode",
        ""
    ]
};

let globalSpinner;

var getGlobalSpinner = (disableSpins = false) => {
    if (!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins });
    return globalSpinner;
};

let spins = getGlobalSpinner(false);

module.exports.start = (id, text) => {
    spins.add(id, { text: text });
};
