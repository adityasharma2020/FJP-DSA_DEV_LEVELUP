
public class q029_diagonalSum {
    public static void q029_diagonalSum(int[][] arr){
        int sum = 0;
         int n = arr.length;
        // brute force we are going at every index and checking the condition.---------> 
       
        // for(int i=0;i<n;i++){
        //     for(int j=0;j<n;j++){
        //         if(i==j  || j==n-1-i){
        //            sum +=  arr[i][j];
        //         }
        //     }
        // }
        // System.out.println(sum);

        // optimised appoach --------->
            for(int i=0;i<n;i++){
                sum += arr[i][i];
            
                sum +=arr[i][n-1-i];
            }



    }
    public static void main(String[] args) {
        // int[][] arr = { { 1, 2, 3, 4 }, { 5, 6, 7, 8 }, { 9, 10, 11, 12 }, { 13, 14, 15, 16 } };
        int[][] arr ={{1,2,3},{4,5,6},{7,8,9}};
        q029_diagonalSum(arr);
    }
}
