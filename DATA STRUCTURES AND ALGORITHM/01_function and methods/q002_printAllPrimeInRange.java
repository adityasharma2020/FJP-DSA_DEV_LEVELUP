public class q002_printAllPrimeInRange {

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

  public static void primesInRange(int n) {
    for (int i = 2; i <= n; i++) {
      if(isPrime(i)){
        System.out.println(i);
      }
    }
  }

  public static void main(String args[]) {
    primesInRange(100);
  }
}
