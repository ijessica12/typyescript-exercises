type Result = "pending" | "approved" | "rejected";

function evaluateScore(score: number): Result {
    if (score > 90) return "approved"
    else if (score > 70) return "pending";
    else {
        return "rejected";
    }
}
evaluateScore(85);
evaluateScore(95);
evaluateScore(60);