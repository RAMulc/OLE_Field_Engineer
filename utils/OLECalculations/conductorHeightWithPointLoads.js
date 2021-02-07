// Determine conductor height at a distance x in span. Unequal support heights with multiple point loads at xLoads.
function conductorHeightWithPointLoads(weight, distX, span, tension, dHeight, loads, xLoads) {
    let y = ((weight * distX * (span - distX)) / (2 * tension)) - (dHeight * distX / span);
    for (let i = 0; i < loads.length; i++) {
        if (distX >= xLoads[i]) {
            y = y + (loads[i] * xLoads[i] * (span - distX)) / (tension * span);
        }
        else {
            y = y + (loads[i] * distX * (span - xLoads[i])) / (tension * span);
        }
    }
    return y;
}

module.exports = conductorHeightWithPointLoads;
