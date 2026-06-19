# Moksha Media Technical Round Interview (Full Stack Developer - Frontend Focused)

## Interview Summary

Company: Moksha Media

Role: Full Stack Developer (Frontend Focused)

Topics Covered:

- ProbePlus Experience
- HMS / ABDM
- LMS
- Plotzyt
- Ownership & Contribution
- React Concepts
- Next.js Concepts
- RBAC
- Middleware
- SSR / CSR / SSG
- useMemo / useCallback
- Event Loop
- Session vs Cookies vs Local Storage
- FastAPI Async/Await
- Express Error Handling
- Multi-Tenant Architecture

---

# Round 1 – Resume & Ownership

## Tell me about yourself

### Answer Framework

- 2 years experience at ProbePlus
- Frontend Engineer working on Healthcare SaaS
- Angular, TypeScript, RxJS
- HMS, LMS, Plotzyt
- Ownership of modules
- Recently built full-stack Next.js assignment

---

## Explain HMS

### Business Problem

Healthcare providers need digital workflows and ABDM integration.

### Users

- Doctors
- Receptionists
- Administrators

### Contribution

- Dynamic Forms
- Role-based screens
- API integrations
- Reusable components

### Impact

Helped support ABDM certification efforts.

---

## Why was ABDM challenging?

### Answer

ABDM data is highly structured and profile-driven.

The frontend had to support:

- Dynamic forms
- Nested healthcare records
- Multiple document profiles
- Validation-heavy workflows
- Role-based access

---

## What feature did you personally build?

### Strong Example

Dynamic Form Engine

Implemented:

- FormGroups
- FormArrays
- Dynamic controls
- Nested validation
- API-driven dropdowns

---

## Explain LMS

### Answer Framework

Problem
↓
Research
↓
Architecture
↓
Implementation
↓
Deployment

Built workflows for:

- Receptionist
- Technician
- Doctor

Features:

- Patient registration
- Test management
- Report generation
- Role-based access

---

## How did you manage multiple projects?

### Answer

Worked simultaneously across HMS, LMS and product initiatives.

Used:

- Modular development
- Git branches
- Prioritization
- Sprint planning

---

# Round 2 – React

## Props vs State

### Props

- Passed from parent
- Read only

### State

- Managed inside component
- Causes rerender

---

## useState vs useRef

### useState

Updates UI.

Triggers rerender.

### useRef

Stores mutable value.

Does not rerender.

Use Cases:

- DOM access
- Timers
- Previous values

---

## useMemo vs useCallback

### useMemo

Caches computed value.

```tsx
const filtered = useMemo(
 () => filterUsers(users),
 [users]
)
```

### useCallback

Caches function reference.

```tsx
const handleClick = useCallback(() => {
 ...
}, [])
```

### LMS Example

useMemo:

Large filtered report lists.

useCallback:

Passing handlers to memoized table rows.

---

## What causes rerenders?

- State changes
- Parent rerenders
- Context updates
- Props changes

---

# Next.js

## SSR vs CSR vs SSG

### SSR

Rendered on server every request.

Pros:

- SEO
- Fresh data

### CSR

Rendered in browser.

Pros:

- Highly interactive

### SSG

Generated at build time.

Pros:

- Very fast

---

## Middleware

Runs before request reaches route.

Use Cases:

- Authentication
- RBAC
- Redirects

---

## RBAC

Role Based Access Control

Roles:

- Admin
- User

Implementation:

- Session contains role
- Middleware validates role
- UI rendered conditionally

---

# Authentication

## Session vs Cookie vs Local Storage

### Session

Server-managed user session.

### Cookie

Automatically sent with requests.

Good for auth.

### Local Storage

Browser only.

Not recommended for sensitive auth tokens.

---

# JavaScript

## Event Loop

Execution Order

1. Call Stack
2. Microtask Queue
3. Macrotask Queue

Example:

```js
console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => console.log(3));

console.log(4);
```

Output:

```text
1
4
3
2
```

---

## Closures

Function remembers outer scope variables.

Used in:

- Debounce
- Throttle
- React internals

---

# Backend

## FastAPI Async Await

### Why?

Allows non-blocking request handling.

Example:

```python
@app.get("/users")
async def users():
    return data
```

---

## Express Error Handling

```js
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message
  });
});
```

Purpose:

- Centralized errors
- Cleaner code

---

# System Design

## Multi-Tenant Frontend Architecture

### Shared Codebase

Single application for all tenants.

### Tenant Configuration

Theme
Branding
Settings

### Feature Flags

Enable features per tenant.

### RBAC

Different permissions per role.

### Tenant-aware APIs

Requests contain tenant information.

### Final Answer

Keep a shared frontend codebase and drive tenant-specific behavior using configuration, feature flags, role permissions and tenant-aware APIs while reusing common UI components.

---

# Personal Improvement Areas

1. Multi-Tenant Architecture
2. Express Error Handling
3. FastAPI Async Concepts
4. Cleaner Engineering Terminology
5. More Structured Answers
6. React Performance Patterns
7. Frontend System Design
8. TypeScript Generics
9. API Design
10. AI Product Architecture

---

# Overall Reflection

Strengths:

- Ownership
- Healthcare Domain Experience
- Communication
- React Fundamentals
- Next.js Fundamentals
- Real Product Experience

Areas to Improve:

- Terminology
- Architecture Communication
- Backend Depth
- System Design Depth
