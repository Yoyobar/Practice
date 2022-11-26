package study.chapter.one;
public class VariableDec {
    public void methodOne(){
        double num1, num2;
        num1= 1.0000001;
        num2= 2.0000001;  //실수에는 오차가 존재할 수 밖에 없다.
        double result = num1 + num2;
        System.out.println(result);
    }
}
