'use strict';
let horizontalBar = document.getElementById("horizontal_underline");
let horizontalMenus = document.querySelectorAll("nav ul li a");
let horizontalMenus_last = document.querySelectorAll("nav ul li:last-child a");

horizontalMenus.forEach( (menu) => menu.addEventListener("mouseover",(e)=> horizontalIndicator(e)));
horizontalMenus_last.forEach( (menu) => menu.addEventListener("mouseover",(e)=> horizontalIndicator_last(e)));

horizontalMenus.forEach( (menu) => menu.addEventListener("mouseout",(e)=> horizontalDecade(e)));

function horizontalDecade(e) {
    horizontalBar.style.left = e.currentTarget.offsetLeft + 70 + "px";
    horizontalBar.style.width = 0;
    horizontalBar.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight - 20 + "px";
};

function horizontalIndicator(e) {
    horizontalBar.style.left = e.currentTarget.offsetLeft + 35 + "px";
    horizontalBar.style.width = e.currentTarget.offsetWidth - 65+ "px";
    horizontalBar.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight  - 20 + "px";
};

function horizontalIndicator_last(e) {
    horizontalBar.style.left = e.currentTarget.offsetLeft + 35 + "px";
    horizontalBar.style.width = e.currentTarget.offsetWidth - 30+ "px";
    horizontalBar.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight  - 20 + "px";
};

let horizontalBar1 = document.getElementById("horizontal_underline1");
let horizontalMenus1 = document.querySelectorAll(".main a");

horizontalMenus1.forEach( (menu) => menu.addEventListener("mouseover",(e)=> horizontalIndicator1(e)));
horizontalMenus1.forEach( (menu) => menu.addEventListener("mouseout",(e)=> horizontalDecade1(e)));

function horizontalIndicator1(e) {
    horizontalBar1.style.left = e.currentTarget.offsetLeft + "px";
    horizontalBar1.style.width = e.currentTarget.offsetWidth + "px";
    horizontalBar1.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 10 + "px";
};

function horizontalDecade1(e) {
    horizontalBar1.style.left = e.currentTarget.offsetLeft + 30 + "px";
    horizontalBar1.style.width = 0;
    horizontalBar1.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 10 + "px";
};

// 시계

let timeId = null;

        function printTime(){
            const date = new Date();
            const hh = date.getHours();
            const mm = date.getMinutes();
            const ss = date.getSeconds();
            
            document.getElementById("result").innerHTML = hh + " : " + mm + " : " + ss;
        }

        function startClock(){
            timeId = setInterval(printTime, 1000);
        }

        function stopClock(){
            clearInterval(timeId);
        }

startClock();

// 시계 끝

// 눈

const wrapper = document.getElementById('wrap');
let count = 0;

const addSnow = () => {
    const snow = document.createElement('span');
    snow.classList.add('snow');
    snow.style.left = `${Math.random() * (window.innerWidth - 5) + 1}px`;
    snow.style.animationDuration = `${Math.random() * (20 - 8) + 8}s`;
    snow.style.animationDelay = `${Math.random() * (10 - 1) + 1}s`;
    snow.style.opacity = `${Math.random()}`;
    wrapper.append(snow);
    if (count < 300) {
        window.requestAnimationFrame(addSnow);
        count++;
    }
};

addSnow();

// 눈 끝

// const wrapper = document.getElementById('wrap');
// let count = 0;

// const addStar = () => {
//     const star = document.createElement('span');
//     star.classList.add('star');
//     star.style.left = `${Math.random() * (window.innerWidth - 5) + 1}px`;
//     star.style.animationDuration = `${Math.random() * (20 - 8) + 8}s`;
//     star.style.animationDelay = `${Math.random() * (10 - 1) + 1}s`;
//     star.style.opacity = `${Math.random()}`;
//     wrapper.append(star);
//     if (count < 300) {
//         window.requestAnimationFrame(addStar);
//         count++;
//     }
// };


// 유효성 검사

function RRN(){
    while (true) {
        let str = 0;
        str = prompt("주민등록번호를 입력하세요");
        let first6 = 0;
        let last6 = 0;

        if (str.length == 13) {
            first6 = parseInt(str.substring(0, 6));
            last6 = parseInt(str.substring(6, 13));
            confirm(`주민등록번호 : ${first6} - ${last6}`);
        }else if (str.length !== 13) {
            confirm("주민등록번호 13자리를 공백없이 바르게 입력해 주십시오.");
            continue;
        }
    
        let first_step1 = 0;
        let first_step2 = 0;
        let second_step = 0;
        let third_step = 0;

        //        - 각자리에 2 3 4 5 6 7 8 9 2 3 4 5 를 곱하고 모두 더함 - first step
        //          (단, 주민등록번호의 마지막 자리는 제외)
        for (let i = 0; i < 8; i++) {
            first_step1 += (parseInt(str.substring(i, i + 1))) * (i + 2);
        }
        for (let i = 8; i < 12; i++) {
            first_step2 += (parseInt(str.substring(i, i + 1))) * (i - 6);
        }
        //        - 11로 나눈 나머지 값을 구함  - second step
        second_step = (first_step1 + first_step2) % 11;

        console.log(second_step);

        //        - 11에서 결과값을 뺌   - third step
        //                (단, 결과가 10이상이면 10으로 나눈 나머지값을 다시 구함)
        //
        //        11 - 3 = 8
        //        만약 11 - 1 = 10 -> 10 % 10 -> 0
        //        만약 11 - 0 = 11 -> 11 % 10 -> 1
        third_step = 11 - second_step;

        if (third_step >= 10) {
            third_step = third_step % 10;
        }


//        - 마지막 결과가 주민등록번호 마지막 자리와 일치하면 유효한 주민등록번호임  - last step
        if (third_step == parseInt(str.substring(12, 13))) {
            confirm("유효한 주민등록번호 입니다.");
            break;
        } else if (third_step != parseInt(str.substring(12, 13))) {
            confirm("유효하지 않은 주민등록번호 입니다.");
            break;
        }
    }
}

