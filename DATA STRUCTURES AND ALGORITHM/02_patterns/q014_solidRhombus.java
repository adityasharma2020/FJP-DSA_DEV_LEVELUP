package patterns;

public class q014_solidRhombus {

  public static void q014_solidRhombus(int n){
    for(int i=1;i<=n;i++){
      // spaces
      for(int j=1;j<=n-i;j++){
        System.out.print(" ");
      }
      //stars
      for(int j=1;j<=n;j++){
        System.out.print("*");
      }

      System.out.println();
    }
  }
  public static void main(String[] args) {
    q014_solidRhombus(5);
  }
}
