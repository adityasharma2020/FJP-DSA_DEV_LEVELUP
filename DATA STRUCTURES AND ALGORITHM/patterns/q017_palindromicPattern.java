package patterns;

public class q017_palindromicPattern {

  public static void q017_palindromicPattern(int n){
    for(int i=0;i<n;i++){
      int counter =0;
      //spaces
      for(int j=1;j<n-i;j++){
        System.out.print(" ");
      }

      //numbers first part 
      for(int j=1;j<=i;j++){
       counter++;
        System.out.print(counter);
      }
      
      //numbers remaining
      for(int j=1;j<=i-1;j++){
        counter--;
        System.out.print(counter);
      }
      System.out.println();
    }
  }

  public static void main(String[] args) {
    q017_palindromicPattern(4);
  }
}
