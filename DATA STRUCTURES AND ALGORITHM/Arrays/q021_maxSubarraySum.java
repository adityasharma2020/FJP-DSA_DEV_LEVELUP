public class q021_maxSubarraySum {
    public static void q021_maxSubarraySumBruteForce(int[] arr) {
        int max = Integer.MIN_VALUE;

        for (int i = 0; i < arr.length; i++) {
            for (int j = i; j < arr.length; j++) {
                int sum = 0;
                for (int k = i; k <= j; k++) {
                    sum = sum + arr[k];
                }
                if (max < sum) {
                    max = sum;
                }
            }
        }
        System.out.println("max:" + max);
    }

    public static void q021_maxSubarraySumPrefixSubarray(int[] arr) {
        int max = Integer.MIN_VALUE;
        int[] prefix = new int[arr.length];

        prefix[0] = arr[0];
        for (int i = 1; i < arr.length; i++) {
            prefix[i] = prefix[i - 1] + arr[i];
        }

        // calcultation
        for (int i = 0; i < arr.length; i++) {
            int currentArraySum = 0;
            for (int j = i; j < arr.length; j++) {
                currentArraySum = i == 0 ? prefix[j] : prefix[j] - prefix[i - 1];
                if (max < currentArraySum) {
                    max = currentArraySum;
                }
            }
        }
        System.out.println("max using prefix array: " + max);
    }

    public static void q021_maxSubarraySumKadanesAlgorithm(int[] arr) {
        int currentSum = 0, maxSum = Integer.MIN_VALUE;
        for (int i = 0; i < arr.length; i++) {
            currentSum =  currentSum +arr[i];

            if(currentSum < 0){
                currentSum = 0;
            }

            maxSum = Math.max(currentSum, maxSum);
        }

        System.out.println("max sum using kadanes algo: "+ maxSum);
    }

    public static void main(String[] args) {
        int[] arr = { 2, 4, 6, 8, 10 };
        q021_maxSubarraySumBruteForce(arr);
        q021_maxSubarraySumPrefixSubarray(arr);
        q021_maxSubarraySumKadanesAlgorithm(arr);
    }
}
