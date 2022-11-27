//3. 상수와 형변환
package study.chapter.three;

public class EscapeSequences {
    public void methodOne(){
        System.out.println("AB" + '\b' + 'C');  //백 스페이스 , 한칸 지움
        System.out.println("AB" + '\t' + 'C');  //탭
        System.out.println("AB" + '\n' + 'C');  //개행 문자 , alt + enter
        System.out.println("AB" + '\r' + 'C');  //캐리지 리턴 , AB입력 후 맨앞으로 돌아가 다시입력
        System.out.println("AB" + '\\' + 'C');  //백 슬래시, \로 표현됨
    }
}
