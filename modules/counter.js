/**
 * Created by ImageDBUser on 2017/3/8.
 */
import React from 'react'

export default class extends React.Component{
    render(){
        let {count, onIncrease}=this.props;
        return (
            <div>
                The count is {count} now!
                <button onClick={onIncrease}>+</button>
            </div>
        )
    }
};