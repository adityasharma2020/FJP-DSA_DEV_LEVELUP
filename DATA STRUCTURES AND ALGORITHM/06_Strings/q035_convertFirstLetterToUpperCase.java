
public class q035_convertFirstLetterToUpperCase {
    public static String q035_convertFirstLetterToUpperCase(String str) {
        StringBuilder sb = new StringBuilder("");
        sb.append(Character.toUpperCase(str.charAt(0)));
        for (int i = 1; i < str.length(); i++) {
            if (str.charAt(i) == ' ') {
                sb.append(' ');
                i++;
                sb.append(Character.toUpperCase(str.charAt(i)));
            } else {
                sb.append(str.charAt(i));

            }
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        String str = "hi i am aditya sharma";
        String str2 = q035_convertFirstLetterToUpperCase(str);
        System.out.println(str2);

    }
}
