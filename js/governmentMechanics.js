import { getNation } from './nationSetup.js';

export function applyGovernmentEffects() {
    const nation = getNation();
    
    switch (nation.governmentType.name) {
        case 'Monarchy':
            // Apply monarchy-specific effects
            console.log('Applying monarchy-specific mechanics.');
            break;
        case 'Democracy':
            // Apply democracy-specific effects
            console.log('Applying democracy-specific mechanics.');
            break;
        case 'Dictatorship':
            // Apply dictatorship-specific effects
            console.log('Applying dictatorship-specific mechanics.');
            break;
        case 'Republic':
            // Apply republic-specific effects
            console.log('Applying republic-specific mechanics.');
            break;
        case 'Empire':
            // Apply empire-specific effects
            console.log('Applying empire-specific mechanics.');
            break;
        case 'Theocracy':
            // Apply theocracy-specific effects
            console.log('Applying theocracy-specific mechanics.');
            break;
        case 'Communism':
            // Apply communism-specific effects
            console.log('Applying communism-specific mechanics.');
            break;
        case 'Socialism':
            // Apply socialism-specific effects
            console.log('Applying socialism-specific mechanics.');
            break;
        case 'Authoritarianism':
            // Apply authoritarianism-specific effects
            console.log('Applying authoritarianism-specific mechanics.');
            break;
        case 'Absolutism':
            // Apply absolutism-specific effects
            console.log('Applying absolutism-specific mechanics.');
            break;
        case 'Constitutional Monarchy':
            // Apply constitutional monarchy-specific effects
            console.log('Applying constitutional monarchy-specific mechanics.');
            break;
        case 'Federal Republic':
            // Apply federal republic-specific effects
            console.log('Applying federal republic-specific mechanics.');
            break;
        case 'Confederacy':
            // Apply confederacy-specific effects
            console.log('Applying confederacy-specific mechanics.');
            break;
        case 'Oligarchy':
            // Apply oligarchy-specific effects
            console.log('Applying oligarchy-specific mechanics.');
            break;
        case 'Plutocracy':
            // Apply plutocracy-specific effects
            console.log('Applying plutocracy-specific mechanics.');
            break;
        case 'Totalitarianism':
            // Apply totalitarianism-specific effects
            console.log('Applying totalitarianism-specific mechanics.');
            break;
        case 'Anarchy':
            // Apply anarchy-specific effects
            console.log('Applying anarchy-specific mechanics.');
            break;
        case 'Marxism':
            // Apply Marxism-specific effects
            console.log('Applying Marxism-specific mechanics.');
            break;
        case 'Libertarianism':
            // Apply libertarianism-specific effects
            console.log('Applying libertarianism-specific mechanics.');
            break;
        default:
            console.log('Unknown government type.');
            break;
    }
     // Example: Log all branches of the current government
     for (const [branch, details] of Object.entries(nation.branches)) {
        console.log(`Branch: ${branch}, Role: ${details.role}, Power: ${details.power}, Description: ${details.description}`);
    }
}
