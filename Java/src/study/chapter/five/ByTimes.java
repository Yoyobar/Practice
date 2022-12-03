package study.chapter.five;

public class ByTimes {
    public void methodOne(){
        int i = 0;
        int j;
        while(i++ < 9){
            System.out.println("--- --- --- ---");
            j = 0;
            while(j++ < 9){
                System.out.print(i + " x " + j + " = ");
                System.out.println(i*j);
            }
        }
    }
}
