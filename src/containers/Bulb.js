import {connect} from 'react-redux';
import Bulb from "../components/Bulb";

const mapStateToProps = state => {
    return {
        bulbs: state.lightPad.bulbs,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        bulbClick : (e) => dispatch({
            type : 'BULB_CLICK',
            payload: e.target.value,
        })
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bulb)