
public class q034_printLargestString {

    public static void q034_substring(String str, int si, int ei) {
        String substr = "";
        for (int i = si; i < ei; i++) {
            substr += str.charAt(i);
        }
    }

    public static void main(String[] args) {
        String str = "helloWorld";
        q034_substring(str, 0, 5);

        String fruits[] = { "apple", "mango", "banana" };
        String largest = fruits[0];

        for (int i = 1; i < fruits.length; i++) {

            if (largest.compareTo(fruits[i]) == 0) {

            } else if (largest.compareTo(fruits[i]) < 0) {
                largest = fruits[i];
            }

        }
        System.out.println(largest);
    }
}
