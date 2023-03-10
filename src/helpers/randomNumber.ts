import { RoverData } from '../interfaces/interfaces';

export const getRandomNumberOfIndexes = (data: RoverData[], indexTotalNumber: number) => {

    const numList: number[] = [];
    const maxNumber: number = data.length;
    const newData: RoverData[] = [];

    while (numList.length < indexTotalNumber) {
        let num = Math.floor(Math.random() * maxNumber);
        if (numList.indexOf(num) === -1) {
            numList.push(num);
            newData.push(data[num])
        }
    }
    return newData;
}

