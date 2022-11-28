package study.chapter.five;

public class CondOp {
    public void methodOne(){
        //삼항 조건 연산자 (조건) ? A(true) : B(false)
        int num1 = 50;
        int num2 = 100;
        int big;
        int diff;

        big = (num1 > num2) ? num1 : num2;
        System.out.println ("큰 수 : " + big);

        diff = (num1 > num2) ? (num1-num2) : (num2-num1);
        System.out.println ("절대값 : " + diff);
    }
}
