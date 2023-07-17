import java.util.Arrays;
import java.util.Collections;

public class q026_inbuiltSort {
    public static void printArr(Integer[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }

    public static void main(String[] args) {
        Integer arr[] = { 5, 4, 3, 1, 2 };
        Arrays.sort(arr, Collections.reverseOrder());
        printArr(arr);
    }
}
