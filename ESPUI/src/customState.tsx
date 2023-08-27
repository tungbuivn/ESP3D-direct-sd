import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

export function useGlobalState<T>(obj: BehaviorSubject<T>
    , defaultVal: T): [T, (v: T) => void] {
    const [data, setData] = useState(defaultVal);
    // const fnc = () => setFileData(fileCount + 1);
    useEffect(() => {
        var sub = obj.subscribe(setData);
        return () => sub.unsubscribe();

    }, []);
    return [data, (v: T) => obj.next(v)];
}
