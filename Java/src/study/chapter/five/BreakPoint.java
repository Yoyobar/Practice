package study.chapter.five;

public class BreakPoint {
    //72에 해당되는 값만 송출하는 함수
    public void methodOne() {
        run: for (int i = 1; i < 10; i++) {
            for (int j = 1; j < 10; j++) {
                if ((i * j) == 72) {
                    System.out.println(i + " x " + j + " = " + (i * j));
                    break run;
                }
            }
        }
    }
}