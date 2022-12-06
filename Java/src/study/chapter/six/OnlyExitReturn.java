package study.chapter.six;
public class OnlyExitReturn {
    public static void main(String[] args) {
    divide(4, 2);
    divide(6, 2);
    divide(8, 0);
    }
    public static void divide(int A, int B) {
        if (B == 0) {
            System.out.println("0으로 나눌 수 없습니다.");
            return;
        }
        System.out.println("나눈 값 : " + (A/B));

    }
}

