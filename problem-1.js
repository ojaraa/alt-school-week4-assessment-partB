function deepEqual(objA, objB) {
  // 1. If they are exactly the same value
  if (objA === objB) {
    return true;
  }

  // 2. If either one isn't an object, they aren't equal
  if (
    typeof objA !== "object" ||
    typeof objB !== "object" ||
    objA === null ||
    objB === null
  ) {
    return false;
  }

  // 3. Get all the keys
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // 4. Different number of keys = not equal
  if (keysA.length !== keysB.length) {
    return false;
  }

  // 5. Check every key
  for (const key of keysA) {
    // Make sure objB has the same key
    if (!Object.hasOwn(objB, key)) {
      return false;
    }

    // 6. Compare the values recursively
    if (!deepEqual(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); 

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); 

console.log(deepEqual({ a: 1 }, { a: 1, b: 2 })); 
