(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__3H2P6",align:"ContactForm_align__1gTbN",inputLabel:"ContactForm_inputLabel__2uIBu",formInput:"ContactForm_formInput__2HECE",radioAlign:"ContactForm_radioAlign__1MaK2",radioTitle:"ContactForm_radioTitle__3Pc4p",radioLabel:"ContactForm_radioLabel__3JOJd",btnSubmit:"ContactForm_btnSubmit__1FxhR"}},13:function(t,e,n){t.exports={inputLabel:"Filter_inputLabel__3_gNX",inputFilter:"Filter_inputFilter__1JEMd"}},21:function(t,e,n){},3:function(t,e,n){t.exports={contactList:"ContactList_contactList__2sGqB",contactItem:"ContactList_contactItem__18aT1",align:"ContactList_align__3h9rg",contactType:"ContactList_contactType__-XkJs",btnDelete:"ContactList_btnDelete__3MKS8"}},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),o=n(14),r=n.n(o),i=(n(20),n(21),n(15)),s=n(6),l=n(7),u=n(10),b=n(9),m=n(4),d=n.n(m),h=n(8),p=n(12),j=n(1),f=n.n(j),C=n(0),O={name:"",number:"",contactType:"home"},_=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state=Object(p.a)({},O),t.contactInputId=d.a.generate(),t.numberInputId=d.a.generate(),t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state.name,a=t.props,c=a.contacts,o=a.onSubmit;if(c.find((function(t){return t.name===n})))return alert("".concat(n," is already in contacts"));o(t.state),t.reset()},t.reset=function(){t.setState(Object(p.a)({},O))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=t.contactType;return Object(C.jsxs)("form",{onSubmit:this.handleFormSubmit,className:f.a.ContactForm,children:[Object(C.jsxs)("div",{className:f.a.align,children:[Object(C.jsxs)("label",{htmlFor:this.contactInputId,className:f.a.inputLabel,children:["Name",Object(C.jsx)("input",{className:f.a.formInput,type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off",id:this.contactInputId,placeholder:"Enter name",onChange:this.handleInputChange})]}),Object(C.jsxs)("label",{htmlFor:this.numberInputId,className:f.a.inputLabel,children:["Number",Object(C.jsx)("input",{className:f.a.formInput,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:this.numberInputId,placeholder:"+380...",onChange:this.handleInputChange})]})]}),Object(C.jsx)("p",{className:f.a.radioTitle,children:"Choose type of contact"}),Object(C.jsxs)("div",{className:f.a.radioAlign,children:[Object(C.jsxs)("label",{className:f.a.radioLabel,children:[Object(C.jsx)("input",{type:"radio",name:"contactType",value:"home",onChange:this.handleInputChange,checked:"home"===a}),"Home"]}),Object(C.jsxs)("label",{className:f.a.radioLabel,children:[Object(C.jsx)("input",{type:"radio",name:"contactType",value:"work",onChange:this.handleInputChange,checked:"work"===a}),"Work"]}),Object(C.jsxs)("label",{className:f.a.radioLabel,children:[Object(C.jsx)("input",{type:"radio",name:"contactType",value:"other",onChange:this.handleInputChange,checked:"other"===a}),"Other"]})]}),Object(C.jsx)("button",{className:f.a.btnSubmit,type:"submit",disabled:!e,children:"Add contact"})]})}}]),n}(a.Component),g=n(3),x=n.n(g),v=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(C.jsx)("ul",{className:x.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number,o=t.contactType;return Object(C.jsxs)("li",{className:x.a.contactItem,children:[Object(C.jsx)("p",{children:a}),Object(C.jsxs)("div",{className:x.a.align,children:[Object(C.jsx)("p",{children:c}),Object(C.jsxs)("p",{className:x.a.contactType,children:["(",o,")"]})]}),Object(C.jsx)("button",{className:x.a.btnDelete,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},y=n(13),I=n.n(y),N=function(t){var e=t.value,n=t.onChange;return Object(C.jsxs)("label",{className:I.a.inputLabel,children:["Find contact by name",Object(C.jsx)("input",{className:I.a.inputFilter,type:"text",name:"filter",value:e,placeholder:"Start to type",onChange:n})]})},F=(n(31),function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56",contactType:"work"},{id:"id-2",name:"Hermione Kline",number:"443-89-12",contactType:"home"},{id:"id-3",name:"Eden Clements",number:"645-17-79",contactType:"other"},{id:"id-4",name:"Annie Copeland",number:"227-91-26",contactType:"work"}],filter:""},t.contactPhonebookSubmit=function(e){var n=e.name,a=e.number,c=e.contactType,o={id:d.a.generate(),name:n,number:a,contactType:c};t.setState((function(t){var e=t.contacts;return{contacts:[o].concat(Object(i.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContact=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e})),filter:""}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getVisibleContact();return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)("h1",{className:"App-header",children:"Phonebook"}),Object(C.jsx)(_,{contacts:e,onSubmit:this.contactPhonebookSubmit}),Object(C.jsx)("h2",{className:"App-header",children:"Contacts"}),Object(C.jsx)(N,{value:n,onChange:this.changeFilter}),Object(C.jsx)(v,{contacts:a,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component));r.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(F,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.907c480b.chunk.js.map