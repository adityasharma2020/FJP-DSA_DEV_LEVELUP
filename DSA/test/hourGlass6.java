import java.util.Scanner;

public class hourGlass6 {

    public static void hourGlass(int n){
        int 
        

for(int i=0;i<n;i++){

        for(int cst =0;cst<i;cst++){
            System.out.print("\t");
            
        }
     
        for(int cst =0;cst<n;cst++){
            System.out.print("*");
            System.out.print("\t");
            
        }
        for(int cst =0;cst<n;cst++){
            
            
        }
    }
        

    }

    public static void main(String args[]) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        hourGlass(n);
    }
}