let name = "Ruby";
sayHi = () =>
{
    console.log("Hi" + ' ' + name);
}

sayHi(name);


let counter = (arr) =>
{
    return 'There are ' + arr.length + ' ' + 'Element in this arrary';

}

console.log(counter(['Ruby', 'Jason', 'Zenitha']));