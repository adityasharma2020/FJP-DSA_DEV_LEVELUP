import java.util.Scanner;

public class LinknedList {

    public static class Node<T> {
        T data;
        Node<T> next;

        Node(T data) {
            this.data = data;
            next = null;
        }
    }

    public static void main(String args[]) {
        Node<Integer> n1 = new Node<>(10);
        // System.out.println(n1);
        // System.out.println(n1.data);
        // System.out.println(n1.next);

        // Node<Integer> head = createLinkedList();
        Node<Integer> head = takeInput2();
        
        // printLinkedList(head);
        // Node<Integer> newhead = insertNode(head, 50, 0);
        // printLinkedList(newhead);


        delete(head,4);
        // increment(head);

        printLinkedList(head);

        // printithnode(2, head);
    }

    public static Node<Integer> createLinkedList() {
        Node<Integer> n1 = new Node<>(10);
        Node<Integer> n2 = new Node<>(20);
        Node<Integer> n3 = new Node<>(30);
        Node<Integer> n4 = new Node<>(40);

        n1.next = n2;
        n2.next = n3;
        n3.next = n4;
        n4.next = null;

        return n1;
    }

    public static void printLinkedList(Node<Integer> head) {

        // manual approach :-------->
        // System.out.println(head.data);
        // System.out.println(head.next.data);
        // System.out.println(head.next.next.data);
        // System.out.println(head.next.next.next.data);

        Node<Integer> temp;
        temp = head;
        while (temp != null) {

            System.out.print(temp.data+" ");
            temp = temp.next;
        }
        System.out.println("");

    }

    public static void printithnode(int i, Node<Integer> head) {
        Node<Integer> curr = head;
        int count = 0;

        Node<Integer> temp = head;
        int size = 0;

        while (temp != null) {
            size++;
            temp = temp.next;
        }
        System.out.println("size:" + size);

        while (i > 0 && i < size) {
            if (count == i) {

                for (int j = 0; j < i - 1; j++) {
                    curr = curr.next;
                    System.out.println(curr.data);

                }
                return;

            } else {

                count++;
            }
        }

    }

    public static void increment(Node<Integer> head) {
        Node<Integer> temp = head;
        while (temp != null) {

            temp.data++;
            temp = temp.next;
        }
    }

    public static Node<Integer> takeInput1() {
        Scanner scn = new Scanner(System.in);
        int data = scn.nextInt();

        Node<Integer> head = null;
        while (data != -1) {
            Node<Integer> currentNode = new Node<>(data);
            if (head == null) {
                head = currentNode;

            } else {
                Node<Integer> tail = head;
                while (tail.next != null) {
                    tail = tail.next;
                }
                // now tail will refer to last node, connect current node after last node.
                tail.next = currentNode;
            }
            data = scn.nextInt();
        }
        return head;
    }

    public static Node<Integer> takeInput2() {
        Scanner scn = new Scanner(System.in);
        int data = scn.nextInt();

        Node<Integer> head = null, tail = null;
        while (data != -1) {
            Node<Integer> currentNode = new Node<>(data);
            if (head == null) {
                head = currentNode;
                tail = currentNode;
            } else {
                tail.next = currentNode;
                tail = currentNode;
            }
            data  = scn.nextInt();

        }

        return head;
    }

    public static Node<Integer> insertNode(Node<Integer> head, int data, int i) {
        Node<Integer> nodeToBeInserted = new Node<Integer>(data);
        int count=0;
        if(i == 0){
            nodeToBeInserted.next = head;
            return nodeToBeInserted;

        }else{
            Node<Integer> prev = head;

        while(count  <i-1 && prev != null){
            count++;
            prev = prev.next;
        }

        if(prev != null){
            nodeToBeInserted.next = prev.next;
            prev.next = nodeToBeInserted;
        }
        }
        return head;
    }
    public static void delete(Node<Integer> head,int pos){
        Node<Integer> prev = head;
        int count=0;
        if(pos == 0){

        }else{
            while( count <(pos-1) && prev != null){
                prev = prev.next;
            }
            prev.next = prev.next.next;
        }
    }
}
