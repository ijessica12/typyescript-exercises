type ID = string | number;

function getLength(id: ID): number {
    if (typeof id === "string") {
        return id.length;
    } else {
        return id.toString().length;
    }
}

getLength(123);
getLength("abc");
//unfinished