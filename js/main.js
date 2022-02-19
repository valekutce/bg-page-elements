function colorChange(getColor){
    var bg = document.querySelector('.bg-color');
    var selectColor = getColor.value;
    var text = getColor.options[getColor.selectedIndex].text;

    bg.style.background = selectColor;
    bg.innerHTML = text;

}