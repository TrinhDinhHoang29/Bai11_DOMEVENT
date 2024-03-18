let data=[10,20,70,200,36];
function taoBieuDo(bieuDo,data){
    
    data.forEach((element,index) => {        
        let theDiv=document.createElement('div');
        theDiv.style.height=`${element}px`;
       // theDiv.textContent='Cột '+index;
        theDiv.setAttribute('class','cot');
        bieuDo.appendChild(theDiv);
    });
}
let bieuDo=document.querySelector('.bieuDo');
taoBieuDo(bieuDo,data);