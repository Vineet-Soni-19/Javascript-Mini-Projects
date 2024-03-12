let qrBox = document.getElementById("qrBox")
let qrCode = document.getElementById("qrCode");
let qrText = document.getElementById("qrText");


function generateQr() {
    if (qrText.value.length > 0) {
        const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
        qrCode.src = url + qrText.value;
        qrBox.classList.add("show-img");
    }
    else {
        qrText.style.border = "1px solid red"
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
            qrText.style.border = "1px solid #494eea"
        }, 1500);
    }
}
document.getElementById('btn').addEventListener('click', () => {
    generateQr();
})