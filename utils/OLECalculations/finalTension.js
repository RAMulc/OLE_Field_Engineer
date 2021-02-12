// Determine final tension due to change in Temp, Weight.
// youngsMod -> Youngs Modulus
// csa -> Cross Sectional Area
// alpha -> Coeeficient of expansion
// tens0 -> Initial Tension
// tens1 -> Final Tension
// wt0 -> Initial Weight
// wt1 -> Final Weight
// span -> Span length
// temp0 -> Initial Temperature
// temp1 -> Final Temperature
// acc -> Desired Accuracy 

function finalTension(youngsMod, csa, alpha, tens0, wt0, wt1, span, temp0, temp1, acc = 0.1) {
    return new Promise((resolve, reject) => {
        let gTens = tens0;
        let tens1 = tens0;
        csa = csa / (1000 * 1000);
        tens1 -= (youngsMod * csa * alpha * (temp1 - temp0));
        tens1 -= (youngsMod * csa * Math.pow(wt0, 2) * Math.pow(span, 2)) / (24 * Math.pow(tens0, 2));
        let iTens = tens1 + (youngsMod * csa * Math.pow(wt1, 2) * Math.pow(span, 2)) / (24 * Math.pow(gTens, 2));

        while (Math.abs(iTens - gTens) > acc) {
            iTens = tens1 + (youngsMod * csa * Math.pow(wt1, 2) * Math.pow(span, 2)) / (24 * Math.pow(gTens, 2));
            gTens = (gTens + iTens) / 2;
        }
        if (iTens) {
            resolve(iTens);
        } else {
            reject(0);
        }
    })
}

module.exports = finalTension;
