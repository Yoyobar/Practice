//4. 연산자(Operators)
package study.chapter.four;

public class LogicalOp {
    public void methodOne(){
        int num1 = 11;
        int num2 = 22;
        boolean result;

        //변수 num1에 저장된 값이 1과 100사이 수냐?
        result =  (1<num1) && (num1<100);
        System.out.println(result);

        //변수 num2에 저장된 값이 2또는 3의 배수인가?
        result = (num2 % 2==0) || (num2 % 3==0);
        System.out.println(result);

        //변수 num1이 0인가?
        result = (num1 == 0);
        System.out.println(result);
    }
}
