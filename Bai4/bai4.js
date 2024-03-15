function hienThiModal(){
    let btnModal=document.querySelector('.openModal');
    btnModal.addEventListener('click',()=>{
    let model=document.querySelector('.modal--parent');
    model.style.display='block';
});
}
hienThiModal();