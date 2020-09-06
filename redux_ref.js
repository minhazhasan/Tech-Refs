// Redux Ref
// Ref - Code with Mosh

// Redux - State management library for javascript applications
// Pros:
//      Predictable state changes
//      Centralized State
//      Easy Debugging
//      Preserve page state
//      Undo/Redo
//      Ecosystem of add-ons
// Cons:
//      Complexity
//      Verbosity

// Functional Programming

// Updating Objects

const person = {
    name: "John",
    address: {
        country: "USA",
        city: "San Francisco"
    }
}

const updatedShallow = { ...person };
updated.address.city = "New York" // Shallow copy

const updatedDeep = {
    ...person, address: {
        ...person.address, city: "New York"
    }
};

// Updating Arrays

const numbers = [1, 2, 3];

// Adding
const added = [...numbers, 4];