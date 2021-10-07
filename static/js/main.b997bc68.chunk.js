(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={container:"App_container__3By8S",wrapper:"App_wrapper__3CDtg"}},13:function(t,e,n){t.exports={input:"filter_input__1Uyep"}},2:function(t,e,n){t.exports={contact:"contact_contact__1QWBw",item:"contact_item__SJrLi",button:"contact_button__Cl_fR",name:"contact_name__d4xTU"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),i=n(14),s=n(4),l=n(5),u=n(8),b=n(7),m=n(6),d=n(3),j=n.n(d),h=n(0),p=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{className:j.a.label,children:["Name",Object(h.jsx)("input",{maxlength:"22",className:j.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(h.jsxs)("label",{className:j.a.label,children:["Number",Object(h.jsx)("input",{className:j.a.input,type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(h.jsx)("button",{type:"submit",className:j.a.button,children:"Add contact"})]})})}}]),n}(a.Component),f=p,O=n(13),x=n.n(O),C=function(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("label",{children:["Find contacts by name",Object(h.jsx)("input",{className:x.a.input,type:"text",value:e,onChange:n})]})},_=n(10),v=n(2),g=n.n(v),y=function(t){var e=t.id,n=t.name,a=t.number,c=t.onDeleteContact;return Object(h.jsxs)("li",{className:g.a.item,children:[Object(h.jsx)("p",{className:g.a.name,children:n}),Object(h.jsx)("p",{children:a}),Object(h.jsx)("button",{className:g.a.button,onClick:function(){return c(e)},children:"Delete"})]})},S=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(h.jsx)("ul",{className:g.a.contact,children:e.map((function(t){return Object(h.jsx)(y,Object(_.a)(Object(_.a)({},t),{},{onDeleteContact:n}),t.id)}))})},w=n(11),N=n.n(w),A=n(22),F=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"},{id:"id-5",name:"Kate Yeland",number:"234-01-29"},{id:"id-6",name:"Olex Bond",number:"456-87-54"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(A.a)(),name:n,number:a};t.state.contacts.some((function(t){return t.name.toLowerCase()===c.name.toLowerCase()}))?alert("This contact is already exist!! Try one more time, please!"):t.setState((function(t){return{contacts:[c].concat(Object(i.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.getVisibleContacts();return Object(h.jsxs)("div",{className:N.a.container,children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(f,{onSubmit:this.addContact}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(C,{value:this.state.filter,onChange:this.changeFilter}),Object(h.jsx)("div",{className:N.a.wrapper,children:Object(h.jsx)(S,{contacts:t,onDeleteContact:this.deleteContact})})]})}}]),n}(a.Component),k=F;o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={label:"contactForm_label__1JTUI",input:"contactForm_input__36RyS",button:"contactForm_button__25Pzu"}}},[[20,1,2]]]);
//# sourceMappingURL=main.b997bc68.chunk.js.map