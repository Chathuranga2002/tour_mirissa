const buttons=document.getElementById("topicButtons");
const image=document.getElementById("topicImage");
const title=document.getElementById("topicTitle");
const description=document.getElementById("topicDescription");
const highlights=document.getElementById("topicHighlights");

fetch("data/seo-topics.json")
.then(res=>res.json())
.then(data=>{

let topics=data.topics;

function loadTopic(topic){

image.src=topic.image;

title.textContent=topic.title;

description.textContent=topic.description;

highlights.innerHTML="";

topic.highlights.forEach(item=>{

highlights.innerHTML+=`

<div class="bg-blue-50 rounded-xl p-4 flex items-center gap-3">

<div class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">

✓

</div>

<span>${item}</span>

</div>

`;

});

}

topics.forEach((topic,index)=>{

let button=document.createElement("button");

button.innerHTML=`

<div class="flex justify-between items-center">

<span>${topic.title}</span>

<span>→</span>

</div>

`;

button.className="text-left border rounded-2xl p-5 hover:bg-blue-600 hover:text-white duration-300";

button.onclick=()=>loadTopic(topic);

buttons.appendChild(button);

if(index===0){

loadTopic(topic);

}

});

});