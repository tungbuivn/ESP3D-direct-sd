import { Box, Button } from "@mui/material";
import React, { createContext, useContext, useEffect, useState } from "react";
import { BehaviorSubject } from 'rxjs'
import { useGlobalState } from "./customState";
// event notify from other component
export enum FileCMD {
    NONE,
    UPDATE_LIST
}
const __fileListRef = {
    msg: new BehaviorSubject<FileCMD>(FileCMD.NONE)
}
export const fileListRef = {
    invoke: __fileListRef.msg.next
}
export function FileList() {
    var fnCount = 0;
    // const [fileCount, setFileData] = useGlobalState(fileListRef.update, 0);

    // const fnc = () => setFileData(fileCount + 1);
    useEffect(() => {
        var sub = __fileListRef.msg.subscribe(cmd => {
            // process command 
        });
        return () => sub.unsubscribe();

    }, [])
    const update = () => {
        // setFileData(fileCount + 1);
    }
    return (

        <Box>
            {/* {fileCount} */}
            <Button variant="contained" onClick={update}>Update</Button>
        </Box>




    )
}