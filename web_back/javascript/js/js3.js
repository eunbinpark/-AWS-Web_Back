window.onload = () => {

}

let a = function() {
    console.log("a 함수 호출")
}

a();

console.log(typeof a);

let b = (f) => {
    console.log("테스트가 프린트 되기 전에 무조건 실행");
    f();
}

b(a);

b(function(){console.log("test")});

// 즉시 실행 함수 : 정의와 동시에 바로 실행
(function() {console.log("test2")}());