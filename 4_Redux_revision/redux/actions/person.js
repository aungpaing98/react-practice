import { ADDPERSON } from "../constants";

export function createAddPersonAction(personObj){
    return {type:ADDPERSON, personObj}
}