//4. 연산자(Operators)
package study.chapter.four;

public class SCE {
    public void methodOne(){
        int num1 = 0;
        int num2 = 0;
        boolean result;

        result = ((num1 += 10) < 0) && ((num2 += 10) > 0);
        System.out.println("result = " + result);
        System.out.println("num1 = " + num1);
        System.out.println("num2 = " + num2);

        result = ((num1 += 10) > 0) || ((num2 += 10) > 0);
        System.out.println("result = " + result);
        System.out.println("num1 = " + num1);
        System.out.println("num2 = " + num2);

        /* 이러한 형태로 코딩하게 될경우 SCE로 인해 왼쪽 command이후 우측 커맨드를 무시하게 된다.
        AND문의 경우 num1의 값이 0보다 작을경우 거기서 바로 False이후 계산이 종료되어 버리기 떄문이다.
        OR문의 경우 Num1의 값이 0보다 클경우 거기서 True를 선언하며, 이후 판정조건은 신경쓰지 않고 True값을 표하기 떄문이다.
        이것이 SCE이며, 이러한 경우를 피하기 위해서는 각각 조건을 나누어 코딩해야한다. 불필요하다 판단되는 연산을 스킵해버리기 때문이다.

        result = false
        num1 = 10
        num2 = 0
        result = true
        num1 = 20
        num2 = 0
         */
    }
    public void methodTwo(){
        int num1 = 0;
        int num2 = 0;
        boolean result;

        num1 += 10;
        num2 += 10;

        result = (num1 < 0) && (num2 > 0);
        System.out.println("result = " + result);
        System.out.println("num1 = " + num1);
        System.out.println("num2 = " + num2);

        result = (num1 > 0) || (num2 > 0);
        System.out.println("result = " + result);
        System.out.println("num1 = " + num1);
        System.out.println("num2 = " + num2);

        // 이상적인 SCE를 회피한 코딩 값이다.
    }
}


