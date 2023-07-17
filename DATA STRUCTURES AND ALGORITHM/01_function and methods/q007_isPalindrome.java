import java.util.Scanner;

public class q007_isPalindrome {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("input no : ");
    int n = sc.nextInt();
    System.out.println(isPalindrome(121));

  }

  public static boolean isPalindrome(int number) {
    int palindrome = number;
    int reverse = 0;
    int pow = 0;

    while (number > 0) {
      int rem = number % 10;
      reverse = reverse + rem * (int)(Math.pow(10, pow));
      number = number / 10;
      pow++;
    }

    System.out.println("reverse of "+ palindrome +" is : "+ reverse);

    if(palindrome == reverse){
      return true;
    }
    return false;
  }
}
