import java.util.Scanner;

public class linear_check {

    public static void linear_check(int n, int[] x,int[] y) {
        int check1 = 1;
        for(int i=1;i<n;i++){
            if(x[i] != x[i-1]){
                check1=0;
                break;
            }
        }
        if(check1==1){
            System.out.println("YES");
            return;
        }




        
        int check2 = 1;
        if(check1==1){
            for(int i=1;i<n;i++){
                if(y[i] != y[i-1]){
                    check2 =0; 
                    break;
                }
            }
        }

        if(check2 ==1){
            System.out.println("YES");
            return
        }
    }

   
    public static void main(String args[]) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int[]  x = new int[n];
        int[]  y = new int[n];

        for(int i=0;i<n;i++){
            x[i] = scn.nextInt();
            y[i] = scn.nextInt();
        }
        linear_check(n, x,y);
    }

}
