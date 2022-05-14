import java.util.ArrayList;

public class removeConsecutive {
    
    public static ArrayList<Integer> removeConsecutive(int[] arr){
        ArrayList<Integer> ans = new ArrayList<>();
        ans.add(arr[0]);

        for(int i=1;i<arr.length;i++){
            if(arr[i] != arr[i-1]){
                ans.add(arr[i]);
            }
        }
        return ans;
    }


    public static void main(String[] args){
        int[] arr = {10,20,20,20,30,30,40,50};
        ArrayList<Integer> ans = removeConsecutive(arr);

        for(int i=0;i<ans.size();i++){
            System.out.println(ans.get(i));
        }
    }
}
