window.onload = function(){
  document.querySelector("form").onsubmit = function(e){
    e.preventDefault();
    let side1 = parseInt(document.querySelector('input:nth-of-type(1)').value);
    let side2 = parseInt(document.querySelector('input:nth-of-type(2)').value);
    let side3 = parseInt(document.querySelector('input:nth-of-type(3)').value);
    let triangleType;
    
    if (side1 === side2 && side2 === side3){
      triangleType = "equilateral";
    } else if (side1 === side2 || side2 === side3 || side1 === side3){
      console.log('sides', side1, side2, side3)
      triangleType = "isosceles";
    } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
      console.log('unequal sides!');
      if ((side1 + side2) <= side3 || (side2 + side3) <= side1 || (side1 + side3) <= side2) {
        triangleType = 'not a triangle';        
      } else {
        triangleType = 'scalene';
      }
      
    }
    document.getElementById('output-area').innerText = triangleType.toUpperCase();
  }
}

