// Determine reactions at supports.
function supportReactions(weight, span, tension, dHeight) {
    const rb = (weight * span / 2) + tension * dHeight / span;
    const ra = (weight * span / 2) - tension * dHeight / span;

    return { reactionA: ra, reactionB: rb };
}

module.exports = supportReactions;
