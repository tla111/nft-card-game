import React from 'react';
import { PageHOC } from '../components';

const CreateBattle = () => {
    return (
        <div>

        </div>
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