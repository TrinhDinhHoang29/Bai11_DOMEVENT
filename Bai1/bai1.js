
var ungDungtodoList = ()=>{
    let parent=document.querySelector('.parent');
    let add=document.querySelector('.add');
    add.addEventListener('click',()=>{
        let ghiChu=document.querySelector('.ghiChu');
        let itemNew=document.createElement('li');
        parent.appendChild(itemNew).innerHTML=`${ghiChu.value}`;
        ghiChu.value='';
        let deleteButton = document.createElement('button');
        deleteButton.textContent='Xóa';
        itemNew.addEventListener('click',()=>{
            itemNew.style.textDecoration='line-through';
        });
        let nutMoi=document.createElement('div');
        nutMoi.textContent='Trinh dinh hoang';
        itemNew.appendChild(nutMoi);
        itemNew.appendChild(deleteButton);
        deleteButton.addEventListener('click',()=>{
            itemNew.remove();
        });
    });
   
}
ungDungtodoList();
let theA=document.querySelector('.theA');
theA.addEventListener('click',()=>{


})