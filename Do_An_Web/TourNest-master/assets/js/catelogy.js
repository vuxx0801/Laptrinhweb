//pagination
var activePage  = document.querySelector('.pagination-active');
var currentPage = parseInt(activePage.textContent);
changePage(currentPage);

function changePage(pageNumber) {
    currentPage = parseInt(pageNumber);
    var paginationLinks = document.getElementsByClassName('pagination-inner')[0].getElementsByTagName('a');
    for (var i = 0; i < paginationLinks.length; i++) {
        paginationLinks[i].classList.remove('pagination-active');
    }
    paginationLinks[pageNumber - 1].classList.add('pagination-active');

    var startId = (pageNumber - 1) * 9 + 1;
    var endId = pageNumber * 9;

    for (var j = 1; j <= 210; j++) {
        var itemId = document.getElementById(String(j));
        if (itemId) {
            if (j >= startId && j <= endId) {
                itemId.style.display = 'block';
            } else {
                itemId.style.display = 'none';
            }
        }
    }

}
function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        changePage(currentPage);
    }
}

function nextPage() {
    if (currentPage<14){
        currentPage++;
        changePage(currentPage);
    }
}

// For Filters
document.addEventListener("DOMContentLoaded", function () {
    var filterBtn = document.getElementById('filter-btn');
    var btnTxt = document.getElementById('btn-txt');
    var filterAngle = document.getElementById('filter-angle');

    $('#filterbar').collapse(false);
    var count = 0, count2 = 0;

    function changeBtnTxt() {
        $('#filterbar').collapse(true);
        count++;
        if (count % 2 != 0) {
            filterAngle.classList.add("fa-angle-right");
            btnTxt.innerText = "show filters"
            filterBtn.style.backgroundColor = "#36a31b";
        } else {
            filterAngle.classList.remove("fa-angle-right")
            btnTxt.innerText = "hide filters"
            filterBtn.style.backgroundColor = "#ff935d";
        }

    }

// For Applying Filters
    $('#inner-box').collapse(false);
    $('#inner-box2').collapse(false);

// For changing NavBar-Toggler-Icon
    var icon = document.getElementById('icon');

    function chnageIcon() {
        count2++;
        if (count2 % 2 != 0) {
            icon.innerText = "";
            icon.innerHTML = '<span class="far fa-times-circle" style="width:100%"></span>';
            icon.style.paddingTop = "5px";
            icon.style.paddingBottom = "5px";
            icon.style.fontSize = "1.8rem";


        } else {
            icon.innerText = "";
            icon.innerHTML = '<span class="navbar-toggler-icon"></span>';
            icon.style.paddingTop = "5px";
            icon.style.paddingBottom = "5px";
            icon.style.fontSize = "1.2rem";
        }
    }

// Showing tooltip for AVAILABLE COLORS
    $(function () {
        $('[data-tooltip="tooltip"]').tooltip()
    })

// For Range Sliders
    var inputLeft = document.getElementById("input-left");
    var inputRight = document.getElementById("input-right");

    var thumbLeft = document.querySelector(".slider > .thumb.left");
    var thumbRight = document.querySelector(".slider > .thumb.right");
    var range = document.querySelector(".slider > .range");

    var amountLeft = document.getElementById('amount-left')
    var amountRight = document.getElementById('amount-right')

    function setLeftValue() {
        var _this = inputLeft,
            min = parseInt(_this.min),
            max = parseInt(_this.max);

        _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

        var percent = ((_this.value - min) / (max - min)) * 100;

        thumbLeft.style.left = percent + "%";
        range.style.left = percent + "%";
        amountLeft.innerText = (percent * 0.2).toFixed(1);
    }

    setLeftValue();

    function setRightValue() {
        var _this = inputRight,
            min = parseInt(_this.min),
            max = parseInt(_this.max);

        _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

        var percent = ((_this.value - min) / (max - min)) * 100;

        amountRight.innerText = (percent * 0.2).toFixed(1);
        thumbRight.style.right = (100 - percent) + "%";
        range.style.right = (100 - percent) + "%";
    }

    setRightValue();

    inputLeft.addEventListener("input", setLeftValue);
    inputRight.addEventListener("input", setRightValue);

    inputLeft.addEventListener("mouseover", function () {
        thumbLeft.classList.add("hover");
    });
    inputLeft.addEventListener("mouseout", function () {
        thumbLeft.classList.remove("hover");
    });
    inputLeft.addEventListener("mousedown", function () {
        thumbLeft.classList.add("active");
    });
    inputLeft.addEventListener("mouseup", function () {
        thumbLeft.classList.remove("active");
    });

    inputRight.addEventListener("mouseover", function () {
        thumbRight.classList.add("hover");
    });
    inputRight.addEventListener("mouseout", function () {
        thumbRight.classList.remove("hover");
    });
    inputRight.addEventListener("mousedown", function () {
        thumbRight.classList.add("active");
    });
    inputRight.addEventListener("mouseup", function () {
        thumbRight.classList.remove("active");
    });
});


