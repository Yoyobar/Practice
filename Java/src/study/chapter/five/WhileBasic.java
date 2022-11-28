package study.chapter.five;

public class WhileBasic {
    public void methodOne() {
        int num = 1;
        while (num < 5) {  //num = 5를 넘길경우 반복헤제
            System.out.println("Hello world" + num);
            num++;
        }
    }
}