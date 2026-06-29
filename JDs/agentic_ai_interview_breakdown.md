# UI Developer for Agentic AI — Interview Breakdown & Learning Notes

## Original JD Context

Role:
- UI Developer for Agentic AI

Company:
- peopleHum

Key Focus Areas from JD:
- Angular
- RxJS
- Reactive Forms
- Dependency Injection
- API Integrations
- JWT/Auth
- Microfrontends
- AI-native interfaces
- Conversational UIs
- Streaming responses
- AI-assisted workflows
- Debugging
- Performance optimization
- Ownership mindset

Key Hidden Insight:
Although the JD looked Angular/frontend-heavy, the actual interview was heavily focused on:
- AI-native product engineering
- Agentic workflows
- RAG systems
- Debugging async systems
- AI-assisted engineering workflows

---

# INTERVIEW STRUCTURE

Single Round Included:
1. 2 Machine Coding Questions
2. 2 Debugging Questions
3. 4 AI/LLM/Agentic AI Questions

This was NOT a traditional frontend interview.

This was:
# AI-native frontend/product engineering evaluation.

---

# MACHINE CODING QUESTIONS

# Question 1 — Search + Debounce + API Cancellation

## Problem

Implement:
- search input
- debounce of 300ms
- cancel previous API calls
- error handling
- loading states
- proper UI state management

---

# What Interviewers Were Testing

## Frontend Async Engineering

Expected concepts:
- debounceTime
- switchMap
- catchError
- loading states
- race condition prevention
- async UX handling

---

# Expected RxJS Flow

```ts
this.searchControl.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  tap(() => this.loading = true),
  switchMap(value =>
    this.api.search(value).pipe(
      catchError(() => {
        this.error = true;
        return of([]);
      }),
      finalize(() => this.loading = false)
    )
  )
).subscribe(res => {
  this.users = res;
});
```

---

# Key Engineering Concepts

## debounceTime
Reduces excessive API calls.

## switchMap
Cancels stale API requests.

## catchError
Handles API failures gracefully.

## finalize
Used to reset loading states.

---

# Important UI State Model

```txt
idle
loading
success
error
empty
```

---

# Question 2 — Pagination vs Infinite Scroll

## Scenario

System:
- 500,000 leave records

UI Team:
- wants infinite scroll

Backend Team:
- wants pagination

Need:
- justify both
- choose final approach

---

# Pagination Advantages

## Better Backend Scalability
- predictable payload size
- easier caching
- lower memory usage

## Better Frontend Performance
- controlled rendering
- avoids huge DOM
- easier filtering/searching

---

# Infinite Scroll Advantages

## Better UX
- smoother browsing
- seamless experience

## Better Engagement
- users continue naturally

---

# Best Architectural Decision

For enterprise leave management:
# Pagination is better

Reason:
- structured access
- scalability
- filtering/searching needs
- predictable performance

Infinite scroll is better for:
- social feeds
- discovery apps

---

# DEBUGGING QUESTIONS

# Debugging Question 1

## Scenario Summary

Features:
- valueChanges search
- API calls
- auto refresh
- delayed responses
- switching employee records

Issues:
- stale data
- duplicate requests
- memory leaks
- rerenders
- race conditions

Hints already present:
- switchMap
- ngOnDestroy
- trackBy

---

# What Interviewers Were Testing

## Debugging & Async Reasoning
- lifecycle understanding
- cleanup discipline
- rendering optimization
- race condition awareness

---

# Expected Fixes

## Missing switchMap

Problem:
- stale API responses overwrite latest state

Fix:
```ts
switchMap()
```

---

## Missing ngOnDestroy

Problem:
- subscriptions survive navigation
- memory leaks

Fix:
```ts
destroy$ = new Subject<void>();

takeUntil(this.destroy$)

ngOnDestroy(){
  this.destroy$.next();
  this.destroy$.complete();
}
```

---

## Missing trackBy

Problem:
- full rerenders

Fix:
```html
*ngFor="let item of items; trackBy: trackById"
```

---

# Correct Debugging Process

1. Reproduce issue
2. Inspect Network tab
3. Inspect subscriptions
4. Inspect rendering behavior
5. Apply cleanup + optimization

---

# Debugging Question 2

## Scenario

Table column overflow:
- layout breaking
- Android clipping
- responsive issues

---

# What Interviewers Were Testing

## UI Debugging
- browser debugging
- responsive reasoning
- CSS/layout analysis

---

# Correct Debugging Process

## Step 1
Reproduce issue on Android viewport.

## Step 2
Inspect DOM + computed styles.

## Step 3
Identify:
- fixed widths
- overflow
- unbroken content
- layout issues

---

# Important CSS Areas

