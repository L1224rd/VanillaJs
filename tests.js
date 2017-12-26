var test = [4, 4, 3, 2, 2];
var items = {
    a: 2,
    b: 'k',
    c: {
        ca: 'b',
        cb: 2
    },
    d: test
}

// console.log(JSON.stringify(items));

function showObj(items, res = '') {
    for (let item in items) {
        let value = items[item];
        if (value.constructor.name !== 'Object') {
            res += item + ': ' + value + '\r\n';
        } else {
            res += item + ': ' + '\r\n'+ showObj(value, res);
        }
    }
    return res;
}

// console.log(showObj(items));