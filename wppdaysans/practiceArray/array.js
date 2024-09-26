let countKDiff = function(num, k) {
    let count = 0
       for(let i=0; i< num.length; i++)
    {
        for(let j= i+ 1; j< num.length; j++){
            if(num[i] - num[j]== k || num[j]-num[i]==k){
                count++;
            }
        }
    }
    return count;
};