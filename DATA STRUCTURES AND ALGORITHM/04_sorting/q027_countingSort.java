public class q027_countingSort {

    public static void countingSort(int[] arr) {
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < arr.length; i++) {
            max = Math.max(arr[i], max);
        }

        int[] countArr = new int[max + 1];
        for (int i = 0; i < arr.length; i++) {
            countArr[arr[i]]++;
        }

        int j = 0;
        for (int i = countArr.length-1; i >=0; i--) {
            while(countArr[i] > 0) {
                arr[j] = i;
                j++;
                countArr[i]--;
            }
        }
    }

    public static void printArr(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }

    public static void main(String[] args) {

        int[] arr = {3,6,2,1,8,7,4,5,3,1 };
        countingSort(arr);
        printArr(arr);
    }
}
