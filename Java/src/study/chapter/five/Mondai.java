package study.chapter.five;

public class Mondai {
    public void methodOne() {
        //5-1-1 : 기존코드는 두개의 if문을 사용하고 있다. 이를 한개로 단축해라.
        /*
        int num = 120;
        if(num > 0) {
            if((num % 2) == 0)
                System.out.println("양수 이면서 짝수");
        */

        int num = 120;
        if (num > 0 && num % 2 == 0)
            System.out.println("양수 이면서 짝수");
    }

    public void methodTwo() {
        //삼항 조건 연산자 (조건) ? A(true) : B(false)
        //5-2-1 : 삼향 연산자 없이 if문 구성
        int num1 = 50;
        int num2 = 100;
        int big;
        int diff;

        if (num1 > num2) {
            System.out.println("큰 수 : " + num1);
            System.out.println("절대값 : " + (num1 - num2));
        } else {
            System.out.println("큰 수 : " + num2);
            System.out.println("절대값 : " + (num2 - num1));
        }
    }

    public void methodThree() {
        // 5-3-1 SwitchBreak.java를 if ~else 문으로 변경해보자.
        int n = 3;
        if (n == 1)
            System.out.println("Simple Java");
        else if (n == 2)
            System.out.println("Funny Java");
        else if (n == 3)
            System.out.println("Fantastic Java");
        else
            System.out.println("The best programming language");
        System.out.println("Do you like Java?");
    }
    public void methodFour() {
        // 5-3-2 아래 코드를 switch문으로 변경해보자.

        /*
        int n = 24;
        if(n >= 0 && n < 10)
            System.out.println("0이상 10미만의 수");
        else if(n >= 10 && n < 20)
            System.out.println("10이상 20미만의 수");
        else if(n >= 20 && n < 30)
            System.out.println("20이상 30미만의 수");
        else
            System.out.println("음수 혹은 30 이상의 수");
        */
        int n = 30;
        switch(n){
            case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
                System.out.println("0이상 10미만의 수");
                break;
            case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 19:
                System.out.println("10이상 20미만의 수");
                break;
            case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29:
                System.out.println("20이상 30미만의 수");
                break;
            default:
                System.out.println("음수 혹은 30 이상의 수");
        }
    }
    public void methodFive() {
        // 5-4-1 1부터 99까지의 합을 구하는 프로그램, while문 이용하여 작성
        int num = 0;
        int result = 0;
        while (num<100){
            result += num;
            num++;
        }
        System.out.println(result);
    }
    public void methodSix() {
        // 5-4-2 1~100을 출력하고 100~1을 출력하는 프로그램을 작성해보자, 가급적 while, do~ while문으로 작성
        // while문은 조건문이 참 일때까지 작동
        int factorial = 1;

        while (factorial != 101){
            System.out.println(factorial);
            factorial++;
        }

        factorial = 100;
        do {
            System.out.println(factorial);
            factorial--;
        } while (factorial != 0);
    }
    public void methodSeven() {
        // 5-4-3 1000이하 자연수 중에서 2의 배수이자 7의 배수인 수를 출력하고, 그 수들의 합을 구해서 출력하는 프로그램을 while문으로 구축하기
        int multiple = 0;
        int result = 0;
        while (multiple != 1000) {
            if ((multiple % 2 == 0) || (multiple % 7 == 0))
                System.out.println("2 또는 7의 배수 : " + multiple);
            result += multiple;
            multiple++;
        }
        System.out.println("2 또는 7의 배수의 합 : " + result);
    }
    public void methodEight() {
        // 5-5-1 1부터 10까지 곱의 결과를 출력하는 프로그램을 for문을 이용하여 작성해보자.
        int result = 1;
        for (int i=1; i<11; i++){
            result *= i;
        }
        System.out.println(result);
    }
    public void methodNine
}

