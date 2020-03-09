// 註冊驗證
var send = document.querySelector('.send');

send.addEventListener('click', signup, false);

function signup() {
    var emailStr = document.querySelector('.account').value;
    var passwordStr = document.querySelector('.password').value;
    var passwordVeriStr = document.querySelector('.passwordVeri').value;

    if (passwordStr != passwordVeriStr) {
        alert('確認密碼欄需與密碼相同！');
    } else {
        var account = {};
        account.email = emailStr;
        account.password = passwordStr;

        var xhr = new XMLHttpRequest();
        xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true);
        xhr.setRequestHeader('Content-type', 'application/json');
        var data = JSON.stringify(account);
        xhr.send(data);
        xhr.onload = function () {
            var callbackData = JSON.parse(xhr.responseText);
            console.log(callbackData);
            var veriStr = callbackData.message;
            if (veriStr == "帳號註冊成功") {
                alert('帳號註冊成功！！');
            } else {
                alert("帳號註冊失敗！");
            }
        }
    }
}

// 修正行動版 RegisterModal 切換後滾動問題
$(document).ready(function () {
    console.log('ready');
    $('a[data-dismiss="modal"][data-toggle="modal"]').on('click', function () {
        console.log('click');
        var target = $(this).data('target');
        console.log('target', target);
        $(target).on('shown.bs.modal', function () {
            $('body').addClass('modal-open');
        });
    });
})


// Google Map
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 25.0325653, lng: 121.56335 },
        zoom: 17
    });

    var marker = new google.maps.Marker({
        position: { lat: 25.032113, lng: 121.563709 },
        map: map,
        title: '伊恩日式居酒屋',
        icon: 'images/icon_marker.png'
    })
}
