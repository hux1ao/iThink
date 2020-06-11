/**
 * flat a array like [1, [2, 3]] => [1, 2, 3]
 * @param {*} arr 
 */
function flat (arr) {
    let result = []
    for (let a of arr) {
        if (Array.isArray(a)){
            result = result.concat(flat(a))
        } else {
            result = result.concat(a)
        }
    }
    return result;
}