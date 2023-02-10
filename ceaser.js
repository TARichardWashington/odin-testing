export default function ceaser(string) {

    let splitString = string.split('');

    splitString = splitString.map((char) => {
        return String.fromCharCode(char.charCodeAt(0) + 1);
    });

    splitString = splitString.join('');

    return splitString;
}