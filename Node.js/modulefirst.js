
//1] commonJSMOdule:
// const simple=require('./modulesecond.js');
// simple();

//2]Esm Module
// import {simple} from "./modulesecond.mjs";

// simple()

// import {very as v} from "./modulesecond.mjs"

// v();
import * as a2 from "./modulesecond.mjs"

console.log(a2.simple())