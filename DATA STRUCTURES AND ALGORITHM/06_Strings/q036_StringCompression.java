
public class q036_StringCompression {
    public static void q036_StringCompression(String str) {
        int n = str.length();
        StringBuilder sb = new StringBuilder("");

        for (int i = 0; i < n; i++) {
            int count = 1;
            while (i < str.length() - 1 && str.charAt(i) == str.charAt(i + 1)) {
                count++;
                i++;
            }

            sb.append(str.charAt(i));

            if (count > 1) {
                sb.append(count);
            }
        }

        System.out.println(sb.toString());
    }

    public static void main(String[] args) {
        String str = "aaabdbbdbdddcdde";
        q036_StringCompression(str);
    }
}
