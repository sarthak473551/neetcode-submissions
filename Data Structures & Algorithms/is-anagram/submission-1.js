class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
        return false;
    }
        let strObj = {};

        for(let str of s){
            strObj[str] = (strObj[str] || 0) + 1
        }

        for(let tep of t){
            if(!(strObj[tep])){
                return false;
            }
            strObj[tep]--
        }
        return true;
    }
}
