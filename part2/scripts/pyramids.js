// pyramids.js
function buildPyramid(height) {
    let pyramid = [];
    for (let i = 0; i < height; i++) {
        const spaces = ' '.repeat(height - i - 1);
        const blocks = '@'.repeat(i * 2 + 1);
        pyramid.push(`${spaces}${blocks}${spaces}`);
    }
    return pyramid;
}

// Test the function with a specified height
const pyramidHeight = 5;
const pyramid = buildPyramid(pyramidHeight);

console.log(`Pyramid of height ${pyramidHeight}:`);
pyramid.forEach(level => console.log(level));
