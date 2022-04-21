import java.util.*;

import javax.swing.plaf.basic.BasicTreeUI.SelectionModelPropertyChangeHandler;

public class lecture01 {
    public static int mazePath(int sr, int sc, int er, int ec, String psf) {

        if (sr == er && sc == ec) {
            System.out.println(psf);
            return 1;
        }

        int count = 0;
        if (sc + 1 <= ec)
            count += mazePath(sr, sc + 1, er, ec, psf + "H");
        if (sr + 1 <= er)
            count += mazePath(sr + 1, sc, er, ec, psf + "V");
        if (sr + 1 <= er && sc + 1 <= ec)
            count += mazePath(sr + 1, sc + 1, ec, ec, psf + "D");

        return count;
    }

    public static int mazePathGeneralised(int sr, int sc, int er, int ec, int[][] dir, String[] dirS, String psf) {
        if (sr == er && sc == ec) {
            System.out.println(psf);
            return 1;
        }
        int count = 0;
        for (int d = 0; d < dir.length; d++) {
            int r = sr + dir[d][0];
            int c = sc + dir[d][1];

            if (r >= 0 && c >= 0 && r <= er && c <= ec) {
                count += mazePathGeneralised(r, c, er, ec, dir, dirS, psf + dirS[d]);
            }
        }

        return count;
    }

    public static int mazePathWithJump(int sr, int sc, int er, int ec, int[][] dir, String[] dirS, String psf) {
        if (sr == er && sc == ec) {
            System.out.println(psf);
            return 1;
        }

        int count = 0;
        for (int d = 0; d < dir.length; d++) {
            for (int r = 1; r <= Math.max(er, ec); r++) {
                int row = sr + r * dir[d][0];
                int c = sc + r * dir[d][1];
                if (sr >= 0 && sc >= 0 && sr <= er && sc <= ec) {
                    count += mazePathWithJump(row, c, er, ec, dir, dirS, psf + dirS[d] + r);
                }
            }
        }

        return count;

    }

    public static int floodFill(int sr,int sc,int er,int ec,int bl,Boolean[][] visited,int[][] dir,String[] dirS, String psf){
        if( sr==er && sc == ec){
            System.out.println(psf);
            return 1;
        }
        visited[sr][sc] = true;
        int count = 0;
        for(int d=0;d<dir.length;d++){
            for(int r=1;r<=Math.max(er,ec);r++){

                int row = sr + dir[d][0];
                int col = sc +dir[d][1];

               
                if(visited[row][col] == false){
                if(sr>=0 && sc >=0 && sr <=er && sc <=ec){
                    
                  
                    count += floodFill(row, col, er, ec, dir, dirS, psf+dirS[d]+r);

                    
                }
            }
            }
        }
        visited[sr][sc] = false;
        return count;

    }

    public static void main(String args[]) {

        int[][] dir = { { 0, 1 }, { 1, 0 }, { 1, 1 }, { 1, -1 }, { 0, -1 }, { -1, -1 }, { -1, 0 }, { -1, 1 } };
        String[] dirS = { "r", "d", "s", "w", "l", "n", "u", "e" };
        
        int ans = floodFill(0, 0, 2, 2, vis[0][0], dir, dirS, "");
        System.out.println(ans);
    }
}
