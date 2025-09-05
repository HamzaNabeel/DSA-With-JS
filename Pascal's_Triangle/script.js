var generate = function(numRows) {
    const triangle = [];
    if(numRows === 0) return 0;

    const firstRow = [1];
    triangle.push(firstRow);

    if(numRows === 1) return triangle;

    for(let i = 1; i < numRows; i++){
        const prewRow = triangle[i-1];
        const row = [];
        row.push(1);

        for(let j = 1; j < i; j++){
            const element = prewRow[j - 1] + prewRow[j];
            row.push(element);
        }
        row.push(1);
        triangle.push(row);
    }
    return triangle
};

// Video link of the solution 
// https://www.youtube.com/watch?v=hkRvwoAyrz8