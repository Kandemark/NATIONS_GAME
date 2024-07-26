// js/economy.js

// Import constants
import { INITIAL_BUDGET, INFRASTRUCTURE_COSTS } from '../data/gameData.js';
import { namesDatabase } from './namesDatabase.js';

let countries = []; // Array to hold all countries

function addCountry(name, language) {
    if (namesDatabase[language]) {
        const newCountry = {
            name,
            language,
            cities: generateCities(language),
            towns: generateTowns(language),
            people: generatePeople(language),
            economy: {
                gdp: Math.random() * 1000000,
                inflation: Math.random(),
                employmentRate: Math.random(),
                naturalResources: getRandomResources(),
                disasters: []
            }
        };
        countries.push(newCountry);
    } else {
        console.error("Language not found in names database.");
    }
}

function splitCountry(originalCountryName) {
    const originalCountry = countries.find(c => c.name === originalCountryName);
    if (!originalCountry) {
        console.error("Country not found.");
        return;
    }
    
    // Logic for splitting the country
    // For simplicity, we'll just create two new countries with half the resources
    const newCountry1 = { ...originalCountry, name: generateNewName(originalCountry.language) };
    const newCountry2 = { ...originalCountry, name: generateNewName(originalCountry.language) };

    newCountry1.economy.gdp /= 2;
    newCountry2.economy.gdp /= 2;

    countries = countries.filter(c => c.name !== originalCountryName);
    countries.push(newCountry1, newCountry2);
}

function annexCountry(annexingCountryName, annexedCountryName) {
    const annexingCountry = countries.find(c => c.name === annexingCountryName);
    const annexedCountry = countries.find(c => c.name === annexedCountryName);

    if (!annexingCountry || !annexedCountry) {
        console.error("One or both countries not found.");
        return;
    }

    // Merge the annexed country into the annexing country
    annexingCountry.cities.push(...annexedCountry.cities);
    annexingCountry.towns.push(...annexedCountry.towns);
    annexingCountry.people.push(...annexedCountry.people);

    countries = countries.filter(c => c.name !== annexedCountryName);
}

function generateCities(language) {
    return namesDatabase[language].City.map(name => ({ name }));
}

function generateTowns(language) {
    return namesDatabase[language].Town.map(name => ({ name }));
}

function generatePeople(language) {
    return namesDatabase[language].Names.map(nameObj => ({ name: nameObj.name, gender: nameObj.gender }));
}

function generateNewName(language) {
    return namesDatabase[language].Country[Math.floor(Math.random() * namesDatabase[language].Country.length)];
}

function getRandomResources() {
    const resources = ['Gold', 'Oil', 'Coal', 'Iron', 'Copper', 'None'];
    return resources[Math.floor(Math.random() * resources.length)];
}

export { addCountry, splitCountry, annexCountry };


// Initialize the economy for a country
export function initializeEconomy() {
    return {
        gdp: 1000000, // Example initial GDP
        inflationRate: 0.02, // 2% inflation
        unemploymentRate: 0.05, // 5% unemployment
        currencyValue: 1, // Base currency value
        tradeBalance: 0, // Initial trade balance
        governmentDebt: 0, // Initial government debt
        budget: INITIAL_BUDGET, // Starting budget
        infrastructure: {
            roads: 0,
            railways: 0,
            cyclistPaths: 0,
            dams: 0,
            airports: 0,
        },
        expenditures: {
            maintenance: 0,
            development: 0,
        },
        taxationRate: 0.1, // 10% tax rate
        investments: 0, // Total investments
    };
}

// Function to update GDP
export function updateGDP(economy) {
    const growthRate = 0.03; // Example growth rate
    economy.gdp *= (1 + growthRate);
    return economy;
}

// Function to update inflation rate
export function updateInflation(economy, change) {
    economy.inflationRate += change;
    return economy;
}

// Function to update unemployment rate
export function updateUnemployment(economy, change) {
    economy.unemploymentRate += change;
    return economy;
}

// Function to update currency value
export function updateCurrencyValue(economy, amount) {
    economy.currencyValue += amount;
    return economy;
}

// Function to update trade balance
export function updateTradeBalance(economy, exportValue, importValue) {
    economy.tradeBalance += exportValue - importValue;
    return economy;
}

// Function to update government debt
export function updateGovernmentDebt(economy, amount) {
    economy.governmentDebt += amount;
    return economy;
}

// Function to collect taxes
export function collectTaxes(economy) {
    const taxRevenue = economy.gdp * economy.taxationRate;
    economy.budget += taxRevenue;
    return economy;
}

// Function to invest in infrastructure
export function investInInfrastructure(economy, type, amount) {
    if (economy.budget < amount) {
        console.log("Not enough budget!");
        return economy;
    }
    economy.infrastructure[type] += amount;
    economy.budget -= amount;
    economy.investments += amount;
    return economy;
}

// Function to maintain infrastructure
export function maintainInfrastructure(economy, type, amount) {
    if (economy.infrastructure[type] < amount) {
        console.log("Not enough infrastructure to maintain!");
        return economy;
    }
    economy.infrastructure[type] -= amount;
    economy.budget -= amount;
    economy.expenditures.maintenance += amount;
    return economy;
}


export function displayBudget() {
    // Update your UI elements here
    console.log(`Current Budget: $${budget}`);
}