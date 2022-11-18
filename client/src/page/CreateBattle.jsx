import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles';
import { useGlobalContext } from '../context';
import { CustomButton, CustomInput, PageHOC } from '../components';

const CreateBattle = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex flex-col mb-5">
                <CustomInput
                    label="Battle"
                    placeholder="Enter battle name"
                />
                <CustomButton

                />
            </div>
        </>
    )
};

export default PageHOC(
    CreateBattle,
    <>
        Create <br /> a new Battle
    </>,
    <>
        Create your own battle & wait for other players to join you
    </>,
)