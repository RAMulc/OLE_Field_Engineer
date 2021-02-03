// Determine final tension due to change in Temp, Weight.
// E -> Youngs Modulus
// csa -> Cross Sectional Area
// alpha -> Coeeficient of expansion
// tens0 -> Initial Tension
// tens1 -> Final Tension
// temp0 -> Initial Temperature
// temp1 -> Final Temperature
function finalTension(E, csa, alpha, tens0, wt0, wt1, span, temp0, temp1, acc = 0.1) {
    let gTens = tens0;
    let tens1 = tens0;
    tens1 -= (E * csa * alpha * (temp1 - temp0));
    tens1 -= (E * csa * Math.pow(wt0, 2) * Math.pow(span, 2)) / (24 * Math.pow(tens0, 2));
    let iTens = tens1 + (E * csa * Math.pow(wt1, 2) * Math.pow(span, 2)) / (24 * Math.pow(gTens, 2));

    while (Math.abs(iTens - gTens) > acc) {
        iTens = tens1 + (E * csa * Math.pow(wt1, 2) * Math.pow(span, 2)) / (24 * Math.pow(gTens, 2));
        gTens = (gTens + iTens) / 2;
    }

    return iTens;
}

module.exports = finalTension;
