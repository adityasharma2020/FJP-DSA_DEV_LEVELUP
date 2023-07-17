public class q023_optimizedbubblesort {

    public static void bubbleSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int swap = 0;
            for (int j = 0; j < arr.length - 1 - i; j++) {
                // swapping
                if (arr[j] < arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swap = 1;

                }
            }
            if (swap == 0) {
                break;
            }
        }
    }

    public static void printArr(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }

    public static void main(String[] args) {
        int[] arr = {3,6,2,1,8,7,4,5,3,1};
        bubbleSort(arr);
        printArr(arr);
    }
}