public class question {

  public static void display(int[] nums) {
    for (int i = 0; i < nums.length; i++) {
      System.out.println(nums[i]);
    }
  }

  public static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

  }

  public static void reverse(int[] arr, int i, int j) {
    while (i < j) {
      swap(arr, i++, j--);
    }
  }

  public static void rotateByK(int r, int[] arr) {
    int n = arr.length;
    r = r % n;
    if (r < 0)
      r = r + n;

    reverse(arr, 0, n - 1);
    reverse(arr, n - r, n - 1);
    reverse(arr, 0, n - r - 1);
  }

  public static void segregatePositiveAndNegative(int[] arr) {
    int pt = -1;

    for (int i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        swap(arr, ++pt, i);
      }

    }
  }

  public static void segeregateZerosAndOnce(int[] arr) {
    int n = arr.length, pt = -1, itr = 0;
    while (itr < n) {
      if (arr[itr] == 0) {
        swap(arr, ++pt, itr);
      }
      itr++;
    }
  }

  public static void segereateZeroOnceAndTwo(int[] arr) {
    int n = arr.length, pt1 = -1, pt2 = -1, itr = 0;
    while (itr < n) {
      if (arr[itr] == 0) {
        swap(arr, ++pt2, itr);
        swap(arr,++pt1,pt2);
      }
      
      if (arr[itr] == 1) {
        swap(arr, ++pt2, itr);
      }

      itr++;
    }
  }

  public static  void main(String[] args) {
    int[] nums = { 0,1,1,1,2,1,0,1,2,2,0,0,2,1,0,0,2,0,0,1,2,2,2 };
    // rotateByK(7, nums);
    // segregatePositiveAndNegative(nums);
    // segeregateZerosAndOnce(nums);
    segereateZeroOnceAndTwo(nums);
    display(nums);
  }
}