type Value = string | null | undefined;

function logLength(value: Value) {
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