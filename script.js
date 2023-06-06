let $btn = document.querySelector(".hello");
let $p = document.querySelector(".sayHello");

function sayHello() {
  return "Hello my friends";
}

$btn.addEventListener("click", (e) => {
  $p.innerHTML = sayHello();
});

let array = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < array.length; i++) {
  let sum = 0;
  sum += array[i];
  console.log(sum);
}
