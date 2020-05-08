import update from 'immutability-helper';

const initialState = {
    bulbs: Array(4).fill(false),
};

function lightPadReducer(state = initialState, action) {
    switch (action.type) {
        case 'BULB_CLICK':
            const bulbs = state.bulbs.slice();
            bulbs[action.payload] = !bulbs[action.payload];

            return update(state, {
                $merge:
                    {
                        bulbs,
                    }
            });
        default:
            return state
    }
}
export default lightPadReducer;
