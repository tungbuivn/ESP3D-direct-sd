import * as React from "react";
import * as ReactDOM from "react-dom";



// import { App } from "./App";
import "./index.css";
import { Card, Box, Avatar, Stack, Typography, IconButton, Divider, Chip, Switch, Button, Input, InputLabel, MenuItem, Select } from "@mui/material";
import { grey } from "@mui/material/colors";
import { MutableRefObject, useContext, useRef, useState } from "react";
import { DataContext } from "./dataContext";
import { ServerList } from "./serversList";
import { FileContext, FileList } from './fileList'
import { FileUpload } from "./fileUpload";

var Init = Promise.resolve();
export default function Main() {

    const [currentpath, setcurrentpath] = useState("/");

    const { dataContext, setDataContext } = useContext(DataContext);

    // const ctx = useContext(DataContext);


    // Init = Init.then(() => {
    //     console.log("xxx")
    //     data.a.subscribe(da => seta(da))
    //     return Promise.reject();
    // }).catch(e => { return Promise.reject(); })
    // 



    return (


        <Card sx={{ width: 1 }}>
            <Box sx={{ p: 2, display: 'flex', alignItems: "center" }}>

                <Stack spacing={0.5}>
                    <Typography fontWeight={700}>SDCard Filesystem</Typography>

                </Stack>
                <Box sx={{ flex: 1, justifyContent: "flex-end", display: "flex" }}>
                    <ServerList />

                </Box>
            </Box>
            <Divider />

            <Stack
                direction="row"
                alignItems="flex-start"
                justifyContent="space-between"
                sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
            >



                {/* <Chip>Active account</Chip> */}

            </Stack>
            <Divider />
            <Card>

                <Stack direction="row"
                    alignItems="flex-start"
                    sx={{ px: 2, py: 1, }}>

                    <Button variant="contained">Refresh</Button>
                    <Stack sx={{ px: 1 }}>
                        <Button sx={{ px: 1 }} variant="contained">New Folder</Button>
                    </Stack>
                    <Button >Path:</Button>
                </Stack>

                <FileUpload />

                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
                >
                    <FileList />
                    File list
                    {/* <Chip>Active account</Chip> */}

                </Stack>
            </Card>
        </Card>

    );
}
