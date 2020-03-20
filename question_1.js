let arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const organize = arr => {
    arr.sort((a, b) => a - b);
    const res = [];
    while (arr.length > 0)
        res.push(groupDuplicates(arr));
    return res;
}

const groupDuplicates = arr => {
    const pivot = arr.shift();
    if (pivot === arr[0]) {        
        let tmp = [pivot];
        while(pivot === arr[0]) {
            tmp.push(arr.shift());
        }
        return tmp;
    }
    else 
        return pivot;
}

arr = organize(arr);


// part 2

const organizeStr = arr => {
    arr.sort((a, b) => {
        if (typeof(a) === 'number' && typeof(b) === 'string')
            return -1;
        if (typeof(b) === 'number' && typeof(a) === 'string')
            return 1;
        else
            return 0;
    });
    const res = [];
    while(arr.length > 0)
        res.push(groupDuplicatesStr(arr));
    return res;
}

const groupDuplicatesStr = arr => {
    let pivot = arr.shift();
    const tmp = [pivot];
    while(typeof(pivot) === typeof(arr[0])) {
        tmp.push(arr.shift());
    }
    tmp.sort((a, b) => a - b);
    return tmp;
}

const res = organizeStr([1, '2', '3', 4]);
const res1 = organizeStr(['2', '5', 2, 1, '3', '6', '78', 99, 0, 2, '0']);
