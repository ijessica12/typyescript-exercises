type Action =
    | { type: "ADD_TODO"; text: string }
    | { type: "TOGGLE_TODO"; id: number }
    | { type: "DELETE_TODO"; id: number };

const action: Action = { type: "ADD_TODO", text: "123" };
console.log(action.text);