
public class q024_selectionSort {

    public static void q024_selectionSort(int[] arr) {
        
        for (int i = 0; i < arr.length-1; i++) {
            int min = i;
            for (int j = i + 1; j < arr.length; j++) {

                if (arr[j] <= arr[min]) {
                    min = j;
                }
            }   
            //swap
            int temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }


  



    public static void printArr(int[] arr){
        for(int i =0;i<arr.length;i++){
            System.out.println(arr[i]);
        }
    }
    public static void main(String[] args) {

        int[] arr = {3,6,2,1,8,7,4,5,3,1};
        q024_selectionSort(arr);
        printArr(arr);
    }
}
