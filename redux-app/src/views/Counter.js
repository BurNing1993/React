import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease,increaseAsync } from '../store/reducer/counter'
import { Button } from 'antd'

const Counter = (props)=>(
  <div>
    <h2>num:{props.num}</h2>
    <Button icon="plus" onClick={props.increase}/>
    <Button icon="minus" onClick={props.decrease}/>
    <Button icon="plus" onClick={props.increaseAsync}>AsyncPlus</Button>
  </div>
)

const mapStateToProps = state=>(
 { num:state.counter.num}
)

const mapDispatchToProps = dispatch=>({
  increase:()=>dispatch(increase()),
  decrease:()=>dispatch(decrease()),
  increaseAsync:()=>dispatch(increaseAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
