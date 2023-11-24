const zucchiniList = [
    {kind: 'Kind 1', weight: 10, length: 4},
    {kind: 'Kind 6', weight: 13, length: 16},
    {kind: 'Kind 2', weight: 4, length: 23},
    {kind: 'Kind 6', weight: 11, length: 6},
    {kind: 'Kind 1', weight: 2, length: 17},
    {kind: 'Kind 3', weight: 5, length: 10},
    {kind: 'Kind 3', weight: 7, length: 9},
    {kind: 'Kind 4', weight: 3, length: 8},
    {kind: 'Kind 5', weight: 6, length: 27},
    {kind: 'Kind 5', weight: 14, length: 4},
    {kind: 'Kind 5', weight: 20, length: 20},

];

let totalSum = 0;

for (let i = 0 ; i < zucchiniList.length ; i++){
    const currentZucchini = zucchiniList[i];

    totalSum = totalSum + zucchiniList[i].weight;

    console.log(currentZucchini);
}

console.log(totalSum);


