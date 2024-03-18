let hienThiTab=()=>{
    let btnTab=document.querySelectorAll('.btn-tab');
    let tabContent=document.querySelectorAll('.tab-content');
    btnTab.forEach((element,index)=>{
        element.addEventListener('click',()=>{
            if(index==0){
                tabContent[0].style.display='block';
                tabContent[1].style.display='none';
                tabContent[2].style.display='none';
            }
            else if(index==1){
                tabContent[1].style.display='block';
                tabContent[0].style.display='none';
                tabContent[2].style.display='none';
            }
            else if (index==2){
                tabContent[2].style.display='block';
                tabContent[0].style.display='none';
                tabContent[1].style.display='none';
            }
        })       
    })
}
hienThiTab();