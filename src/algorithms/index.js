import { getEntriesMap, countArraySum } from '../utils/index.js';

const isSameValueSquared = (sourceArr, targetArr) => {
  if (sourceArr.length !== targetArr.length) return false;

  const sourceArrMap = getEntriesMap(sourceArr);
  const targetArrMap = getEntriesMap(targetArr);

  const comparisonResult = Object.entries(sourceArrMap).every(
    ([sourceMapKey, sourceMapValue]) => {
      const targetMapKey = sourceMapKey ** 2;
      const targetMapValue = targetArrMap[targetMapKey];

      return sourceMapValue === targetMapValue;
    }
  );

  return comparisonResult;
};

const isAnagrams = (sourceString, targetString) => {
  if (sourceString.length !== targetString.length) return false;

  const sourceStringEntries = getEntriesMap(sourceString);
  const targetStringEntries = getEntriesMap(targetString);

  const comparisonResult = Object.entries(sourceStringEntries).every(
    ([sourceLetter, sourceAmount]) => {
      const targetAmount = targetStringEntries[sourceLetter];

      return sourceAmount === targetAmount;
    }
  );

  return comparisonResult;
};

const sumZero = (numsArr) => {
  let leftIndex = 0;
  let rightIndex = numsArr.length - 1;

  while (leftIndex < rightIndex) {
    const sum = numsArr[leftIndex] + numsArr[rightIndex];

    if (sum === 0) return [numsArr[leftIndex], numsArr[rightIndex]];
    else if (sum > 0) rightIndex -= 1;
    else leftIndex += 1;
  }
};

const countUniqueValues = (array) => {
  if (!array.length) {
    return 0;
  }

  let currentPointerIndex = 0;
  let checkPointerIndex = currentPointerIndex + 1;

  while (checkPointerIndex < array.length) {
    let currentValue = array[currentPointerIndex];
    let checkValue = array[checkPointerIndex];

    if (currentValue !== checkValue) {
      currentPointerIndex += 1;
      array[currentPointerIndex] = checkValue;
    }

    checkPointerIndex += 1;
  }

  return currentPointerIndex + 1;
};

const findMaxSubarraySum = (numsArr, subsequenceLength) => {
  if (!numsArr.length) return 0;

  if (subsequenceLength > numsArr.length) return countArraySum(numsArr);

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < subsequenceLength; i += 1) {
    let currentValue = numsArr[i];
    maxSum += currentValue;
  }
  tempSum = maxSum;

  for (let i = subsequenceLength; i < numsArr.length; i += 1) {
    let leavingValue = numsArr[i - subsequenceLength];
    let incomingValue = numsArr[i];

    tempSum = tempSum - leavingValue + incomingValue;
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

const sameFrequency = (n1, n2) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    return false;
  }

  const numEntries1 = getEntriesMap(n1.toString().split(''));
  const numEntries2 = getEntriesMap(n2.toString().split(''));

  const isSameFrquency = Object.entries(numEntries1).every(
    ([num, amount]) => numEntries2[num] === amount
  );

  return isSameFrquency;
};

const areThereDuplicates = (...args) => {
  const argumentsEtnries = getEntriesMap(args);
  const result = Object.values(argumentsEtnries).some((amount) => amount > 1);

  return result;
};

const isSubsequence = (targetString, checkString) => {
  if (targetString.length > checkString.length) {
    return false;
  }

  let currentTargetStringIndex = 0;
  let currentTargetStringChar = targetString[currentTargetStringIndex];
  let resultChars = [];

  for (const currentCheckStringChar of checkString) {
    if (currentTargetStringChar === currentCheckStringChar) {
      resultChars.push(currentCheckStringChar);
      currentTargetStringIndex = currentTargetStringIndex + 1;
      currentTargetStringChar = targetString[currentTargetStringIndex];
    }
  }

  const resultString = resultChars.join('');

  return resultString === targetString;
};

