const { supportReactions } = require(".");

// Determine reactions at supports. Span with multiple point loads.
function supportReactionsWithPointLoads(weight, span, tension, dHeight, loads, xLoads) {
    let rb = (weight * span / 2) + tension * dHeight / span;
    let ra = (weight * span / 2) - tension * dHeight / span;

    for (let i = 0; i < loads.length; i++) {
        rb += loads[i] * xLoads[i] / span;
        ra += loads[i] - (loads[i] * xLoads[i] / span);
    }

    return { reactionA: ra, reactionB: rb };
}

module.exports = supportReactionsWithPointLoads;
