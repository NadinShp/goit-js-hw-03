const findBestEmployee = function (employees) {
    const valuesOfKeys = Object.values(employees);
    let bestRezult = valuesOfKeys[0];
    let index=0;
    for (let i = 1; i < valuesOfKeys.length; i += 1) {
        if (bestRezult < valuesOfKeys[i]) {
            bestRezult = valuesOfKeys[i];
            index = i;
        }
    }
    const keys = Object.keys(employees);
    return keys[index];
}
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux