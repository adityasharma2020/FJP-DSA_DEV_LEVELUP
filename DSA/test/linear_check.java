import java.util.Scanner;

public class linear_check {

    public static void linear_check(int n, int[][] arr) {
        int m = (arr[0][1] - arr[1][1]) / (arr[0][0] - arr[1][0]);
        for (int i = 2; i < n; i++) {
            for (int j = 0; j < 2; j++) {

            }
        }

    }

    public static boolean check(int x1, int y1, int x, int y, int m) {

        int res = (m * (x - x1)) + y1;
        if (res == y) {
            return true;
        } else {
            return false;
        }
    }

    public static void main(String args[]) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[][] arr = new int[n][2];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < 2; j++) {
                arr[i][j] = scn.nextInt();
            }
        }

        linear_check(n, arr);
    }

}
