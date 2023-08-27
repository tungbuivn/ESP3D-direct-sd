import { Stack, Button, Typography } from "@mui/material";

import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "./dataContext";
import { fileListRef } from "./fileList";
import { useGlobalState } from "./customState";

export function FileUpload() {
    const [fileName, setfileName] = useState("xxxxxxxxxx");
    const fileInput = useRef<HTMLInputElement>(null);
    const { dataContext, setDataContext } = useContext(DataContext);
    // const [fileCount, setFileCount] = useGlobalState(fileListRef.sendMsg, 0);
    // useEffect(() => {
    //     var sub = fileListRef.updateCount.subscribe(setFileCount);
    //     return () => { sub.unsubscribe() };
    // }, [])
    // const { fileData, setFileData } = useContext(FileContext);
    function onFileChanged(obj: any) {
        // debugger;
        if (obj.target && obj.target.files) {
            setfileName(obj.target.files[0].name);
        }

    }
    function uploadError() {
        if (dataContext.esp_error_code != 0) {
            alert('Update failed(' + dataContext.esp_error_code + '): ' + dataContext.esp_error_message);
            dataContext.esp_error_code = 0;
        } else {
            alert('Update failed!');
        }

        if (dataContext.typeupload == 1) {
            //location.reload();
            // document.getElementById('upload-button').value = 'Upload';
            // document.getElementById('prg').style.visibility = "hidden";
            // document.getElementById('file-select').value = "";
            SendCommand('list', 'all');
        } else {
            location.reload();
        }
    }
    function doUpload() {
        setFileCount(fileCount + 1);
        window.versions.upload(fileInput.current.files[0].path);
        // setDataContext({ ...dataContext, a: dataContext.a + 1 });
        // debugger;
        // data.a.next(a + 1);
        return;
        var files = fileInput.current.files[0];
        var formData = new FormData();
        formData.append('path', currentpath);
        for (var i3 = 0; i3 < files.length; i3++) {
            var file = files[i3];
            var arg = currentpath + file.name + "S";
            //append file size first to check updload is complete
            formData.append(arg, file.size);
            formData.append('myfiles[]', file, currentpath + file.name);
        }
        var xmlhttpupload = new XMLHttpRequest();
        xmlhttpupload.open('POST', '/files', true);
        //progress upload event
        xmlhttpupload.upload.addEventListener("progress", updateProgress, false);
        //progress function
        function updateProgress(oEvent: { lengthComputable: any; loaded: number; total: number; }) {
            if (oEvent.lengthComputable) {
                var percentComplete = (oEvent.loaded / oEvent.total) * 100;
                // document.getElementById('prg').value = percentComplete;
                // document.getElementById('upload-button').value = "Uploading ..." + percentComplete.toFixed(0) + "%";
            } else {
                // Impossible because size is unknown
            }
        }
        var typeupload = 1;
        xmlhttpupload.onload = function () {
            if (xmlhttpupload.status === 200) {
                // document.getElementById('upload-button').value = 'Upload';
                // document.getElementById('prg').style.visibility = "hidden";
                // document.getElementById('file-select').value = "";
                document.getElementById('MSG').innerHTML = "Done !";
                var jsonresponse = JSON.parse(xmlhttpupload.responseText);
                // dispatchfilestatus(jsonresponse);
            } else uploadError();
        };

        xmlhttpupload.send(formData);
        setfileName("");
    }
    return (
        <>
            <Stack direction="row">

                <Button variant="contained" component="label" >
                    Choose file
                    <input


                        style={{ display: 'none' }}
                        onChange={onFileChanged}
                        multiple={false}
                        type="file"
                        ref={fileInput}
                    />

                </Button>

                <Stack alignItems="flex-start" sx={{ px: 1, py: 1 }}>
                    <Typography>{fileName} </Typography></Stack>
                <Button variant="contained" onClick={doUpload}>Upload</Button>
            </Stack>
        </>
    )
}
