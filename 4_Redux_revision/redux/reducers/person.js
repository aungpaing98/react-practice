import {ADDPERSON} from '../constants';


const initState = [{id:"001", name:"Aung Paing", age:24}];

export default function PersonReducer(preState=initState, actions){
    const {type, personObj} = actions
    switch (type) {
        case ADDPERSON:
            return [personObj, ...preState]

        default:
            return preState;
    }
}