package study.chapter.six;

public class ReculFactorial {
    public static void main(String[] args) {
        System.out.println(factorial(3));
        System.out.println(factorial(5));
    }

    public static int factorial(int A){
        if (A == 1)
            return A;
        else
            return A * factorial(A-1);
    } //5가 Int에 해당하여 5*(5-1)를 독립 실행후, 다시 return되어 4*(4-1)을 실행, 약간 반복문과 비슷함
}