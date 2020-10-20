(this["webpackJsonpsimon-a-walton-dev"]=this["webpackJsonpsimon-a-walton-dev"]||[]).push([[0],{107:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(19),s=t.n(c),r=(t(67),t(12)),m=t(13),i=t(14),o=t(15),E=(t(68),t(69),t(21)),u=t(2),h=t.n(u),d=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"p-3 ".concat(this.props.containerClassName)},n.a.createElement("div",{className:"row text-center "},n.a.createElement("div",{className:"col d-flex justify-content-around"},n.a.createElement(E.b,{to:"/",className:this.props.linkClassName},n.a.createElement("i",{className:"fas fa-arrow-left"})),n.a.createElement(E.b,{to:"/about",className:this.props.linkClassName},n.a.createElement("ul",{className:"list-unstyled"},n.a.createElement("li",null,n.a.createElement("i",{className:"fas fa-laptop-code"})),n.a.createElement("li",null,"About")))),n.a.createElement("div",{id:"portfolio-nav",className:"col"},n.a.createElement(E.b,{to:"/portfolio",className:this.props.linkClassName},n.a.createElement("strong",null,"Portfolio"))),n.a.createElement("div",{className:"col"},n.a.createElement("a",{href:"mailto:simonwaltondev@gmail.com",className:this.props.linkClassName},n.a.createElement("ul",{className:"list-unstyled"},n.a.createElement("li",null,n.a.createElement("i",{className:"fas fa-paper-plane"})),n.a.createElement("li",null,"Contact")))))))}}]),t}(n.a.PureComponent);d.propsTypes={containerClassName:h.a.string,linkClassName:h.a.string};var p=d,f=t(30),g=t.n(f),b=t(10),I="#E8AFD7",N="#58BDED",S=t(29),C=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).submitForm=l.submitForm.bind(Object(S.a)(l)),l.state={status:""},l}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state.status;return n.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/f/mrgopdgy",method:"POST"},n.a.createElement("label",null,"Email:"),n.a.createElement("input",{type:"email",name:"email"}),n.a.createElement("label",null,"Message:"),n.a.createElement("input",{type:"text",name:"message"}),"SUCCESS"===e?n.a.createElement("p",null,"Thanks!"):n.a.createElement("button",null,"Submit"),"ERROR"===e&&n.a.createElement("p",null,"Ooops! There was an error."))}},{key:"submitForm",value:function(e){var a=this;e.preventDefault();var t=e.target,l=new FormData(t),n=new XMLHttpRequest;n.open(t.method,t.action),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?(t.reset(),a.setState({status:"SUCCESS"})):a.setState({status:"ERROR"}))},n.send(l)}}]),t}(n.a.Component),w=Object(b.css)({width:"250px"}),k=Object(b.css)({textDecoration:"none",color:"white",":hover":{color:I,textDecoration:"none"}}),v=Object(b.css)({backgroundColor:"white",color:N}),y=Object(b.css)({color:N,":hover":{textDecoration:"none",color:I}}),x=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,null,n.a.createElement(p,{containerClassName:v,linkClassName:y}),n.a.createElement("div",{className:"container ".concat(Object(b.css)({backgroundColor:N,color:"white"})),id:"about-page"},n.a.createElement("div",{className:"row pt-4"},n.a.createElement("div",{className:"col-lg-4 col-md-12 text-center pb-3"},n.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/60608204?s=460&u=517fe81ca49a5627e1e845120537a7a5b6f3b346&v=4",alt:"Simon the Coding Machine",className:w})),n.a.createElement("div",{className:"col-lg-8 col-md-12 "},n.a.createElement("h2",null,"Coding"),n.a.createElement("p",null,"I'm a recent graduate from a Full-Stack Web Development programme, during which I delivered 3 MVC apps using Ruby on Rails, PostgreSQL, JavaScript, HTML5, CSS3 and Bootstrap. Due to the fast pace of the course I have become a very fast learner and am eager to develop my skills and knowledge as a Front End Developer. I\u2019m currently working on freelance projects using ReactJS and having strict code reviews with a Senior Developer."))),n.a.createElement("div",{className:"row pt-4"},n.a.createElement("div",{className:"col-lg-4 col-md-12 text-center pb-3"},n.a.createElement("img",{src:"https://static.wixstatic.com/media/0b83fe_699c6fcd2f404e63b0c87926143f23ff~mv2_d_3024_4032_s_4_2.jpg/v1/crop/x_1454,y_1730,w_1240,h_1009/fill/w_602,h_490,al_c,q_80,usm_0.66_1.00_0.01/Image%20from%20iOS%20(19).webp",alt:"Simon the Coaching Machine",className:w}),n.a.createElement("div",{className:"row text-center "},n.a.createElement("div",{className:"col"},n.a.createElement("a",{href:"https://github.com/simon-a-walton"},n.a.createElement("i",{className:"fab fa-github"}))),n.a.createElement("div",{className:"col"},n.a.createElement("a",{href:"https://www.linkedin.com/in/simon-walton-36457323/"},n.a.createElement("i",{className:"fab fa-linkedin"}))),n.a.createElement("div",{className:"col"},n.a.createElement("a",{href:"https://angel.co/u/simon-walton"},n.a.createElement("i",{className:"fab fa-angellist"}))))),n.a.createElement("div",{className:"col-lg-8 col-md-12 "},n.a.createElement("h2",null,"Coaching"),n.a.createElement("p",null,"I have experience working as a Positive Psychologist and Coach for tech companies. I have helped people to improve their communication and confidence skills by running workshops such as Presenting Skills and Having Difficult Conversations. More on my coaching work can be found ",n.a.createElement("span",null,n.a.createElement("a",{href:"https://inside.edited.com/why-we-put-wellbeing-at-the-heart-of-company-culture-cddee6550a90?gi=75e8b02e59e8",className:k}," here."))),n.a.createElement("p",null,"Keen climber and a noob skateboarder!"))),n.a.createElement("a",{className:"d-flex justify-content-end pt-2 ".concat(k),href:"./../images/SimonWaltonCV.pdf",download:"Simon Walton CV | 2020"},n.a.createElement("i",{className:"fas fa-download"})," CV")),n.a.createElement("div",{className:"py-4 text-center ".concat(Object(b.css)({backgroundColor:"white",color:N}))},n.a.createElement("h3",null,"Top Skills"),n.a.createElement("ul",{id:"top-skills"},n.a.createElement("li",null,n.a.createElement("i",{className:"fab fa-js-square mx-1",id:"java"})," ",n.a.createElement("em",null,"Javascript ES6")),n.a.createElement("li",null,n.a.createElement("i",{className:"fas fa-gem mx-1",id:"ruby"})," ",n.a.createElement("em",null,"Ruby on Rails")),n.a.createElement("li",null,n.a.createElement("i",{className:"fab fa-bootstrap"})," ",n.a.createElement("em",null,"Bootstrap")),n.a.createElement("li",null,n.a.createElement("i",{className:"fab fa-figma mx-1"})," ",n.a.createElement("em",null,"Figma")),n.a.createElement("li",null,n.a.createElement("i",{className:"far fa-file-alt mx-1",id:"html"})," ",n.a.createElement("em",null,"HTML5")),n.a.createElement("li",null,n.a.createElement("i",{className:"fas fa-paint-brush mx-1",id:"css"})," ",n.a.createElement("em",null,"SCSS")),n.a.createElement("li",null,n.a.createElement("i",{className:"fas fa-network-wired"})," ",n.a.createElement("em",null,"SQL")),n.a.createElement("li",null,n.a.createElement("i",{className:"fas fa-palette"})," ",n.a.createElement("em",null,"Glamor")))),n.a.createElement(C,null)))},A=t(61),O=t(25),j=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("footer",{id:"footer",className:"p-3"},n.a.createElement("div",{className:"row text-center "},n.a.createElement("div",{className:"col"},n.a.createElement("a",{href:"https://github.com/simon-a-walton"},n.a.createElement("i",{className:"fab fa-github"}))),n.a.createElement("div",{className:"col"},n.a.createElement("a",{href:"https://www.linkedin.com/in/simon-walton-36457323/"},n.a.createElement("i",{className:"fab fa-linkedin"}))),n.a.createElement("div",{className:"col"},n.a.createElement("a",{href:"https://angel.co/u/simon-walton"},n.a.createElement("i",{className:"fab fa-angellist"}))))))},F=t(40),J=t.n(F),R=t(47),M=t.n(R),Q=t(48),B=t.n(Q),D=t(49),G=t.n(D),q=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=function(){var e=Object(l.useState)(!1),t=Object(A.a)(e,2),c=t[0],s=t[1];return n.a.createElement(O.a,{fluid:!0,className:"bg-div bg-blue"},n.a.createElement(M.a,{delay:1e3},n.a.createElement("img",{src:G.a,onClick:function(){return s(!0)},alt:"Simon the Coding Machine",className:"simon-image"})),c?n.a.createElement(a,null):null)},a=function(){return n.a.createElement("div",null,n.a.createElement(J.a,{top:!0},n.a.createElement(p,null)),n.a.createElement(O.a,{className:"homepage text-center text-white"},n.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/60608204?s=460&u=517fe81ca49a5627e1e845120537a7a5b6f3b346&v=4",alt:"Simon the Coding Machine",className:"simon-image"}),n.a.createElement(J.a,{bottom:!0},n.a.createElement("ul",{id:"home-list ",className:"list-unstyled pt-1"},n.a.createElement("li",{id:"name-text"},"SIMON WALTON"),n.a.createElement("li",{style:{position:"relative"}},n.a.createElement(B.a,{color:"pink",count:30,flickerSpeed:"slow"}),"Front End Developer"),n.a.createElement("li",null,n.a.createElement(j,null))))))};return n.a.createElement(e,null)}}]),t}(n.a.Component),T=t(22),K=t(16),H=t(60),U=t(41),L=t(7),Y=t(31),P=t.n(Y),V=t(50),X=t.n(V),Z=t(51),z=t.n(Z),W=t(52),_=t.n(W),$=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row p-3"},n.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4 col-xl-4"},n.a.createElement(L.a,{style:{border:"6px solid white"}},n.a.createElement(L.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:P.a,alt:"First slide"})),n.a.createElement(L.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:P.a,alt:"Second slide"})),n.a.createElement(L.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:X.a,alt:"Third slide"})),n.a.createElement(L.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:z.a,alt:"Fourth slide"})),n.a.createElement(L.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:_.a,alt:"Fifth slide"}))),n.a.createElement("p",{className:"pt-2 hashtag-text"},n.a.createElement("em",null,"#rubyonrails #spotifyAPI #mapboxAPI"))),n.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-8 col-xl-8 pt-2 text-left"},n.a.createElement("h5",{className:"pb-2"},"A mobile web-app for requesting songs in bars and clubs"),n.a.createElement("h6",null,"Features for Bars:"),n.a.createElement("ol",null,n.a.createElement("li",null,"It uses Soptify's API to add songs to a playlist's queue and display which song is currently playing"),n.a.createElement("li",null,"Once a song has been added to a playlist's queue, the request button disappears and other users cannot request the same song")),n.a.createElement("h6",null,"Features for Clubs:"),n.a.createElement("ol",null,n.a.createElement("li",null,"A DJ can upload their playlist for an event at a certain venue."),n.a.createElement("li",null,"Clubbers can search through this playlist and can request the songs they want."),n.a.createElement("li",null,"The DJ has a dashboard where they can see the top requested songs of the night."),n.a.createElement("li",null,"Once the DJ has played the track, all users will see this on their dashboard and they cannot vote again.")),n.a.createElement("p",null,n.a.createElement("a",{className:"git-button",href:"#"},"Visit the site ",n.a.createElement("i",{className:"fas fa-laptop"}))),n.a.createElement("p",null,n.a.createElement("a",{className:"git-button",href:"#"},"See the code ",n.a.createElement("i",{className:"fab fa-github"}))))))},ee=t(53),ae=t.n(ee),te=t(54),le=t.n(te),ne=t(55),ce=t.n(ne),se=Object(b.css)({border:"6px solid ".concat(N)}),re=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row p-3"},n.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4 col-xl-4"},n.a.createElement(L.a,se,n.a.createElement(L.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:ae.a,alt:"First slide"})),n.a.createElement(L.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:le.a,alt:"Second slide"})),n.a.createElement(L.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:ce.a,alt:"Third slide"}))),n.a.createElement("p",{className:"pt-2 hashtag-text"},n.a.createElement("em",null,"#rubyonrails #spotifyAPI #mapboxAPI"))),n.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-8 col-xl-8 pt-2 text-left"},n.a.createElement("h5",{className:"pb-2"},"A mobile web-app for requesting songs in bars and clubs"),n.a.createElement("h6",null,"Features for Bars:"),n.a.createElement("ol",null,n.a.createElement("li",null,"It uses Soptify's API to add songs to a playlist's queue and display which song is currently playing"),n.a.createElement("li",null,"Once a song has been added to a playlist's queue, the request button disappears and other users cannot request the same song")),n.a.createElement("h6",null,"Features for Clubs:"),n.a.createElement("ol",null,n.a.createElement("li",null,"A DJ can upload their playlist for an event at a certain venue."),n.a.createElement("li",null,"Clubbers can search through this playlist and can request the songs they want."),n.a.createElement("li",null,"The DJ has a dashboard where they can see the top requested songs of the night."),n.a.createElement("li",null,"Once the DJ has played the track, all users will see this on their dashboard and they cannot vote again.")),n.a.createElement("p",null,n.a.createElement("a",{className:"git-button",href:"#"},"Visit the site ",n.a.createElement("i",{className:"fas fa-laptop"}))),n.a.createElement("p",null,n.a.createElement("a",{className:"git-button",href:"#"},"See the code ",n.a.createElement("i",{className:"fab fa-github"}))))))},me=t(56),ie=t.n(me),oe=t(57),Ee=t.n(oe),ue=t(58),he=t.n(ue),de=t(59),pe=t.n(de),fe=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row p-3"},n.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4 col-xl-4"},n.a.createElement(L.a,{style:{border:"6px solid white"}},n.a.createElement(L.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:ie.a,alt:"First slide"})),n.a.createElement(L.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:Ee.a,alt:"Second slide"})),n.a.createElement(L.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:he.a,alt:"Third slide"})),n.a.createElement(L.a.Item,null,n.a.createElement("img",{className:"d-block w-100",src:pe.a,alt:"Third slide"}))),n.a.createElement("p",{className:"pt-2 hashtag-text"},n.a.createElement("em",null,"#rubyonrails #mapboxAPI #cloudinaryAPI"))),n.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-8 col-xl-8 pt-2 text-left"},n.a.createElement("h5",{className:"pb-2"},"A web app for cocktail recipes"),n.a.createElement("h6",null,"Features:"),n.a.createElement("ol",null,n.a.createElement("li",null,"Users can add their own cocktails and upload pictures"),n.a.createElement("li",null,"Each cocktail has a list of ingredients and dosages, which users can edit"),n.a.createElement("li",null,"Give it a go!")),n.a.createElement("p",null,n.a.createElement("a",{className:"git-button",href:"#"},"Visit the site ",n.a.createElement("i",{className:"fas fa-laptop"}))),n.a.createElement("p",null,n.a.createElement("a",{className:"git-button",href:"#"},"See the code ",n.a.createElement("i",{className:"fab fa-github"}))))))},ge=Object(b.css)({backgroundColor:N,color:"white"}),be=Object(b.css)({color:"white",":hover":{textDecoration:"none",color:I}}),Ie=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,null,n.a.createElement(p,{containerClassName:ge,linkClassName:be}),n.a.createElement(O.a,{id:"portfolio-page",fluid:!0,className:"bg-white text-black"},n.a.createElement(T.a.Container,{id:"left-tabs-example",defaultActiveKey:"first"},n.a.createElement(H.a,null,n.a.createElement(U.a,{sm:3},n.a.createElement(K.a,{variant:"pills",className:"flex-column"},n.a.createElement(K.a.Item,null,n.a.createElement(K.a.Link,{eventKey:"first"},"Real Health Matters")),n.a.createElement(K.a.Item,null,n.a.createElement(K.a.Link,{eventKey:"second"},"BeTheDJ")),n.a.createElement(K.a.Item,null,n.a.createElement(K.a.Link,{eventKey:"third"},"Mister Cocktail")))),n.a.createElement(U.a,{sm:9},n.a.createElement(T.a.Content,null,n.a.createElement(T.a.Pane,{eventKey:"first"},"                   ",n.a.createElement(re,null)),n.a.createElement(T.a.Pane,{eventKey:"second"},n.a.createElement($,null),"                    "),n.a.createElement(T.a.Pane,{eventKey:"third"},n.a.createElement(fe,null),"                    "))))))))},Ne=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p,null),n.a.createElement("p",null,"foo"))},Se=t(5),Ce=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement(E.a,null,n.a.createElement("div",null,n.a.createElement(Se.c,null,n.a.createElement(Se.a,{exact:!0,path:"/"},n.a.createElement(q,null)),n.a.createElement(Se.a,{path:"/about"},n.a.createElement(x,null)),n.a.createElement(Se.a,{path:"/portfolio"},n.a.createElement(Ie,null)),n.a.createElement(Se.a,{path:"/contact"},n.a.createElement(Ne,null)))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,a,t){e.exports=t.p+"static/media/bedjevent.8d5361ef.jpg"},49:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAEJCAYAAACzERN4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABvnSURBVHgB7Z1PjB1VdsaPTQM2NqEt2dEgBXV1JCLZUgY7MVnMAj8vYQPIbLIx7d1kE0BkwSYztthkMxqcLMImmmbWWMBmyCp+ZpHF2Bo3iWRLiRRXiwWRjOI2/gODIZ77vbrXLj/Xq7r31q2qW1XfT6p5jaf69Xv156vvnHvuuduEDIq7d+8uqxdsB/UrtpXcz9iS3K+Yf1vElt7mf071z9f1z+a/023btm0JGQ3bhPQOLRSJZEKB15Xcz8vSPRCRDf36uf4Z4rIhZHBQRCJHC8ZBvT2ntok86CT6xkxQ1HZO/7xB59JvKCKRoUQjkUwojGAclOGzobdPJBOVVEhvoIh0jHYaE7UdUdsr0m+XEYq8qEzpVOKGItIB2m28Lpl4TIRUMZX7gsK8SmRQRFpCCcdEMrexJnQbdUjV9rHaPqCgxAFFpEGUcCCf8bJQOJoilUxQTjOP0h0UkcDoHMeaZOIxEdIWcCWnJQt5UiGtQREJhA5X3pBMOGKo1Rgz65KFO1MhjUMRqQFdR/SkajulxGRdSGNQRDzQ4gHX8abQdfSBVLIRnlMMdcJDEXFAD83+XDL3QfrJulBMgkIRsUDnOyAeEyFDYV0oJkGgiJSgncevhOIxZNaFYlKL7UIeAuKhNojHFaGADJ01tV3B+dYPDeIInUgOJkyJ4j1h8ZoTFBGNEhCIx0mheBAODTsxehHRSdNfyjim3BM3UrW9yjk65Yw2J4LQRec9zgoFhBSTqO0i8yXljFJEdOiCpOmaEFLNmtrOqutmTchDjCqc4ZAtCcBUbSeYeL3PaJyIdh8XhQJC6jGRLMR5U8iMwTsRug/SIFOhKxm2E1ECghaEdB+kKSbCXMkwRUSPvGDYdl1Y90GaJVEbRm9+qYsVR8fgwhkdvmDYNhFC2iVV29GxhTeDciK55GkihLRPIiNMug7GiejwhRlzEgsnlSM5JSOg9yKiw5ePhFWnJD5QLv/q0MObXouIXpIBApIIIXGSysDzJL3NiejhWyZQSewkkuVJXpGB0ksRUScErQrXhcO3pB/gOv1IX7eDo3fhjD4RJ4WQfjK4hGuvRERP3V8TQvrNuhKSEzIQeiEiuhIQCdSJEDIMsIYw5t1sSc+JXkS0gLBxEBkiGAI+2nchiTqxSgEhAwfX9dm+d02L1olwDgwZEan0uJYkShGhgJARkqrtUB9Dm+jCmVwSNRFCxkMiWWjTu9qnqJwIcyCE9C/ZGpsTQR0IBYSMGTMfrDdEIyK6kGyw8wsIcWCi74deEIWI6FL2NSGEGNb6Mtem85wI58IQUkr0c206FRE9PbpX8R8hHbCmhOQDiZTORETXgqAfKqfzE1IORmqOxrqweCc5kVwxGQWEkGpMP5JEIqQTJ6IOBhwIh3IJcWNDuZFDEhmtOxGdSKWAEOLOQb2qQVS06kT0ujDvCSGkDm8pRxLNfdSaiDCRSkgwkGg9FMus31ZERM+J4cp0hIQjlUhm/baVE0EeJBFCSCgSye6rzmnciSgXsibZxDpCSHg6L0RrVETYXIiQxuk8P9J0OAMHkgghpCmQb+zU6TcmIno4dyKEkKZB64A3pSMaCWc4nEtI63QW1jTlRGCvKCCEtEdnYU1wEdGjMRMhhLRNJ2FN0HCGozGEdA7CmtU2i9BCOxEWlRHSLQhrWp2kF8yJKBeCmbkXhRASA2hiNJUWCCkiV4QuhJBYaK33SJBwRidTEyGExMLBtpKstZ0Ik6mEREsrSdYQTgSVqYkQQmIDSdbG3UgtJ6JdyBUhhMRK45WsdZ1IL1boImTEwI00ep96OxG6EEJ6xWpTbqSOE6ELIaQ/NDavxsuJ0IUQ0ksaKUDzdSJ0IYT0j0buW2cnQhdCSK8JnhvxcSJ0IYT0l+D3r5MToQshZBDsCVnF6upE6EII6T9Bq1hdnQhn6hLSf4LOqbF2IpypS8hgQBXrmgTC2onQhRAyKKbKiRyVAFg5ESUgE6GAEDIkJvq+ro1tOPO6EEKGxhsSgMpwhsO6hAyWIAlWGycyEULIEAmSYLURkSCWhxASJS9LTUrDGYYyhIwCdD7bEE+qnEhnK40TQlrjFalBlRNhbQghwydVTmRVPFnoRPSKdokQQoZOUqdmpCycWRNCyFiYiCcLwxmGMoSMCu+QptCJMJQhZHQgpFkRDxaFMxMhhIyNE+LBIhGpXYBCCOkdR8SDh3IiytKgFPaaEELGiHPrxCInMhFCyFiZiCNFIsJQhpDxMhFHisIZDu0SMl6ch3ofcCJ6wl0ihJCx4jzUOx/OHBRCyNhx6r06LyLMhxBCnMzEUp1fXsTt7+9KevMHufrND9a/8/y+x+SJJeelgYkH5778vfW++3Y+IsnuR3huxoVTvcg9EdH1IbVF5NMvvpUPr3wzExIXDux5lBdqS7x/+Za48uIzj8vxZ3cJGQUHoQe29SL5cKa2gPz6v2/PNlcBIfHz6Re/l3d+e53ndjxY68GSzy8VAYsMF0KGy6YKUX+jzvFrqzulCy5c/U4ufHXHev8Xnn5cDiwvCfECejC12TF/hL3q5g3/2rGA4Al5K/eU3KVCI4ZH4cGD4qVndnRybJFnc8nn7IeAUER8ec52x/wRTsQTk0hti6vf/v/sqYQn46Vrd2b/vQhc7MmTS7JvxzZZ2b00y72sqERhEXi/W665HIeL9NLW95X72L4fvnPZ9y4iRILUnGs+4QfPxHbHIOFMWwKCp9BnX36nbkZ7S4uLHkKT8d3sf/ft2K7EZEklC3c+ICiw6p85POlwQ/7TT5atbkwI1Lu/+7pyv395YY/V+525clsdj+/EBbx3CDZvfE8RGT6JbXJ1lljVTYiiBU/wv/33rdmogouALAJPcNyASBS+e/HGvX93vTFcHFh6o9qFzPazfL9L1+zez7A/4OjXLSZXx0Jis9N2l5274IwaLsYT3NW623LfpWS1Kq4grLLa7yu7/fKfZxFwNa7Hg86BeGBlLra77Nw2GC5GzUlbzPInC/Ili7C56bP97BzGZYu8ia2ryYNcECGOJDY7mceTdSY2JHt3LG42DwfSxZAxbL9LjgeuAGFNWaiQ7WPnHGwEwtbVGPDZ8k4kf9y/asjhkUFgNRHPXFnL0jJ//xd/tNBiw6q36UDyHFYhjat4nVchzZGnH1/4/9u6FQBBguislDgiW1djWHnyweOMZLABx/qd335tLXJkVMQbzsw/Ged5/9JN6YpsGNRmnfP7bFY4F9dkcJnoIMnsesM/v3dxKIORqmS32/cloyGx2Wm7njPTqhPZVWH9beopmiLLi7jdVFXJVVfnUBZObTIfQtpjWetDKbhbEomI81fd4v0m2O9405UVfrnkQwxlonTB8fjAaaw4JosJyfFU1Q6IKVrPh5Rx+ZpfHQgcxIvP7Jg9dfflEoemHB5PcDgchApVk8jwHmccczK4ufH357nk8X3w+SBK+woSz64ubT4fQogjh9S2WbYDrrBEIsJnlihutn/4q6dKR0iQg3nxmexnTOKC41lUnYp9kRdxcRCLQpALns4K4jOfrPUJ8w7vZShDalFpMqITEZ9qyGOrO52qMXFjYcNs1EWjQAf2PKIEwF5EZmKx/+F+G+lNv1GPomStjyDFng8xYSBekSvDAyGmiZPGyZpXM7Fz347RJKOtRCSqcMYH32pWXAh/s7+40c6B5UfVTVtvaNZnJOXe7xaEQa5JVXyW2C52HBOIoZk4WeQ8s9E7JfT7Hn0oPG3j8yGkxrSC9Ob3pc44yzctWX9OOOBbd+yuB4jVYYcKapf3Bg6dBJOqHYKIiM+IwSJWnnzEWRRQ14FhzJDxP04gKmZdwI2RF5E6x2W+iG02kTCSfIiPaOOzn/mfb6yGu/FdUVBniuqOPP2YcptPSJMgB4aHBoTDliyh/vDnXCQmmEDq4iZtJ2OCX//XLevzgs9XVtc0R2ViFd/WayVwAz54yMpSKLsruOjeOf+1vH/5ZrA5NpmtdhzqnWuYc6HmSFM+z+KToH2+oXwIvpftcca5efd3N2bzn3wnT2KyJH7fN+lehpncibDWRUCKwOfMJooWX4dFifcyfmN5X0GcXK77Y25NpSqnfns9qkweASXTSFC6JkNLE6AeIyMGnERseI8XfvSYi9oWApvq0hoAJet59+CbDzHgZjVFeT5JVdt8yN6dyj05vD++I26Ww3sfmzlHgGM9/wTGhR1q8qRP/5Qq8PBzdZs24BpEOISq7PwxwbnEZnsuP7XsIudyjeLzOE40tXIizuEMbnJsUECv0ZSdi+sWzIGuA57aaBtQ9lSwoU5rgDr5EEM+uer6FHaZ+p941pHAxptrYf4YhxSQJsBnbkJADNl0gusPhbQueQ6bEBZ/x+UB49ESIqnawUtE6lI17HjsT8PEv6ZviK+Y+LQGMGFHiDyRmYyHz+3a+MlFGOo6tiJiFhA4vDbmZkEEfvGfD153ONYuYXKVK3dpFwma6I/beuoefS+rLlo4gGOBv6yPmPi0BjBT+evmQ4B5EvkIkssTzxTqhaLImcQCPleTDqTo7+WX6MiOtb1oVxVHuoQy+xsa6WrViUBA/u7HT1rtC8U81oBqGjGxzbu4lsCbk25jMW0ECgJSd+q/DceffSKIkGTuz+3p2CZoK+kqcBhxQ+d4bBBn1xsR10T+engpUIIV7+nyXV76Ey/HGUedCC5q1GMcdgwPjPU604D1hJ3FSXj7z3eXxog+rQFsrLK5MNOKp6KPE/Ed2oWQwCX+4j9ueDuJqsbZXZL127U/ljhHb6uHXpFowGnC0dh+V1zDBw5lD1Aj8ra5DPytojDksy/tr0t8h8Me4blYikjj4OSZA+76tMPBw4XdRIyNCx7Jr7KSeZ+ko43o4Ea3GT2xmeszj+/QLi5qtGGoc5x9lw6BS31N5cJMR3qTpM6ac4dxNucdhqZx0/1Mja4sui5wQ+Ic2vZiMefRvB/yfpcsGncDM7M97y5Nvs+WYw2uFdRaTsTEoj6uAif0H3+yPDsQoWM6fK5/Lulf4hMa2DArjrPoXeIz+uVT6o6nXV2h9kkAg58ql/oz3aTK3GTmuMPB4tyHOO+XHepUbKZS4DO55DfyYR6+m8sDaj7H5lo31OT0h9aneMLqI8/gc2MaV2KeTqGcCYrE5pU+Dz5v6B4nJuRwrUWpwnfqf4hko08C+Jg+p2XgO6Hmom4Hts0bbm0vbcLSTQfRnBfYv1RuJr1p91DFNf9aTthcHsYvFNTwhKSTeeL5IipXcDBwMLHhwIYaCcjHrPPUKYArIj+nBU+jzyQcPvmQc4EE2dWF4IawHXLMSrUfq1Ud7fL5mujvOy+ySLBijWMbYYQjxXlCOsA5oRpw5K0IL3lCo9+9NWZbhhj+BHiCwerCDtdV2rLcg2kNEIr8je6Z7FqIz9T/TY8QBOD8m2sBuIZeroJXZ3ZvDMne+eOD7wNhtMVMq3BJqO4vWfExFF52IN/ot6nSYRcgJibMqeNM8HuLDjhaJl7aCnMh5hOfZo5OqEbJPrGvbxgy7yJch3ZHNJ1+IS6jf3jQ4QF8/qr9+Tryo7APqSJwFiuXySsD9urFhu2SLRASjLT4lnGXLdcQ0jHM3+jIi4QAN2UbNyaebq81mO0fE67TPPDAtn3gOM7WXYTVMpq1RASEHL2om+OARfzpgd3iQ5kdDyUiKwWLaoc6fvv3tNOAaNHn3eUYbnDNmwyXaR4u90aga9ZuLd66PPFouKcfMuKo3agzcc43BrxV0YAmRF6kKNwINfz2fMetEH0qOV3yKF99679wfKjz1wShc26GtiKEKLv4ZpnobFo/BAGWbFacZfnE9s2sVz1JQwzHFj0dTBhSN/nXdStEn1Dqwyu35fizuyr3w3F3Ka4q4o93bFMjNHb7NlGTVHZ9od4k5AhgwGHdSieCuzKViBf0xsiBSdzOJsQpMTFDpLNel7qtwO07Wb8JdKfybX5TddAhYnVFZFG+BqHI1Rrv7THFOzg+IoYhzl3qKVxWURkqee+yRCqSza+t2s3zCgGGYUOKSMCZ2VYiUjsn0hbZ3Ic7Xl2+bKgackRrgPyMTFfKbvS6ApU0PIxng+ucEMOHujcNXNrM2qvwGA+FTV32Hmp41mUkBMOpCKnL2h3aMDsWd+9WCuwTuqdqiPIHfN4mqqwXgb90XYjVyIbp8u17UZfd6HUFKnS9iS/4HD7VvabN5qdfSGOYUnNbN2I6lB3Ys6TCgx335vUUkV/fCN8FAmi6/sFl2bg05DBCiEjgeTJp1Q6dOBGfZSGaxvbA+8zqzf/uIuoKVJtPnjJgoz+88m20C4TjPKNRkC1mopvJx+A8zec2zJISdXFtn1iER/vDKipNBh69qbTM7UAHPRQuB77OE78q5PB977pDuyGrOXGTHX823hoSEzL5YlYnzG8hr+W6jrKB3Fi8OREM4x7OrX2BxFJXiUH00Wi6H6nNyfUdmnYd2jUTy2Zr5dz4IXhJONwIesKe+9/u11UuAj1CcP3F2PekrpNroAgwrdohSLGZDyYGNo1+uwpxYG9dWwn6PMlsfsfXhrqOiphjjuPvO5JVxfE/2xVFsrcInMP5Tuyx4No+MU9D7Q/Tqh3wFzdkhMwqW/fv8lJun/DB5kb36emK31mJ8GY1N2rIhG/IG8Ss3/xCA02q6+I767aheTLtlL2HJPSFVwS6aOEC8h1L96mHsHUvrgIV81q7EBK0n0S4WFcAMHLx9o/D1m2Ytp0hZoGX4TodwMftBponU0RatcPStm3btu7evQshiWJN3ixDvTtbT0M3uMWwme90dUM27frx2ok18xldZt66CAPe22WY83AHpe6uNwUEAMcduZjLjj1YTdtEHJemchhmFjiuNbPUZZ1kqXGHEPgDng24XNonzvZvZkLkFvShaqfZ1aBE5KJ6OSie4OSig3odqlrgmZ6bZhweGxYwNuPzeWY1HzsfmV3s5mRy2vl9/vrf/k/qAHdRxy3iZsUDAg+GW3ceXNnOnDvceA6LTgfHPLxmLR9z6//kwfVlqqZNnREqqvfV6LUTGVMlIkerdjIS+bnUEJHQPTGKMBYvlnqIMVN3ofA+nEdeazOsClHN4zmVmvhmlEm/aLpfJ4kKq0GXYCKCjDIvrmFj+tuS0eAkIrWHec2QHi3gMDEd1/mgGBWpzU5LLjtXYS40JKUu6IWCkDizYdcwElG9YL+l0O96dPu9ldP4cBgfKqlqZS7u3blqhOaKRNxXhBDSKhtKRA7Z7Jj3pueEEEIyNm13zIvIKMvfCSGFTG13pIgQQoqw1oN8TgRl79eEEEJE9tiUvIN7TkT/At0IIWTDVkDA/KA/k6uEECczsb3OLxNCBsknLjvPi8hUCCFjx9+JqDgolQ4aNxNCoiHVOmBN0UQIJytDCBkUU3Fke4g3IYQMBmcT8dCsN9aLEDJq9rgM74KHnIh+g6kQQsbG1FVAwKLmEKwXIWR8eOVDF4nIuhBCxsZUPFjYCYj9RQgZFRjaXRUPynrdfSCEkLHgXdpRJiJTIYSMhXXxpLSxKUMaQkaBdygDqlp3M6QhZPjUqlKvciJYFe+iEEKGzKrrfJk8pU5Et4yfCiFkqGzUERBgsxIRJ+QRMlxOS00qV4zSc2mQYF0WQsjQWG3ciXAuDSGDZb2ugADbhVVrWx5CSHQEGX21XgBXhTVn1ctECCFDoFZtSB6XJd6ZYCVkOJySQLg4ESZYCRkGwVwIsHYiOsHK3Agh/WcqAbF2IoCtEwkZBKshRmUMLjkR40Y4n4aQ/rIeUkCAkxMByo0kkuVGCCH9YzW0iDg5EaA/wFQIIX0juAsBzk4EKDcyUS9nhRDSJ1abEBFnJwLUB5kK3QghfaIRFwK8nAhgboSQXrHalIh4ORGgPxBHagiJn8ZcCPB2IkC7EXQ+YxUrIfGy2qSIeDsRoD8Yq1gJiZfTTQoIqOVEAOfUEBItqdqONi0itZwI0FWswWYEEkKCcappAQG1nYhBORLkRg4KISQGgs7ULaO2E8nxlhBCYuFVaYlgIqIL0DjkS0j3rOvlXlohWDgDmGQlpHNSaSGZmidkOMMkKyHdc6pNAQFBnYiBTZ0J6YSpEpCj0jJNiUgirGQlpE0QBRxq24WAoOGMQX8RhjWEtMepLgQENOJEDAxrCGmFTsIYQ9MikgjDGkKaJJWWR2PmaSScMegvxiI0QprjVJcCAhoVEaC+4Lpwpi8hTXBa31+d0mg4Y9BFaAhrEiGEhCCVbDRmSzqmFREBzI8QEozOhnOLaDycMXDYl5BgdJ4HydOaiAD1xd8T5kcIqcMpfR9FQ2vhTB72HiHEiw0lIIckMlp1IjnQ6yAVQogtqbTYI8SFTpwIUG4ETgQVrUy0ElJOVInUebpyIqKbprAQjZBqTsQqIKAzEQG6UIYjNoQsBonUjyViOgtn8qjQ5qR6+bkQQvJAQE5K5EQhIkAJybp6eV0IIeADJSBr0gOiERHA1gGEzPhYCUiUIzFFxCYiGKmBkLCGhIwVDDgcjWFOjC1RiQigkJAR0zsBAdGJCOCsXzJCUum4uZAvnQ7xLkIrMdq9pULI8EmlpwICohQRoA8ohKS1lbwI6QBc39FWo9oQZTiThzkSMmB6mQOZJ1onYsiFNlFX7RHiyFQGICAgehEBONB63JwLhpMhgEKyQQgI6IWIGHQFH+fakD5zqi+VqLZEnxMpgnNtSE/pxVwYV3opIkAJySvq5VfCfiQkfhC2vBXD8g5N0FsRAbqDPEZuEiEkTlK1var75wySXuVE5mEtCYkcM4Q76Ouz1yICICS6eS0TriQmsDpdr4vIbOm9iBh0wgrtFgcxbEZ6i8l/vCkjodc5kSKYJyEdkkqP58D4MhgnYtAnEOENF8kibYLrbRThyzyDcyJ5lCtZk6yeJBFCmmHQw7c2DFpEgA5vUE8yEULCMpXIl3Nog8GFM/Po0RsMAzPpSkJh3Mfo8h9FDN6J5KErIQGYCt3HAwzeieTJuZITwq5pxA26jwWMyonk0a7kpHCtG1LNumQCwnC4gNGKiEEvLP6RcASHPMxsvWglHlMhCxlVOFME5jWobVUY4pD7mNDlEAWkmtE7kTw6xEG58htCxgjEA0Vj7zF0sYciUgDzJaNkXbKmQakQJygiJVBMRsFUOGRbi9HnRMrQQ8Jr6kfkTNgkelhMJZssxyHbmtCJOEBnMgjWhWFLUCgiHuTE5IhwaLgPMGHaIBSRmnCmcNRM1faJ2tYpHs1BEQmEEpOJelkThjpdA7GYStaecCqkcSgigdGhzkSyWhOuH9weU6Hr6ASKSIPkitdeFoY7TZBKNmr28dA7qscMRaQl9BydNaGg1CWVTDimDFfigCLSAVpQJpIJykRIFVO1nZMsVEmFRAVFpGOUoGAZ0InasCwoh4wzUsnyG1PJHAdzHBFDEYkMnUeBU4GoPCfjSM4in3FOv07pNvoFRSRytFM5qDfjVPosLKlkDuNzyURjg06j31BEeorOqySSCQocixGbZekeiEIqmUhs5n5OKRjDgyIyMLRzSSQTkyT381NyP9+yLPfFJv9zEVvyYJf8NPdv1+f+G0KxRaEYF38AyDLOuDGNrSIAAAAASUVORK5CYII="},50:function(e,a,t){e.exports=t.p+"static/media/bedjlist.719db299.jpg"},51:function(e,a,t){e.exports=t.p+"static/media/bedjmap.5b3ad267.jpg"},52:function(e,a,t){e.exports=t.p+"static/media/bedjplay.f33569ab.jpg"},53:function(e,a,t){e.exports=t.p+"static/media/RHM1.4d97feaf.jpg"},54:function(e,a,t){e.exports=t.p+"static/media/RHM2.b49092e6.jpg"},55:function(e,a,t){e.exports=t.p+"static/media/RHM3.401ff02e.jpg"},56:function(e,a,t){e.exports=t.p+"static/media/c1.fb9d0938.jpg"},57:function(e,a,t){e.exports=t.p+"static/media/c2.a1017dcf.jpg"},58:function(e,a,t){e.exports=t.p+"static/media/c3.21e9aa88.jpg"},59:function(e,a,t){e.exports=t.p+"static/media/c4.063709c8.jpg"},62:function(e,a,t){e.exports=t(107)},67:function(e,a,t){},68:function(e,a,t){}},[[62,1,2]]]);
//# sourceMappingURL=main.aec1e0fc.chunk.js.map