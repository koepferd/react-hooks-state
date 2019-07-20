import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ContextProvider } from './globalState/state';
import { App } from './App';
import { StoveTempProvider } from './globalState/StoveTempProvider';
import { WaterStatusProvider } from './globalState/WaterStatusProvider';
import { ChefStatusProvider } from './globalState/ChefStatusProvider';

export const AppContainer = () => {
    return (
        <StoveTempProvider>
            <WaterStatusProvider>
                <ChefStatusProvider>
                    <App />
                </ChefStatusProvider>
            </WaterStatusProvider>
        </StoveTempProvider>
    )
}

ReactDOM.render(
    <AppContainer />, document.getElementById('root')
);