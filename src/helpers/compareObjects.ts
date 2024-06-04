

export default function objectsEqual(firstObject: {[key: string]: any}, secondObject: {[key: string]: any}) {
  const entries1 = Object.entries(firstObject);
  const entries2 = Object.entries(secondObject);

  if (entries1.length !== entries2.length) {
    return false;
  }
  for (let i = 0; i < entries1.length; ++i) {
    if (entries1[i][0] !== entries2[i][0]) {
      return false;
    }
    if (entries1[i][1] !== entries2[i][1]) {
      return false;
    }
  }

  return true;
}