import java.util.ArrayList;

public class tree{

    public static class treeNode<T>{
      T data;
      ArrayList<treeNode<T>> children;
      
      treeNode(T data){
        this.data = data;
        children = new ArrayList<>();
      }
    }

    public static void main(String[] args) {
      treeNode<Integer> root = new treeNode<Integer>(4);
      treeNode<Integer> node1 = new treeNode<>(2);
      treeNode<Integer> node2 = new treeNode<>(3);
      treeNode<Integer> node3 = new treeNode<>(5);
      treeNode<Integer> node4 = new treeNode<>(6);

      root.children.add(node1);
      root.children.add(node2);
      root.children.add(node3);
      node2.children.add(node4);
      
      System.out.println(root.data);
    }
}