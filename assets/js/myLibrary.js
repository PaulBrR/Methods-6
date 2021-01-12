_ = {
    each: (array, fn) => {
        for(let i = 0; i < array.length; i++) {
            fn(array[i], i, array)
        }
    },
    
}

const numbers = [5,2, 22, 3, 41, 1 , 33];

//          ------------------- ForEach
 _.each(numbers, (number) => console.log(number))

