document.addEventListener('DOMContentLoaded', function () {
    var btnDiscountCode = document.getElementById('btnDiscountCode');

    if (btnDiscountCode) {
        btnDiscountCode.addEventListener('click', function (event) {
            event.preventDefault();

            var DiscountCode = document.getElementById("DiscountCode").value;
            var booking_id = 'ac7ab715-cd61-4053-b3e3-5e0fa5c1f838';

            if (DiscountCode !== '') {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', '/Coupon/CheckDiscount?DiscountCode=' + DiscountCode + '&booking_id=' + booking_id + '&TourCodeType=NDSGN870-064-031223XE-V-F', true);
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        var result = JSON.parse(xhr.responseText);
                        if (result.PromotionId > 0) {
                            alert(result.Discount);
                        } else {
                            hideDiscountResults();
                            alert('Mã giảm giá này chưa đúng hoặc đã sử dụng. Vui lòng kiểm tra lại hoặc liên hệ 1900.1839 để được hỗ trợ');
                        }
                    }
                };
                xhr.send();
            } else {
                alert('Quý khách vui lòng nhập mã giảm giá');
            }
        });
    } else {
        console.error('Không tìm thấy phần tử có ID là "btnDiscountCode" trong DOM.');
    }

    document.getElementById("tienmat").addEventListener("click", function () {
        visiblepromotion(1);
    });

    document.getElementById("chuyenkhoan").addEventListener("click", function () {
        visiblepromotion(1);
    });

    document.getElementById("thanhtoanatm").addEventListener("click", function () {
        visiblepromotion(0);
    });

    document.getElementById("thetindung").addEventListener("click", function () {
        visiblepromotion(0);
    });

    document.getElementById("vnpay").addEventListener("click", function () {
        visiblepromotion(0);
    });

    document.getElementById("momo").addEventListener("click", function () {
        visiblepromotion(0);
    });

    document.getElementById("shoppepay").addEventListener("click", function () {
        visiblepromotion(0);
    });

    document.getElementById("thanhtoanmsb").addEventListener("click", function () {
        visiblepromotion(0);
    });

    document.querySelectorAll(".btn-order").forEach(function (button) {
        button.addEventListener("click", function () {
            var PaymentName = "Tiền mặt";
            var PaymentId = 1;
            var PaymentType = "";
            var PayGateType = 1;

            document.querySelectorAll('.payment-item').forEach(function (element) {
                if (element.classList.contains('active')) {
                    PaymentName = element.getElementsByTagName("h4")[0].innerText.trim();
                    if (PaymentName === "Tiền mặt") {
                        PaymentId = 1;
                        PayGateType = 1;
                    } else if (PaymentName === "Chuyển khoản") {
                        PaymentId = 2;
                        PayGateType = 1;
                    } else if (PaymentName === "ATM / Internet Banking") {
                        document.querySelectorAll(".form-check").forEach(function (checkbox) {
                            if (checkbox.querySelector("input:checked[type='radio']").value === 'on') {
                                PaymentType = checkbox.querySelector("input[type='hidden']").value;
                            }
                        });
                        if (PaymentType === "visa_zalo") PaymentId = 9;
                        else if (PaymentType === "qr_zalo") PaymentId = 23;

                        PayGateType = 1;
                    } else if (PaymentName === "Thẻ tín dụng") {
                        document.querySelectorAll(".form-check").forEach(function (checkbox) {
                            if (checkbox.querySelector("input:checked[type='radio']").value === 'on') {
                                PaymentType = checkbox.querySelector("input[type='hidden']").value;
                            }
                        });
                        if (["visa", "mastercard", "jcb"].includes(PaymentType)) PaymentId = 15;
                        else if (PaymentType !== "") PaymentId = 5;
                        PayGateType = 1;
                    } else if (PaymentName === "Thanh toán VNPAY") {
                        PaymentId = 16;
                        PayGateType = 1;
                    } else if (PaymentName === "Thanh toán bằng Momo") {
                        PaymentId = 17;
                        PayGateType = 1;
                    } else if (PaymentName === "Thanh toán bằng ShopeePay") {
                        PaymentId = 18;
                        PayGateType = 1;
                    } else if (PaymentName === "Thanh toán qua Cổng MSB") {
                        PaymentId = 87;
                        PayGateType = 1;
                    } else if (PaymentName === "Thanh toán bằng MBbank") {
                        document.querySelectorAll(".form-check").forEach(function (checkbox) {
                            if (checkbox.querySelector("input:checked[type='radio']").value === 'on') {
                                PaymentType = checkbox.querySelector("input[type='hidden']").value;
                            }
                        });
                        if (PaymentType === "MBbankQR") PaymentId = 19;
                        else if (PaymentType === "MBbankCard") PaymentId = 21;
                        PayGateType = 1;
                    } else if (PaymentName === "Cổng thanh toán Vietravel") {
                        PaymentId = "";
                        PayGateType = 2;
                    }
                }
            });

            if (document.getElementById('DieuKien').checked) {
                if (booking_id !== "") {
                    if (PaymentName === "Thẻ tín dụng" && PaymentType === "") {
                        alert('Quý khách chọn thẻ tin dụng để thanh toán');
                        return false;
                    }
                    IsDisabledOrder();
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', '/Booking/TourCheckout', true);
                    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4 && xhr.status === 200) {
                            var response = JSON.parse(xhr.responseText);
                            window.location.href = response.Url;
                        }
                    };
                    xhr.send('booking_id=ac7ab715-cd61-4053-b3e3-5e0fa5c1f838&PaymentId=' + PaymentId + '&TourType=1&PaymentGateID=' + PayGateType);
                }
            } else {
                alert('Quý khách cần chọn Điều khoản đăng ký online');
                return false;
            }
        });
    });

    function hideDiscountResults() {
        document.getElementById("divResultDiscount").style.display = 'none';
        document.getElementById("hidPromotionId").value = '';
        document.getElementById("spanPromotionCode").innerText = '';
        document.getElementById("spanVDiscount").innerText = '';
    }

    function visiblepromotion(visible) {
        var promotiontitle = document.getElementById("promotiontitle");
        var promotiontitleadult = document.getElementById("promotiontitleadult");
        var promotiontitlechild = document.getElementById("promotiontitlechild");
        var promotionpricetitle = document.getElementById("promotionpricetitle");
        var totalPriceElement = document.getElementById("TotalPrice");

        if (visible) {
            promotiontitle.classList.add('hardCode');
            promotiontitleadult.classList.add('hardCode');
            promotiontitlechild.classList.add('hardCode');
            promotionpricetitle.classList.add('hardCode');
            totalPriceElement.innerText = formatNumber(1090000) + "₫";
        } else {
            promotiontitle.classList.remove('hardCode');
            promotiontitleadult.classList.remove('hardCode');
            promotiontitlechild.classList.remove('hardCode');
            promotionpricetitle.classList.remove('hardCode');

            if (titleChildren && childDiscount < 1) {
                totalPriceElement.innerText = formatNumber(1090000) + "₫";
            } else {
                totalPriceElement.innerText = formatNumber(1090000) + "₫";
            }
        }
    }

    function LoadPixelTuVan() {
        var script = document.createElement('script');
        script.innerHTML = "fbq('track', 'Lead', {content_ids: 'a2376a1c-2e44-4f60-8a28-40dea841a1fd', content_type: 'Tour', tour_type: '1', product_id: 'NDSGN870', product_type: 'Đông Nam Bộ', value: '1190000', currency: 'VND', travel_start: '03/12/2023', travel_end: '03/12/2023', departure: 'TP. Hồ Chí Minh', destination:' Tây Ninh - Hành trình chinh phục nóc nhà Nam Bộ - Tặng vé tham quan 3 tuyến cáp treo Chùa Hang - Tâm An - Vân Sơn' });";
        document.body.appendChild(script);
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll(".f-social-small").forEach(function (element) {
            element.addEventListener("click", function () {
                document.querySelector(".f-socials-full").style.display = (document.querySelector(".f-socials-full").style.display === 'none' ? 'block' : 'none');
            });
        });
    });

    function formatNumber(number) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
    }
});
