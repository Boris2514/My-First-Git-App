let $btn = document.querySelector(".hello");
let $p = document.querySelector(".sayHello");

console.log($btn, $p);
function sayHello() {
  return "Hello my friends";
}

$btn.addEventListener("click", (e) => {
  $p.innerHTML = sayHello();
});
