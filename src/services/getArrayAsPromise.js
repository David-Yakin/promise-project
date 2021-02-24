export default function getDataAsPromise(array, errMessage) {
    return new Promise((resolve, reject) => {
        if (array.length > 0) {
            resolve(array);
        } else {
            reject(errMessage);
        }
    });
}