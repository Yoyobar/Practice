const checkValidation = function() {
    let email = document.getElementById("email").value;
    let pw1 = document.getElementById("pw1").value;
    let pw2 = document.getElementById("pw2").value;
//문자열 인식
    if (email && pw1 && pw2){
        // 모든 Input이 비어있지 않을때
        document.getElementById("submit").disabled = false;
    } else {
        // 비어있을때
        document.getElementById("submit").disabled = true;
    }
}