function xemThu(){
    let xemTruoc= document.querySelector('#xemTruoc');
    xemTruoc.addEventListener('click',()=>{
        let bangTest=document.querySelector('#bangTest');
        let elementNew=document.createElement('div');
        document.querySelector('body').appendChild(elementNew).innerHTML=bangTest.value;
    })
}
xemThu();