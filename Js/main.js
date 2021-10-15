// đồng hồ online lấy từ client

function checktime(i) {
    if (i < 10) {
        i = "0" + i;
    }

    return i;
}

function settime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = today.getDay() + 1;
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    m = checktime(m);
    s = checktime(s);

    var thu;
    switch (day) {
        case 1:
            {
                thu = "Chúa nhật";
                break;
            }
        case 2:
            {
                thu = "Thứ Hai";
                break;
            }
        case 3:
            {
                thu = "Thứ Ba";
                break;
            }
        case 4:
            {
                thu = "Thứ Tư";
                break;
            }
        case 5:
            {
                thu = "Thứ Năm";
                break;
            }
        case 6:
            {
                thu = "Thứ Sáu";
                break;
            }
        case 7:
            {
                thu = "Thứ Bảy";
                break;
            }
    }
    document.getElementById('date_time').innerHTML = thu + ", " + date + "/" + month + "/" + year + " - " + h + ":" + m + ":" + s;
    var t = setTimeout(function() {
        settime();
    }, 500);
}