/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let sum = 0;

    for(let i = 0; i < preferences.length; i++){
        let x = preferences[i];
        let y = preferences[x - 1];
        let z = preferences[y - 1];

        if(z===( i+ 1)  && preferences[i] !==(i+1)) {
            sum++;
        }
    }
    return sum/3;

};
