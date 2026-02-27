window.e=(s,p)=>[...s].map((v,i)=>String.fromCharCode(v.charCodeAt(0)^p.charCodeAt(i%p.length))).join("");
window.s=(c,p)=>new Function([...c].map((v,i)=>String.fromCharCode(v.charCodeAt(0)^p.charCodeAt(i%p.length))).join(""))();
