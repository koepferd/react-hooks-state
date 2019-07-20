import React from 'react';
import { useContext, useEffect } from 'react';
import { stoveTempContext } from '../globalState/StoveTempProvider';
import { chefStatusContext } from '../globalState/ChefStatusProvider';
import stoveIcon from '../icons/stove.png';

export const Stove = () => {
    const {stoveTemp, setStoveTemp} = useContext(stoveTempContext);
    const {chefStatus} = useContext(chefStatusContext);

    useEffect(() => {
        let heating = setInterval(() => {
            if (chefStatus === 'cook' && stoveTemp < 6) {
                setStoveTemp(stoveTemp + 1);
            }
            else if (chefStatus === 'finish' && stoveTemp > 0) {
                setStoveTemp(stoveTemp - 1);
            }
        }, 1000);
        return () => clearInterval(heating);
    });

    return (
        <div className="kitchen__item">
            <h3>I am the stove.</h3>
            <img className="kitchen__icon" alt="stove" src={stoveIcon}></img>
            <p>My current temperature is <strong>{ stoveTemp ? stoveTemp : 0 }</strong></p>
        </div>
    );
}