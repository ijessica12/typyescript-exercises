"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(user) {
    if (user.role === "admin") {
        console.log("Welcome admin, permissions:", user.permissions.join(", "));
    }
    else {
        console.log("Welcome guest, session ID:", user.sessionId);
    }
}
greet({ role: "admin", permissions: ["read", "write"] });
greet({ role: "guest", sessionId: "xyz123" });
//# sourceMappingURL=6.js.map