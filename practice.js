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
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let result = true;
    let tempArr = [];
    okIndex = -1;
    s.split('').forEach((item, index) => {
        if (okIndex >= index) {
            return;
        }
        if (getOppsite(item) === s[index + 1]) {
            tempArr.push(item);
            if (tempArr.map((item)=>{return getOppsite(item)}).reverse().join('') !== s.slice(index + 1, index + tempArr.length + 1)) {
                result = false;
            } else {
                okIndex = index + tempArr.length;
                tempArr = [];
            }
        } else {
            tempArr.push(item);
        }
        if (index === s.length - 1 && tempArr.length > 0) {
            result = false;
            return;
        }
    })
    return result;
};

function getOppsite (string) {
    if (string === '(') return ')'
    if (string === ')') return '('
    if (string === '[') return ']'
    if (string === ']') return '['
    if (string === '{') return '}'
    if (string === '}') return '{'
}

console.log(isValid("(([]){})"))