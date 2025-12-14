"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCurrentUser() {
    if (Math.random() > 0.5) {
        return { id: 1, name: "Alice", isAdmin: true };
    }
    return { id: 2, name: "Bob", isAdmin: false };
}
const user = getCurrentUser();
if (user.isAdmin) {
    console.log(`Admin User: ${user.name}`);
}
else {
    console.log(`Regular User: ${user.name}`);
}
//# sourceMappingURL=5.js.map