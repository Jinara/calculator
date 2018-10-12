//document.querySelector(".example");
let calcKeys = []
let numbers = document.getElementsByClassName("number")
//for (i = 0; i < x.length; i++) {

console.log(numbers)
numbers.forEach(function(number) {
  number.addEventListener("click", function(event){
      var targetId = event.srcElement.id
      var index = targetId.slice(numbers.lenght)
      calcKeys.push(index)
      console.log(index)
  });
}

