// Determine position of Low Point in span
function lowPoint(weight, span, tension, dHeight) {
    return span / 2 - (tension * dHeight) / (weight * span);
}

module.exports = lowPoint;
