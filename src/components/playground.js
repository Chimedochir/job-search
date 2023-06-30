// const numbers = [1, 2, 3, 5, 8, 45, 4];
// const num = [91, 92];
// numbers.filter((number) => num.includes(number));
// console.log(numbers);
// console.log(num);
// let text = "Hello world, welcome to the universe.";

// let result = text.includes("world");
// console.log(result);
const { computed, reactive, toRef, toRefs } = require("vue");
// let a = ref(1);
// let b = ref(2);
// let c = computed(() => a.value + b.value);
// console.log(c.value);
// a.value = 10;
// console.log(c.value);
// console.log(c.value);
const person = reactive({ firstName: "Bat", lastName: "Suren" });
const human = { firstName: "Bat", lastName: "Suren" };
// const firstName = toRef(person, "firstName");
console.log(human.firstName);
const lastName = toRef(person, "lastName");
const { firstName } = toRefs(person);
// console.log(firstName);
const title = computed(() => `${firstName.value} ${lastName.value} the Great`);
// console.log(title.value);
// const title = computed(
//   () => `${person.firstName} ${person.lastName} the Great`
// );
person.firstName = "Bold";
console.log(title.value);
