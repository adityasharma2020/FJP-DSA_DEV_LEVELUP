package patterns;
public class q008_hollowRectangle {
  public static void hollowRectangle(int totRows, int totCols){
    //outer loop 
    for(int i =0;i<totRows;i++){
      //inner loop
      for(int j=0;j<totCols;j++){
        //boundary stars
        if(i == 0 || i==totRows-1 || j==0 || j== totCols-1){
          System.out.print("*");
        }
        else{
          System.out.print(" ");
        }
      }
      System.out.println();
    }
  }

  public static void main(String[] args) {
   hollowRectangle(4,5);
  }
}
