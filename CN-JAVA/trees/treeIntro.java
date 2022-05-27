import java.util.*;

public class treeIntro {

  public static class TreeNode<T> {
    T data;
    ArrayList<TreeNode<T>> children;

    TreeNode(T data) {
      this.data = data;
      children = new ArrayList<>();
    }
  }
  public static Scanner scn = new Scanner(System.in);

  public static TreeNode<Integer> inputdata() {
    int n;
    System.out.println("Enter the Next Node data :");
    n = scn.nextInt();
    TreeNode<Integer> root = new TreeNode<Integer>(n);
    System.out.println("Enter the no of childrens for " + n);
    int childCount = scn.nextInt();

    for (int i = 0; i < childCount; i++) {
      TreeNode<Integer> childTree = inputdata();
      root.children.add(childTree);
    }

    return root;

  }

  public static TreeNode<Interger> inputDataLevelWise(){
    Scanner scn = new Scanner(System.in);
    System.out.println("Enter Root Data:");
   
    int root = scn.nextInt();
    // push   karo
    System.out.println("how many childrens node"+ root+ "have:");
    int noOfChild = scn.nextInt();
    for(){
     pendingnodes.push()= root.children.get(i);

    }
  }

  public static void printTree(TreeNode<Integer> root) {

    System.out.println(root.data);

    for (int i = 0; i < root.children.size(); i++) {

      printTree(root.children.get(i));
    }
    // String s = root.data + ":";
    // for(int i=0;i<root.children.size();i++){
    //   s= s +root.children.get(i).data+ ",";
    // }
    // System.out.println(s);

    // for(int i=0;i<root.children.size();i++){
    //   printTree(root.children.get(i));
    // }
  }

  public static void main(String[] args) {
    // TreeNode<Integer> root = new TreeNode<Integer>(4);
    // TreeNode<Integer> node1 = new TreeNode<>(2);
    // TreeNode<Integer> node2 = new TreeNode<>(3);
    // TreeNode<Integer> node3 = new TreeNode<>(5);
    // TreeNode<Integer> node4 = new TreeNode<>(6);

    // root.children.add(node1);
    // root.children.add(node2);
    // root.children.add(node3);
    // node2.children.add(node4);

    // System.out.println(root.data);
    TreeNode<Integer> ans = inputdata();
    printTree(ans);
  }
}