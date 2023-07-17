package patterns;
public class q010_invertedNumberPattern {
public static  void q009_invertedAndRotatedHalfPattern(int n){
  for(int i=0;i<n;i++){
   for(int j=1;j<=n-i;j++){
    System.out.print(j);
   }
   System.out.println();
  }
}

  public static void main(String[] args) {
    q009_invertedAndRotatedHalfPattern(4);
  }
}
