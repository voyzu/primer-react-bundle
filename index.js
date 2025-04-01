import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as PrimerReact from '@primer/react';

// Expose React, ReactDOM, PrimerReact globally
window.React = React;
window.ReactDOM = ReactDOM;
window.PrimerReact = PrimerReact;

// Expose React 18 root API for usage in the browser
window.createRoot = ReactDOM.createRoot;
