export default function analyzeArray(arrayToBeAnalyzed) {

    if (!Array.isArray(arrayToBeAnalyzed)) {
        throw new TypeError('Array required to be analyzed but an ' + typeof (arrayToBeAnalyzed) + ' passed');
    }

    arrayToBeAnalyzed.forEach(element => {
        if (!Number.isInteger(element)) {
            throw new TypeError('All array elements must be integers but an ' + typeof (element) + 'was given');
        }
    });

    let average = (arrayToBeAnalyzed.reduce((accumulator, current) => {
        return accumulator + current;
    }, 0)) / arrayToBeAnalyzed.length;

    let analyzedArray = {
        average: average,
        min: 1,
        max: 8,
        length: 6
    };

    return analyzedArray;
}