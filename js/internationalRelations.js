// Relations with other countries
let relations = {
    "neighboring_country": 50 // Neutral
};

export function interactWithCountry(country, action) {
    if (relations.hasOwnProperty(country)) {
        if (action === "alliance") {
            relations[country] += 10; // Improve relations
        } else if (action === "conflict") {
            relations[country] -= 10; // Worsen relations
        }
        console.log(`Relations with ${country}: ${relations[country]}`);
    }
}
