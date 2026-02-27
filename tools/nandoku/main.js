window.e=(s,p)=>btoa([...s].map((v,i)=>String.fromCharCode(v.charCodeAt(0)^p.charCodeAt(i%p.length))).join(""));
window.s=(c,p)=>new Function([...atob(c)].map((v,i)=>String.fromCharCode(v.charCodeAt(0)^p.charCodeAt(i%p.length))).join(""))();
