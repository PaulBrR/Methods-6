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
    find: (array, fn) => {
        for(let i = 0; i < array.length; i++) {
            if(fn(array[i])){
                return array[i];
            }
        }
    },
    fiindex: (array, fn) => {
        for(let i = 0; i < array.length; i++) {
            if(fn(array[i])) {
                return i;
            }
        }
        return -1;
    },
    contains: (array, value , fromIndex) => {
        for(let i = fromIndex; i < array.length; i++ ) {
            if(value === array[i]) {
                return true;
            }
        }
    },
    pluck: (array,propertyName) => {
        const newArrayThings = [];
        let propertyArrays = Object.keys(array[0]); // I know the names of the properties
        let propertyKey;
        for(let i = 0; i< propertyArrays.length; i++) {
            if(propertyName === propertyArrays[i]){ // I know the position of the property in the array
                propertyKey = i ;
            }
        }
        for(let i = 0; i < array.length; i++) {
            let arrayAux = Object.values(array[i])
            newArrayThings.push(arrayAux[propertyKey]); // new array with selected property         
        }
        return newArrayThings;
    },
    whithout: (array,nValues) => {
        let arrayWithoutValues = [];
        let arrayAux = [];
        for(let i = 0; i < nValues.length; i++) {
            for(let j = 0; j < array.length; j++){
                if(nValues[i] !== array[j]){
                    arrayAux.push(array[j])  
                }
            }
             arrayWithoutValues = arrayAux;
            arrayAux = [];
        }
        return arrayWithoutValues;
    }
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

//          ------------------- Find
const find41 = _.find(numbers,(number) => number === 41);
console.log(find41);

//          ------------------- FindIndex
const fiIndexN1 = _.fiindex(numbers, (number) => number === 1 ) ;
console.log(fiIndexN1);

//          ------------------- Contains
const containsNumber33StartIn3 = _.contains(numbers,33,3);
console.log(containsNumber33StartIn3);

//          ------------------- Pluck         
const extractPeopleForName = _.pluck(people, 'name'); // interchangeable for    a g e 
console.log(extractPeopleForName);

//          ------------------- Whitout
const whithout22And1 =  _.whithout(numbers,[22,1])
console.log(whithout22And1);