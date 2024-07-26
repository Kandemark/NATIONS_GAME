import { getNation } from './nationSetup.js';

export function performAction(branch, action) {
    const nation = getNation();

    if (nation.branches[branch]) {
        const branchDetails = nation.branches[branch];
        if (branchDetails.responsibilities.includes(action)) {
            console.log(`${branchDetails.role} performing action: ${action}`);
            // Implement specific action logic here
            switch (action) {
                case 'Issue decrees':
                    console.log('Decree issued by the monarch.');
                    break;
                case 'Appoint ministers':
                    console.log('Ministers appointed by the monarch.');
                    break;
                case 'Dissolve council':
                    console.log('Council dissolved by the monarch.');
                    break;
                case 'Enforce laws':
                    console.log('Laws enforced by the executive.');
                    break;
                case 'Veto bills':
                    console.log('Bill vetoed by the executive.');
                    break;
                case 'Appoint cabinet members':
                    console.log('Cabinet members appointed by the executive.');
                    break;
                case 'Pass bills':
                    console.log('Bill passed by the legislature.');
                    break;
                case 'Vote on laws':
                    console.log('Vote on law by the legislature.');
                    break;
                case 'Impeach president':
                    console.log('President impeached by the legislature.');
                    break;
                case 'Interpret laws':
                    console.log('Laws interpreted by the judiciary.');
                    break;
                case 'Review legislation':
                    console.log('Legislation reviewed by the judiciary.');
                    break;
                case 'Rule on disputes':
                    console.log('Dispute ruled by the judiciary.');
                    break;
                case 'Issue orders':
                    console.log('Order issued by the dictator.');
                    break;
                case 'Control military':
                    console.log('Military controlled by the dictator.');
                    break;
                case 'Suppress opposition':
                    console.log('Opposition suppressed by the dictator.');
                    break;
                default:
                    console.log('Unknown action.');
                    break;
            }
        } else {
            console.log(`${branchDetails.role} cannot perform action: ${action}`);
        }
    } else {
        console.log(`No such branch: ${branch}`);
    }
}
