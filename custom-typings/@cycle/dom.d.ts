// Type definitions for @cycle/dom

declare namespace CycleDOM {
  function makeDOMDriver (container: String | HTMLElement) : Function;

  function h (tag: any, children?: any[]) : {}; 
  function h (tag: any, properties: {}, children?: any[]) : {}; 
}

declare module '@cycle/dom' {
  export = CycleDOM;
}