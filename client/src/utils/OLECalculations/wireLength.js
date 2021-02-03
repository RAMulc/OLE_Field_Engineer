// Determine length of wire for a given span length.
function wireLength(weight, span, tension) {
    return span + Math.pow(weight, 2) * Math.pow(span, 3) / (24 * Math.pow(tension, 2));
}

module.exports = wireLength;
