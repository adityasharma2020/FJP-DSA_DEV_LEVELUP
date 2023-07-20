
public class q038_anagramStrings {
    public static boolean q038_anagramStrings(String str1, String str2){
        if(str1.length() != str2.length()){
            return false;
        }
        for(int i=0;i<str1.length();i++){
            boolean  found=false;
            for(int j=0;j<str2.length();j++){
               
                if(str1.charAt(i) == str2.charAt(j)){
                    found = true;
                    break;
                }
            }

            if(!found){
                return false;
            }

        }
        return true;
    }
    public static void main(String[] args) {
        String str1 = "asdasdasdasd";
        String str2 = "asdasdasdasde";
        boolean isAnagram = q038_anagramStrings(str1,str2);
        System.out.println(isAnagram);
    }
}
