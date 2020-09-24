document.querySelector('#eliza').oninput = function(){
    let val = this.value.trim();
    let elizaItems = document.querySelectorAll('.eliza li');
    if (val != ''){
        elizaItems.forEach(function (elem){
            if(elem.innerText.search(val) == -1){
                elem.classList.add('hide')
            }
            else {
                elem.classList.remove('hide');
            }
        })
    }
    else {
        elizaItems.forEach(function(elem){
            elem.classList.remove('hide')
        })
    }
}