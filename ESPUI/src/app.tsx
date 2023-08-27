import * as React from "react";
import * as ReactDOM from "react-dom";



// import { App } from "./App";
import "./index.css";
import { Card, Box, Avatar, Stack, Typography, IconButton, Divider, Chip, Switch, Button, Input } from "@mui/material";
import { grey } from "@mui/material/colors";
import { MutableRefObject, useContext, useRef, useState } from "react";
// import { data, , DataContextProvider } from "./data"
import Main from "./main";
import { DataContext, DataContextProvider, IDataContext, IStateData, initData } from "./dataContext";

import "./index.css"

export default function MyApp() {



    return (
        <DataContextProvider>
            <Main />
        </DataContextProvider>
    );
}
