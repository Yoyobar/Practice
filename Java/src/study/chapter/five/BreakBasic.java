package study.chapter.five;

public class BreakBasic {
    public void methodOne(){
        boolean search = false;
        int i = 1;
        while (i < 100){
            // 5와 7의 배수를 만족하는 숫자 찾기 프로그램
            if (i % 5 == 0 && i % 7 == 0) {
                System.out.println("5와 7의 배수를 만족하는 숫자는 " + i + "입니다.");
                break;
            } i++;
        }
    }
}
