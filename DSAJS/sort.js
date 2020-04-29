/**
 * Count number of inversions in an array, T(n) = O(nlgn)
 * @param {integer[]} nums []
 * @param {integer} lo
 * @param {integer} hi
 * returns no. of inversions
 */

export let countInv = function(nums) {
  // array length = 1 means it's already sorted, # of inversion = 0
  if (nums.length == 1) return 0;

  // calculate the mid to divide the array into half.
  let mid = Math.floor(nums.length / 2);

  // leftInvCount = left Sub array inversion count
  let leftInvCount = 0,
    // rightInvCount = right Sub array inversion count
    rightInvCount = 0,
    // mergedInvCount = merged sub array inversion count
    mergedInvCount = 0;

  let leftSubArray = nums.slice(0, mid);
  let rightSubArray = nums.slice(mid, nums.length);

  leftInvCount = countInv(leftSubArray);
  rightInvCount = countInv(rightSubArray);
  mergedInvCount = mergeCount(nums, leftSubArray, rightSubArray);

  let count = leftInvCount + rightInvCount + mergedInvCount;
  return count;
};

/**
 *
 * @param {integer[]} nums []
 * @param {integer[]} leftSubArray sorted
 * @param {integer[]} rightSubArray sorted
 */
let mergeCount = function(nums, leftSubArray, rightSubArray) {
  let countInv = 0; // # of inversions
  let leftSubArrayLength = leftSubArray.length;
  let rightSubArrayLength = rightSubArray.length;
  let length = leftSubArrayLength + rightSubArrayLength;
  let left = 0,
    right = 0;
  let merged = [];

  while (left < leftSubArrayLength && right < rightSubArrayLength) {
    if (leftSubArray[left] <= rightSubArray[right]) {
      merged.push(leftSubArray[left++]);
      //left++;
    } else {
      // count inversion = total number of remainning element from left position.
      // why? because both left is already sorted. So, all the elements including left is greater than,
      // right indexed element of the right sub array.
      // i.e, count inversions = total # of left elements - left pointer position.
      countInv = leftSubArray.length - left;
      merged.push(rightSubArray[right++]);
      //right++;
    }
  }

  // push the remaining elements to the merged array in left sub array.
  while (left < leftSubArrayLength) {
    merged.push(leftSubArray[left++]);
  }

  // push the right elements to the merged array in right sub array.
  while (right < rightSubArrayLength) {
    merged.push(rightSubArray[right++]);
  }

  for (let i = 0; i < length; i++) nums[i] = merged[i];

  return countInv;
};
