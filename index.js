import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as PrimerReact from '@primer/react';
import * as PrimerReactExperimental from '@primer/react/experimental'

// Expose React, ReactDOM, PrimerReact globally
window.React = React;
window.ReactDOM = ReactDOM;
window.PrimerReact = PrimerReact;
window.PrimerReactExperimental = PrimerReactExperimental;

// Expose React root API for usage in the browser
window.createRoot = ReactDOM.createRoot;
