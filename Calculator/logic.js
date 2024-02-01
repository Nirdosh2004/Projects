let inputBox = document.getElementById('inputBox');
let button = document.querySelectorAll('button');

let string = '';

button.forEach(element => {
          element.addEventListener('click' , (b) => {
                    if(b.target.innerText == '='){
                              string = String(eval(string));
                              inputBox.value = string;

                    }
                    else if(b.target.innerText == 'AC'){
                              string = '';
                              inputBox.value = string;
                    }
                    else if(b.target.innerText == 'DEL'){
                              string = string.substring(0,string.length-1);
                              inputBox.value = string;

                    }
                    else if(b.target.id == 'plusMinus'){
                              string = String(-eval(string));
                              inputBox.value = string;
                    }
                    else{
                              string += b.target.innerText;
                              inputBox.value = string;
                    }
          })
})
