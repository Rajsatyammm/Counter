let currSel = document.querySelector('#counter');
let increment = () => {
    let val = parseInt(currSel.innerText);
    currSel.innerText = val+=1;
}

let decrement = () => {
    let val = parseInt(currSel.innerText);
    currSel.innerText = val-=1;
}
