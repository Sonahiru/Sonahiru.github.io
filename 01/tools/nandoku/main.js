window.e=(s,p)=>btoa(String.fromCharCode(...new TextEncoder().encode([...s].map((v,i)=>String.fromCharCode(v.charCodeAt(0)^p.charCodeAt(i%p.length))).join(""))));
window.s=(c,p)=>new Function([...new TextDecoder().decode(Uint8Array.from(atob(c),v=>v.charCodeAt(0)))].map((v,i)=>String.fromCharCode(v.charCodeAt(0)^p.charCodeAt(i%p.length))).join(""))();