```css
overflow
word-break
white-space
table-layout
min-width
max-width
```

---

# Possible Fixes

## Scroll Wrapper
```css
overflow-x: auto;
```

## Fixed Table Layout
```css
table-layout: fixed;
```

## Word Breaking
```css
word-break: break-word;
```

## Truncation
```css
text-overflow: ellipsis;
```

---

# AI / LLM / AGENTIC QUESTIONS

# Question 1 — Reducing Hallucinations

## Scenario

AI agent:
- 70% accurate
- hallucinating
- CEO wants 99% accuracy

Need:
- architectural strategies
- hallucination reduction approaches

---

# IMPORTANT INTERVIEW INSIGHT

Interviewers DID NOT want generic answers like:
- train better
- improve prompts
- better data

They wanted:
# AI SYSTEM STRATEGIES

---

# Expected AI Engineering Terms

## RAG
Retrieval-Augmented Generation.

## Grounding
Restrict model to trusted context.

## Hybrid Retrieval
Semantic + keyword retrieval.

## Reranking
Improve retrieval relevance.

## Tool Calling
Use external systems/tools instead of hallucinating.

## Confidence Thresholding
Reject low-confidence outputs.

## Guardrails
Restrict invalid/unsafe responses.

## Human-in-the-loop
Manual approvals for critical flows.

## Temperature Tuning
Reduce randomness.

---

# Question 2 — Employee Database + AI Agent

## Scenario

Use AI agents to retrieve relevant employee information.

---

# Expected Concepts

## Embeddings
Convert records into vectors.

## Vector Databases
Examples:
- Pinecone
- Chroma
- Weaviate

## Semantic Search
Search by meaning/context.

## Context Injection
Inject retrieved context into prompts.

## Agent Orchestration
Retrieve → rank → summarize → respond.

---

# Example Query

“Find Angular developers with healthcare experience.”

Flow:
1. Semantic retrieval
2. Relevant employee data fetched
3. Context passed to LLM
4. Grounded response generated

---

# Question 3 — Fine-Tuning vs Prompt Engineering vs RAG

## Scenario 1 — Birthday Slack Messages

Best Fit:
# Prompt Engineering

Reason:
- repetitive formatting
- lightweight personalization

---

## Scenario 2 — Company Docs Updated Every 3 Months

Best Fit:
# RAG

Reason:
- constantly changing knowledge
- retrieval better than retraining

---

## Scenario 3 — Resume Extraction & Classification

Best Fit:
# Fine-Tuning

Reason:
- structured domain classification
- repeated extraction patterns

---

# Combination Approaches

## RAG + Prompt Engineering
- retrieval + constrained responses

## Fine-Tuning + RAG
- specialized classification + contextual retrieval

---

# Question 4 — AI Coding Agents

## Scenario

Build product in 2 days using:
- Copilot
- Cursor
- Claude Code

Questions:
- what to allow AI to do
- what not to allow
- what can go wrong

---

# Good AI Tasks

- boilerplate
- CRUD scaffolding
- UI prototypes
- repetitive code
- documentation
- test generation

---

# Unsafe AI Areas

- auth/security logic
- RBAC
- architecture decisions
- critical business logic
- production deployment

---

# Common AI Failure Modes

## Hallucinated APIs
- nonexistent methods
- wrong libraries

## Incorrect Business Logic
- hidden edge-case failures

## Security Vulnerabilities
- validation/auth flaws

## Overengineering
- bloated abstractions

## Outdated Patterns
- deprecated syntax/APIs

---

# Strong Engineering Principle

> “Use AI as an accelerator, not as an autonomous engineer.”

---

# BIGGEST INTERVIEW TAKEAWAYS

# This Was NOT A Standard Frontend Interview

It was:
# AI-native frontend/product engineering interview.

---

# Skills Being Evaluated

## Frontend Engineering
- async state handling
- debugging
- rendering optimization
- performance reasoning

## AI Product Systems
- RAG
- orchestration
- hallucination mitigation
- semantic retrieval
- vector search

## AI-Assisted Development
- agent boundaries
- review workflows
- AI risk assessment

---

# Biggest Gap Identified

NOT:
- frontend fundamentals

Actual gap:
# AI systems terminology + exposure

---

# Future Learning Areas

## Important Topics
- LangChain
- RAG architecture
- vector DBs
- embeddings
- MCP
- tool calling
- agent orchestration
- prompt engineering
- streaming UI
- AI async UX patterns

---

# Final Reflection

This interview gave exposure to:
# where modern frontend engineering interviews are evolving.

Future frontend/product engineers are increasingly expected to understand:
- AI workflows
- retrieval systems
- async orchestration
- agent tooling
- AI-assisted engineering
- streaming interfaces
