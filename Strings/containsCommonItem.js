const array1 = ['a','b','c','d']
const array2 = ['x','y','z']

function containsCommonItem(arr1, arr2) {
  let map = {}
  for(let i=0; i<arr1.length; i++) {
    if(!map[arr1[i]]) {
      map[arr1[i]] = true
    }
  }

  for(let j=0; j<arr2.length; j++) {
    if(map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

console.log(containsCommonItem(array1, array2))