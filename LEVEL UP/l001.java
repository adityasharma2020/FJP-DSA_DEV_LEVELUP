import java.util.*;
import java.util.concurrent.CountDownLatch;

class l001 {

    // psf = path so far.
    public static ArrayList<String> getMazePaths(int sr, int sc, int er, int ec) {

        if (sr == er && sc == ec) {
            ArrayList<String> base = new ArrayList<>();
            base.add("");
            return base;

        }

        ArrayList<String> myans = new ArrayList<>();
        // verstical direction
        if (sr + 1 <= er) {
            ArrayList<String> vcall = getMazePaths(sr + 1, sc, er, ec);

            for (String ele : vcall) {
                myans.add("v" + ele);
            }

        }
        // horizontal direction
        if (sc + 1 <= ec) {

            ArrayList<String> hcall = getMazePaths(sr, sc + 1, er, ec);

            for (String ele : hcall) {
                myans.add("h" + ele);
            }
        }

        return myans;
    }

    public static void printMazePaths(int sr, int sc, int dr, int dc, String psf) {
        if (sr == dr && sc == dc) {
            System.out.println(psf);
            return;

        }
        // horizontal call
        if (sr + 1 <= dr) {
            printMazePaths(sr + 1, sc, dr, dc, psf + "h");
        }

        // vertical call
        if (sc + 1 <= dc) {
            printMazePaths(sr, sc + 1, dr, dc, psf + "v");
        }

    }

    public static int mazePath2(int sr, int sc, int er, int ec, int[][] dir, String[] dirS, String psf) {
        if (sr == er && sc == ec) {
            System.out.println(psf);
            return 1;

        }
        int count = 0;
        for (int d = 0; d < dir.length; d++) {
            // in this question as direction can be negative so we have to take care of the
            // boundary case where sr,sc shold not be less than 0
            int r = sr + dir[d][0];
            int c = sc + dir[d][1];

            if (r >= 0 && c >= 0 && r <= er && c <= ec) {

                count += mazePath2(r, c, er, ec, dir, dirS, psf + dirS[d]);
            }

        }

        return count;
    }

    public static int mazePathWithJump(int sr,int sc,int er,int ec,int[][] dir,String[] dirS,String psf){
        if(sr==er && sc==ec){
            System.out.println((psf));
            return 1;
        }


        
        int count =0;

        for(int d=0;d<dir.length;d++){
            for(int rad=1;rad<=dir.length;rad++){
                int r = sr +dir[d][0] * rad;
                int c = sc + dir[d][1] * rad;


                if(r>=0  && c>=0 && r<=er && c<=ec){
                    count+=mazePathWithJump(r, c, er, ec, dir, dirS, psf+dirS[d]+rad);
                }else{
                    break;
                }
                
            
            }
        }

        return count;
    }


    public static int floodFill(int sr,int sc,int er,int ec,boolean[][] vis,int[][] dir,String[] dirS,String psf){
        if(sr==er && sc==ec){
            System.out.println((psf));
            return 1;
        }


        vis[sr][sc] = true;
        int count =0;

        for(int d=0;d<dir.length;d++){
            for(int rad=1;rad<=dir.length;rad++){
                int r = sr +dir[d][0] * rad;
                int c = sc + dir[d][1] * rad;


                if(r>=0  && c>=0 && r<=er && c<=ec ){
                    if(!vis[r][c]){
                        count+=floodFill(r, c, er, ec,vis ,dir, dirS, psf+dirS[d]+rad);
                    }
                    
                }else{
                    break;
                }
                
            
            }
        }

        vis[sr][sc] = false;
        return count;
    }


    



    // public static int floodFill(int sr, int sc, int er, int ec, boolean[][] vis,
    // int[][] dir, String[] dirS,
    // String psf) {
    // if (sr == er && sc == ec) {
    // System.out.println(psf);
    // return 1;
    // }

    // vis[sr][sc] = true;
    // int count = 0;
    // for (int d = 0; d < dir.length; d++) {
    // int r = sr + dir[d][0];
    // int c = sc + dir[d][1];

    // if (r >= 0 && c >= 0 && r <= er && c <= ec && !vis[r][c]) {
    // count += floodFill(r, c, er, ec, vis, dir, dirS, psf + dirS[d]);
    // }

    // }
    // vis[sr][sc] = false;
    // return count;
    // }

    // public static int floodFillJump(int sr, int sc, int er, int ec, boolean[][]
    // vis, int[][] dir, String[] dirS,
    // String psf) {
    // if (sr == er && sc == ec) {
    // System.out.println(psf);
    // return 1;
    // }

    // vis[sr][sc] = true;
    // int count = 0;
    // for (int d = 0; d < dir.length; d++) {
    // for (int rad = 1; rad <= Math.max(er, ec); rad++) {
    // int r = sr + rad * dir[d][0];
    // int c = sc + rad * dir[d][1];

    // if (r >= 0 && c >= 0 && r <= er && c <= ec) {
    // if (!vis[r][c])
    // count += floodFillJump(r, c, er, ec, vis, dir, dirS, psf + dirS[d] + rad);
    // } else
    // break;
    // }
    // }

    // vis[sr][sc] = false;
    // return count;
    // }
//, "d", "w", "l", "n", "u", "e"

    public static void main(String[] args) {
        // System.out.println(mazePath(0, 0, 2, 2, ""));
        Scanner scn = new Scanner(System.in);

        int n = scn.nextInt();
        int m = scn.nextInt();
        int[][] dir = { { -1, 0 }, { 0, -1},{1,0},{0,1}  };
        boolean[][] vis = new boolean[n][m];
      
        String[] dirS = { "t", "l","d","r" };
        System.out.println(floodFill(0, 0, n-1, m-1,vis, dir, dirS, ""));
        // Scanner scn = new Scanner(System.in);
        // int n = scn.nextInt();
        // int m = scn.nextInt();

        // ArrayList<String> ans = getMazePaths(0,0,n-1,m-1);
        // System.out.println(ans);
        // printMazePaths(0,0,n-1,m-1,"");

    }
}