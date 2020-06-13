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

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var removeIndex = ''
    nums.forEach((item, index) => {
        if (nums.indexOf(item) !== index) {
            removeIndex += (item + ',');
        }
    })
    removeIndex.split(',').forEach((item) => {
        if (item !== '') {
            const index = nums.indexOf(Number(item));
            nums.splice(index, 1)
        }
    })
    return nums;
};

console.log(removeDuplicates([1,1,2]))