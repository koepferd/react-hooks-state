import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { waterStatusContext } from '../globalState/WaterStatusProvider';
import { chefStatusContext } from '../globalState/ChefStatusProvider';
import pastaIcon from '../icons/pasta.png';

export const Pasta = () => {
    const {waterStatus} = useContext(waterStatusContext);
    const {chefStatus} = useContext(chefStatusContext);
    const [pastaStatus, setPastaStatus] = useState('in the cupboard');

    useEffect(() => {
        if (chefStatus === 'cook') {
            if (waterStatus === 'boiling') {
                setPastaStatus('in the water');
                setTimeout(() => {
                    setPastaStatus('done');
                }, 6000);
            }
            else if (waterStatus === 'cold') {
                setPastaStatus('prepared');
            }
        }
        else if (chefStatus === 'finish') {
            setPastaStatus('served');
        }
    }, [chefStatus, waterStatus]);

    return (
        <div className="kitchen__item">
            <h3>We are the pasta.</h3>
            <img className="kitchen__icon" alt="pasta" src={pastaIcon}></img>
            <p>We are <strong>{ pastaStatus }</strong>.</p>
        </div>
    );
}