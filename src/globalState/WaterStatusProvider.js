import * as React from 'react';
import { createContext, useState } from 'react';

export const waterStatusContext = createContext(null);

export function WaterStatusProvider(props) {
    const [waterStatus, setWaterStatus] = useState(null);

    return (
        <waterStatusContext.Provider value={{waterStatus, setWaterStatus}}>
            {props.children}
        </waterStatusContext.Provider>
    )
}