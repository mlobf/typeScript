// Object Literals
var point = {
    x: 20,
    y: 10
};
// function
var logNumber = function (i) {
    console.log(i);
};
var profile = {
    name: 'Alex',
    age: 20,
    coord: {
        lat: 0,
        lng: 3
    },
    setAge: function (age) {
        this.age = age;
    }
};
var age = profile.age;
