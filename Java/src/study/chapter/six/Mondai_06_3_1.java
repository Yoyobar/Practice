package study.chapter.six;

public class Mondai_06_3_1 {
    //인자로 정수 n을 전달받아서 2의 n승을 계산하여 반환하는 메소드를 재귀의 형태로 정의하고 이를 호출하는 main 메소드를 정의하자.
    public static void main(String[] args) {
        System.out.println(number(3));
    }
    public static int number(int n) {
        if (n==0)
            return 1;
        return 2 * number(n-1);

        /*
        설명 과정이 꽤나복잡하다. 잘 이해해라, 재귀적 표현은 문제를 풀때 크게 도움이된다.
        number(n-1)의 꼴은 number 값은 아직 정해지지않았고, 인자 n에 들어온값을 받게된다. 이에따라

        1. number(4) : 2 * 1의 꼴을 전달, 2를 반환
        2. number(3) : 2 * 2의 꼴을 전달, 4를 반환
        3. number(2) : 2 * 4의 꼴을 전달, 8을 반환
        4. number(1) : 2 * 8의 꼴을 전달, 16을 반환
        5. n == 0에 도달하여 재귀함수 종료
        6. 최종적으로 16을 반환하여 종료

        [내가 했갈렸던 부분]
        number(n-1)은 Number 재귀함수에 (n-1)의 인자값을 넣겠다는거지 Number * (n-1)이 아니라는걸 잘 기억해라.
        재귀식 함수의 반환값은 1로 고정이아니라, 매번 계속해서 반환되고 그값이 갱신된다는 점이다.
        이러한 재귀식 함수방식을 수학적으로 이해할 것, 매번 알고리즘 해석하면 오래걸린다.
         */
    }
}
