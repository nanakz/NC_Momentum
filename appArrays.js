const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;

console.log(daysOfWeek);

const daysOfWeek_v1 = [mon , tue , wed , thu , fri , sat , sun];

console.log(daysOfWeek_v1);

const daysOfWeek_v2 = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek_v2[0]);
console.log(daysOfWeek_v2[4]);

// Add one more day to the array
daysOfWeek_v2.push("sun");

console.log(daysOfWeek_v2);

const toBuy = ["potato", "tomato", "pizza"];

console.log(toBuy);

toBuy.push("kimbab");

