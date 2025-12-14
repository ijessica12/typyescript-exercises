/*function greet(name) {
  return "Hello " + name.toUpperCase();
}

const names = ["alice", "bob", 123];
names.forEach(greet);*/

function greet(name: string | number) {
  if (typeof name === "number") {
    return `Hello number : ${name}`;
  } else {
    return `Hello ${name.toUpperCase()}`;
  }
}
const names = ["alice", "bob", 123];
names.forEach(greet);
//unfinished