import React from 'react';
import PropTypes from 'prop-types';

import Bulb from '../containers/Bulb';

function LightPad({ bulbs }) {
    return (
        <ul>
            { bulbs.map((bulb, bulbIndex) => <Bulb key={bulbIndex} bulbIndex={bulbIndex} />) }
        </ul>
    );
}

LightPad.propTypes = {
    bulbs: PropTypes.array.isRequired,
};

export default LightPad;