module.exports = function towelSort (matrix) {
  if(!Array.isArray(matrix) || matrix.length === 0){
    return [];
  }
  else{
    for(let i = 1; i < matrix.length; i +=2) {
      matrix[i] = matrix[i].sort((a, b) => b - a);
    }
    return matrix.flat();
  }
}
