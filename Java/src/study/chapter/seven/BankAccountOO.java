package study.chapter.seven;

//객체 지향, 데이터 처리
class BankAccount{
    int balance = 0; //전역 변수
    public int deposit(int amount){
        balance += amount;
        System.out.println("입금 액 : " + amount);
        return balance;
    }
    public int withDraw(int amount){
        balance -= amount;
        System.out.println("출금 액 : " + amount);
        return balance;
    }
    public void checkMyBalance(){
        System.out.println("잔액 : " + balance);
    }
}

//객체 지향, 각 객체 생성
class BankAccountOO {
    public static void main(String[] args) {
        BankAccount yoon = new BankAccount();
        BankAccount yuri = new BankAccount();

        yoon.deposit(4000);
        yuri.deposit(9000);
        yoon.checkMyBalance();
        yuri.checkMyBalance();
        yoon.withDraw(4000);
        yuri.withDraw(5500);
        yoon.checkMyBalance();
        yuri.checkMyBalance();
    }
}