const hasAveragePair = (numsArr, targetAverage) => {
  let start = 0;
  let end = numsArr.length - 1;

  while (start < end) {
    let currentAverage = (numsArr[start] + numsArr[end]) / 2;

    if (currentAverage === targetAverage) return true;

    if (currentAverage < targetAverage) start += 1;
    else end -= 1;
  }

  return false;
};

const maxSubArraySum = (numsArr, subsequenceLength) => {
  let max = 0;
  let temp = 0;

  for (let i = 0; i < subsequenceLength; i += 1) {
    max += numsArr[i];
  }

  temp = max;

  for (let i = subsequenceLength; i < numsArr.length; i += 1) {
    temp = temp - numsArr[i - subsequenceLength] + numsArr[i];
    console.log(numsArr[i]);
    max = Math.max(max, temp);
  }

  return max;
};

const findLongestSubstringLength = (string) => {
  if (string.length < 1) return 0;
  if (string.length === 1) return 1;

  let charsMap = {};
  let maxSubstringChars = [];
  let tempSubstringChars = [];

  for (const char of string) {
    maxSubstringChars =
      tempSubstringChars.length > maxSubstringChars.length
        ? tempSubstringChars
        : maxSubstringChars;

    if (charsMap[char]) {
      tempSubstringChars = [];
      charsMap = {};
    } else {
      tempSubstringChars.push(char);
      charsMap[char] = char;
    }
  }

  const maxSubstring = maxSubstringChars.join('');
  const maxSubstringLength = maxSubstring.length;

  return [maxSubstring, maxSubstringLength];
};

const testMaxSubstring = (str) => {
  let longest = 0;
  let seen = {};
  let start = 0;
  let resultString;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
};

const testMinSum = [2, 3, 1, 2, 4, 3];
const testMinSum1 = [2, 1, 6, 5, 4];

const minSubArrayLen = (arr, targetSum) => {
  if (arr.length < 1) return [];
  if (arr.length === 1 && arr[0] === sumTarget) return arr;

  let currentSum = 0;
  let tempSubArray = [];
  let minSubArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    currentSum += arr[i];
    tempSubArray.push(arr[i]);

    if (currentSum === targetSum) {
      minSubArray =
        minSubArray.length === 0 || minSubArray.length > tempSubArray
          ? tempSubArray
          : minSubArray;
    } else if (currentSum > targetSum) {
      currentSum = 0;
      tempSubArray = [];
    }

    console.log(currentSum, tempSubArray, minSubArray);
  }

  return [minSubArray, minSubArray.length];
};

// console.log(minSubArrayLen(testMinSum1, 9));
// minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // [4, 3]

const power = (base, exponent) => {
  if (exponent === 0) {
    return 1;
  }

  if (exponent === 1) {
    return base;
  }

  return base * power(base, exponent - 1);
};

const factorial = (num) => {
  if (num === 1 || num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
};

// console.log(factorial(0));

const productOfArray = (numsArr) => {
  if (!numsArr.length) {
    return 1;
  }

  const currentNum = numsArr.pop();
  // console.log(numsArr);
  return currentNum * productOfArray(numsArr);
};

// console.log(productOfArray([1, 2, 3, 4, 5]));

const recursiveRange = (num) => {
  if (num < 1) {
    return 0;
  }

  return num + recursiveRange(num - 1);
};

// console.log(recursiveRange(120));

const recursiveReverse = (string) => {
  const iter = (string, result) => {
    if (!string.length) {
      return result;
    }

    console.log(string);
    const stringArr = string.split('');
    const currentChar = stringArr.pop();

    return iter(stringArr.join(''), `${result}${currentChar}`);
  };

  return iter(string, '');
};

// console.log(recursiveReverse('string'));

const someRecursive = (arr, cb) => {
  if (arr.length === 0) {
    return false;
  }

  const currentVal = arr.shift();

  if (cb(currentVal)) {
    return true;
  }

  return someRecursive(arr, cb);
};

// console.log(someRecursive([2, 4, 6, 8, 10], (value) => value % 2 == 0));

// const capitalizeFirst = (arr) => {}

const linearSearch = (list, value) => {
  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === value) {
      return i;
    }
  }

  return -1;
};

