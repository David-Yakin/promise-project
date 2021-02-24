/** filter function for array of objects by key & serch words**/

export default function filerArray(array, key, secondKey, searchWord) {
    let newArray = [];
    array.filter((i) => {
        if (i[key].toLowerCase().includes(searchWord.toLowerCase()) ||
            i[secondKey].toLowerCase().includes(searchWord.toLowerCase())
        ) {
            newArray.push(i);
        };
    })
    return newArray
}

/** input value from the user brauzer **/
// const $searchWord = document.getElementById("category-picker");

/** Execution of the function **/
// filerArray(posts, title, $searchWord);