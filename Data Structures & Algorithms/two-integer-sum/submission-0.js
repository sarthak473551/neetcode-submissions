class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       let sortedNums = nums.map((value, index) => {
        return {value, index}
       });
       sortedNums.sort((a,b) => a.value-b.value);
       let start = 0;
       let end = sortedNums.length-1;

       while(end > start){
        if(sortedNums[start].value + sortedNums[end].value > target){
            end--;
        }
        else if(sortedNums[start].value + sortedNums[end].value < target){
            start++;
        }
        else{
            return [
                sortedNums[start].index,  sortedNums[end].index
            ]
        }
       }
    }
}
