let entranceDom = document.getElementById('entrance');

for (let i = 1; i <= 100; i++)
{
    let boxCreator = createBox();
    entranceDom.append (boxCreator);
}





function createBox () {
    let newBox = document.createElement('div')
    newBox.classList.add('boxFinished');
    return newBox;
}