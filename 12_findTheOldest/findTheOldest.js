const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        getAge(array.yearOfBirth, array.yearOfDeath);
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);


        return oldestAge < currentAge ? currentPerson: oldest;
    });
};

const getAge = function(birth, death){
    if (!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
