/**
 * Created by ImageDBUser on 2017/3/8.
 */
import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'
import $ from 'jquery';
import Counter from './modules/counter';

let item=document.createElement("div");
item.id="basicDiv";
document.body.appendChild(item);

//Action
const incAction={type:"inc", payload:1};

//Reducer
function counter(state={count:0},action) {
    const count=state.count;
    if(action.type==="inc")
        return {count:count+action.payload};
    else
        return state;
}

//Store
const store=createStore(counter);

//Map
const mapStateToProps=(state)=>{return {count:state.count}};

const mapDispatchToProps=(dispatch)=>{return {onIncrease:()=>dispatch(incAction)}};

//Connect
const App=connect(mapStateToProps,mapDispatchToProps)(Counter);

render(<Provider store={store}><App/></Provider> , document.getElementById('basicDiv'));

