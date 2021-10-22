export const utils = () => console.log("to be completed soon");


export const dateFormatter = () => new Date().toLocaleDateString("tr-TR",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).replace(/ /g," ");

export function remove(array:Array<any>, key : string, value : any) {
    const index = array.findIndex(obj => obj[key] === value);
    return index >= 0 ? [
        ...array.slice(0, index),
        ...array.slice(index + 1)
    ] : array;
}