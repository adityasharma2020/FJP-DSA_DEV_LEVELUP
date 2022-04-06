import java.util.*;

public class targetSumSubsets {

    public static void printTargetSumSubsets(int[] arr,int idx,int tar,int sos){
        if(){
            System.out.println()
        }

        for(int i=0;i<arr.length;i++){
            if(arr[i]< (tar-sos)){
            sos += arr[i];
            printTargetSumSubsets(arr,i, tar,sos);
            }
    }


    }

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = scn.nextInt();
        }

        targetSumSubsets();
    }
}
