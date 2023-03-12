import { useState, useEffect } from "react";
import { RoverData } from '../interfaces/interfaces';
import { getRandomNumberOfIndexes } from "../helpers/randomNumber";

import { useSelector } from "react-redux";


export const UseFetchHook = (data: RoverData[], totalNumberOfPhotos: number) => {
    const [photos, setPhotos] = useState<RoverData[]>([]);
    const { value } = useSelector((state: any) => state.increaseReducer);

    const newData: RoverData[] = getRandomNumberOfIndexes(data, totalNumberOfPhotos);

    useEffect(() => {
        (value > 0) && setPhotos(newData);
    }, [value]);

    return { photos }
}
