export function saveGame() {
    // Save current game state to localStorage or a server
    localStorage.setItem('nation', JSON.stringify(getNation()));
}

export function loadGame() {
    // Load game state from localStorage or a server
    const savedNation = JSON.parse(localStorage.getItem('nation'));
    if (savedNation) {
        initializeNation(savedNation.name, savedNation.currency);
        console.log(`Game loaded for nation: ${savedNation.name}`);
    }
}
