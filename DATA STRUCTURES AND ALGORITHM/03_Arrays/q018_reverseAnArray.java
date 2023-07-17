public class q018_reverseAnArray {

    public static void reverseupdate(int[] arr){
        int start = 0, end = arr.length-1;
        while(start < end){
            int temp = arr[end];
            arr[end] = start;
            arr[start] = temp;

            start++;
            end--;
        }
    }

    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7,8,9};
       
        reverseupdate(arr);
       for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]);
       }
        
    }
}