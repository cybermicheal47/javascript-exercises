const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ];






const getTheTitles = function(books) {  return books.map(book => book.title);
};


const titles =getTheTitles(books);
console.log(titles)

// Do not edit below this line
module.exports = getTheTitles;
