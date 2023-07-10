public class q003_binaryToDecimal {

  public static int binaryToDecimal(int binN) {
    int pow = 0;
    int decimal = 0;

    while (binN > 0) {
      int ld = binN % 10;
      decimal = decimal + ld * (int) (Math.pow(2, pow));
      binN = binN / 10;
      pow++;
    }
    return decimal;
  }

  public static void main(String[] args) {
    System.out.println(binaryToDecimal(101));
  }
}
