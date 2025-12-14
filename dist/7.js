"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function evaluateScore(score) {
    if (score > 90)
        return "approved";
    else if (score > 70)
        return "pending";
    else {
        return "rejected";
    }
}
evaluateScore(85);
evaluateScore(95);
evaluateScore(60);
//# sourceMappingURL=7.js.map