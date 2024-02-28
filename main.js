let appBody = document.getElementById("appBody");
let drag = document.getElementById("drag");
let browsBtn = document.getElementById("browsBtn");
let inputBox = document.getElementById('inputBox');
let MyFile;

browsBtn.addEventListener("click",()=>{
    inputBox.click();
});

inputBox.addEventListener('change', function(){
    MyFile = this.files[0];
    appBody.classList.add('active');

    showFile();
})


appBody.addEventListener("dragover",(event)=>{
    event.preventDefault();
    appBody.classList.add('active');

    drag.innerText ="Release to upload file";
});
appBody.addEventListener("dragleave",()=>{
    drag.innerText ="Drag & Drop";
    appBody.classList.remove('active');
});



appBody.addEventListener('drop', (event)=>{
    event.preventDefault();

    MyFile = event.dataTransfer.files[0];
    showFile();
})


function showFile(){
    let fileType = MyFile.type;
    let fileValid = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/svg'];

    if(fileValid.includes(fileType)){
        let fileReader = new FileReader();
        fileReader.onload = () =>{
            let imgURL = fileReader.result;
            let img = `<div class="ImgAria"><img class="uploadImg" src="${imgURL}" alt=""></div>`;

            appBody.innerHTML = img;


            let ReloadBtn = document.getElementById('ReloadBtn');
            ReloadBtn.style.display = 'block';
            ReloadBtn.addEventListener('click', function(){
                window.location.reload();
            })
        }
        fileReader.readAsDataURL(MyFile);
    }
    else{
        alert('File extension is not supported!');
        appBody.classList.remove('active');
        drag.innerText ="Drag & Drop";
    }
}


