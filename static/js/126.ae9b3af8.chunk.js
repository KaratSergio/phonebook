"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[126],{126:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var a=n(420),s=n(791),l=n(521),c=n(634),o=n(553);const r=e=>e.contacts.isLoading,i=e=>e.contacts.items,m=e=>e.contacts.error,_=e=>e.filters,u=(0,o.P1)([i,_],((e,t)=>e.filter((e=>{let{name:n}=e;return"string"===typeof n&&n.toLowerCase().includes(t.toLowerCase())}))));var d=n(808),x=n(806),p=n(632);const b="Filter_name-label__NcJK-",j="Filter_name-input__hnuXu",h="Filter_icon-label__WMIgU";var C=n(184);const N=()=>{const e=(0,a.I0)(),t=(0,a.v9)(_);return(0,C.jsxs)("label",{className:b,children:[(0,C.jsx)(x.G,{icon:p.G_j,className:h}),"Filter",(0,C.jsx)("input",{className:j,type:"text",name:"filter",value:t||"",onChange:t=>{e((0,d.T)(t.target.value))},placeholder:"Find contacts by name",required:!0})]})},v={list:"ContactList_list__csErn",item:"ContactList_item__EZYHO",contactInfo:"ContactList_contactInfo__Sgq6p",name:"ContactList_name__UCkFW",nameContainer:"ContactList_nameContainer__W2xJE",nameIcon:"ContactList_nameIcon__5BSnI",deleteButton:"ContactList_deleteButton__3hT3n"},f=e=>{let{name:t,number:n}=e;return(0,C.jsxs)("div",{className:v.contactInfo,children:[(0,C.jsxs)("div",{className:v.nameContainer,children:[(0,C.jsx)(x.G,{className:v.nameIcon,icon:p.ILF}),(0,C.jsxs)("span",{className:v.name,children:[t,":"]})]}),(0,C.jsx)("span",{children:n})]})},L=e=>{let{contact:t,onDelete:n}=e;return(0,C.jsxs)("li",{className:v.item,children:[(0,C.jsx)(f,{name:t.name,number:t.number}),(0,C.jsxs)("button",{className:v.deleteButton,onClick:()=>n(t),children:[(0,C.jsx)(x.G,{icon:p.$aW}),"Delete"]})]},t.id)},F=()=>{const e=(0,a.I0)(),t=(0,a.v9)(u),n=(0,a.v9)(r),s=(0,a.v9)(m),o=t=>e((0,c.GK)(t.id));return(0,C.jsxs)("div",{children:[n&&(0,C.jsx)(l.a,{}),s&&(0,C.jsx)("div",{className:v.error,children:s}),(0,C.jsx)("ul",{className:v.list,children:t.map((e=>(0,C.jsx)(L,{contact:e,onDelete:o},e.id)))})]})};var I=n(565),y=n(694),k=n.n(y);const w={"form-container":"ContactForm_form-container__upYT4",button:"ContactForm_button__K0dU1",iconBtn:"ContactForm_iconBtn__Au6rR","name-label":"ContactForm_name-label__akRbL","tel-label":"ContactForm_tel-label__PHM4O","name-input":"ContactForm_name-input__+CzPc","tel-input":"ContactForm_tel-input__BCKkd","label-box":"ContactForm_label-box__5wUXz","icon-input":"ContactForm_icon-input__TLv06"},g=()=>{const e=(0,a.I0)(),t=(0,a.v9)(i),n=(0,a.v9)(r),s=(0,a.v9)(m);return(0,C.jsxs)("form",{className:w["form-container"],onSubmit:n=>{n.preventDefault();const{name:a,number:s}=n.target.elements,l=a.value,o=t.some((e=>{let{name:t}=e;return t.toLowerCase()===l.toLowerCase()}));if(o)k().Notify.warning("Contact with this name already exists",{position:"left-top"});else{const t={id:(0,I.x0)(),name:l,number:s.value};e((0,c.uK)(t)),k().Notify.success("Contact added successfully",{position:"left-top"})}n.target.reset()},children:[n&&(0,C.jsx)(l.a,{}),s&&(0,C.jsx)("div",{className:w.error,children:s}),(0,C.jsxs)("label",{className:w["name-label"],children:[(0,C.jsxs)("span",{className:w["label-box"],children:[(0,C.jsx)(x.G,{icon:p.ILF,className:w["icon-input"]}),"Name"]}),(0,C.jsx)("input",{className:w["name-input"],type:"text",name:"name",placeholder:"Enter name",required:!0,pattern:"[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s]+",title:"Please enter only letters and spaces"})]}),(0,C.jsxs)("label",{className:w["tel-label"],children:[(0,C.jsxs)("span",{className:w["label-box"],children:[(0,C.jsx)(x.G,{icon:p.j1w,className:w["icon-input"]}),"Number"]}),(0,C.jsx)("input",{className:w["tel-input"],type:"tel",name:"number",placeholder:"Enter phone number",required:!0,pattern:"[0-9\\-]+",title:"Please enter only numbers"})]}),(0,C.jsxs)("button",{className:w.button,type:"submit",children:[(0,C.jsx)(x.G,{icon:p.LEp,className:w.iconBtn}),"Add Contact"]})]})},B="Contacts_container__WzsIr",G="Contacts_box__PikAd",E="Contacts_title__LxdN4",P="Contacts_sub-title__bLLpK",K=()=>{const e=(0,a.I0)(),t=(0,a.v9)(r),n=(0,a.v9)(m);return(0,s.useEffect)((()=>{e((0,c.yF)())}),[e]),(0,C.jsxs)("div",{className:B,children:[(0,C.jsx)("h1",{className:E,children:"Phonebook"}),(0,C.jsx)(g,{}),(0,C.jsx)("h2",{className:P,children:"Contacts"}),t&&!n&&(0,C.jsx)(l.a,{}),(0,C.jsxs)("div",{className:G,children:[(0,C.jsx)(N,{}),(0,C.jsx)(F,{})]})]})}}}]);
//# sourceMappingURL=126.ae9b3af8.chunk.js.map