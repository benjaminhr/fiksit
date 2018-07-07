var b_b = document.getElementsByClassName("brand_button");
var b = document.getElementsByClassName("brand");
var i;
var z;

for (i = 0; i < b_b.length; i++) {
    b_b[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

for (z = 0; z < b.length; z++) {
    b[z].addEventListener("click", function() {
        this.classList.toggle("bactive");
        var acc = this.nextElementSibling;
        if (acc.style.display === "block") {
            acc.style.display = "none";
        } else {
            acc.style.display = "block";
        }
    });
}
