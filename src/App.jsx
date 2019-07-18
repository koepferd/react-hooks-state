import React from 'react';
import './styles/App.css';
import { Stove } from './components/Stove';
import { Pot } from './components/Pot';
import { Pasta } from './components/Pasta';

export const App = () => {
    return (
        <div className="App">
            <h1>Cooking pasta with hooks</h1>
            <Stove />
            <Pot />
            <Pasta />
        </div>
    );
}
