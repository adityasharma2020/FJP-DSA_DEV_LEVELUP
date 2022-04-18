public class stockspan{
    public static void main(String args[]){
        Scanner scn = new Scanner(System.in);

    }

    public static int[] solve(int[] arr){
        Stack<Integer> st = new Stack<>();
        int ans[]  = new int[arr.length];

        st.push(0);
        ans[0] = 1;

        for(int i=0;i<arr.length;i++){
            while(st.size() >0 && arr[i] > st.peek()){
                st.pop();
            }

            

        }
    }
}