package patterns;
public class q009_invertedAndRotatedHalfPattern {
public static  void q009_invertedAndRotatedHalfPattern(int n){
  for(int i=1;i<=n;i++){
    for(int j=1;j<=n-i;j++){
      System.out.print(" ");
    }

    for(int j=1;j<=i;j++){
      System.out.print("*");
    }
    System.out.println();
  }
}

  public static void main(String[] args) {
    q009_invertedAndRotatedHalfPattern(4);
  }
}
