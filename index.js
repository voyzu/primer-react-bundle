import * as React from 'react';
import * as ReactDOM from 'react-dom/client';  // React 18
import * as PrimerReact from '@primer/react';
// import * as esbuild from 'esbuild-wasm';  // Import esbuild for JSX parsing

// Expose React, ReactDOM, PrimerReact, and esbuild globally
window.React = React;
window.ReactDOM = ReactDOM;
window.PrimerReact = PrimerReact;
// window.esbuild = esbuild;  // Expose esbuild to the window

// Expose React 18 root API for usage in the browser
window.createRoot = ReactDOM.createRoot;
