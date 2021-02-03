// Determine conductor height at a distance x in span. Unequal support heights.
function conductorHeight(weight, distX, span, tension, dHeight) {
    return ((weight * distX * (span - distX)) / (2 * tension)) - (dHeight * x / span);
}

module.exports = conductorHeight;
