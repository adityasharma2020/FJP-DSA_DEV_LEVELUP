public  class q037_lowerCaseVowel{
    public static void  q037_lowerCaseVowel(String str){
        int vowel = 0;
        for(int i=0;i<str.length();i++){
            if(str.charAt(i) == 'a' || str.charAt(i)=='e' || str.charAt(i)=='i'|| str.charAt(i)=='o'|| str.charAt(i)=='u' ){
                vowel++;
            }
        }
        System.out.println(vowel);
    }
    public static void main(String[] args) {
        String str = "aeiodffdu";
        q037_lowerCaseVowel(str);
    }
}