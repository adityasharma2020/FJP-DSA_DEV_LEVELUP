import java.util.Scanner;
public class madAngles{


    public static void pattern_madAngles(int n){
        int nst = 2*n-1;
        

for(int i=0;i<n;i++){
        for(int cst=0;cst<n;cst++){
            System.out.print("*");
        }
        for(int csp=0;csp<i+1;csp++){
            System.out.print(" ");
        }
        for(int cst=0;cst<nst;cst++){
            System.out.print("*");
        }
        for(int csp=0;csp<2;csp++){
            System.out.print(" ");
        }
        for(int cst=0;cst<2*i+1;cst++){
            System.out.print("*");
        }
        for(int csp=0;csp<2;csp++){
            System.out.print(" ");
        }
        for(int cst=0;cst<nst;cst++){
            System.out.print("*");
        }

        //spaces
        for(int csp=0;csp<i+1;csp++){
            System.out.print(" ");
        }

        for(int cst=0;cst<n;cst++){
            System.out.print("*");
        }




        nst = nst-2;
        System.out.println();
    }
        

    }

    public static void main(String args[]){
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        pattern_madAngles(n);
    }
}