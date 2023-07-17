public class BinarySearch {

    public static int binarySearch(int[] arr, int key) {
        int start = 0, end = arr.length - 1;
        int mid = start + end /2;
        while( start<= end){
            if(key == arr[mid]){
                return mid;
            }else if(key < mid){
                end = mid-1;
            }else{
                start = mid+1;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = {1,2,3,3,3,4,5,5,6};
        
        System.out.println(binarySearch(arr,3));
    }
}