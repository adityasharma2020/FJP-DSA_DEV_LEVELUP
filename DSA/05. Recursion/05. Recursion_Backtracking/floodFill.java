import java.util.Scanner;
public class floodFill {
    public static void main(String[] args) {
       
        Scanner scn = new Scanner(System.in);

        int n = scn.nextInt();
        int m = scn.nextInt();
        int[][] dir = { { -1, 0 }, { 0, -1},{1,0},{0,1}  };
        int[][] obstacleGrid = new int[n][m];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                obstacleGrid[i][j] = scn.nextInt();
            }
        }
        
      
        String[] dirS = { "t", "l","d","r" };
        System.out.println(uniquePathsWithObstacles(0, 0, n-1, m-1,obstacleGrid, dir, dirS, ""));
    }
    
    // asf -> answer so far
    public static int uniquePathsWithObstacles(int sr, int sc, int er, int ec, int[][] obstacleGrid, int[][] dir) {
        if (sr == er && sc == ec) {
            return 1;
        }

        obstacleGrid[sr][sc] = 1; // dosen't need to mark and unmark for this question
        int count = 0;
        for (int d = 0; d < dir.length; d++) {
            int r = sr + dir[d][0];
            int c = sc + dir[d][1];

            if (r >= 0 && c >= 0 && r <= er && c <= ec && obstacleGrid[r][c] == 0) {
                count += uniquePathsWithObstacles(r, c, er, ec, obstacleGrid, dir);
            }

        }
        obstacleGrid[sr][sc] = 0;
        return count;
    }
}
