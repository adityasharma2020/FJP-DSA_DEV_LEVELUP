public class longestSubstingWithoutRepeating {
  
  
    public int lengthOfLongestSubstring(String s) {
        if(s.length() <=1) return s.length();
        int n = s.length(), si = 0,ei = 0,len =  0,count =0;
        int[] freq = new int[128];

        while(ei < n){
            if(freq[s.charAt(ei++)]++ >0) count++;

            while(count > 0){
                if(freq[s.charAt(si++)]-- > 1) count--;
            }

            len = Math.max(len,ei-si);
        }

    return len;
        
    }


}
