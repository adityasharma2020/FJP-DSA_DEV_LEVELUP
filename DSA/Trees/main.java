import java.util.Stack;

public class main {

  public static class pair {
    treeNode node;
    int state;

    pair() {
    }

    pair(treeNode node, int state) {
      this.node = node;
      this.state = state;
    }
  }

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

  public static void main(String[] args) {
    Integer[] arr = { 50, 20, 12, null, null, null, 75, 62, null, 70, null, null, 87, null, null };

    treeNode root = new treeNode(arr[0]);
    Stack<pair> st = new Stack<>();

    pair rootPair = new pair(root, 1);
    st.push(rootPair);
    int idx = 1;
    while (st.size() != 0) {
      pair peekPair = st.peek();

      if (peekPair.state == 1) {
        peekPair.state++;
        if (arr[idx] != null) {
          treeNode leftChild = new treeNode(arr[idx]);
          peekPair.node.left = leftChild;

          st.push(new pair(leftChild, 1));
          idx++;
        }
      }
      if (peekPair.state == 2) {
        peekPair.state++;

        if(arr[idx] !=null){
          treeNode rightChild = new treeNode(arr[idx]);
          peekPair.node.right = rightChild;

          st.push(new pair(rightChild,1));
        }
        idx++;

      } else {
        st.pop();

      }
      
    }

  }
}