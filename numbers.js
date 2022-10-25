function solve(arrOfNum) {

    let arr = arrOfNum.split(" ").map(x => Number(x))
    let avrNumber = 0;
  
    let g = 0;
  
    for (let i = 0; i < arr.length; i++) {
      g += arr[i];
    }
    avrNumber = g / arr.length;
    let biggerNums = arr.filter((x) => x > avrNumber);
  
  
    biggerNums = biggerNums.sort((a, b) => b - a);
    biggerNums = biggerNums.slice(0, 5);
  
  
    if (biggerNums.length == 0) {
      console.log("No");
    } else {
      console.log(biggerNums.join(" "));
    }
  }