const addButton=document.querySelector("#add");

const updation=()=>{
const tAreaData=document.querySelectorAll('textarea');
const notes=[];
tAreaData.forEach((note)=>{
return notes.push(note.value);}
)
localStorage.setItem('notes',JSON.stringify(notes));
}

const addNew=(text='')=>{
const note=document.createElement("div");
note.classList.add("note");



const htmlData=
`
<span class="but">
<button id="edit"><i class="fa fa-edit fa-lg"></i></button><button id="delete"><i class="fa fa-trash fa-lg"></i></button>
</span>
<div class="texti ${text ? "":"hidden"} "></div>
<textarea class="${text ? "hidden":""}"></textarea>`;
note.insertAdjacentHTML("afterbegin",htmlData);



const edit=note.querySelector("#edit");
const deletor=note.querySelector("#delete");
const textor=note.querySelector(".texti");
const tArea=note.querySelector("textarea");

tArea.value=text;
textor.innerHTML=text;

deletor.addEventListener('click',()=>{note.remove();});


edit.addEventListener('click',()=>{
textor.classList.toggle('hidden');
tArea.classList.toggle('hidden')}
);



tArea.addEventListener('change',(event)=>{
const val=event.target.value;
textor.innerHTML=val;
updation();
});



document.body.appendChild(note);
}


const notes=JSON.parse(localStorage.getItem('notes'));

if(notes){notes.forEach((note)=>addNew(note))};

addButton.addEventListener('click',()=> addNew() );