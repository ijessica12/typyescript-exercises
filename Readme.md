# TypeScript Mental Model Practical UoK
## Question 1:
```bash
function greet(name) {
  return "Hello " + name.toUpperCase();
}

const names = ["alice", "bob", 123];
names.forEach(greet);
```
## Question 2:
```bash
const scores: number[] = [95, "100", 87];
scores.push(82);
console.log(scores.reduce((a, b) => a + b));
```
## Question 3:
```bash
function printUser(user) {
  console.log(user.name.toUpperCase());
  console.log(user.age + 1);
}

printUser({ name: "Sara", age: "25" });
```
## Question 4:
```bash
type ID = string | number;

function getLength(id: ID) {
  return id.length;
}

getLength(123);
getLength("abc");
```
## Question 5:
```bash
type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

function getCurrentUser(): User {
  if (Math.random() > 0.5) {
    return { id: 1, name: "Alice", isAdmin: true };
  }
}
```
## Question 6:
```bash
type Admin = { role: "admin"; permissions: string[] };
type Guest = { role: "guest"; sessionId: string };
type User = Admin | Guest;

function greet(user: User) {
  if (user.role === "admin") {
    console.log("Welcome admin, permissions:", user.sessionId);
  }
}
```
## Question 7:
```bash
type Result = "pending" | "approved" | "rejected";

function evaluateScore(score: number): Result {
  if (score > 90) return "approved";
  if (score > 70) return "pending";
  return "denied"; 
}
```
## Question 8:
```bash
type Value = string | null | undefined;

function logLength(value: Value) {
  if (value) {
    console.log(value.length);
  }
}
```
## Question 9:
```bash
type ApiResponse = { success: true; data: string } | { success: false; error: string };

async function fetchData(id: number): Promise<ApiResponse> {
  const res = await fetch(`/api/data/${id}`);
  const json = await res.json();
  return json; 
}
```
## Question 10:
```bash
type Profile = {
  name: string;
  settings?: {
    theme: "dark" | "light";
    notifications: boolean;
  };
};

const profiles: Profile[] = [
  { name: "Bob" },
  { name: "Carla", settings: { theme: "dark", notifications: true } }
];

profiles.forEach(p => {
  console.log(p.settings.theme.toUpperCase());
});
```
## Question 11:
```bash
type Action = 
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "DELETE_TODO"; id: number };

const action = { type: "ADD_TODO", text: 123 } as Action; 
dispatch(action); 
```