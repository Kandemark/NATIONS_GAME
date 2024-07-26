import { GOVERNMENT_STRUCTURES } from './governmentStructure.js';
import { performAction } from './governmentActions.js';

let nation = {
    name: '',
    currency: '',
    governmentType: GOVERNMENT_STRUCTURES.DEMOCRACY, // Default government type
    branches: {},
    budget: 1000000,
    income: 500000,
    expenses: 300000,
    language: 'English', // Default language
    religion: 'None', // Default religion
    ideology: 'None' // Default ideology
};

export function initializeNation(name, currency, governmentType, language, religion, ideology) {
    nation.name = name;
    nation.currency = currency;
    nation.governmentType = GOVERNMENT_STRUCTURES[governmentType] || GOVERNMENT_STRUCTURES.DEMOCRACY; // Default to democracy if not specified
    nation.branches = nation.governmentType.branches || {};
    nation.language = language || 'English';
    nation.religion = religion || 'None';
    nation.ideology = ideology || 'None';

    console.log(`Nation ${name} created with currency ${currency}, language ${nation.language}, religion ${nation.religion}, and ideology ${nation.ideology}. Government type: ${nation.governmentType.name}`);
    
}

export function getNation() {
    return nation;
}

export function performGovernmentAction(branch, action) {
    performAction(branch, action);
}













// import { GOVERNMENT_STRUCTURES } from './governmentStructure.js';
// import { performAction } from './governmentActions.js';

// let nation = {
//     name: '',
//     currency: '',
//     governmentType: GOVERNMENT_STRUCTURES.DEMOCRACY, // Default government type
//     branches: {},
//     budget: 1000000,
//     income: 500000,
//     expenses: 300000
// };

// export function initializeNation(name, currency, governmentType) {
//     nation.name = name;
//     nation.currency = currency;
//     nation.governmentType = GOVERNMENT_STRUCTURES[governmentType]|| GOVERNMENT_STRUCTURES.DEMOCRACY; // Default to democracy if not specified
//     nation.branches = GOVERNMENT_STRUCTURES[governmentType.name]?.branches || {};
//     // nation.branches = nation.governmentType.branches;
//     console.log(`Nation ${name} created with currency ${currency} and government type ${nation.governmentType.name}`);
// }

// export function getNation() {
//     return nation;
// }

// export function performGovernmentAction(branch, action) {
//     performAction(branch, action);
// }