// console.log(linearSearch([2, 2, 5, 6, 7, 9, 11], 13));

const binarySearch = (list, value) => {
  let start = 0;
  let end = list.length - 1;

  for (start, end; start <= end; ) {
    let middle = Math.floor((start + end) / 2);

    if (list[middle] === value) return middle;
    if (list[middle] > value) end = middle - 1;
    if (list[middle] < value) start = middle + 1;
  }

  return -1;
};

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 23, 35, 67, 112], 112));

const countSubstringEntries = (string, pattern) => {
  let counter = 0;

  for (let i = 0; i < string.length; i += 1) {
    for (let j = 0; j < pattern.length; j += 1) {
      if (string[i + j] !== pattern[j]) break;
      if (j === pattern.length - 1) counter += 1;
    }
  }

  return counter;
};

// console.log(countSubstringEntries('tesststeslzozllosl', 'lol'));

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const nums = [442, 32, 12, 2, 3, 32, 11, 3, 92, 23, 3, 4];

const bubleSort = (arr) => {
  let noSwaps;

  for (let i = arr.length; i > 0; i -= 1) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
};

// console.log(bubleSort(nums));

const selectionSort = (nums) => {
  for (let i = 0; i < nums.length; i += 1) {
    let lowestValueIdx = i;
    let changed = false;
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[j] < nums[lowestValueIdx]) lowestValueIdx = j;
      changed = true;
    }
    if (changed) swap(nums, lowestValueIdx, i);
  }

  return nums;
};

// console.log(selectionSort([34, 22, 10, 19, 26, 213, 12]));

const insertionSort = (nums) => {
  for (var i = 1; i < nums.length; i += 1) {
    const currentValue = nums[i];
    for (var j = i - 1; j >= 0 && nums[j] > currentValue; j -= 1) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = currentValue;
  }
  return nums;
};

// console.log(insertionSort([34, 22, 10, 19, 26, 213, 12]));

const sortSentece = (sentence) =>
  sentence
    .split(' ')
    .sort((a, b) => a[a.length - 1] - b[b.length - 1])
    .map((string) => string.slice(0, -1))
    .join(' ');

// console.log(sortSentece('is2 sentence4 This1 a3'));

const merge = (arr1, arr2) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i += 1;
    } else {
      result.push(arr2[j]);
      j += 1;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i += 1;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j += 1;
  }

  return result;
};

// console.log(merge([1, 10, 50], [2, 14, 99, 100, 122, 132, 23231, 123221]));

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let leftHalf = mergeSort(arr.slice(0, mid));
  let rightHalf = mergeSort(arr.slice(mid));

  console.log(leftHalf, rightHalf);
  return merge(leftHalf, rightHalf);
};

// console.log(JSON.stringify(mergeSort([10, 24, 76, 73, 72, 1, 9])));

const pivot = (arr, startIndex = 0, endIndex = arr.length + 1) => {
  let pivotValue = arr[startIndex];
  let swapIndex = startIndex;

  for (let i = startIndex + 1; i < arr.length; i += 1) {
    if (pivotValue > arr[i]) {
      swapIndex += 1;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, swapIndex, startIndex);

  return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

// console.log(quickSort([4, 8, 2, 2, 2, 1, 5, 7, 6, 3]));

const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; i += 1) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
};

console.log(getDigit(8921, 3));

// console.log(mostDigits([1, 10, 50, 2, 14, 99, 100, 122, 132, 23231, 123221]));

const radixSort = (nums) => {
  let sortedNums = [];
  const mostDigitsCount = mostDigits(nums);

  for (let k = 0; k < mostDigitsCount; k += 1) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i += 1) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    sortedNums = [].concat(...digitBuckets);
  }

  return sortedNums;
};

console.log(radixSort([1, 10, 50, 2, 14, 99, 100, 122, 132, 23231, 123221]));
