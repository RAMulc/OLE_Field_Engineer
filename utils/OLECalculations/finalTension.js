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
        try {
            let gTens = tens0;
            let fTens = tens0;
            csa = csa / (1000 * 1000);

            const Q = tens0 - (youngsMod * csa * alpha * (temp1 - temp0)) - (youngsMod * csa * Math.pow(wt0, 2) * Math.pow(span, 2)) / (24 * Math.pow(tens0, 2));
            const R = (youngsMod * csa * Math.pow(wt1, 2) * Math.pow(span, 2)) / (24);

            gTens = Math.pow(R, 1 / 3) + Math.abs(Q);

            iter = 0;
            while (Math.abs(fTens) > acc) {
                fTens = (R - Math.pow(gTens, 3) + Q * Math.pow(gTens, 2)) / (3 * Math.pow(gTens, 2) - 2 * Q * gTens);
                gTens = gTens + fTens;
                iter++;
                if (iter > 50) throw "Error - No Convergence";
            }
            resolve(gTens);
        }
        catch (err) {
            reject(err);
        }
    })
}

module.exports = finalTension;
