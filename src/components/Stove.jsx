import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { stoveTempContext } from '../globalState/StoveTempProvider';

export const Stove = () => {
    const {stoveTemp, setStoveTemp} = useContext(stoveTempContext);

    useEffect(() => {
        initStove();
    });

    const initStove = () => {
        setTimeout(() => {
            setStoveTemp(6);
        }, 6000);
    }

    return (
        <div>
            <h3>I am the stove.</h3>
            <p>My current temperature is { stoveTemp ? stoveTemp : 'zero' }</p>
        </div>
    );
}