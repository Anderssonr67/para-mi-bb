const msgs=[
"You make my world brighter. ",
"Im so lucky to have you.",
"Youre my favorite person",
"happy valentines day bae",
  "You make my heart smile",
  "Being with you feels like home.",
  "esuckmypipi bae jeje",
  "your big ass is mine"
];

let i=0;

function nextMsg(){
document.getElementById("msg").innerText=msgs[i];
i=(i+1)%msgs.length;
}

function hearts(){
for(let j=0;j<30;j++){
let h=document.createElement("div");
h.className="heart";
h.innerText="🐒";
h.style.left=Math.random()*100+"vw";
h.style.bottom="0";
document.body.appendChild(h);
setTimeout(()=>h.remove(),4000);
}
}

function playMusic(){
document.getElementById("audio").play();
}
setInterval(() => {
  const star = document.createElement("div");
  star.className = "sparkle";
  star.innerText = "✨";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  document.body.appendChild(star);

  setTimeout(() => star.remove(), 3000);
}, 500);
