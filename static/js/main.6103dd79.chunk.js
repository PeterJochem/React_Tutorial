(this.webpackJsonpcorkboard=this.webpackJsonpcorkboard||[]).push([[0],{19:function(e,t,a){},23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var r=a(8),n=a(6),m=a(10),o=a(9),c=a(0),i=a.n(c),u=a(11),l=a.n(u),s=a(14),h=a(5),p=(a(28),a(19),a(13)),g=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,m=new Array(n),o=0;o<n;o++)m[o]=arguments[o];return(e=t.call.apply(t,[this].concat(m))).state={},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{className:"GridOfPosts"},i.a.createElement("div",{className:"grid-container"},this.props.pageNumber.projects.map((function(e){return i.a.createElement("div",{className:"box"},"  ",e.name,i.a.createElement("a",{href:e.url},i.a.createElement("div",{className:"grid-item",id:e.name},"  ",i.a.createElement(d,{name:e.name,im_url:e.im_url}),"   ")," "))}))))}}]),a}(i.a.Component);g.defaultProps={pageNumber:null};var d=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={},n.componentDidMount=n.componentDidMount.bind(Object(p.a)(n)),n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){document.getElementById(this.props.name).style.backgroundImage="url("+this.props.im_url+")"}},{key:"render",value:function(){return i.a.createElement("div",{className:"Post"})}}]),a}(i.a.Component);d.defaultProps={name:"me",im_url:""};var b=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={},n.componentDidMount=n.componentDidMount.bind(Object(p.a)(n)),n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){document.body.style.backgroundImage=null}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"portfolio"},i.a.createElement(g,{pageNumber:this.props.pageNumber})))}}]),a}(i.a.Component);b.defaultProps={};var f={projects:[{name:"Triple Pendulum Simulation",url:"https://github.com/PeterJochem/TriplePendulum",im_url:"https://peterjochem.github.io/myImages/pend.gif"},{name:"Mobile Manipulator",url:"https://github.com/PeterJochem/Mobile_Manipulator",im_url:"https://peterjochem.github.io/myImages/kuka.gif"},{name:"Terminator",url:"https://github.com/ME495-EmbeddedSystems/final-project-terminator",im_url:"https://peterjochem.github.io/myImages/terminator.png"},{name:"Chess AI",url:"https://github.com/PeterJochem/Chess_AI",im_url:"https://peterjochem.github.io/myImages/chess.gif"},{name:"Neural Network Learns to Play Snake",url:"https://github.com/PeterJochem/Snake",im_url:"https://peterjochem.github.io/myImages/Snake.png"},{name:"RRT",url:"https://github.com/PeterJochem/RRT",im_url:"https://peterjochem.github.io/myImages/all_Points_3.png"},{name:"Sawyer Ping Pong",url:"https://github.com/PeterJochem/Sawyer_Ping_Pong",im_url:"https://peterjochem.github.io/myImages/ping_trajectory.png"},{name:"DeepQ Learning",url:"https://github.com/PeterJochem/Grid_World_RL",im_url:"https://peterjochem.github.io/myImages/NN_Large.png"}]},v={projects:[{name:"Cart Pole Reinforcement Learning",url:"https://github.com/PeterJochem/Cart_Pole_RL",im_url:"https://peterjochem.github.io/myImages/cartPole.gif"},{name:"CBirch 97 Head Tracking",url:"https://github.com/PeterJochem/CBirch_97",im_url:"https://peterjochem.github.io/myImages/CBirch97.gif"},{name:"Canny Edge Detector",url:"https://github.com/PeterJochem/CannyEdgeDetector",im_url:"https://peterjochem.github.io/myImages/Lena_Processed.png"},{name:"Acrobot Reinforcement Learning",url:"https://github.com/PeterJochem/Acrobot",im_url:"https://peterjochem.github.io/myImages/learnedPolicy.gif"},{name:"Generative Adversarial Network",url:"https://github.com/PeterJochem/MNIST_GAN",im_url:"https://peterjochem.github.io/myImages/DCGAN_Results.png"}]},E=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={someBoolean:!1,game_status:"game still on"},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){document.title="Peter Jochem"}}]),Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement(s.a,{basename:"/peterjochem.github.io"},i.a.createElement("div",null,i.a.createElement(h.a,{exact:!0,path:"/React_Tutorial",render:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"Banner"},i.a.createElement("div",{className:"bannerName"}," Peter Jochem"),i.a.createElement("div",{className:"moreInfo"},i.a.createElement("a",{href:"./ResumePage"},i.a.createElement("div",{className:"myResumeLink"},"  Resume  ")),i.a.createElement("a",{href:"./projects2"},i.a.createElement("div",{className:"moreProjectsLink"}," More Projects "))),i.a.createElement("div",{className:"BannerImage"}," ")),i.a.createElement("div",{className:"portfolio"}," ",i.a.createElement(b,{pageNumber:f}),"  "))}}),i.a.createElement(h.a,{exact:!0,path:"/projects2",render:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"Banner"},i.a.createElement("div",{className:"bannerName"}," Peter Jochem"),i.a.createElement("div",{className:"moreInfo"},i.a.createElement("a",{href:"./ResumePage"},i.a.createElement("div",{className:"myResumeLink"},"  Resume  ")),i.a.createElement("a",{href:"./projects1"},i.a.createElement("div",{className:"moreProjectsLink"}," More Projects "))),i.a.createElement("div",{className:"BannerImage"}," ")),i.a.createElement("div",{className:"portfolio"}," ",i.a.createElement(b,{pageNumber:v}),"  "))}}),i.a.createElement(h.a,{exact:!0,path:"/ResumePage",render:function(){return i.a.createElement("div",{className:"resumeBackground"},i.a.createElement("iframe",{id:"myResumeFrame",src:"http://docs.google.com/viewer?url=https://raw.githubusercontent.com/PeterJochem/PeterJochem.github.io/6331c077619a0b5593287d0fcead9a932102b569/Resume.pdf&embedded=true",width:"600",height:"780",framebordr:"0"}))}})))}}]),a}(i.a.Component);l.a.render(i.a.createElement(s.a,{basename:"/React_Tutorial"},i.a.createElement(E,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.6103dd79.chunk.js.map