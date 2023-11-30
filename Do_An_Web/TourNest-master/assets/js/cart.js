
let radioItem1 = document.getElementById("radioItem1");
let radioItem2 = document.getElementById("radioItem2");
let radioItem3 = document.getElementById("radioItem3");

let donGiaElement1 = document.getElementById("donGia1");
let donGiaElement2 = document.getElementById("donGia2");
let donGiaElement3 = document.getElementById("donGia3");

let tamTinhElement = document.getElementById("tamTinh");
let tongCongElement = document.getElementById("tongCong");

let nguoilonInput1 = document.getElementById("form1");
let treemInput1 = document.getElementById("form1-cop");

let nguoilonInput2 = document.getElementById("form2");
let treemInput2 = document.getElementById("form2-cop");

let nguoilonInput3 = document.getElementById("form3");
let treemInput3 = document.getElementById("form3-cop");

function calculateTotal1() {
    let donGiaText = donGiaElement1.innerText;
    let donGia = parseInt(donGiaText.replace(/[^0-9-]/g, ''));
    let nguoilon = parseInt(nguoilonInput1.value);
    let treem = parseInt(treemInput1.value);
    let dichVuKhacText = document.querySelector(".d-flex.justify-content-between:nth-child(2) > p:nth-child(2)").innerText;
    let dichVuKhac = parseInt(dichVuKhacText.replace(/[^0-9-]/g, ''));

    let tamTinh = (donGia * nguoilon) + (donGia * treem * 0.6);
    tamTinhElement.innerText = tamTinh.toLocaleString() + "đ";

    let tongCong = tamTinh + dichVuKhac;
    tongCongElement.getElementsByTagName("p")[1].innerText = tongCong.toLocaleString() + "đ";

    document.getElementById("thanhToan").innerText = tongCong.toLocaleString() + "đ";
}
function calculateTotal2() {
    let donGiaText = donGiaElement2.innerText;
    let donGia = parseInt(donGiaText.replace(/[^0-9-]/g, ''));
    let nguoilon = parseInt(nguoilonInput2.value);
    let treem = parseInt(treemInput2.value);
    let dichVuKhacText = document.querySelector(".d-flex.justify-content-between:nth-child(2) > p:nth-child(2)").innerText;
    let dichVuKhac = parseInt(dichVuKhacText.replace(/[^0-9-]/g, ''));

    let tamTinh = (donGia * nguoilon) + (donGia * treem * 0.6);
    tamTinhElement.innerText = tamTinh.toLocaleString() + "đ";

    let tongCong = tamTinh + dichVuKhac;
    tongCongElement.getElementsByTagName("p")[1].innerText = tongCong.toLocaleString() + "đ";

    document.getElementById("thanhToan").innerText = tongCong.toLocaleString() + "đ";
}
function calculateTotal3() {
    let donGiaText = donGiaElement3.innerText;
    let donGia = parseInt(donGiaText.replace(/[^0-9-]/g, ''));
    let nguoilon = parseInt(nguoilonInput3.value);
    let treem = parseInt(treemInput3.value);
    let dichVuKhacText = document.querySelector(".d-flex.justify-content-between:nth-child(2) > p:nth-child(2)").innerText;
    let dichVuKhac = parseInt(dichVuKhacText.replace(/[^0-9-]/g, ''));

    let tamTinh = (donGia * nguoilon) + (donGia * treem * 0.6);
    tamTinhElement.innerText = tamTinh.toLocaleString() + "đ";

    let tongCong = tamTinh + dichVuKhac;
    tongCongElement.getElementsByTagName("p")[1].innerText = tongCong.toLocaleString() + "đ";

    document.getElementById("thanhToan").innerText = tongCong.toLocaleString() + "đ";
}

radioItem1.onchange = function() {
    if (radioItem1.checked) {
        calculateTotal1();
    }
};
radioItem2.onchange = function() {
    if (radioItem2.checked) {
        calculateTotal2();
    }
};
radioItem3.onchange = function() {
    if (radioItem3.checked) {
        calculateTotal3();
    }
};
function changeQuantity(button, change, index) {
    let input = button.parentNode.querySelector("input[type=number]");
    let currentValue = parseInt(input.value);
    let newValue = currentValue + change;
    if (newValue >= 0) {
        input.value = newValue;
        switch (index) {
            case 1:
                calculateTotal1();
                break;
            case 2:
                calculateTotal2();
                break;
            case 3:
                calculateTotal3();
                break;
        }
    }
}

function dele(index) {
    let elementId = index.toString();
    document.getElementById(elementId).style.display = "none";
}
function link() {
    // Thực hiện hành động khi nút được nhấp vào
    window.location.href = "infor.html";
}
var cartImages = document.getElementsByClassName('img-fluid rounded-3');

// Lặp qua từng phần tử trong HTMLCollection
for (var i = 0; i < cartImages.length; i++) {
    cartImages[i].addEventListener('click', function() {
        window.location.href = "detail.html"; // Thay đổi URL tới liên kết mong muốn
    });

}
