const recursiveInsertionSort = require('../Q2.3-4');
describe('Insertion Sort', () => {
  it('sort empty array', () => {
    const sortedArray = recursiveInsertionSort([], 0, 0);
    expect(sortedArray).toEqual([]);
  });
  it('sort n=1 array', () => {
    const sortedArray = recursiveInsertionSort([2], 0, 0);
    expect(sortedArray).toEqual([2]);
  });
  it('sort n=2 array', () => {
    const sortedArray = recursiveInsertionSort([2, 1], 0, 1);
    expect(sortedArray).toEqual([1, 2]);
  });
  it('sort n=3 array', () => {
    const sortedArray = recursiveInsertionSort([5, 1, 2], 0, 2);
    expect(sortedArray).toEqual([1, 2, 5]);
  });
  it('sort n=3 non unique values array', () => {
    const sortedArray = recursiveInsertionSort([1, 2, 1], 0, 2);
    expect(sortedArray).toEqual([1, 1, 2]);
  });
  it('sort n=10 array', () => {
    const sortedArray = recursiveInsertionSort([5, 3, 8, 4, 1, 7, 0, 9, 2, 6], 0, 9);
    expect(sortedArray).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it('sort n=20 non unique values array', () => {
    const sortedArray = recursiveInsertionSort([5, 3, 8, 4, 1, 7, 5, 3, 8, 4, 1, 7, 0, 9, 2, 6, 0, 9, 2, 6], 0, 19);
    expect(sortedArray).toEqual([0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]);
  });
});
