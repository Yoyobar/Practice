package study.chapter.five;

public class ForInFor {
    public void methodOne(){
        for(int i=0; i < 3; i++){
            System.out.println("--------------------------");
            for (int j=0; j <3; j++) {
                System.out.print("[" + i + ", " + j + "] ");
            }
            System.out.println('\n');
        }
    }
}
