class Solution{
    findEquilibrium(arr,n){
        //code here
        let lp =[] ;
        let rp = []; 
        
        lp[0] = arr[0] ;
        
        for(let i = 1 ; i < arr.length-1 ; i++){
            lp[i] = arr[i] + lp[i-1] ;
        }
        
        rp[arr.length-1] = arr[arr.length-1] ;
        for(let i = arr.length-2 ; i >= 0 ; i--){
            rp[i] = rp[i+1]  + arr[i] ;
        }
        
        for(let i = 0 ; i < arr.length ; i++){
            if(lp[i] == rp[i]){
                return i ; 
            }
        }
        return -1 ; 
    }
}
