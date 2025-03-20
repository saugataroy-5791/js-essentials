export const TOPICS = [
  { id: 1, name: "Introduction", to: "/introduction" },
  { id: 2, name: "Execution Context", to: "/execution-context" },
  { id: 3, name: "Call Stack", to: "/call-stack" },
  { id: 4, name: "Hoisting", to: "/hoisting" },
  { id: 5, name: "Scope", to: "/scope" },
  { id: 6, name: "Var, Let, Const", to: "/var-let-const" },
  { id: 7, name: "This Keyword", to: "/this-keyword" },
  { id: 8, name: "Call, Bind, Apply", to: "/call-bind-apply" },
  { id: 9, name: "Closure", to: "/closure" },
  { id: 10, name: "Event Loop", to: "/event-loop" },
  { id: 11, name: "Functions", to: "/functions" },
  { id: 12, name: "Callbacks", to: "/callbacks" },
  { id: 13, name: "Promise", to: "/promise" },
  { id: 14, name: "Async/Await", to: "/async-await" },
  { id: 15, name: "Event", to: "/event" },
  { id: 16, name: "Throttling, Debouncing", to: "/throttling-debouncing" },
  { id: 17, name: "Workers", to: "/workers" },
  { id: 18, name: "DOM, Browser APIs", to: "/dom-browser-api" },
  { id: 19, name: "Object Oriented Programming", to: "/oop" },
  { id: 20, name: "JavaScript Engine", to: "/js-engine" },
  { id: 21, name: "ES6+, ES7+ Features", to: "/es6-es7" },
  { id: 22, name: "Advanced JavaScript", to: "/advanced-javascript" },
];

export const INTRODUCTION = [
  {
    id: 1,
    text: "High-level, interpreted programming language used for web development.",
  },
  {
    id: 2,
    text: "Synchronous, single-threaded, Event-driven, and supports Asynchronous programming.",
  },
  {
    id: 3,
    text: "Loosely typed and dynamically typed (no need to declare variable types explicitly).",
  },
  {
    id: 4,
    text: "Runs in browsers (client-side) and on servers (Node.js - server-side execution).",
  },
  {
    id: 5,
    text: "Used to create dynamic, interactive websites (DOM manipulation, event handling, animations).",
  },
  {
    id: 6,
    text: "Primitive data types - String, Number, Boolean, BigInt, Symbol, Undefined, Null and Non-primitive types - Object, Array, Function.",
  },
  {
    id: 7,
    text: "Supports ES6+ features like let, const, arrow functions, classes, and modules.",
  },
  {
    id: 8,
    text: "Supports OOP (Object-Oriented Programming) and Functional Programming paradigms.",
  },
  {
    id: 9,
    text: "Uses the V8 Engine (Chrome), SpiderMonkey (Firefox), and JavaScriptCore (Safari) for execution.",
  },
];

export const EXECUTION_CONTEXT = [
  {
    id: 1,
    text: "Whenever JS Engine scans a script, it makes an environment called Execution Context.",
  },
  {
    id: 2,
    text: "Execution Context handles and transforms the execution of code.",
  },
  {
    id: 3,
    text: "Two phases: Creation Phase and Execution Phase.",
  },
];

export const CALL_STACK = [
  {
    id: 1,
    text: "To keep track of all contexts, Global & Functional, JS engine uses a Call Stack.",
  },
  {
    id: 2,
    text: "Uses LIFO principle.",
  },
  {
    id: 3,
    text: "JS engine starts executing a script, a Global Execution Context is created and pushed into the stack.",
  },
  {
    id: 4,
    text: "Function is invoked, a new Function stack is created and pushed on top of the call stack and starts executing it.",
  },
  {
    id: 5,
    text: "Execution of function is complete, JS engine will remove the Function context from the call stack.",
  },
  {
    id: 6,
    text: "Once all functions are done executing, the stack returns to the Global Execution Context.",
  },
];
