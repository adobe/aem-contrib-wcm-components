import {WCMMode} from "../../types";

export class EditorContextUtils{
    static parseWCMModeFromString(key:string):WCMMode{
        return <WCMMode>key;
    }
}