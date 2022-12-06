package study.chapter.six;

public class Mondai_06_2_2 {
    //prime 넘버이면 true를 송출하는 메소드를 선언하고, true일경우 100까지의 모든 소수를 기록하는 메소드를 정의하자.

    public static void main(String[] args) {
        int i = 1;
        while (i++ < 100) {
            if (value(i) == true)
                System.out.println(i); //syntax 주의
        }
    }
    public static boolean value(int prime){
        int j = 2;
        while(j++ < 100) {
            if (prime == 1)
                return false;
            if (prime % j ==0);
                return false;
        }
        return true;
    }
}

