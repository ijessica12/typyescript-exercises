"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logLength(value) {
    if (value === null) {
        console.log("Value is null");
    }
    else if (value === undefined) {
        console.log("Value is undefined");
    }
    else {
        console.log(value.length);
    }
}
logLength("Hello, world!");
logLength(null);
logLength(undefined);
//# sourceMappingURL=8.js.map