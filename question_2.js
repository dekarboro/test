const que2 = (arr, target) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target && arr[i] !== arr[j])
				return [arr[i], arr[j]];
		}
	}
}
/**/
const que2js = (arr, target) => {
	for (let i = 0; i < arr.length; i++) {
		for (item of arr.slice(i + 1)) {
			if (arr[i] + item === target && arr[i] !== item)
				return [arr[i], item];
		}
	}
}

console.log("hi");
console.log(que2js([5, 6, 3, 1, 9, 5, 6, 3, 3, 11, 2, 9], 6));