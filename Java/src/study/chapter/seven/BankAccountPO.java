package study.chapter.seven;

//객체 예시, 실제로 객체지향형은 아님
public class BankAccountPO {
    static int balance = 0; //전역 변수
    public static void main(String[] args) {
        deposit(10000); //입금
        checkMyBalance();
        withDraw(3000); //출금
        checkMyBalance();
    }
    public static int deposit(int amount){
        balance += amount;
        System.out.println("입금 액 : " + amount);
        return balance;
    }
    public static int withDraw(int amount){
        balance -= amount;
        System.out.println("출금 액 : " + amount);
        return balance;
    }
    public static void checkMyBalance(){
        System.out.println("잔액 : " + balance);
    }
}
