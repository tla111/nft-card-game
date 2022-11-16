import React from 'react'
import { useNavigate } from 'react-router-dom'

import { logo, heroImg } from '../assets'
import styles from '../styles'

const PageHOC = (Component, title, description) => () => {
    const navigate = useNavigate();

    return (
        <div>PageHOC</div>
    )
}

export default PageHOC