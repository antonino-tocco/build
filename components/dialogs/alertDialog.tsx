import * as React from "react";
import {DialogContainer} from "./dialogContainer";

export function AlertDialog({open, onClose, title='Warning', message}: {
    open: boolean;
    onClose: () => void;
    title?: string;
    message: string;
}) {

    return (<DialogContainer
        open={open}
        fullWidth={true}
        maxWidth={'lg'}
        title={title ?? ''}
        onClose={onClose}>
        <div style={{paddingBottom: 20}}>
            <div className='row'>
                <div className='col-12'>
                    {message}
                </div>
            </div>
        </div>
    </DialogContainer>);
}