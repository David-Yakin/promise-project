export default function sortArray(arr, byProperty) {
    return arr.sort((a, b) => {
        if (a[byProperty] < b[byProperty]) {
            return -1;
        }
        if (a[byProperty] < b[byProperty]) {
            return 1;
        }
        return 0;
    });
}