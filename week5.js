/*
^ and $ assert the start and end of the string.

(\+1\s?)? optionally matches the country code +1 with or without a space.

(\(?\d{3}\)?[\s.-]?)? optionally matches an area code with or without parentheses 
and a space, dot, or dash.

\d{3}[\s.-]?\d{4} matches the local number part with optional separator.
*/

function isValidPhoneNumber(phone) {
  const regex = /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
  return regex.test(phone);
}

// Test cases
console.log(isValidPhoneNumber("123-456-7890"));      // true
console.log(isValidPhoneNumber("(314) 456-7890"));    // true
console.log(isValidPhoneNumber("6364567889"));        // true
console.log(isValidPhoneNumber("123.456.7897"));      // true
console.log(isValidPhoneNumber("+1 123 456 7860"));   // true
console.log(isValidPhoneNumber("456-7890"));          // false
console.log(isValidPhoneNumber("abc-def-ghij"));      // false



\d{3}[\s.-]?\d{4} matches the local number part with optional separator.
*/


