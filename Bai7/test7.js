function range(){
    let thanhTruot =document.querySelector('#slider');
    let giaTri = document.querySelector('#valueDisplay');
    thanhTruot.addEventListener('change',()=>{
        giaTri.innerHTML=thanhTruot.value;
    })
}
range();