
public class q024_selectionSort {

    public static void q024_selectionSort(int[] arr) {
        int min = 0;
        for (int i = 0; i < arr.length; i++) {

            for (int j = i + 1; j < arr.length; j++) {

                if (arr[j] < min) {
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

        int[] arr = {2,3,4,6,5};
        q024_selectionSort(arr);
        printArr(arr);
    }
}
