import React, { useState, useEffect } from 'react';
import './Photo.scss';

const Photo = ({ url }) => {
    return (
        <img className="photo" src={url} />
    )
}

export default Photo