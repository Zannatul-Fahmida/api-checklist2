const person = {
    name: 'priya',
    age: 23,
    isEarning: false,
    bestFriend: {
        name: 'Rozina',
        age: 24,
        isEarning: true
    },
    friends: ['tonni', 'tamanna', 'srity', 'anika'],
    elderAge: function(age1, age2){
        if(age2 > age1){
            return age2;
        }
    }
}
const age = person.elderAge(12, 14);
console.log(age);

//problem 2
const mySelf = `My name is ${person.name}. My bestfriend name is ${person.bestFriend.name}. My collage bestfriend name is ${person.friends[1]}.`;
console.log(mySelf);