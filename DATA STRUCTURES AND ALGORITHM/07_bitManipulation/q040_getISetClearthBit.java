
public class q040_getISetClearthBit {
    public static void q40_getIthBit(int n, int i) {
        int bitmask = 1;
        if ((n & (bitmask << i)) == 0) {
            System.out.println("our bit is 0");
        } else {
            System.out.println("bit is 1");
        }
    }

    public static int q040_setIthBit(int n, int i) {
        int bitmask = 1;
        return n | (bitmask << i);
    }

    public static int q040_ClearIthBit(int n, int i) {
        int bitmask = ~(1 << i);
        return n & bitmask;
    }

    public static int q040_ClearRangeOfBit(int n, int i, int j) {
        int a = (-1) << (j + 1);
        int b = (1 << i) - 1;
        int bitmask = a | b;

        return n & bitmask;
    }

    public static boolean checkNoPowerOfTwo(int n) {
        return (n & (n - 1)) == 0;
    }

    public static int countSetBits(int n) {
        int count = 0;
        while (n > 0) {
            if ((n & 1) == 1) {
                count++;
            }
            n = n >> 1;
        }
        return count;
    }

    public static int fastExpo(int a, int n) {
        int ans = 1;
        while (n > 0) {
            if ((n & 1) != 0) {
                ans = ans * a;
            }
            a = a * a;
            n = n >> 1;
        }
        return  ans;
    }

    public static void main(String[] args) {

        int n = 10;
        int i = 2, j = 4;
        q40_getIthBit(n, i);
        System.out.println(q040_setIthBit(n, i));
        System.out.println(q040_ClearIthBit(n, i));
        System.out.println(q040_ClearRangeOfBit(n, i, j));
        System.out.println(checkNoPowerOfTwo(n));
        System.out.println(countSetBits(n));
        System.out.println(fastExpo(3,5));
    }
}
