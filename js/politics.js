// Define laws
let laws = {
    "education": false,
    "healthcare": false
};

export function enactLaw(lawName) {
    if (laws.hasOwnProperty(lawName)) {
        laws[lawName] = true;
        applyPolicyEffects();
    }
}

export function applyPolicyEffects() {
    if (laws.education) {
        expenses += 100000; // Increased expenses for education
    }
    if (laws.healthcare) {
        expenses += 150000; // Increased expenses for healthcare
    }
}
