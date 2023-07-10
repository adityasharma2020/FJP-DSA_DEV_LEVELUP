public class q004_DecimalToBinary {

  public static int decimalToBinary(int decimal) {
    int pow = 0;
    int bin = 0;

    while (decimal > 0) {
      int rem = decimal % 2;
      bin = bin * 10 + rem;
      // bin = bin + rem * (int) (Math.pow(10, pow));
      decimal = decimal / 2;
      pow++;
    }

    return bin;
  }

  public static void main(String[] args) {
    System.out.println(decimalToBinary(5));
  }
}
