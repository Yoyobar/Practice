//3. 상수와 형변환
package study.chapter.three;

public class IntegerLiteral {
    public void methodOne(){
        int num1 = 123;
        int num2 = 0123;
        int num3 = 0x123;

        System.out.println(num1);
        System.out.println(num2);
        System.out.println(num3);

        System.out.println(11+22+33);
        System.out.println(011+022+033);
        System.out.println(0x11+0x22+0x33);
        //진수별 표현, int 형으로 변경됨.

        System.out.println(3147463647L); // int 형 리터럴로 표현시 값 에러발생. 원하는 형태로 변경가능
        System.out.println(0B1100_1101); // 이진수로 표현, 0B를 붙이면 됨. 언더바 위치는 자율
        System.out.println(2.7e-3); // 2.7 * 10^-3 의 뜻, 즉 출력되는 값은 0.0027이다.

        int num4 = 50;
        long num5 = 3147483647L;
        System.out.println(num4+num5); // int자동 변환을 막기위해 Long 선언 후 덧셈
    }
}
