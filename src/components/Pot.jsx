import React from 'react';
import { useContext, useEffect } from 'react';
import { stoveTempContext } from '../globalState/StoveTempProvider';
import { waterStatusContext } from '../globalState/WaterStatusProvider';
import potIcon from '../icons/pot.png';

export const Pot = () => {
    const {stoveTemp} = useContext(stoveTempContext);
    const {waterStatus, setWaterStatus} = useContext(waterStatusContext);

    useEffect(() => {
        if (stoveTemp === 6) {
            setWaterStatus('boiling');
        }
        else {
            setWaterStatus('cold');
        }
    }, [stoveTemp]);

    return (
        <div className="kitchen__item">
            <h3>I am a pot.</h3>
            <img className="kitchen__icon" alt="pot" src={potIcon} />
            <p>The water is <strong>{ waterStatus }</strong>.</p>
        </div>
    );
}