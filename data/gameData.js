export const gameData = {
    initialBudget: 1000000,
    initialIncome: 500000,
    initialExpenses: 300000,
    // Add more data as needed
};


export const INFRASTRUCTURE_COSTS = {
    roads: 10000,
    railways: 20000,
    cyclistPaths: 5000,
    dams: 50000,
    airports: 100000,
};

export const INITIAL_BUDGET = 1000000;

// Define different government types with their economic mechanisms
export const GOVERNMENTS = {
    MONARCHY: { needsBills: false },
    DEMOCRACY: { needsBills: true },
    DICTATORSHIP: { needsBills: false },
    REPUBLIC: { needsBills: true },
    EMPIRE: { needsBills: false },
    THEOCRACY: { needsBills: false },
    COMMUNISM: { needsBills: true },
    SOCIALISM: { needsBills: true },
    AUTHORITARIANISM: { needsBills: false },
    ABSOLUTISM: { needsBills: false },
    CONSTITUTIONAL_MONARCHY: { needsBills: true },
    FEDERAL_REPUBLIC: { needsBills: true },
    CONFEDERACY: { needsBills: true },
    OLIGARCHY: { needsBills: false },
    PLUTOCRACY: { needsBills: false },
    TOTALITARIANISM: { needsBills: false },
    ANARCHY: { needsBills: false },
    MARXISM: { needsBills: true },
    LIBERTARIANISM: { needsBills: false },
};

// Define economic factors for countries
export const COUNTRIES = {
    "Freeland": {
        population: 1000000,
        growthRate: 0.02,
        employmentRate: 0.85,
        birthRate: 0.01,
        deathRate: 0.005,
        mineralResources: 0.7,
        currencyValue: 1,
        naturalCalamities: ['drought'],
        economicHealth: 1.0
    },
    "Demoria": {
        population: 5000000,
        growthRate: 0.015,
        employmentRate: 0.75,
        birthRate: 0.012,
        deathRate: 0.008,
        mineralResources: 0.3,
        currencyValue: 1.2,
        naturalCalamities: ['earthquake'],
        economicHealth: 0.9
    },
    // Add more countries as needed
};

// Define economic mechanisms
export const ECONOMIC_MECHANISMS = {
    BILL_PASSAGE: 'BILL_PASSAGE',
    RESOURCE_EXPLOITATION: 'RESOURCE_EXPLOITATION',
    NATURAL_CATASTROPHES: 'NATURAL_CATASTROPHES',
    // Add more mechanisms as needed
};
