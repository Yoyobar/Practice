package study.chapter.five;

public class IEbasic {
    public void methodOne() {
        int n1 = 7;
        int n2 = 7;

        //if, else문

        if (n1 > n2) {
            System.out.println("n1 > n2");
        }
        else if (n1 == n2)
            System.out.println("");
        else{
            System.out.println("n1 < n2");
        }


        if (n1 == n2)
            System.out.println("n1 = n2");
        else
            System.out.println("n1 != n2");
    }
}
