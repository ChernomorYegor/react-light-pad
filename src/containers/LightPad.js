import {connect} from 'react-redux';
import LightPad from "../components/LightPad";

const mapStateToProps = state => {
    return {
        bulbs: state.lightPad.bulbs,
    }
};
const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LightPad)