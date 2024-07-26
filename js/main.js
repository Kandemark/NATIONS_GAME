import { updateBudget, displayBudget } from './economy.js';
import { enactLaw, applyPolicyEffects } from './politics.js';
import { updateApprovalRating } from './publicOpinion.js';
import { interactWithCountry } from './internationalRelations.js';
import { initializeNation, getNation } from './nationSetup.js';
import { initializeGame } from './gameInitialization.js';
import { loadGame } from './saveLoad.js';
import { GOVERNMENT_TYPES } from './governmentTypes.js';
import { applyGovernmentEffects } from './governmentMechanics.js';


// Function to handle form submission and create the nation
function createNation() {
    const name = document.getElementById('name').value;
    const currency = document.getElementById('currency').value;
    const governmentTypeValue = document.getElementById('government').value;
    const governmentType = GOVERNMENT_TYPES[governmentTypeValue] || GOVERNMENT_TYPES.DEMOCRACY;

    if (name && currency) {
        initializeNation(name, currency, governmentType);
        document.getElementById('setup-screen').style.display = 'none';
        document.getElementById('game-screen').style.display = 'block';
        startGame();
    } else {
        alert('Please enter all required information.');
    }
}

// Call this function when starting the game
function startGame() {
    loadGame();
    initializeGame();
    applyGovernmentEffects();
    console.log(`Starting game with nation: ${getNation().name} under ${getNation().governmentType.name} government`);
    // Initialize game elements and start the main game loop
}



// Example game loop
function update() {
    // Game update logic goes here
}

// Initialize the game setup screen
document.addEventListener('DOMContentLoaded', () => {
    // Any setup needed when the document is loaded
});


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Load assets here
}

function create() {
    // Initialize game objects and UI here
}

function update() {
    updateBudget();
    applyPolicyEffects();
    displayBudget();
    // Call other functions as needed
    interactWithCountry('neighboring_country', 'alliance'); // Example interaction
}


