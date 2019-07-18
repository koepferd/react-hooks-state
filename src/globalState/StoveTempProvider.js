import * as React from 'react';
import { createContext, useState } from 'react';

export const stoveTempContext = createContext(null);

export function StoveTempProvider(props) {
    const [stoveTemp, setStoveTemp] = useState(null);

    return (
        <stoveTempContext.Provider value={{stoveTemp, setStoveTemp}}>
            {props.children}
        </stoveTempContext.Provider>
    )
}