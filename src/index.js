import React from 'react'
import  { createRoot }  from 'react-dom/client';
import {App as Application} from './app.js'
const App= "Pritha";
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application/>);