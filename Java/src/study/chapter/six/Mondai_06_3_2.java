package study.chapter.six;

public class Mondai_06_3_2 {
    //인자로 정수 n을 전달받아서 이진수를 계산하여 반환하는 메소드를 재귀의 형태로 정의하고 이를 호출하는 main 메소드를 정의하자.
    public static void main(String[] args) {
        toBinary(10);
    }

    public static int toBinary(int data){
        //나머지를 저장해줄 값과 나머지를 선언할 값이 필요, 그전에 조건부터
        if (data > 0){
            int memory = data / 2;  //남은 몫을 보관할 메모리다. data / 2의 값을 선언한다.
            int result = data % 2;  //남은 나머지값이다. data의 나머지를 선언한다.
            data /= 2; //data는 If문에서 계속해서 반감된다. 반감후 다시 재귀선언

            toBinary(data); // 재귀함수를 선언한다.
            System.out.print(result);

        }return 0;
    }
}

//이식은 재귀함수로 반복해서 내부에 남아있지만, 실제로 재귀함수를 Return하진않으므로 값이없다. 그러다 결국에 if조건에서 벗어나서 나가게되버림