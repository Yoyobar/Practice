package study.chapter.six;

public class Mondai_06_1 {
    //정수 둘을 사칙연산 하는 식
    public void methodOne(int A, int B){
        System.out.println("A+B = " + (A+B));
        System.out.println("AxB = " + A*B);
        System.out.println("A/B = " + (double) A/B);
        System.out.println("A-B = " + (A-B));
    }
    // 정수 둘의 차의 절대값을 구하는 식
    public void methodTwo(int A, int B){
        int C = A-B;
        if (C<0)
            C = -C;
        System.out.println("절대값 : " + C);
    }
}