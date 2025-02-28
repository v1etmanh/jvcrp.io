function upDate(previewPic){
    // Lấy phần tử có id là "image"
    let imageDiv = document.getElementById("image");
    
    // Cập nhật background image với src của ảnh preview
    imageDiv.style.backgroundImage = "url(" + previewPic.src + ")";
    
    // Cập nhật nội dung text với alt của ảnh preview
    imageDiv.innerHTML= previewPic.alt;
}

function unDo(){
    // Lấy phần tử có id là "image"
    let imageDiv = document.getElementById("image");
    
    // Đặt lại background image về trống
    imageDiv.style.backgroundImage = "url('')";
    
    // Đặt lại nội dung text về ban đầu
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
