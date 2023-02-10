//object는 변수들을 organize 하는 다른 방법
//list는 모두 같은 값을 가짐  object는 각기 다른 의미를 가지고 있음
//가장 좋은 예시는 비디오 게임

    //const playerName = "Nico";
    //const playerPoints = 121212;
    //const playerHandsome = false;
    //const playerFat = "little bit";

// 뭐가 무엇을 나타내는지 알 수 없음
//const player = ["nico", 1212, false, "little bit"];

const player = {
    name: "nico",
    points: 10,
    fat: true,
};

//console.log(player);
//console.log(player.name);

//다른 방법은
//console.log(player["name"]);

console.log(player);
player.fat = false;
player.points = 15;
console.log(player); 

player.points = player.points + 15;
console.log(player);

//we can't modify constant but 여기서 한 것은 object안의 무언가를 수정한 것
//player (constant) = false -> Boolean이 되어 오류가 발생함
//단 inside on the const은 가능함

player.lastName = "potato";
console.log(player);

//update하는 법, 추가하는 법 등을 배움.