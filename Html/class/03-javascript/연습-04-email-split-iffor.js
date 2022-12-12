const email = "barwait@naver.com"
let userMail = email.split("@")[0]
let company = email.split("@")[1]
let emailCreate = []

for (let i = 0; i<(userMail.length); i++){
    
    if (i<(userMail.length/2)){
        emailCreate.push(userMail[i])
    }

    if (i>(userMail.length/2)){
        emailCreate.push ("*")
    }
}

let result = emailCreate.join("") + "@" + company

console.log
(`
확인 받은 이메일은 ${email} 입니다.
암호화된 이메일은 ${result} 입니다.
`)

//연습 02-email-split의 for, if문 응용문제입니다.