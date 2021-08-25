(this.webpackJsonpimage=this.webpackJsonpimage||[]).push([[0],{66:function(e,t,a){},75:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(27),c=a.n(r),i=(a(66),a(61)),o=a(16),l=a(17),d=a(20),u=a(18),h=a(9),j=a(99),m=a(2),b=a(3),g=a(1),p=["user","component","render"],O=function(e){var t=e.user,a=e.component,n=e.render,s=Object(b.a)(e,p);return t&&n?Object(g.jsx)(h.b,Object(m.a)(Object(m.a)({},s),{},{render:n})):Object(g.jsx)(h.b,Object(m.a)(Object(m.a)({},s),{},{render:function(e){return t?Object(g.jsx)(a,Object(m.a)({},e)):Object(g.jsx)(h.a,{to:"/"})}}))},f=a(47),w=(a(75),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleClose=function(){return n.setState({show:!1})},n.state={show:!0},n.timeoutId=null,n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,a=e.heading,n=e.message,s=e.deleteAlert,r=e.id;return this.state.show||setTimeout((function(){s(r)}),300),Object(g.jsx)(f.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(f.a.Heading,{children:a}),Object(g.jsx)("p",{className:"alert-body",children:n})]})})}}]),a}(s.a.Component)),v=a(60),x=a(35),C=a(12),y=Object(g.jsxs)(n.Fragment,{children:[Object(g.jsx)(C.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(g.jsx)(C.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),S=Object(g.jsxs)(n.Fragment,{children:[Object(g.jsx)(C.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(g.jsx)(C.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),P=Object(g.jsx)(n.Fragment,{children:Object(g.jsx)(C.c,{exact:!0,to:"/",className:"nav-link",children:"Home"})}),A=function(e){var t=e.user;return Object(g.jsxs)(x.a,{bg:"primary",variant:"dark",expand:"md",children:[Object(g.jsx)(x.a.Brand,{children:Object(g.jsx)(C.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"react-auth-template"})}),Object(g.jsx)(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(x.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(v.a,{className:"ml-auto",children:[t&&Object(g.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),P,t?y:S]})})]})},k=a(6),N="https://aqueous-atoll-85096.herokuapp.com",U="http://localhost:4741",I="localhost"===window.location.hostname?U:N,F=a(34),E=a.n(F),q=function(e){return E()({url:I+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},L=a(8),T=a(31),D=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(k.a)({},e.target.name,e.target.value))},n.onSignUp=function(e){e.preventDefault();var t,a=n.props,s=a.msgAlert,r=a.history,c=a.setUser;(t=n.state,E()({method:"POST",url:I+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return q(n.state)})).then((function(e){return c(e.data.user)})).then((function(){return s({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){n.setState({email:"",password:"",passwordConfirmation:""}),s({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},n.state={email:"",password:"",passwordConfirmation:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.passwordConfirmation;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign Up"}),Object(g.jsxs)(L.a,{onSubmit:this.onSignUp,children:[Object(g.jsxs)(L.a.Group,{controlId:"email",children:[Object(g.jsx)(L.a.Label,{children:"Email address"}),Object(g.jsx)(L.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(L.a.Group,{controlId:"password",children:[Object(g.jsx)(L.a.Label,{children:"Password"}),Object(g.jsx)(L.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsxs)(L.a.Group,{controlId:"passwordConfirmation",children:[Object(g.jsx)(L.a.Label,{children:"Password Confirmation"}),Object(g.jsx)(L.a.Control,{required:!0,name:"passwordConfirmation",value:n,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(g.jsx)(T.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),a}(n.Component),G=Object(h.f)(D),B=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(k.a)({},e.target.name,e.target.value))},n.onSignIn=function(e){e.preventDefault();var t=n.props,a=t.msgAlert,s=t.history,r=t.setUser;q(n.state).then((function(e){return r(e.data.user)})).then((function(){return a({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){n.setState({email:"",password:""}),a({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},n.state={email:"",password:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign In"}),Object(g.jsxs)(L.a,{onSubmit:this.onSignIn,children:[Object(g.jsxs)(L.a.Group,{controlId:"email",children:[Object(g.jsx)(L.a.Label,{children:"Email address"}),Object(g.jsx)(L.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(L.a.Group,{controlId:"password",children:[Object(g.jsx)(L.a.Label,{children:"Password"}),Object(g.jsx)(L.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsx)(T.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),a}(n.Component),H=Object(h.f)(B),W=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,a=e.history,n=e.clearUser;(function(e){return E()({url:I+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return a.push("/")})).finally((function(){return n()}))}},{key:"render",value:function(){return""}}]),a}(n.Component),z=Object(h.f)(W),J=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(k.a)({},e.target.name,e.target.value))},n.onChangePassword=function(e){e.preventDefault();var t=n.props,a=t.msgAlert,s=t.history,r=t.user;(function(e,t){return E()({url:I+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(n.state,r).then((function(){return a({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){n.setState({oldPassword:"",newPassword:""}),a({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},n.state={oldPassword:"",newPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,a=e.newPassword;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Change Password"}),Object(g.jsxs)(L.a,{onSubmit:this.onChangePassword,children:[Object(g.jsxs)(L.a.Group,{controlId:"oldPassword",children:[Object(g.jsx)(L.a.Label,{children:"Old password"}),Object(g.jsx)(L.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(g.jsxs)(L.a.Group,{controlId:"newPassword",children:[Object(g.jsx)(L.a.Label,{children:"New Password"}),Object(g.jsx)(L.a.Control,{required:!0,name:"newPassword",value:a,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(g.jsx)(T.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),a}(n.Component),M=Object(h.f)(J),R=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setUser=function(e){return n.setState({user:e})},n.clearUser=function(){return n.setState({user:null})},n.deleteAlert=function(e){n.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},n.msgAlert=function(e){var t=e.heading,a=e.message,s=e.variant,r=Object(j.a)();n.setState((function(e){return{msgAlerts:[].concat(Object(i.a)(e.msgAlerts),[{heading:t,message:a,variant:s,id:r}])}}))},n.state={user:null,msgAlerts:[]},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.msgAlerts,s=t.user;return Object(g.jsxs)(n.Fragment,{children:[Object(g.jsx)(A,{user:s}),a.map((function(t){return Object(g.jsx)(w,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(g.jsxs)("main",{className:"container",children:[Object(g.jsx)(h.b,{path:"/sign-up",render:function(){return Object(g.jsx)(G,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(h.b,{path:"/sign-in",render:function(){return Object(g.jsx)(H,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(O,{user:s,path:"/sign-out",render:function(){return Object(g.jsx)(z,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:s})}}),Object(g.jsx)(O,{user:s,path:"/change-password",render:function(){return Object(g.jsx)(M,{msgAlert:e.msgAlert,user:s})}})]})]})}}]),a}(n.Component),Y=Object(g.jsx)(C.a,{basename:"",children:Object(g.jsx)(R,{})});c.a.render(Y,document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.775915cc.chunk.js.map