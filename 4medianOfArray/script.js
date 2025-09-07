/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

    let m = nums1.length;
    let n = nums2.length;
    let left = 0; right = m;

    while(left <= right){
        let partition1 = (left + right) >> 1;

        let partition2 = ((m + n + 1) >> 1) - partition1;
        let maxLeft1 = partition1 > 0 ? nums1[partition1 - 1] : - Infinity;
        let minRight1 = partition1 < m ? nums1[partition1] : Infinity;

        let maxLeft2 = partition2 > 0 ? nums2[partition2 - 1]: - Infinity;
        let minRight2 = partition2 < n ? nums2[partition2] : Infinity;

        if(maxLeft1 <= minRight2 && maxLeft2 <= minRight1){
            if((m + n) % 2){
                return Math.max(maxLeft1, maxLeft2);
            }
            return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
        }
        if(maxLeft1 > minRight2){
            right = partition1 - 1;
        }else{
            left = partition1 + 1;
        }

    }
};