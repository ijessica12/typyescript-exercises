"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLength(id) {
    if (typeof id === "string") {
        return id.length;
    }
    else {
        return id.toString().length;
    }
}
getLength(123);
getLength("abc");
//# sourceMappingURL=4.js.map