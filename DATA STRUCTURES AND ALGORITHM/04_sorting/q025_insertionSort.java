public class q025_insertionSort {

    public static void q025_insertionSort(int[] arr) {
        for (int i = 0; i < arr.length-1; i++) {
            System.out.println("i:"+i);
            for (int j = i; j >= 0; j--) {
                System.out.println("j value"+ "for"+ +i+"is : " + j);
                if (arr[i + 1] <= arr[j]) {
                    // swap
                    int temp = arr[i + 1];
                    arr[i + 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }

    public static void printArr(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }

    public static void main(String[] args) {
        int[] arr = {5,4,1,3,2};   
        q025_insertionSort(arr);
        printArr(arr);
    }
}
