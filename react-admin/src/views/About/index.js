import React, { Component } from "react";
import { increment, decrement, reset } from "../../store/action/counter";
import { connect } from "react-redux";
import Button from "antd/lib/button";

class About extends Component {
  render() {
    const { count, increment, decrement, reset } = this.props;
    return (
      <div>
        <div>
          count:
          {count}
        </div>
        <Button
          variant="contained"
          onClick={() => {
            increment();
          }}
        >
          increment
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            decrement();
          }}
        >
          decrement
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            reset();
          }}
        >
          reset
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.getIn(["counter", "count"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    },
    reset: () => {
      dispatch(reset());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
