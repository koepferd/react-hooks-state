import * as React from 'react';
import { createContext, useState } from 'react';

export const chefStatusContext = createContext(null);

export function ChefStatusProvider(props) {
    const [chefStatus, setChefStatus] = useState(null);

    return (
        <chefStatusContext.Provider value={{chefStatus, setChefStatus}}>
            {props.children}
        </chefStatusContext.Provider>
    )
}