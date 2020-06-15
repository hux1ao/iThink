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

// console.log(removeDuplicates([1,1,2]))



function fn (a = [], b = []) {
    if (a.length === 0) {
        return b;
    }
    if (b.length === 0) {
        return a;
    }
    let result = [];
    if (a[0] > b[0]) {
        result.push(b.splice(0, 1)[0]);
        result = result.concat(fn(a, b))
    } else {
        result.push(a[0]);
        a.splice(0, 1);
        var resultRight = fn(a, b)
        result = result.concat(resultRight)
    }
    return result;
}
console.log(fn([1, 2], [4]))

function findMidValue(nums1, nums2) {

    let nums = [];

    //合并两个有序数组
    while (nums1.length && nums2.length) {
        if (nums1[0] < nums2[0]) {
            nums.push(nums1.shift())
        } else {
            nums.push(nums2.shift());
        }
    }

    if (nums1.length) {
        nums.push(...nums1);
    }

    if (nums2.length) {
        nums.push(...nums2);
    }

    let len = nums.length;
    let midValue = 0;

    console.log('nums:', nums);

    if (len % 2 === 0) {
        midValue = (nums[len / 2] + nums[len / 2 - 1]) / 2;
    } else {
        midValue = nums[Math.floor(len / 2)];
    }


    return midValue;
}

function reverse (str) {
    if (str.length === 1) {
        return str;
    }
    const restString = reverse(str.slice(1, str.length));
    return restString.concat(str[0])
}
var entry = {
    a: {
        b: {
            c: {
                dd: 'abcdd'
            }
        },
        d: {
            xx: 'adxx'
        },
        e: 'ae'
    }
};

// // 要求转换成如下对象
// var output = {
//     'a.b.c.dd': 'abcdd',
//     'a.d.xx': 'adxx',
//     'a.e': 'ae'
// };
// ```
var result = {};
function getOutput (entry, key = '') {
    Object.keys(entry).forEach((item) => {
        if (typeof entry[item] === 'object') {
            getOutput(entry[item], key + '.' + item)
        } else {
            result[key + '.' + item] = entry[item];
        }
    })
}
getOutput(entry)
console.log(result);
