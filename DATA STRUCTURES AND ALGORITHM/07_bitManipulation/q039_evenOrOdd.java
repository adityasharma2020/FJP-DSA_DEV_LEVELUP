
public class q039_evenOrOdd {
    public static void q039_evenOrOdd(int n) {
        int bitmask = 1;
        if ((n & bitmask) == 0) {
            // even
            System.out.println("number is even.");
        } else {
            System.out.println("number is odd.");
        }
    }

    public static void main(String[] args) {
        int n = 0;
        q039_evenOrOdd(n);
    }
}
