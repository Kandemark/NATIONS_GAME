// Approval ratings
let approvalRating = 75; // Percentage

export function updateApprovalRating(change) {
    approvalRating += change;
    if (approvalRating > 100) approvalRating = 100;
    if (approvalRating < 0) approvalRating = 0;
}
