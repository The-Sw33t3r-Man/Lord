// leapYears.js
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Test the function with a few examples
const yearsToTest = [1996, 2000, 1900, 2024];
yearsToTest.forEach(year => {
    console.log(`${year} is ${isLeapYear(year) ? '' : 'not '}a leap year.`);
});
