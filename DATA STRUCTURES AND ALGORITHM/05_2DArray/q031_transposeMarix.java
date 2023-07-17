
public class q031_transposeMarix {
    public static void q031_transposeMarix(int[][] arr){
        int  n = arr.length; int m = arr[0].length;
        int[][] transposedMatrix = new int[m][n];
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                transposedMatrix[j][i] = arr[i][j];
            }
        }
        printMatrix(transposedMatrix);
    }
    public static void printMatrix(int[][] arr){
        int  n = arr.length; int m = arr[0].length;
      for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
               System.out.print(arr[i][j]+ " ");
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        int[][] arr = {{10,20,30},{15,25,35},{27,29,37},{32,33,39}};
     
      q031_transposeMarix(arr);
     
    }
}
