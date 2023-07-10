import java.util.Scanner;

public class q005_averageOfThreeNo {
  
  public static int average(int a,int b,int c){
    int average  = (a+b+c)/3;
    return average;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("input first number: ");
    int x= sc.nextInt();
    System.out.println("input second number: ");
    int y = sc.nextInt();
    System.out.println("input third number: ");
    int z = sc.nextInt();
    System.out.println(average(x,y,z));
    
  }
}
