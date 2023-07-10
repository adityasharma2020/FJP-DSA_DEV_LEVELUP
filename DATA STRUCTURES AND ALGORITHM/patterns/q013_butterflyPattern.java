package patterns;

public class q013_butterflyPattern {

  public static void q013_butterflyPattern(int n){
    //upper half
    for(int i=1;i<=n;i++){
      //stars
      for(int j=1;j<=i;j++){
        System.out.print("*");
      }
      //space 
       for(int j=1;j<=2*(n-i);j++){
        System.out.print(" ");
      }
      //stars
       for(int j=1;j<=i;j++){
        System.out.print("*");
      }
      System.out.println();
    }

    //lower half 
     for(int i=n;i>=1;i--){
      //stars
      for(int j=1;j<=i;j++){
        System.out.print("*");
      }
      //space 
       for(int j=1;j<=2*(n-i);j++){
        System.out.print(" ");
      }
      //stars
       for(int j=1;j<=i;j++){
        System.out.print("*");
      }
      System.out.println();
    }
  }
  public static void main(String[] args) {
    q013_butterflyPattern(4);
  }
}
