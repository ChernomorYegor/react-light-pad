import React from 'react';
import PropTypes from 'prop-types';

function LightPad({ bulbs, bulbClick }) {
    const lightOn = 'http://res.cloudinary.com/dtjoxh5wb/image/upload/v1495532392/on_med_n3p8pd.png';
    const lightOff = 'http://res.cloudinary.com/dtjoxh5wb/image/upload/v1495532392/off_med_fmma6p.png';

    return (
        <ul>
            {
                bulbs.map((bulb, bulbIndex) =>
                    <li key={bulbIndex}><input type="image" src={bulbs[bulbIndex] ? lightOn : lightOff} alt="bulb" onClick={bulbClick.bind(null, bulbIndex)} /></li>)
            }
        </ul>
    );
}

LightPad.propTypes = {
    bulbs: PropTypes.array.isRequired,
    bulbClick: PropTypes.func.isRequired,
};

export default LightPad;