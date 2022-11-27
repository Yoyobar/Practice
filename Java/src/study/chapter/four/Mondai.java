//4. 연산자(Operators)
package study.chapter.four;

public class Mondai {
    public void methodOne(){
        int num1 = 10;
        int num2 = 20;
        int num3 = 30;
        num1=num2=num3;
        System.out.println(num1);
        System.out.println(num2);
        System.out.println(num3);
    }
    public void methodTwo(){
        int result = ((25*5)+(36-4)-72)/5;
        System.out.println(result);
    }
    public void methodThree(){
        int result = 3+6;
        System.out.println(result);
        result += 9;
        System.out.println(result);
        result += 12;
        System.out.println(result);
    }
    public void methodFour(){
        int n1 = ((25 + 5) + (36 / 4) - 72) * 5;
        int n2 = ((25 * 5) + (36 - 4) + 71) / 4;
        int n3 = (128 / 4) * 2;
        boolean result = (n1 > n2) && (n2> n3);
        System.out.println(n1 + " > " + n2 + " > " + n3);
        System.out.println(result);
    }
    public void methodFive(){
        int num1 = 7;
        System.out.println("정수 값 : "+ num1);
        num1 = ~7; //1의 보수
        num1 += 1; //2의 보수
        System.out.println("2의 보수 값 : " + num1);
    }
    public void methodSix(){
        int num1 = 15678;
        String test1 = Integer.toBinaryString(num1);
        System.out.println(test1); //11110100111110


        System.out.println(num1 >> 2 & 1);
        /*
        2자리를 우측으로 민다. 남는 자리는 0으로 대체 = 00111101001111, 거기에 1을 and한다.
        00111101001111
        00000000000001 = 1, 3번째 자리 Get
        */
        System.out.println(num1 >> 4 & 1);
        /*
        4자리를 우측으로 민다. 남는 자리는 0으로 대체 = 00001111010011, 거기에 1을 and한다.
        00001111010011
        00000000000001 = 1, 5번째 자리 Get

        이진수에 1을 and할경우, 그 첫번째자리를 추론할 수 있다는 점 잊지말기
        */
    }
}
