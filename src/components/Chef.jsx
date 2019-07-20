import React from 'react';
import { useContext } from 'react';
import { chefStatusContext } from '../globalState/ChefStatusProvider';

export const Chef = () => {
    const {setChefStatus} = useContext(chefStatusContext);

    return (
        <div className="kitchen__item">
            <h3>You are the chef. What do you want to do?</h3>
            <button onClick={() => setChefStatus('cook')}>Start cooking</button>
            <button onClick={() => setChefStatus('finish')}>Finish cooking</button>
        </div>
    );
}