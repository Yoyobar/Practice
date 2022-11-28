package study.chapter.five;

public class DoWhileBasic {
    public void methodOne(){
        int num = 0;
        do {
            System.out.println("Hello world!" + num); // do~ while문은 후 조건식이다.
            num++;
        } while (num < 5);
    }
}

//따라서 조건의 반복이 필요한데, 그전에 한번은 꼭 실행해야하는 경우 do ~ while문을 사용한다.