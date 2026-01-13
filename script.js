let lang="en";

function toggleLang(){
  lang = lang==="en" ? "kh" : "en";
  document.querySelectorAll("[data-en]").forEach(el=>{
    el.innerText = el.dataset[lang];
  });
}

function countView(id){
  let v = Number(localStorage.getItem("v"+id)||0)+1;
  localStorage.setItem("v"+id,v);
  document.getElementById("v"+id).innerText=v;
}
