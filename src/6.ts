type Admin = { role: "admin"; permissions: string[] };
type Guest = { role: "guest"; sessionId: string };
type User = Admin | Guest;

function greet(user: User) {
    if (user.role === "admin") {
        console.log("Welcome admin, permissions:", user.permissions.join(", "));
    }
    else {
        console.log("Welcome guest, session ID:", user.sessionId);
    }
}
greet({ role: "admin", permissions: ["read", "write"] });
greet({ role: "guest", sessionId: "xyz123" });