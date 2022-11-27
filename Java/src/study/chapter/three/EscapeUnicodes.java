//3. 상수와 형변환
package study.chapter.three;

public class EscapeUnicodes {
    public void methodOne(){
        System.out.println("오늘의 환율은 1$에 0.88" +'\u20AC'+ "입니다." );//유니코드 입력 이스케이프시퀀스
    }
}
