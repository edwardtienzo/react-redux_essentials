import { connect } from "react-redux";
import Add from "./counterAdd";
import Reset from "./counterReset";

function CounterContainer(props) {
    console.log(props);

    return <>
        <h1>Count: {props.count}</h1>
        <button onClick={props.add}>Click + 1</button>
        <button onClick={props.reset}>Click Reset</button>
    </>
};

const mapStateToProps = state => {
    return {
        count: state.count,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: () => dispatch(Add()),
        reset: () => dispatch(Reset()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
