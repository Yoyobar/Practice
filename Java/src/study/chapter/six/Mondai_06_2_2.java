package study.chapter.six;

public class Mondai_06_2_2 {
    //prime 넘버이면 true를 송출하는 메소드를 선언하고, true일경우 100까지의 모든 소수를 기록하는 메소드를 정의하자.
    public boolean value(int prime){
        int j = 2;
        if (prime == 0)
            return false;
        while (j < prime) {
            if (prime % j == 0)
                return false;
            j++; //j를 위에서 미리 더할경우, j<prime으로 인해 제대로 된 값이 나오지 않음.
        }
        return true;
    }

    public static void main(String[] args) {
        Mondai_06_2_2 test = new Mondai_06_2_2();
        int i = 1;
        while (i++ < 100) {
            if (test.value(i) == true)
                System.out.println(i); //syntax 주의
        }
    }

}