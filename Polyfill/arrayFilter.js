Array.prototype.myFilter = function (callbackFn, thisArg) {
    // here thisArg is optional, if not provided, it will default to undefined
    if (typeof callbackFn !== 'function') {
       throw new TypeError(callbackFn + ' is not a function');
     }
   
     const resultArray = [];
   
     for (let i = 0; i < this.length; i++) {
         // Check if the index exists in the array to avoid undefined values
         // This is important for sparse arrays
       if (i in this) {
         if (callbackFn.call(thisArg, this[i], i, this)) {
           resultArray.push(this[i]);
         }
       }
     }
   
     return resultArray;
   };

   console.log("Polyfill for Array.prototype.filter has been added.");
// Example usage:
// const arr = [1, 2, 3, 4, 5];
// const filteredArr = arr.myFilter(num => num > 2);
// console.log(filteredArr); // Output: [3, 4, 5]
