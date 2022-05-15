import java.io.*;
import java.util.*;

public class nextgreaterToRight {
    public static void display(int[] a) {
        StringBuilder sb = new StringBuilder();

        for (int val : a) {
            sb.append(val + "\n");
        }
        System.out.println(sb);
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        int[] a = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = Integer.parseInt(br.readLine());
        }

        int[] nge = solve(a);
        display(nge);
    }

    // Solution by kartikeya sir =======>
    public static int[] solve(int[] arr) {
        // solve

        int n = arr.length;
        int ans[] = new int[n];

        Stack<Integer> st = new Stack<>();
        st.push(arr[n - 1]);
        ans[n - 1] = -1;

        for (int i = n - 2; i >= 0; i--) {
            // pop all smaller elements
            while (st.size() > 0 && arr[i] >= st.peek()) {
                st.pop();

            }

            // filling the answer
            if (st.size() == 0) {
                ans[i] = -1;
            } else {
                ans[i] = st.peek();

            }

            // push the current elemnt into the stack

            st.push(arr[i]);

        }
        return ans;
    }

    // alternative solution by sumeet sir lopping from left to right ====>

    // - ans +

} 