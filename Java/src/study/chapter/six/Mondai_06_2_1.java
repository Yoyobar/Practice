package study.chapter.six;

public class Mondai_06_2_1 {
    //반지름 정보를 원의넓이와 원의 둘레로 계산하는 공식
    //원의 넓이 : pir^2 원의 둘레 : 2pir
    public static void main(String[] args) {
        int n = 9;
        double area_r = area(n);
        double round_r= round(n);
        System.out.println("원의 넓이 : " + area_r);
        System.out.println("원의 둘레 : " + round_r);
    }
    public static double area(double n){
        double num = Math.round(3.14159265 * Math.pow(n,2));
        return num;
    }
    public static double round(double n){
        double num = Math.round(2 * 3.14159265 * n);
        return num;
    }
}
