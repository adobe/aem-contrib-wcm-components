import {WCMMode} from "../../types";
import {EditorContextUtils} from "./EditorContextUtils";

it('functions properly', () => {

    const value:string = 'edit';
    const wcmMode:WCMMode = EditorContextUtils.parseWCMModeFromString(value);
    expect(wcmMode).toEqual('edit');

});