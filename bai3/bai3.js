function xemMau(){
    let colorPicker=document.querySelector('#color-picker');
             colorPicker.addEventListener('change',()=>{
            let colorPreview=document.querySelector('#color-preview');
        
            colorPreview.style.backgroundColor=colorPicker.value;
    })
}
xemMau();