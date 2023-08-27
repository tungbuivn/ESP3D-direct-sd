import React, { useState } from "react";
export interface IDataContext {
    a: number;
    esp_error_code: number;
    currentpath: string;
    authentication: boolean;
    websocket_port: 0,
    websocket_IP: string,
    async_webcommunication: boolean;
    page_id: string;
    log_off: boolean;
    websocket_started: boolean;
    esp_error_message: string;
    typeupload: number;
}
export const initData: IDataContext = {
    a: 6,
    esp_error_code: 0,
    currentpath: "/",
    authentication: false,
    websocket_port: 0,
    websocket_IP: "",
    async_webcommunication: false,
    page_id: "",

    log_off: false,
    websocket_started: false,
    esp_error_message: "",


    typeupload: 0,
}
export interface IStateData {
    dataContext: IDataContext,
    setDataContext: React.Dispatch<React.SetStateAction<IDataContext>>,
}
export const DataContext = React.createContext<IStateData>(null);
export function DataContextProvider(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal; }) {
    const [dataContext, setDataContext] = useState(initData);
    return (
        <DataContext.Provider value={{ dataContext, setDataContext }}>
            {props.children}
        </DataContext.Provider>
    );
}