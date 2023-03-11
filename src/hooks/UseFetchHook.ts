import { useState, useEffect } from "react";
import { RoverData } from '../interfaces/interfaces';
import { getRandomNumberOfIndexes } from "../helpers/randomNumber";


export const UseFetchHook = (data: RoverData[], totalNumberOfPhotos: number) => {
    const [photos, setPhotos] = useState<RoverData[]>([]);

    const newData: RoverData[] = getRandomNumberOfIndexes(data, totalNumberOfPhotos);

    useEffect(() => {
        setPhotos(newData);
    }, []);

    return { photos }
}
