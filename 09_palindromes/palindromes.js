const palindromes = function (str) {
    const removeNonAlphanumeric = function (str) {
      return str.toLowerCase().replace(/[^a-z0-9]/g, '');
    };
  
    const isPalindrome = function (str) {
      str = removeNonAlphanumeric(str);
      const length = str.length;
      for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - 1 - i]) {
          return false;
        }
      }
      return true;
    };
  
    return isPalindrome(str);
  };
  
  module.exports = palindromes;
  