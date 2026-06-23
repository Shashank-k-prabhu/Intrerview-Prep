# Codeyoung Frontend Developer Interview (Reconstructed)

**Company:** Codeyoung
**Role:** Frontend Developer (React)
**Experience:** 1-3 Years
**Location:** Bangalore (HSR)

---

# Interview Summary

Expected Round:

* Project Discussion
* Experience Validation

Actual Round:

* JavaScript Fundamentals
* React Fundamentals
* React Architecture
* Frontend Engineering Decisions
* Performance Optimization
* Scenario-Based Questions
* Behavioral Questions
* Project Ownership Discussion

Time Split (Approx)

* 15-30 mins → ProbePlus Experience
* 30-45 mins → JS + React + Architecture + Scenarios

---

# Section 1 - Project Discussion

## Tell Me About Yourself

Asked.

---

## HMS Discussion

Questions:

* Explain HMS.
* What was your role?
* What was your contribution?
* Biggest challenge?
* Explain dynamic forms.
* How did you solve nested healthcare forms?
* How did you optimize API-driven fields?
* Explain ownership.

Topics Discussed:

* ABDM Certification
* Dynamic Forms
* Reactive Forms
* RxJS
* API Integration
* Healthcare Workflows

---

## Contribution Discussion

Discussion lasted approximately 15-30 minutes.

Focused on:

* Actual work done.
* Frontend ownership.
* Architecture decisions.
* Problem solving.

---

# Section 2 - JavaScript Questions

## Closures

Questions Asked

* What is a closure?
* Explain closure in depth.
* How does a function remember variables after execution?
* Why does the inner function still have access to outer variables?
* Explain lexical scope.
* Explain lexical environment.

Expected Concepts

* Scope Chain
* Lexical Environment
* Memory Retention
* Function Context

---

## Async JavaScript

Questions Asked

* Difference between Promise and Async/Await.
* Why use Async/Await?
* What happens internally?
* How does Async/Await work?

Expected Concepts

* Promise Chaining
* Async Syntax
* Event Loop
* Microtasks

---

## Event Loop

Questions Asked

* How asynchronous JavaScript works.
* Event Loop discussion.

Expected Concepts

* Call Stack
* Web APIs
* Callback Queue
* Microtask Queue
* Event Loop

---

## Hoisting

Question

```javascript
console.log(a);

let a = 5;
```

Expected Answer

ReferenceError

Discussion

* Hoisting
* Temporal Dead Zone (TDZ)

---

## Arrays Are Objects

Question

```javascript
const arr = [1,2,3,4];

arr.a = 4;

console.log(arr);
```

Discussion

* Arrays are objects.
* Custom properties.
* JS internals.

---

## Object Transformation Question

Question

Convert:

```javascript
const data = [
  ["name", "John Doe"],
  ["age", 30],
  ["city", "New York"]
];
```

To:

```javascript
{
  name: "John Doe",
  age: 30,
  city: "New York"
}
```

Expected Concepts

* reduce()
* Object.fromEntries()
* Destructuring

---

## Array Methods

Questions Asked

Explain:

* map()
* filter()
* reduce()
* find()
* findIndex()

Discussion

* Use Cases
* Return Values
* Differences

---

## Debounce

Questions Asked

* What is debounce?
* Why use debounce?

---

## Throttle

Questions Asked

* Difference between debounce and throttle.

---

## var vs let vs const

Discussed indirectly through:

* Hoisting
* TDZ

---

# Section 3 - React Questions

## One-Way Data Flow

Question Asked

Explain one-way data flow in React.

Expected Discussion

Parent
↓
Child

Data flows through props.

State updates trigger re-renders.

---

## Props Management

Questions Asked

* How do you manage props?
* How do components communicate?
* What is prop drilling?

Expected Concepts

* Props
* State
* Context API

---

## State Management

Questions Asked

* How do you manage state?
* Local vs Global state.
* State management strategies.

Expected Discussion

* useState
* Context API
* Redux
* Zustand

---

## React Performance

Questions Asked

* useMemo
* useCallback

Discussion

* Why use them?
* When should they be used?
* Performance optimization.

---

## React 18 vs React 19

Question Asked

Memory unclear.

Discussion appeared related to:

* useMemo
* useCallback
* Performance optimization
* React version changes

Could have been related to:

* React Compiler
* Memoization
* Optimization strategies

Exact question not remembered.

---

# Section 4 - React Architecture

## Folder Structure

Question Asked

How would you structure a React application?

Discussion

```text
src/
├── components/
├── pages/
├── services/
├── hooks/
├── utils/
├── store/
├── types/
├── constants/
```

Follow-up

Why?

---

## Modularization

Question Asked

How would you modularize a React application?

Follow-up Questions

* At what level would you modularize?
* What should become a component?
* What should remain inside a component?
* How do you decide extraction boundaries?

Expected Thinking

* Reusability
* Readability
* Maintainability

---

## Components

Questions Asked

What should be components?

Examples

* Tables
* Cards
* Search Bars
* Forms
* Modals

---

## Shared Components

Questions Asked

What belongs in shared?

Examples

* Button
* Input
* Modal
* Table

---

## Services

Questions Asked

What belongs in services?

Expected Answer

* API Calls
* Backend Communication

---

## Utils

Questions Asked

What belongs in utils?

Expected Answer

* Helper Functions
* Formatting Functions
* Data Transformation Logic

---

## Hooks

Questions Asked

What belongs in hooks?

Expected Answer

Reusable stateful logic.

Examples

* useAuth
* useUsers
* useDebounce

---

# Section 5 - Performance Optimization

Topics Discussed

* Debounce
* useMemo
* useCallback
* Re-render optimization

Likely Concepts Being Evaluated

* Rendering efficiency
* Memoization
* Optimization decisions

---

# Section 6 - Scenario Questions

## Backend APIs Not Ready

Scenario

You have:

* PRD
* Designs

Backend / AI team has not delivered APIs.

Question

How would you proceed?

Expected Discussion

* API Contracts
* Mock APIs
* Mock Responses
* Continue Frontend Development
* Parallel Development
* Communication

---

# Section 7 - Behavioral Questions

Questions Asked

* What would you do when blocked?
* How would you coordinate with another team?
* How would you continue development without dependencies?

---

# Areas Where I Felt Strong

* HMS
* Dynamic Forms
* Healthcare Domain
* Ownership
* Project Contributions
* Architecture Discussions around my projects

---

# Areas Where I Felt Weak

JavaScript

* Closures
* Event Loop
* Async/Await Internals
* Lexical Environment
* Hoisting
* TDZ

React

* Architecture Reasoning
* Modularization
* State Management Tradeoffs
* React Version Discussions
* Performance Discussions

---

# Overall Interview Theme

This was NOT an HR round.

This was a Frontend Engineering round focused on:

* JavaScript Fundamentals
* React Fundamentals
* React Architecture
* Frontend Design Decisions
* Performance Optimization
* Scenario-Based Engineering Thinking
* Project Ownership Validation
