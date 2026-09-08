class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map();
        
        for(let val of nums){
            map.set(val, (map.get(val) || 0) + 1);
        }
        
        for(let [val, index] of map){
            if(index > 1){
                return true;
            }
        }
        return false;
    }
}
