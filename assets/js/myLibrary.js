_ = {
    each: (array, fn) => {
        for(let i = 0; i < array.length; i++) {
            fn(array[i], i, array)
        }
    },
    filter: (array, fn) => {
        const filteredData = [];
        for(let i = 0; i < array.length; i++) {
            if(fn(array[i], i, array)) {
                filteredData.push(array[i]);
            }
        }
        return filteredData;
    },
    map: (array, fn) => {
        const newData = [];
        for(let i = 0; i < array.length; i++) {
            newData.push(fn(array[i]));
        }
        return newData;
    },
    
}

const numbers = [5,2, 22, 3, 41, 1 , 33];

//          ------------------- ForEach
 _.each(numbers, (number) => console.log(number))

 //          ------------------- Filter
const biggerThan20 = _.filter(numbers, (number) => number > 20);
console.log(biggerThan20);

//          ------------------- Map
const addOne = _.map(numbers, (number) => number + 1);
console.log(addOne);
