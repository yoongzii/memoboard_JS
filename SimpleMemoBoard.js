//게시판 완료 이후 가상의 날짜 출력 추가하기
//가상의 날짜를 출력
const date =new Date(2024,8,3,13,20,0)
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getHours());
console.log(date);
//오늘 날짜를 기준으로 오늘 작성된 건 '3시간 전'
// 어제 작성된 건 '어제'
// 48시간 이상 지난 건 '2024-06-21' 날짜 데이터가 나오도록
// ---------------------------------------------------------------------

const now = new Date()
// console.log(now - date);

console.log('두 날짜 사이에');

const diff = now - date //ms
const s = diff / 1000;
console.log(s,'초 지남');
const m = diff / (1000 * 60);
console.log(m,'분 지남');
const h = diff / (1000 * 60 * 60);
// console.log(h,'시간 지남');
console.log(parseInt(h), '시간 지남');
const d = diff / (1000 * 60 * 60 * 24)
console.log(parseInt(d), '일 지남');

// ---------------------------------------------------------------------
const memoForm = document.getElementById('memo_form')
const writerName = document.getElementById('writer_name')
const content = document.getElementById('content')
const memo = document.getElementById('memo')

window.addEventListener('DOMContentLoaded', function(){
   writerName.focus()
})

memoForm.addEventListener('submit', function(w){
   w.preventDefault()
   let name = writerName.value;
   let letter = content.value;
   // writerName.focus()
   writerName.value=''
   content.value=''
   // writerName.type = 'text'

   addWriter(name, letter)
})
function addWriter(myname, myletter){
   const memoDiv = document.createElement('div')
   const iconWrap = document.createElement('div')
   const memoStr = document.createElement('strong')
   const pWriter = document.createElement('p')
   const pContent = document.createElement('textarea')
   const editBtn = document.createElement('button')
   const deleteBtn = document.createElement('button')

   iconWrap.classList.add('iconWrap')
   pContent.classList.add('pContent')
   memo.appendChild(memoDiv)
   memoDiv.appendChild(memoStr)
   memoDiv.appendChild(pWriter)
   memoDiv.appendChild(pContent)
   memoDiv.appendChild(iconWrap)
   iconWrap.appendChild(editBtn)
   iconWrap.appendChild(deleteBtn)

   pWriter.type = 'text'
   pWriter.value = myname
   pContent.value = myletter


   memoStr.innerText ='작성자'
   pWriter.innerText = myname
   pContent.innerText = myletter

   pWriter.readOnly = true;
   pContent.readOnly = true;


   editBtn.innerHTML = '<i class="ri-edit-fill"></i>'
   deleteBtn.innerHTML = '<i class="ri-delete-bin-line"></i>'


   deleteBtn.addEventListener('click', function(){
      memoDiv.remove()
   })

   editBtn.addEventListener('click', function(){
      if(pContent.readOnly){
         pContent.readOnly = false;
         this.innerHTML = '<i class="ri-edit-fill"></i>'
      }else{
         pContent.readOnly = true;
         this.innerHTML = '<i class="ri-save-fill"></i>'}
   })

}

