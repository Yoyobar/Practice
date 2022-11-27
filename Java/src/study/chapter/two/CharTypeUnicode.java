//2. 변수와 자료형
package study.chapter.two;

public class CharTypeUnicode {
    public void methodOne(){
        char ch1 = '헐';
        char ch2 = '확';
        char ch3 = 54736; // 문자 '헐'의 unicode 값
        char ch4 = 54869; // 문자 '확'의 unicode 값
        char ch5 = 0xD5D0;
        char ch6 = 0xD655;
        System.out.println(ch1 + " " + ch2);
        System.out.println(ch3 + " " + ch4);
        System.out.println(ch5 + " " + ch6);
    }
}
