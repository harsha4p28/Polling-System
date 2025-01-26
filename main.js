const button = document.getElementById("button");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");

let ant=0;
let bee=0;
let pig=0;
let donkey=0;
let total=0;
let temp=0;
function poll(){
  total=pig+ant+bee+donkey;
  one.style.width= one.textContent=Number(((ant/total)*100).toFixed(2))+'%';
  two.style.width=two.textContent=Number(((bee/total)*100).toFixed(2))+'%';
  three.style.width=three.textContent=Number(((pig/total)*100).toFixed(2))+'%';
  four.style.width=four.textContent=Number(((donkey/total)*100).toFixed(2))+'%';

}
let selectedOption = null;
function perform(element,option){
  const options = document.querySelectorAll('.option');
  options.forEach(opt => opt.classList.remove('selected'));

  element.classList.add('selected');
  selectedOption = option;
  temp=(pig+ant+bee+donkey);
  if (selectedOption === 'one') {
    ant++;
  } else if (selectedOption === 'two') {
    bee++;
  } else if (selectedOption === 'three') {
     pig++;
  } else {
    donkey++;
  }
}
