
public class q032_palindromeString {
    public static Boolean q032_palindromeString(String  str){
        for(int i=0;i<str.length()/2;i++){
            if(str.charAt(i) != str.charAt(str.length()-1-i)){
                return false;
            }
           
        }
         return true;
    }
    public static void main(String[] args) {
        String str = "aaaapaaaa";
        boolean isPalindrome = q032_palindromeString(str);
        System.out.println(isPalindrome);
    }
}
