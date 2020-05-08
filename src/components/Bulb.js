import React from 'react';
import PropTypes from 'prop-types';

function Bulb({ bulbs, bulbIndex, bulbClick }) {
    const lightOn = 'http://res.cloudinary.com/dtjoxh5wb/image/upload/v1495532392/on_med_n3p8pd.png';
    const lightOff = 'http://res.cloudinary.com/dtjoxh5wb/image/upload/v1495532392/off_med_fmma6p.png';

    let lightStatus = (bulbs[bulbIndex]) ? lightOn : lightOff;

    return (
        <>
            <li><input type="image" src={lightStatus} value={bulbIndex} alt="bulb" onClick={bulbClick.bind(this)} /></li>
        </>
    );
}

Bulb.propTypes = {
    bulbs: PropTypes.array.isRequired,
    bulbIndex: PropTypes.number.isRequired,
    bulbClick: PropTypes.func.isRequired,
};

export default Bulb;