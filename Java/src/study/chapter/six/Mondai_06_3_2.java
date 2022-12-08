package study.chapter.six;

public class Mondai_06_3_2 {
    //인자로 정수 n을 전달받아서 이진수를 계산하여 반환하는 메소드를 재귀의 형태로 정의하고 이를 호출하는 main 메소드를 정의하자.
    public static void main(String[] args) {
        dataR(10);
    }
    public static int dataR(int n){
        if (n > 0) {
            int data = n % 2;  //0
            n /= 2;

            dataR(n);
            System.out.print(data);
        }return 0;
    }
}
