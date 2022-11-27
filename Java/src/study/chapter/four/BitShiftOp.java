package study.chapter.four;

public class BitShiftOp {
    public void MethodOne(){
        byte num;
        num = 2; // 00000010
        System.out.println((byte) (num << 1)); // 00000100
        System.out.println((byte) (num << 2)); // 00001000
        System.out.println((byte) (num << 3)); // 00010000

        num = 8; // 00001000 , 양수는 0으로 채운다.
        System.out.println((byte) (num >> 1)); // 00000100
        System.out.println((byte) (num >> 2)); // 00000010
        System.out.println((byte) (num >> 3)); // 00000001

        num = -8; // 11111000 , 음수는 1으로 채운다.
        System.out.println((byte) (num >> 1)); // 11111100
        System.out.println((byte) (num >> 2)); // 11111110
        System.out.println((byte) (num >> 3)); // 11111111
    }
}
