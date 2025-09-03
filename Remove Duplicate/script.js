var removeElement = function(nums, val) {
    let k = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

removeElement([1, 2, 1, 3, 4], 6)   