clone()
function clone(){
    for (let n=0; n<12; n++) {
        let parent = document.getElementById('product_group');
        let elem = parent.querySelector('.product');
        let clone = elem.cloneNode(true);
        clone = parent.appendChild(clone);
    }
}
function scale(){
    this.style.transform = 'scale(1.2)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 125);
}

function favorites(){
    if (this.style.opacity != "1") {
        this.style.cssText = 'opacity: 1;';
        block_add()
    }
    else {
        this.style.cssText = 'opacity: 0;';
        block_delete()
    }
}

function trash(){
    if (this.style.background != "none") {
        this.style.cssText = 'background: none; color: #29abe2;';
        block_add()
    }
    else {
        this.style.cssText = 'background: #29abe2; color: #ffffff;';
        block_delete()
    }
}

function block_add(){
    var div = document.createElement("div");
    div.id = "block_add";
    div.className = "block_add";
    div.textContent = "Добавлен";
    var targetDiv = document.getElementById("block_label");
    var add_favorites = targetDiv.parentNode.insertBefore(div, targetDiv);
    setTimeout(() => {
        setTimeout(() => {
            add_favorites.style.cssText = 'margin-bottom: 0px; opacity: 1;';
        }, 1)
    }, 1)
    setTimeout(() => {
        add_favorites.style.cssText = 'opacity: 0; margin-bottom: -40px;';
        setTimeout(() => {
            add_favorites.remove()
        }, 300)
    }, 1000)
}

function block_delete(){
    var div = document.createElement("div");
    div.id = "block_delete";
    div.className = "block_delete";
    div.textContent = "Удален";
    var targetDiv = document.getElementById("block_label");
    var add_favorites = targetDiv.parentNode.insertBefore(div, targetDiv);
    setTimeout(() => {
        setTimeout(() => {
            add_favorites.style.cssText = 'margin-bottom: 0px; opacity: 1;';
        }, 1)
    }, 1)
    setTimeout(() => {
        add_favorites.style.cssText = 'opacity: 0; margin-bottom: -40px;';
        setTimeout(() => {
            add_favorites.remove()
        }, 300)
    }, 1000)
}