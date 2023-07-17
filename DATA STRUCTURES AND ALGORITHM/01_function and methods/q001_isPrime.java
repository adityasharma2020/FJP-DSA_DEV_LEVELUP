public class q001_isPrime {
  public static boolean isPrime(int n) {
    // base case for 2
    if (n == 2)
      return true;

    for (int i = 2; i * i <= n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }

  public static void main(String args[]) {
    System.out.println(isPrime(2));
  }
}
