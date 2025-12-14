type User = {
    name: string,
    age: number
};
function printUser(user: User) {
    return user.name.toUpperCase()
}
let users: User = { name: "Alice", age: 30 }
printUser(users)

