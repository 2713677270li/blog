(this.webpackJsonprealword=this.webpackJsonprealword||[]).push([[0],{15:function(e,t,s){var a=s(21).create({baseURL:"https://conduit.productionready.io"});e.exports={obj:a}},43:function(e,t,s){},50:function(e,t,s){},70:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(35),i=s.n(n),r=(s(43),s(3)),l=s(4),o=s(6),j=s(5),d=s(13),h=s(2),b=s(8),m=s.n(b),u=s(17),x=s.n(u),O=s(0),p=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={auth:""},a}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;x.a.subscribe("auth",(function(t,s){console.log("22222222222"+t),e.setState({auth:s})}))}},{key:"render",value:function(){return m.a.get("auth")?Object(O.jsx)("div",{children:Object(O.jsx)("nav",{className:"navbar navbar-light",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("a",{className:"navbar-brand",href:"index.html",children:"conduit"}),Object(O.jsxs)("ul",{className:"nav navbar-nav pull-xs-right",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(d.b,{className:"nav-link active",to:"/",children:"Home"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsxs)(d.b,{className:"nav-link",to:"/editor",activeClassName:"active",children:[Object(O.jsx)("i",{className:"ion-compose"}),"\xa0New Article"]})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsxs)(d.b,{className:"nav-link",to:"/settings",activeClassName:"active",children:[Object(O.jsx)("i",{className:"ion-gear-a"}),"\xa0Settings"]})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsxs)(d.b,{className:"nav-link ng-binding active","ui-sref-active":"active","ui-sref":"app.profile.main({ username: $ctrl.currentUser.username })",to:"/profile",activeClassName:"active",children:[Object(O.jsx)("img",{className:"user-pic","ng-src":"https://z3.ax1x.com/2021/04/29/gkhwLD.jpg",src:"https://z3.ax1x.com/2021/04/29/gkhwLD.jpg"}),"@niu"]})})]})]})})}):Object(O.jsx)("div",{children:Object(O.jsx)("nav",{className:"navbar navbar-light",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("a",{className:"navbar-brand",href:"index.html",children:"conduit"}),Object(O.jsxs)("ul",{className:"nav navbar-nav pull-xs-right",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(d.b,{className:"nav-link active",to:"/",children:"Home"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(d.b,{className:"nav-link",to:"/login",activeClassName:"active",children:"Sign in"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(d.b,{className:"nav-link",to:"/register",activeClassName:"active",children:"Sign up"})})]})]})})})}}]),s}(c.a.Component),v=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={},a}return Object(l.a)(s,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("footer",{children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("a",{href:"/",className:"logo-font",children:"conduit"}),Object(O.jsxs)("span",{className:"attribution",children:["An interactive learning project from ",Object(O.jsx)("a",{href:"https://thinkster.io",children:"Thinkster"}),". Code & design licensed under MIT."]})]})})})}}]),s}(c.a.Component),f=(s(50),s(24)),g=s.n(f),N=s(37),k=s(14),y=s(15),w=function(e){var t=e.slug;return y.obj.interceptors.request.use((function(e){return e.headers.Authorization=" Token "+m.a.get("auth"),e}),(function(e){return Promise.reject(e)})),Object(y.obj)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},S=function(e){var t=e.slug;return y.obj.interceptors.request.use((function(e){return e.headers.Authorization="Token "+m.a.get("auth"),e}),(function(e){return Promise.reject(e)})),Object(y.obj)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},C=s(38),D=s.n(C),T=s(15).obj,P=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={list:{articles:[]},tags:[],columepage:0,rows:10,articlesCount:0,pagestate:1,favoritedisabled:!1},a.componentDidMount=a.componentDidMount.bind(Object(k.a)(a)),a}return Object(l.a)(s,[{key:"rows",value:function(e,t){var s=this;t.preventDefault(),T({method:"get",url:"/api/articles",params:{limit:10,offset:10*(e-1)}}).then((function(t){s.setState({list:t.data,pagestate:e})}))}},{key:"favorite",value:function(){var e=Object(N.a)(g.a.mark((function e(t){var s,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({favoritedisabled:!0});case 2:if(!t.favorited){e.next=13;break}return e.next=5,S(t).then((function(e){}));case 5:return t.favorited=!1,t.favoritesCount+=-1,s=this.state.list.articles.indexOf(t),this.state.list.articles[s]=t,e.next=11,this.setState({articles:this.state.list.articles});case 11:e.next=21;break;case 13:return e.next=15,w(t).then((function(e){}));case 15:return t.favorited=!0,t.favoritesCount+=1,a=this.state.list.articles.indexOf(t),this.state.list.articles[a]=t,e.next=21,this.setState({articles:this.state.list.articles});case 21:return e.next=23,this.setState({favoritedisabled:!1});case 23:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this;T({method:"get",url:"/api/articles"}).then((function(t){console.log(t),e.setState({list:t.data,articlesCount:t.data.articlesCount/10})})),T({method:"get",url:"/api/tags?limit=10"}).then((function(t){e.setState({tags:t.data.tags})}))}},{key:"render",value:function(){var e=this;return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"home-page",children:[Object(O.jsx)("div",{className:"banner",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h1",{className:"logo-font",children:"conduit"}),Object(O.jsx)("p",{children:"A place to share your knowledge."})]})}),Object(O.jsxs)("div",{className:"container page",children:[Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col-md-9",children:[Object(O.jsx)("div",{className:"feed-toggle",children:Object(O.jsxs)("ul",{className:"nav nav-pills outline-active",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{className:"nav-link disabled",href:"",children:"Your Feed"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{className:"nav-link active",href:"",children:"Global Feed"})})]})}),Object(O.jsx)("div",{className:"article-preview",children:this.state.list.articles.map((function(t,s){return Object(O.jsxs)("div",{className:"article-meta",children:[Object(O.jsx)("img",{src:t.author.image}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("a",{href:"",className:"author",children:t.author.username}),Object(O.jsx)("span",{className:"date",children:D()(t.createdAt).format("YYYY-MM-DD")})]}),Object(O.jsxs)("button",{className:"btn btn-outline-primary btn-sm pull-xs-right",onClick:e.favorite.bind(e,t),disabled:e.state.favoritedisabled,children:[Object(O.jsx)("i",{className:"ion-heart"})," ",t.favoritesCount]}),Object(O.jsxs)("a",{href:"/crctle",className:"preview-link",children:[Object(O.jsx)("h1",{children:t.title}),Object(O.jsx)("p",{children:t.body}),Object(O.jsx)("span",{children:"Read more..."})]})]},s)}))})]}),Object(O.jsx)("div",{className:"col-md-3",children:Object(O.jsxs)("div",{className:"sidebar",children:[Object(O.jsx)("p",{children:"Popular Tags"}),Object(O.jsx)("div",{className:"tag-list",children:this.state.tags.map((function(e,t){return Object(O.jsx)("a",{href:"",className:"tag-pill tag-default",children:e},t)}))})]})})]}),Object(O.jsx)("ul",{className:"pagination",children:Array.from({length:this.state.articlesCount},(function(e,t){return t+1})).map((function(t,s){return Object(O.jsx)("li",{className:e.state.pagestate==t?"page-item active":"page-item",children:Object(O.jsx)("a",{className:"page-link ",href:"",onClick:e.rows.bind(e,t),children:t})},s)}))})]})]})})}}]),s}(c.a.Component),A=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={},a}return Object(l.a)(s,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"article-page",children:[Object(O.jsx)("div",{className:"banner",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h1",{children:"How to build webapps that scale"}),Object(O.jsxs)("div",{className:"article-meta",children:[Object(O.jsx)("a",{href:"",children:Object(O.jsx)("img",{src:"http://i.imgur.com/Qr71crq.jpg"})}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("a",{href:"",className:"author",children:"Eric Simons"}),Object(O.jsx)("span",{className:"date",children:"January 20th"})]}),Object(O.jsxs)("button",{className:"btn btn-sm btn-outline-secondary",children:[Object(O.jsx)("i",{className:"ion-plus-round"}),"\xa0 Follow Eric Simons ",Object(O.jsx)("span",{className:"counter",children:"(10)"})]}),"\xa0\xa0",Object(O.jsxs)("button",{className:"btn btn-sm btn-outline-primary",children:[Object(O.jsx)("i",{className:"ion-heart"}),"\xa0 Favorite Post ",Object(O.jsx)("span",{className:"counter",children:"(29)"})]})]})]})}),Object(O.jsxs)("div",{className:"container page",children:[Object(O.jsx)("div",{className:"row article-content",children:Object(O.jsxs)("div",{className:"col-md-12",children:[Object(O.jsx)("p",{children:"Web development technologies have evolved at an incredible clip over the past few years."}),Object(O.jsx)("h2",{id:"introducing-ionic",children:"Introducing RealWorld."}),Object(O.jsx)("p",{children:"It's a great solution for learning how other frameworks work."})]})}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"article-actions",children:Object(O.jsxs)("div",{className:"article-meta",children:[Object(O.jsx)("a",{href:"profile.html",children:Object(O.jsx)("img",{src:"http://i.imgur.com/Qr71crq.jpg"})}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("a",{href:"",className:"author",children:"Eric Simons"}),Object(O.jsx)("span",{className:"date",children:"January 20th"})]}),Object(O.jsxs)("button",{className:"btn btn-sm btn-outline-secondary",children:[Object(O.jsx)("i",{className:"ion-plus-round"}),"\xa0 Follow Eric Simons ",Object(O.jsx)("span",{className:"counter",children:"(10)"})]}),"\xa0",Object(O.jsxs)("button",{className:"btn btn-sm btn-outline-primary",children:[Object(O.jsx)("i",{className:"ion-heart"}),"\xa0 Favorite Post ",Object(O.jsx)("span",{className:"counter",children:"(29)"})]})]})}),Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-xs-12 col-md-8 offset-md-2",children:[Object(O.jsxs)("form",{className:"card comment-form",children:[Object(O.jsx)("div",{className:"card-block",children:Object(O.jsx)("textarea",{className:"form-control",placeholder:"Write a comment...",rows:"3"})}),Object(O.jsxs)("div",{className:"card-footer",children:[Object(O.jsx)("img",{src:"http://i.imgur.com/Qr71crq.jpg",className:"comment-author-img"}),Object(O.jsx)("button",{className:"btn btn-sm btn-primary",children:"Post Comment"})]})]}),Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("div",{className:"card-block",children:Object(O.jsx)("p",{className:"card-text",children:"With supporting text below as a natural lead-in to additional content."})}),Object(O.jsxs)("div",{className:"card-footer",children:[Object(O.jsx)("a",{href:"",className:"comment-author",children:Object(O.jsx)("img",{src:"http://i.imgur.com/Qr71crq.jpg",className:"comment-author-img"})}),"\xa0",Object(O.jsx)("a",{href:"",className:"comment-author",children:"Jacob Schmidt"}),Object(O.jsx)("span",{className:"date-posted",children:"Dec 29th"})]})]}),Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("div",{className:"card-block",children:Object(O.jsx)("p",{className:"card-text",children:"With supporting text below as a natural lead-in to additional content."})}),Object(O.jsxs)("div",{className:"card-footer",children:[Object(O.jsx)("a",{href:"",className:"comment-author",children:Object(O.jsx)("img",{src:"http://i.imgur.com/Qr71crq.jpg",className:"comment-author-img"})}),"\xa0",Object(O.jsx)("a",{href:"",className:"comment-author",children:"Jacob Schmidt"}),Object(O.jsx)("span",{className:"date-posted",children:"Dec 29th"}),Object(O.jsxs)("span",{className:"mod-options",children:[Object(O.jsx)("i",{className:"ion-edit"}),Object(O.jsx)("i",{className:"ion-trash-a"})]})]})]})]})})]})]})})}}]),s}(c.a.Component),E=s(21),F=s.n(E).a.create({baseURL:"https://conduit.productionready.io"});m.a.get("auth")&&(console.log(m.a.get("auth")),F.interceptors.request.use((function(e){return e.headers.Authorization="Token ".concat(m.a.get("auth")),e}),(function(e){return Promise.reject(e)})));var M=F,q=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={title1:"",about2:"",markdown3:"",tags4:""},a}return Object(l.a)(s,[{key:"title1",value:function(e){this.setState({title1:e.target.value})}},{key:"about2",value:function(e){this.setState({about2:e.target.value})}},{key:"markdown3",value:function(e){this.setState({markdown3:e.target.value})}},{key:"tags4",value:function(e){this.setState({tags4:e.target.value})}},{key:"componentDidMount",value:function(){}},{key:"submit",value:function(e){e.preventDefault()}},{key:"click",value:function(){var e=this;M({method:"post",url:"/api/articles",params:{article:{title:this.state.title1,description:this.state.about2,body:this.state.markdown3,tagList:[this.state.tags4]}}}).then((function(t){console.log("1111111111111"+t),e.setState({title1:"",about2:"",markdown3:"",tags4:""})}))}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"editor-page",children:Object(O.jsx)("div",{className:"container page",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-md-10 offset-md-1 col-xs-12",children:Object(O.jsx)("form",{onSubmit:this.submit.bind(this),children:Object(O.jsxs)("fieldset",{children:[Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Article Title",value:this.state.title1,onChange:this.title1.bind(this)})}),Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("input",{type:"text",className:"form-control",placeholder:"What's this article about?",value:this.state.about2,onChange:this.about2.bind(this)})}),Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("textarea",{className:"form-control",rows:"8",placeholder:"Write your article (in markdown) ",value:this.state.markdown3,onChange:this.markdown3.bind(this)})}),Object(O.jsxs)("fieldset",{className:"form-group",children:[Object(O.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter tags",value:this.state.tags4,onChange:this.tags4.bind(this)}),Object(O.jsx)("div",{className:"tag-list"})]}),Object(O.jsx)("button",{className:"btn btn-lg pull-xs-right btn-primary",type:"button",onClick:this.click.bind(this),children:"Publish Article"})]})})})})})})})}}]),s}(c.a.Component),L=s(15).obj,J=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).blur=a.blur.bind(Object(k.a)(a)),a}return Object(l.a)(s,[{key:"blur",value:function(e){var t=e.target.value;x.a.publish("value",t)}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("input",{className:"form-control form-control-lg",type:"text",placeholder:"Your Name",onBlur:this.blur})})})}}]),s}(c.a.Component),Y=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={username:"",email:"2713677270@qq.com",password:"123123"},a.email=a.email.bind(Object(k.a)(a)),a.password=a.password.bind(Object(k.a)(a)),a}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;x.a.subscribe("value",(function(t,s){e.setState({username:s})}))}},{key:"islogin",value:function(){return"/login"===this.props.match.path}},{key:"email",value:function(e){this.setState({email:e.target.value})}},{key:"password",value:function(e){this.setState({password:e.target.value})}},{key:"tijiao",value:function(e){var t=this;e.preventDefault();var s={username:this.state.username?this.state.username:"",email:this.state.email,password:this.state.password};L({method:"post",url:this.state.username?"/api/users":"/api/users/login",data:{user:s}}).then((function(e){console.log(e,"res"),console.log(e.data.user.token),m.a.set("auth",e.data.user.token),t.props.history.push("/"),x.a.publish("auth",e.data.user.token)}))}},{key:"render",value:function(){return console.log(this.state),Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"auth-page",children:Object(O.jsx)("div",{className:"container page",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-md-6 offset-md-3 col-xs-12",children:[Object(O.jsx)("h1",{className:"text-xs-center",children:this.islogin()?"sign in":"sign up"}),Object(O.jsx)("p",{className:"text-xs-center",children:Object(O.jsx)("a",{href:"",children:this.islogin()?"Need an account":" Have an account"})}),Object(O.jsx)("ul",{className:"error-messages",children:Object(O.jsx)("li",{children:"That email is already taken"})}),Object(O.jsxs)("form",{onSubmit:this.tijiao.bind(this),children:[this.islogin()?"":Object(O.jsx)(J,{}),Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("input",{className:"form-control form-control-lg",type:"text",placeholder:"Email",onBlur:this.email})}),Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("input",{className:"form-control form-control-lg",type:"password",placeholder:"Password",onBlur:this.password})}),Object(O.jsx)("button",{className:"btn btn-lg btn-primary pull-xs-right",children:this.islogin()?" Sign in":"  Sign up"})]})]})})})})})}}]),s}(c.a.Component),H=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={},a}return Object(l.a)(s,[{key:"remove",value:function(){m.a.get("auth")&&(this.setState({}),m.a.remove("auth"),this.props.history.push("/"))}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"profile-page",children:[Object(O.jsx)("div",{className:"user-info",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-xs-12 col-md-10 offset-md-1",children:[Object(O.jsx)("img",{src:"https://z3.ax1x.com/2021/04/29/gkhwLD.jpg",className:"user-img"}),Object(O.jsx)("h4",{children:"Eric Simons"}),Object(O.jsx)("p",{children:"Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the Hunger Games"}),Object(O.jsxs)("button",{className:"btn btn-sm btn-outline-secondary action-btn",onClick:this.remove.bind(this),children:[Object(O.jsx)("i",{className:"ion-plus-round"}),"\xa0 \u9000\u51fa"]}),Object(O.jsxs)("button",{className:"btn btn-sm btn-outline-secondary action-btn",children:[Object(O.jsx)("i",{className:"ion-plus-round"}),"\xa0 Follow Eric Simons"]})]})})})}),Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-xs-12 col-md-10 offset-md-1",children:[Object(O.jsx)("div",{className:"articles-toggle",children:Object(O.jsxs)("ul",{className:"nav nav-pills outline-active",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{className:"nav-link active",href:"",children:"My Articles"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{className:"nav-link",href:"",children:"Favorited Articles"})})]})}),Object(O.jsxs)("div",{className:"article-preview",children:[Object(O.jsxs)("div",{className:"article-meta",children:[Object(O.jsx)("a",{href:"",children:Object(O.jsx)("img",{src:"http://i.imgur.com/Qr71crq.jpg"})}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("a",{href:"",className:"author",children:"Eric Simons"}),Object(O.jsx)("span",{className:"date",children:"January 20th"})]}),Object(O.jsxs)("button",{className:"btn btn-outline-primary btn-sm pull-xs-right",children:[Object(O.jsx)("i",{className:"ion-heart"})," 29"]})]}),Object(O.jsxs)("a",{href:"",className:"preview-link",children:[Object(O.jsx)("h1",{children:"How to build webapps that scale"}),Object(O.jsx)("p",{children:"This is the description for the post."}),Object(O.jsx)("span",{children:"Read more..."})]})]}),Object(O.jsxs)("div",{className:"article-preview",children:[Object(O.jsxs)("div",{className:"article-meta",children:[Object(O.jsx)("a",{href:"",children:Object(O.jsx)("img",{src:"http://i.imgur.com/N4VcUeJ.jpg"})}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("a",{href:"",className:"author",children:"Albert Pai"}),Object(O.jsx)("span",{className:"date",children:"January 20th"})]}),Object(O.jsxs)("button",{className:"btn btn-outline-primary btn-sm pull-xs-right",children:[Object(O.jsx)("i",{className:"ion-heart"})," 32"]})]}),Object(O.jsxs)("a",{href:"",className:"preview-link",children:[Object(O.jsx)("h1",{children:"The song you won't ever stop singing. No matter how hard you try."}),Object(O.jsx)("p",{children:"This is the description for the post."}),Object(O.jsx)("span",{children:"Read more..."}),Object(O.jsxs)("ul",{className:"tag-list",children:[Object(O.jsx)("li",{className:"tag-default tag-pill tag-outline",children:"Music"}),Object(O.jsx)("li",{className:"tag-default tag-pill tag-outline",children:"Song"})]})]})]})]})})})]})})}}]),s}(c.a.Component),Q=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={},a}return Object(l.a)(s,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"settings-page",children:Object(O.jsx)("div",{className:"container page",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-md-6 offset-md-3 col-xs-12",children:[Object(O.jsx)("h1",{className:"text-xs-center",children:"Your Settings"}),Object(O.jsx)("form",{children:Object(O.jsxs)("fieldset",{children:[Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("input",{className:"form-control",type:"text",placeholder:"URL of profile picture"})}),Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("input",{className:"form-control form-control-lg",type:"text",placeholder:"Your Name"})}),Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("textarea",{className:"form-control form-control-lg",rows:"8",placeholder:"Short bio about you"})}),Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("input",{className:"form-control form-control-lg",type:"text",placeholder:"Email"})}),Object(O.jsx)("fieldset",{className:"form-group",children:Object(O.jsx)("input",{className:"form-control form-control-lg",type:"password",placeholder:"Password"})}),Object(O.jsx)("button",{className:"btn btn-lg btn-primary pull-xs-right",children:"Update Settings"})]})})]})})})})})}}]),s}(c.a.Component),R=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return m.a.get("auth")?Object(O.jsx)("div",{children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(p,{}),Object(O.jsx)(v,{}),Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{exact:!0,path:"/",component:P}),Object(O.jsx)(h.a,{exact:!0,path:"/crctle",component:A}),Object(O.jsx)(h.a,{exact:!0,path:"/login",component:P}),Object(O.jsx)(h.a,{exact:!0,path:"/register",component:P}),Object(O.jsx)(h.a,{exact:!0,path:"/settings",component:Q}),Object(O.jsx)(h.a,{exact:!0,path:"/profile",component:H}),Object(O.jsx)(h.a,{exact:!0,path:"/editor",component:q})]})]})}):Object(O.jsx)("div",{children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(p,{}),Object(O.jsx)(v,{}),Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{exact:!0,path:"/",component:P}),Object(O.jsx)(h.a,{exact:!0,path:"/crctle",component:A}),Object(O.jsx)(h.a,{exact:!0,path:"/login",component:Y}),Object(O.jsx)(h.a,{exact:!0,path:"/register",component:Y}),Object(O.jsx)(h.a,{exact:!0,path:"/settings",component:P}),Object(O.jsx)(h.a,{exact:!0,path:"/profile",component:P}),Object(O.jsx)(h.a,{exact:!0,path:"/editor",component:P})]})]})})}}]),s}(c.a.Component),W=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,71)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(R,{})}),document.getElementById("root")),W()}},[[70,1,2]]]);
//# sourceMappingURL=main.8fbdeb2c.chunk.js.map