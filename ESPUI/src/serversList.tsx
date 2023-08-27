import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material";

import React, { useEffect, useState } from "react";

export function ServerList() {
    const [server, setServer] = useState("");
    const [items, setItems] = useState([]);
    useEffect(() => {
        var tmp = ["scanning..."];
        setItems(tmp);
        setServer(tmp[0])
        window.versions.getServers().then((srvs) => {
            if (srvs.length) {
                setItems(srvs);
                setServer(srvs[0]);
            }

        });

        // fetch("https://api.example.com/items")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             // setIsLoaded(true);
        //             // setItems(result);
        //         },
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.
        //         (error) => {
        //             // setIsLoaded(true);
        //             // setError(error);
        //         }
        //     )
    }, [])
    const handleChange = (event: SelectChangeEvent) => {
        setServer(event.target.value as string);
    };
    return (
        <>
            <Stack direction="column" alignItems={"flex-start"} sx={{ flexWrap: "nowrap", display: "flex" }}>
                <FormControl fullWidth>
                    <InputLabel id="selectServer">Server</InputLabel>
                    <Select
                        labelId="selectServer"
                        sx={{ width: 150 }}
                        value={server}
                        label="Server"
                        onChange={handleChange}
                    >
                        {items.map((srv, i) => (<MenuItem key={i} value={srv}>{srv}</MenuItem>))}

                    </Select>
                </FormControl>
            </Stack>
        </>
    )
}