const calcs = require("../utils/OLECalculations");

module.exports = {
    tensionState: function (req, res) {
        const { youngsMod, csa, alpha, tens0, wt0, wt1, span, temp0, temp1 } = req.body;
        calcs.finalTension(youngsMod, csa, alpha, tens0, wt0, wt1, span, temp0, temp1, 0.1)
            .then(ft => {
                res.json(ft);
            });
    }
};