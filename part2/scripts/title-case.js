// titleCase.js
function titleCase(str) {
    return str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

// Test the function with a sample string
const sampleText = "hello world from javascript";
console.log(`Original: ${sampleText}`);
console.log(`Title Cased: ${titleCase(sampleText)}`);
