import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ContextProvider } from './globalState/state';
import { App } from './App';

export const AppContainer = () => {
    return (
        <ContextProvider>
            <App />
        </ContextProvider>
    )
}

ReactDOM.render(
    <AppContainer />, document.getElementById('root')
);

/*
    Equivalent solution for ContextProvider
    
    <StoveTempProvider>
        <WaterStatusProvider>
            <ChefStatusProvider>
                <App />
            </ChefStatusProvider>
        </WaterStatusProvider>
    </StoveTempProvider>
*/