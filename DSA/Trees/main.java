public class main {

  public static class treeNode {
    int val;
    treeNode left;
    treeNode right;

    treeNode() {
    }

    treeNode(int val) {
      this.val = val;
    }

    treeNode(int val, treeNode left, treeNode right) {
      this.val = val;
      this.left = left;
      this.right = right;
    }

  }

  public static void main(String[] args){
    Integer[] data = {50,20,12,null,null,null,75,62,null,70,null,null,87,null,null};
  }
}