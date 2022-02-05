console.log('Drag And Drop Tutorial');

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

// Event listener for draggsble Element imgBox
imgBox.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggred');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className += ' hide'
    }, 0);

});
imgBox.addEventListener('dragend', (e) => {
    console.log('DragEnd has been triggred');
    e.target.className = 'imgBox'
});

// Event listener for every or each whiteBox
for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        console.log('DragOver has been triggred');
        e.preventDefault();
    });
    whiteBox.addEventListener('dragenter', (e) => {
        console.log('DragEnter has been triggred');
        e.target.className += ' overlay'

    });
    whiteBox.addEventListener('dragleave', (e) => {
        console.log('DragLeave has been triggred');
        e.target.className = 'whiteBox'
    });
    whiteBox.addEventListener('drop', (e) => {
        console.log('Drop has been triggred');
        e.target.appendChild(imgBox)
        e.target.className = ' whiteBox'
    })
}