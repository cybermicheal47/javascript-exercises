const findOldestPerson = function(people) {
    const today = new Date();
    
    return people.reduce((oldestPerson, currentPerson) => {
      const oldestAge = getAge(oldestPerson, today);
      const currentAge = getAge(currentPerson, today);
  
      return currentAge > oldestAge ? currentPerson : oldestPerson;
    });
  };
  
  const getAge = function(person, today) {
    const birthYear = person.birthYear;
    const deathYear = person.deathYear || today.getFullYear();
  
    return deathYear - birthYear;
  };
  
  // Example usage:
  const people = [
    { name: 'John', birthYear: 1950, deathYear: 2020 },
    { name: 'Alice', birthYear: 1965, deathYear: 2010 },
    { name: 'Mike', birthYear: 1940 },
    { name: 'Sarah', birthYear: 1975, deathYear: 2022 },
  ];
  
  const oldestPerson = findOldestPerson(people);
  console.log(oldestPerson.name); // Output: 'Mike'
  

// Do not edit below this line
module.exports = findTheOldest;
