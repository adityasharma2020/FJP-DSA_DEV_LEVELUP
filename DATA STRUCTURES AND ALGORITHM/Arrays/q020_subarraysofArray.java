public class q020_subarraysofArray {
    public static void q020_subarrrayofArray(int[] arr) {
        int max  = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;
        for (int i = 0; i < arr.length; i++) {
            for (int j = i; j < arr.length; j++) {
                int sum = 0;
                for (int k = i; k <=j; k++) {
                    sum = sum + arr[k];
                }
                if(max < sum){
                    max = sum;
                }
                if(min > sum){
                    min = sum;
                }
                System.out.println(sum);
            }
            System.out.println();
        }
        System.out.println("max:"+max + "min:"+min);
    }

    public static void main(String[] args) {
        int[] arr = { 2, 4, 6, 8, 10 };
        q020_subarrrayofArray(arr);
    }
}
