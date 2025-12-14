type User = {
    id: number;
    name: string;
    isAdmin: boolean;
};

function getCurrentUser(): User {
    if (Math.random() > 0.5) {
        return { id: 1, name: "Alice", isAdmin: true };
    }
    return { id: 2, name: "Bob", isAdmin: false };
}
const user = getCurrentUser();
if (user.isAdmin) {
    console.log(`Admin User: ${user.name}`);
} else {
    console.log(`Regular User: ${user.name}`);
}