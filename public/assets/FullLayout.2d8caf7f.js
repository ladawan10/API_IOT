import{u as m,a as p,j as a,b as e,B as h,N as b,c as r,L as c,d as N,e as f,f as v,r as x,C as k,O as C}from"./index.f2580233.js";import{S as d}from"./sweetalert2.all.829902af.js";const y=()=>{const s="",o=[{title:"MachineLine C1",href:"/MachinesLineC1",icon:"bi bi-clipboard-plus"}],l=m(),i=()=>{document.getElementById("sidebarArea").classList.toggle("showSidebar")};let u=p();const g=()=>{d.fire({title:"Are you sure?",text:'"Do you want to Logout!"',icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Logout it!"}).then(t=>{t.isConfirmed&&N.post(`${s}/api-login/logout`).then(({data:{state:n}})=>{d.fire({icon:n?"success":"error",title:n?"Logout":"Failed",showConfirmButton:!1,timer:1500}).then(()=>{localStorage.removeItem("token")})}).then(()=>l("../"))})};return a("div",{children:[e("div",{className:"d-flex align-items-center",children:e(h,{color:"#000000",className:"ms-auto text-#000000 d-lg-none",onClick:()=>i(),children:e("i",{className:"bi bi-x"})})}),e("div",{className:"p-3 mt-2",children:a(b,{vertical:!0,className:"sidebarNav",children:[o.map((t,n)=>e(r,{className:"sidenav-bg",children:a(c,{to:t.href,className:u.pathname===t.href?"active nav-link py-3":"nav-link text-secondary py-3",children:[e("i",{className:t.icon}),e("span",{className:"ms-3 d-inline-block",children:t.title})]})},n)),e(r,{className:"sidenav-bg",onClick:g,children:a(c,{to:"#",className:"nav-link text-secondary py-3",children:[e("i",{className:"bi bi-box-arrow-right"}),e("span",{className:"ms-3 d-inline-block",children:"Logout"})]})})]})})]})},L=()=>{const s=()=>{document.getElementById("sidebarArea").classList.toggle("showSidebar")};return a(f,{style:{backgroundColor:"#0A1929",padding:0},dark:!0,expand:"md",className:"fix-header",children:[a("div",{className:"d-flex align-items-center",children:[e(v,{href:"/",children:a("h1",{children:[e("b",{style:{color:"red"},children:"SNC"})," IoT-Cooling "]})}),e(h,{color:"primary",className:" d-lg-none",onClick:()=>s(),children:e("i",{className:"bi bi-list"})})]}),e("div",{className:"hstack gap-2"})]})},S=()=>{const s="",o=m();return x.exports.useEffect(()=>{const l=localStorage.getItem("token");fetch(`${s}/api-login/authen`,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Authorization:"Bearer "+l}}).then(i=>i.json()).then(i=>{i.state===!0||(localStorage.removeItem("token"),o("../"))})},[]),a("main",{children:[e(L,{}),a("div",{className:"pageWrapper d-lg-flex",children:[e("aside",{className:"sidebarArea shadow",id:"sidebarArea",children:e(y,{})}),e("div",{style:{padding:"1rem",width:"100%"},children:e(k,{className:"p-2",fluid:!0,children:e(C,{})})})]})]})};export{S as default};
