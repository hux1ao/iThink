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


// 实现一个函数 findLastIndex(), 返回指定数在“有序”数组中最后一次出现位置的索引
// 如findLastIndex([1,2,3,3,3,4,5], 3), 返回4
function findLastIndex (arr, value) {
    var result = 0;
    foo(arr, value, result)
    return result;
}
function foo (arr, value, result) {
    const arrLength = arr.length;
    const middleIndex = Math.floor((arrLength / 2));
    if (value < arr[middleIndex]) {
        findLastIndex(arr.slice(0, middleIndex), value, result)
    } else if (value > arr[middleIndex]) {
        result = result + middleIndex + 1;
        findLastIndex(arr.slice(middleIndex + 1, arrLength), value, result)
    } else {
        result = result + middleIndex;
    }
    return result;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = '';
    for (let i in s) {
        var lastIndex = s.lastIndexOf(s[i]);
        while (lastIndex >= i) {
            const splitedString = s.slice(i, lastIndex + 1);
            if (isHuiWen(splitedString)) {
                if (result.length < splitedString.length) {
                    result = splitedString
                } else {
                    break;
                }
            } else {
                lastIndex = s.slice(0, lastIndex).lastIndexOf(s[i]);
            }
        }
    }
    return result;
};
function isHuiWen (s) {
    if (s.split('').reverse().join('') === s) {
        return true;
    } else {
        return false;
    }
}



function retry (fn, times) {
    let currentTime = 0
    return new Promise((resolve, reject) => {
        function exeFn () {
            fn.then((res) => {
                resolve();
            }).catch(err => {
                if (currentTime >= time) {
                    currentTime++;
                    exeFn();
                }
            })
        }
        exeFn()
    })
}

// await/async
function myAsync () {
    spawn(function *() {
        xxx
    })
}

function spawn (fn) {
    const gen = fn();
    return new Promise((resolve, reject) => {
        function step (fn) {
            let next
            try {
                next = fn();
            } catch(e) {
                reject(e)
            }
            if (next.done) {
                resolve(next.value);
            }
            next.value.then(() => {
                step(gen.next)
            }).catch(err => {
                reject(err)
            })
        }
        step(gen.next)
    })
}

function curry(fn, args) {
    var length = fn.length;
    var args = args || [];
    return function(){
        newArgs = args.concat(Array.prototype.slice.call(arguments));
        if (newArgs.length < length) {
            return curry.call(this,fn,newArgs);
        }else{
            return fn.apply(this,newArgs);
        }
    }
}

function multiFn(a, b, c) {
    return a * b * c;
}

var multi = curry(multiFn);

multi(2)(3)(4);
multi(2,3,4);
multi(2)(3,4);
multi(2,3)(4);


function foo (arr1, arr2) {
    const result = arr1.filter(item => {
        return arr2.includes(item);
    });
    const resultnew = result.filter((item, index) => {
        return result.indexOf(item) === index;
    })
    return resultnew;
}


// git rebase

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = {}
    strs.forEach(item => {
        const itemSorted = item.split('').sort().join('');
        if (result[itemSorted]) {
            result[itemSorted].push(item);
        } else {
            result[itemSorted] = [item]
        }
    })
    return Object.values(result).sort((next, pre) => {
        return pre.length < next.length
    });
};



/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s) {
        return 0
    }
    if (s.length === 1) {
        return 1;
    }
    let result = 0;
    const dp = Array.from({length: s.length}).map((item) => {
        return []
    });
    for (let x = 0; x < s.length; x++) {
        for (let y = x; y < s.length; y ++) {
            if (x === y) {
                dp[x][y] = 1;
            } else {
                if (s[x] === s[y]) {
                    if (y - x === 2) {
                        dp[x][y] = 3;
                    } else {
                        dp[x][y] = dp[x + 1][y - 1] + 2;
                    }
                } else {
                    if (y - x === 1) {
                        dp[x][y] = 1;
                    } else {
                        dp[x][y] = dp[x + 1][y - 1];
                    }
                }
            }
        }
    }
    console.log(dp)
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const arraySorted = nums.sort(function (next, pre) {
        return next > pre;
    })
    const resultArr = [];
    const tempMap = {};
    arraySorted.forEach((item, index) => {
        if (tempMap[item]) {
        } else {
            tempMap[item] = 1;
            let left = index + 1;
            let right = arraySorted.length;
            while (left < right) {
                if (arraySorted[left] + arraySorted[right] === -(item)) {
                    resultArr.push([arraySorted[left], arraySorted[right], item].sort((next, pre) => {return next > pre}));
                    left++;
                } else {
                    if (arraySorted[left] + arraySorted[right] < -(item)) {
                        left++
                    } else {
                        right--;
                    }
                }
            }
        }
    })
    return resultArr;
};


var uniquePaths = function(m, n) {
    let result = 0;
    var travel = function (x, y) {
        if (x > m || y > n) return;
        if (x === m && y === n) return result++;
        if (x === m) {
            travel(x, y + 1);
            return
        }
        if (y === n) {
            travel(x + 1, y);
            return
        }
        travel(x, y + 1);
        travel(x + 1, y);
    }
    travel(1, 1);
    return result;
};
console.log(uniquePaths(25, 4));