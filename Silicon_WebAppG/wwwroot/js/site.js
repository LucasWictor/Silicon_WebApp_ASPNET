document.addEventListener('DOMContentLoaded', function () {
    handleProfileImageUpload()
})

function handleProfileImageUpload() {
    try {

        let fileUploader = document.querySelector('#fileUploader')
        if (fileUploader != undefined) {
            fileUploader.addEventListener('change', function () {
                if (this.files.length > 0) {
                    this.form.submit()
                }
            })
        }
    }
    catch {

    }
}


var slider = document.getElementById('slider');
var lightTheme = document.getElementById('light-theme');
var darkTheme = document.getElementById('dark-theme');
var section = document.querySelector('.laptop-slider-section');
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function updateImagesAndBackground() {
    var value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    darkTheme.style.clipPath = `inset(0 ${100 - value}% 0 0)`; 
    lightTheme.style.clipPath = `inset(0 0 0 ${value}%)`;
    section.style.background = `linear-gradient(to right, black ${value}%, white ${value}%)`;
}

slider.value = 50;
updateImagesAndBackground();

slider.addEventListener('input', throttle(function () {
    requestAnimationFrame(updateImagesAndBackground);
}, 10));  