let entranceDom = document.getElementById('entrance');




let buttonDom = document.getElementById('buttonStartGame');
//riparte il gioco
buttonDom.addEventListener('click',
    function () {
        entranceDom.classList.toggle('d-none')
    });







//creato numero all'interno e box
for (let i = 1; i <= 100; i++) {
    let boxCreated = createBox();
    let num = i;
    entranceDom.append(boxCreated);
    boxCreated.innerHTML = num;
    boxCreated.addEventListener('click',
        function () {
            console.log(num)
        })
}





//funzione creare caselle
function createBox() {
    let newBox = document.createElement('div')
    newBox.classList.add('boxFinished');
    return newBox;
}
