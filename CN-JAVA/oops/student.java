

public class student {

  public class studentUse{
  public static void main(String[] args){
    student s1 = new student();
    s1.setRollnumber(10);
  }
  
}
  public String name;
  int rollNumber;

  public int getRolNumber() {
    return rollNumber;
  }




  public void setRollnumber(int rollNumber) {
    if (rollNumber <= 0) {
      return;
    }
    System.out.println("this" + this);
    this.rollNumber = rollNumber;
  }
}


