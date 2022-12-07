package study.chapter.six;

public class Mondai_06_3_2 {
    //인자로 정수 n을 전달받아서 이진수를 계산하여 반환하는 메소드를 재귀의 형태로 정의하고 이를 호출하는 main 메소드를 정의하자.
    public static void main(String[] args) {
        toBinary(10);
    }

    public static int toBinary(int n) {
        if (n > 0) {
            int mem = n / 2;
            int bin = n % 2;
            n /= 2;

            toBinary(n);
            System.out.print(bin);
        }
        return 0;
    }

    public static int toTest(int n) {
        if (n > 0) {
            int value = n / 2;
            int number = n % 2;
            n /= 2;

            toTest(n);
            System.out.print(number);
        } return 0;
    }
}