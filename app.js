var stringers = [3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12];

function mess(itm) {
    let that = this
    this.ele = document.createElement("div");
    this.ele.style.fontFamily="Apple Chancery"
    if(itm<10){
        this.ele.innerHTML="The value is less than 10 and the value is exactly "+itm;
    }else if(itm.length>5){
        this.ele.innerHTML="The value is more than 5 and the character length is "+itm.length;
    }else if(itm===15){
        this.ele.innerHTML="The value is exactly 15"
    }else{
        this.ele.innerHTML="The value is normal"
    }
    this.ele.addEventListener("click", function () {
        that.messColor();
    })
    document.body.appendChild(this.ele);
}

mess.prototype.messColor = function () {
    this.ele.style.color = "blue"
}
for(let i=0; i<stringers.length; i++){
    let box = new mess(stringers[i]);
}

