//Function = 계속 반복해서 사용할 수 있는 코드 조각

//function sayHello(nameOfPerson, age){
//    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
//}

//sayHello("nico", 10);
//sayHello("dal", 23);
//sayHello("lynn", 21);

//계산기

function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}

// firstNumber이랑 secondNumber은 only functions 안에만 존재하기 때문에 function 밖에서 작성하면 안됨
function divide (a, b) {
    console.log(a / b);
}

plus(8, 60);
divide(98, 20);

const player = {
    name: "nico",
    sayHello:function(otherPersonsName){
        console.log("hello " + otherPersonsName + " Nice to meet you! ");
    },
};

console.log(player.name);

player.sayHello("lynn");
player.sayHello("yuna");