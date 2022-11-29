package study.chapter.five;

public class ContinueBasic {
    public void methodOne() {
        // 5, 7의 배수를 출력하고 그수를 세는(count) 프로그램
        int count = 0;
        int num = 0;
        while ((num++) < 100){
            if (num % 5 != 0 || num % 7 != 0) // 5의 배수도 아니고 7의 배수도 아니라는건, 즉 5와 7의배수를 제외한 값은 전부 밴한다는 뜻이다.
                continue;
            count ++;
            System.out.println(num);
        }
        System.out.println(count);
    }
    public void methodTwo() {
        // 200이하 자연수 중에서 2와 7의 배수인 수를 출력하고, 그 수의 총량을 보여주고 합을 구해주는 프로그램
        int count = 0;
        int num = 0;
        int sum = 0;
        while ((num++) <200){
            if (num % 2 != 0 || num % 7 != 0) //2 또는 7의 배수가 아니라면!! (즉 2와 7의 배수가 아니라면)
                continue;
            count++;
            System.out.println(num);
            sum += num;
        }
        System.out.println("2와 7의 공배수의 합 : " + sum);
        System.out.println("2와 7의 공배수의 개수 : " + count);
    }

}