// 유효성 검사 끝

// 회원가입 
function sendit(){
    const userid = document.getElementById('userid');
    const userpw = document.getElementById('userpw');
    const userpw_re = document.getElementById('userpw_re');
    const name = document.getElementById('name');
    const hp = document.getElementById('hp');
    const email = document.getElementById('email');
    const hobby = document.getElementsByName('hobby');
    const isssn = document.getElementById('isssn')


    // 정규식
    const pattern = /\s/g;
    const expNameText = /[가-힣]+$/;
    const expHpText = /^\d{3}-\d{3,4}-\d{4}$/;
    const expEmailText = /^[A-Za-z0-9\-\.]+@[A-Za-z0-9\-\.]+\.[A-Za-z0-9]+$/;


    /*
        만약에 userid를 입력하지 않았다면
        alert('아이디를 입력하세요');
        return false;
    */
    if(userid.value == ''){
        alert('아이디를 입력하세요');
        userid.focus();
        return false;
    }

    if(userid.value.length < 4 || userid.value.length > 19){
        alert('아이디는 4자이상 20자 이하로 입력하세요');
        userid.focus();
        return false;
    }

    if(pattern.test(userid.value) == true){
        alert('아이디에 공백이 존재합니다');
        userid.focus();
        return false;
    }

    if(userpw.value == ''){
        alert('비밀번호를 입력하세요');
        userpw.focus();
        return false;
    }

    if(userpw.value.length < 4 || userid.value.length > 19){
        alert('비밀번호는 4자이상 20자 이하로 입력하세요');
        userpw.focus();
        return false;
    }

    if(pattern.test(userpw.value) == true){
        alert('비밀번호에 공백이 존재합니다');
        userpw.focus();
        return false;
    }

    if(userpw.value != userpw_re.value){
        alert('비밀번호와 비밀번호 확인의 값이 다릅니다');
        userpw.focus();
        return false;
    }

    if(!expNameText.test(name.value)){
        alert('이름 형식을 확인하세요\n한글만 입력 가능합니다');
        name.focus();
        return false;
    }

    if(!expHpText.test(hp.value)){
        alert('휴대폰번호 형식을 확인하세요\n하이픈(-)을 포함해야 합니다');
        hp.focus();
        return false;
    }

    if(!expEmailText.test(email.value)){
        alert('이메일 형식을 확인하세요');
        email.focus();
        return false;
    }

    let count = 0;
    for(let i in hobby){
        if(hobby[i].checked){
            count++;
        }
    }

    if(count == 0){
        alert('취미는 적어도 한개 이상 선택하세요');
        return false;
    }

    if(isssn.value == 'n'){
        alert('주민등록번호 검증버튼을 눌러주세요');
        return false;
    }

    return true;
}

function moveFocus(){
    const ssn1 = document.getElementById('ssn1');
    if(ssn1.value.length >= 6){
        document.getElementById('ssn2').focus();
    }
}

function ssnCheck(){
    const ssn1 = document.getElementById('ssn1');
    const ssn2 = document.getElementById('ssn2');
    const isssn = document.getElementById('isssn');

    if(ssn1.value == '' || ssn2.value == ''){
        alert('주민등록번호를 입력하세요');
        return false;
    }

    const ssn = ssn1.value + ssn2.value;    // 0010113068518
    const s1 = Number(ssn.substr(0, 1)) * 2;
    const s2 = Number(ssn.substr(1, 1)) * 3;
    const s3 = Number(ssn.substr(2, 1)) * 4;
    const s4 = Number(ssn.substr(3, 1)) * 5;
    const s5 = Number(ssn.substr(4, 1)) * 6;
    const s6 = Number(ssn.substr(5, 1)) * 7;
    const s7 = Number(ssn.substr(6, 1)) * 8;
    const s8 = Number(ssn.substr(7, 1)) * 9;
    const s9 = Number(ssn.substr(8, 1)) * 2;
    const s10 = Number(ssn.substr(9, 1)) * 3;
    const s11 = Number(ssn.substr(10, 1)) * 4;
    const s12 = Number(ssn.substr(11, 1)) * 5;
    const s13 = Number(ssn.substr(12, 1));


    let result = s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11+s12;
    result = result % 11;
    result = 11 - result;
    if(result >= 10) result = result % 10;

    if(result == s13){
        alert('유효한 주민등록번호입니다');
        isssn.value = 'y';
    }else{
        alert('유효하지 않은 주민등록번호입니다');
    }
}

function ssnChange(){
    const isssn = document.getElementById('isssn');
    isssn.value = 'n';
}

// 회원가입 끝