
import java.util.Scanner;

public class webKull_pattern {

    public static void webKull_pattern(int n){



        int nsp = n-1, nst = 1;
        
        for(int i = 1; i<=n; i++){
          System.out.print("@");
        }
        System.out.println();
        
//         pattern
        for(int row = 1; row<=n; row++){
//             spaces
            for(int j = 1; j<=nsp; j++){
                System.out.print(" ");
            }
//             stars
            for(int j = 1; j<=nst; j++){
                System.out.print("*");
            }
            
//             line change
            System.out.println();
            if(row<=n/2){
                nst++;
            }else{
                nst--;
            }
            
        }
//         last line
        for(int j = 1; j<=n-2; j++){
            System.out.print(" ");
        }
        for(int i = 1; i<=n; i++){
          System.out.print("@");
        }

    }


    
        


    public static void main(String args[]) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        webKull_pattern(n);
    }
}