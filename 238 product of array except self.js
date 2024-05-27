var productExceptSelf = function(nums) {
    const n = nums.length;
    let answer = [];
    let left = 0;
    let right = 0;
    let res = 1;
    for (; right < n ; right++){
        if (left === n){
            break;
        } else if (right !== left && right < n - 1 ){
            res = res * nums[right];
        } else if (right === n - 1){
            answer.push(res);
            res = 1;
            left++;
            right = -1; // Reset right index
        }
    }

    // Calculate the product for the last element
    let product = 1;
    for (let i = 0; i < n; i++) {
        product *= nums[i];
    }
    answer.push(product);

    return answer;
};

console.log(productExceptSelf([1,2,3,4])); // Output: [24, 12, 8, 6]


//
// function productExceptSelf(nums) {
//     debugger
//     const n = nums.length;
//     const prefix = Array(n).fill(1);
//     const suffix = Array(n).fill(1);
//     const result = [];
//
//     // Calculate prefix products
//     for (let i = 1; i < n; i++) {
//         prefix[i] = prefix[i - 1] * nums[i - 1];
//     }
//
//     // Calculate suffix products
//     for (let i = n - 2; i >= 0; i--) {
//         suffix[i] = suffix[i + 1] * nums[i + 1];
//     }
//
//     // Calculate result
//     for (let i = 0; i < n; i++) {
//         result[i] = prefix[i] * suffix[i];
//     }
//
//     return result;
// }
//
// // Test cases
// console.log(productExceptSelf([1, 2, 3, 4]));  // Output: [24, 12, 8, 6]
// console.log(productExceptSelf([-1, 1, 0, -3, 3]));  // Output: [0, 0, 9, 0, 0]
