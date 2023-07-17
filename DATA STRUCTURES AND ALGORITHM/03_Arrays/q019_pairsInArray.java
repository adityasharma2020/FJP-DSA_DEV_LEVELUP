public class q019_pairsInArray {

    public static void pairsInArray(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                System.out.print("(" + arr[i] + "," + arr[j] + ")");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int[] arr = { 2, 4, 6, 8, 10 };
        pairsInArray(arr);
    }
}