package study.chapter.four;

public class PrefixPostfixOp {
    public void methodOne(){
        int num1 = 7;
        System.out.println("-- Prefix --");
        System.out.print(num1+ " ");
        System.out.print(++num1 + " ");
        System.out.print(++num1 + " ");
        System.out.println(num1);

        int num2 = 7;
        System.out.println("-- Postfix --");
        System.out.print(num2+ " ");
        System.out.print(num2++ + " ");
        System.out.print(num2++ + " ");
        System.out.print(num2);
    }
}
