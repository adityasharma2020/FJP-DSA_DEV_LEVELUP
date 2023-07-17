
public class q033_getShortestPath {
    public static void q033_getShortestPath(String str){
        int x = 0; int y  = 0;
        double  disp = 0;
        for(int i=0;i<str.length();i++){
            if(str.charAt(i)== 'N'){
                y = y+1;
            }else if(str.charAt(i)== 'S' ){
                y = y-1;
            }else if(str.charAt(i)== 'E' ){
                x = x + 1;
            }else if(str.charAt(i)== 'W' ){
                x = x-1;
            }
        }

    
        disp = Math.sqrt(( Math.pow(y,2) + Math.pow(x, 2)));
        System.out.println(disp);

    }
    public static void main(String[] args) {
        String str = "WNEENESENNN";
        q033_getShortestPath(str);
    }
}
