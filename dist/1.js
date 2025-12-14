"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    if (typeof name === "number") {
        return `Hello number : ${name}`;
    }
    else {
        return `Hello ${name.toUpperCase()}`;
    }
}
const names = ["alice", "bob", 123];
names.forEach(greet);
//# sourceMappingURL=1.js.map