function setWidget(a){var b={text:"Ultra comfort mattress for a good nights sleep every day! This mattress with highest level of comfort will help your body actually relax. The better quality of mattresses provides better stability and flexibility which gives rise to the demand of the product globally for bedding products. Therefore right choice of mattress benefits you with perfect sleep system to support your spine cord of your body. Mattress Type - Coir Mattress",displayname:"Pepperfry : NeelKamal Mattress",url:tc.conf.imgUrl,productUrl:window.location.href};toggleWidget("up")}var initEvent="";var isWidgetUpandRunning;var isAppReady=false;function toggleWidget(a){var c=new Array();c=document.getElementsByClassName("tc-widget");if(a){for(var b=0;b<c.length;b++){c[b].style.display="block"}document.getElementById("widget-close").style.display="block";if(isWidgetUpandRunning&&isAppReady){tc.events.send("widget","play")}else{if(initEvent){window.clearInterval(initEvent)}initEvent=setInterval(function(){if(isWidgetUpandRunning&&isAppReady){tc.events.send("widget","play");clearInterval(initEvent)}},1000)}}else{for(var b=0;b<c.length;b++){c[b].style.display="none"}document.getElementById("widget-open").style.display="block";tc.events.send("widget","pause")}}var tc=tc||{};(function(){tc.domain="//www.buildquickbots.com";tc.startWidget=function(a){if(!a){tc.widgetData.user={channel:"widget",roomid:Math.round(Math.random()*10000),sender:{id:Math.round(Math.random()*10000),name:"Me"},recipient:{id:Math.round(Math.random()*10000),name:"Bot"},message:{text:"Hello",type:"text"}}}else{tc.widgetData.user={channel:"widget",roomid:a.roomid,sender:a.sender,recipient:{id:""+Math.round(Math.random()*10000),name:"Bot"},message:{text:a.welcomeMessage,type:"text"}}}tc.init(tc.widgetData)};tc.init=function(a){isWidgetUpandRunning=true;if(!a.userObj){a.user={channel:"widget",roomid:tc.util.uuid(),sender:{id:tc.util.uuid(),name:"Me"},recipient:{id:tc.util.uuid(),name:"Bot"},message:{text:"hi",type:"text"}}}else{a.user={channel:"widget",roomid:a.userObj.roomid,sender:a.userObj.sender,recipient:a.userObj.recipient,message:a.userObj.message}}a.user.recipient.id=a.botkey;tc.widgetData=a;if(a.domain){tc.domain=a.domain;tc.conf.appUrl=tc.domain+"/botwidget/v2/echat/mobile.html"}tc.conf.appUISetting=JSON.parse(unescape(a.appUISetting));if(tc.init.appInit){return false}var b=document.createElement("div");b.setAttribute("id","supportchatwidget");if(tc.conf.mobileDevice){b.innerHTML=tc.app.mobileTemplate();document.body.appendChild(b);tc.app.appUIMobSettings()}else{b.innerHTML=tc.app.template();document.body.appendChild(b);tc.app.appUISetting()}tc.conf.botkey=a.botkey;tc.app.initialize();document.getElementById("widget-open").style.display="block";tc.init.appInit=true;tc.events.send("widget","play");window.addEventListener("focus",function(){if(document.getElementById("widget")&&document.getElementById("widget").style&&document.getElementById("widget").style.display=="block"){tc.events.send("widget","topFocus")}});window.addEventListener("blur",function(){if(document.getElementById("widget")&&document.getElementById("widget").style&&document.getElementById("widget").style.display=="block"){tc.events.send("widget","topBlur")}});tc.events.receive(function(c){console.log("receiving",c);if(c){if(c.data.event=="ready"){console.log("I am ready");isAppReady=true;tc.events.send("widget","data")}else{if(c.data.event=="botwidget"){if(c.data.message=="hide"){tc.util.log("hiding Now... Bye");tc.app.applyCssSettings(document.querySelector("#supportchatwidget"),"display: none;")}}}}})};tc.conf={domain:tc.domain,appUrl:tc.domain+"/botwidget/v2/echat/mobile.html",vendorUrl:window.location.origin,productUrl:window.location.href,mobileDevice:function(){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)){return true}else{return false}}()};tc.devbox={startchat:function(){tc.events.send("widget","startchatevent")}};tc.app={template:function(){return'<div id="widget-close" class="tc-widget"><div class="logo-img-icon"><img src='+tc.conf.appUISetting.commonWidget.logo+' width="45" height="45"/></div><span id="max-msg">'+tc.conf.appUISetting.chatScreen.maxText+'</span><span class="right" onClick="toggleWidget(false)">_</span></div><div id="widget-open" class="tc-widget" onClick="toggleWidget(true)"><div class="logo-img-icon"><img src='+tc.conf.appUISetting.commonWidget.logo+' width="45" height="45"/></div><span id="min-msg">'+tc.conf.appUISetting.minimisedScreen.minText+'</span></div><div id="widget" class="tc-widget"> </div>'},mobileTemplate:function(){return'<div id="widget-open" class="tc-widget" onClick="tc.app.supportChatMobile();"><div class="logo-img-icon"><img src='+tc.conf.appUISetting.commonWidget.logo+' width="45" height="45"/></div><span id="min-msg">'+tc.conf.appUISetting.minimisedScreen.minText+"</span></div>"},appUIMobSettings:function(){var a=document.querySelector("#widget-open"),d=document.querySelector("#min-msg"),b="background-color: "+tc.conf.appUISetting.commonWidget.bgColor+";width: "+(parseInt(tc.conf.appUISetting.commonWidget.width,10))+"px;height: "+(parseInt(tc.conf.appUISetting.commonWidget.titleWinHeight,10))+"px;border-color: "+tc.conf.appUISetting.commonWidget.borderColor+";";tc.app.applyCssSettings(a,b);tc.app.applyCssSettings(d,"font-size:"+tc.conf.appUISetting.commonWidget.titleTextFont+"px;color:"+tc.conf.appUISetting.chatScreen.textColor+";");if(tc.conf.appUISetting.commonWidget.isResponsive=="Yes"){var c=document.createElement("meta");c.name="viewport";c.content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0";document.getElementsByTagName("head")[0].appendChild(c)}if(tc.conf.appUISetting.chatScreen.imageDisplayType=="circular"){document.querySelector(".logo-img-icon").style.borderRadius="40px"}},appUISetting:function(){var g=document.querySelector("#widget-close"),a=document.querySelector("#widget-open"),h=document.querySelector("#widget"),b=document.querySelector("#max-msg"),c=document.querySelector("#min-msg"),d="background-color: "+tc.conf.appUISetting.commonWidget.bgColor+";width: "+(parseInt(tc.conf.appUISetting.commonWidget.width,10))+"px;height: "+(parseInt(tc.conf.appUISetting.commonWidget.titleWinHeight,10))+"px;border-color: "+tc.conf.appUISetting.commonWidget.borderColor+";",j="width: "+(parseInt(tc.conf.appUISetting.commonWidget.width,10))+"px;border-color: "+tc.conf.appUISetting.commonWidget.borderColor+";",e="bottom:"+(parseInt(tc.conf.appUISetting.commonWidget.height,10))+"px;";minimisedScreenStyle="width:"+(parseInt(tc.conf.appUISetting.minimisedScreen.width,10))+"px;";tc.app.applyCssSettings(g,d);tc.app.applyCssSettings(h,"height:"+tc.conf.appUISetting.commonWidget.height+"px");tc.app.applyCssSettings(b,"font-size:"+tc.conf.appUISetting.commonWidget.titleTextFont+"px;color:"+tc.conf.appUISetting.minimisedScreen.textColor+";");tc.app.applyCssSettings(c,"font-size:"+tc.conf.appUISetting.commonWidget.titleTextFont+"px;color:"+tc.conf.appUISetting.chatScreen.textColor+";");tc.app.applyCssSettings(a,d);tc.app.applyCssSettings(h,j);tc.app.applyCssSettings(g,e);tc.app.applyCssSettings(a,minimisedScreenStyle);if(tc.conf.appUISetting.commonWidget.isResponsive=="Yes"){var f=document.createElement("meta");f.name="viewport";f.content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0";document.getElementsByTagName("head")[0].appendChild(f)}if(tc.conf.appUISetting.chatScreen.imageDisplayType=="circular"){document.querySelector(".logo-img-icon").style.borderRadius="40px"}},applyCssSettings:function(a,b){if(typeof(a.style.cssText)!="undefined"){a.style.cssText+=b}else{a.setAttribute("style",b)}},getXmlHttpObj:function(){try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(a){}try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(a){}try{return new XMLHttpRequest()}catch(a){}return null},validate:function(a){tc.app.initialize();document.getElementById("widget-open").style.display="block"},getRoom:function(a){this.validation_xhr=this.getXmlHttpObj();this.validation_xhr.addEventListener("readystatechange",function(){if(this.readyState===this.DONE){var b=JSON.parse(this.responseText);tc.app.initialize(b.success)}});this.validation_xhr.open("POST",tc.domain+"/supportchat/rest/client/createChat");this.validation_xhr.setRequestHeader("accept","application/json");this.validation_xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");this.validation_xhr.send(data)},initialize:function(b){try{if(tc.util.getCookie(tc.conf.appId)){console.log(tc.util.getCookie(tc.conf.appId));b=tc.util.getCookie(tc.conf.appId);creds=JSON.parse(atob(b));tc.conf.token=creds.tk;tc.conf.userId=creds.userId;tc.conf.roomId=creds.roomId}for(i in b){tc.conf[i]=b[i]}tc.app.supportChat("widget","deepcopy",tc.events.data)}catch(a){tc.util.log(a.message,"error")}},registerNotificationHandler:function(a){tc.util.log("registering",a)},verify:function(a){return true;if(tc.conf.missingKeys.length){if(a){var a=document.getElementById(a);a.innerHTML="<h2 style='text-align:center;margin:30px auto;color:red;'>Teamchat app verification failed.</h2>"}else{alert("Your teamchat app verification failed")}return false}return true},supportChat:function(b,c,j){var h="&botkey="+tc.conf.botkey;var e="&domain="+window.location.origin;var g="&timestamp="+new Date().getTime();var k={contentScreen:tc.conf.appUISetting.contentScreen,sender:tc.widgetData.user,persistenceMenu:tc.conf.appUISetting.commonWidget.persistenceMenu,common:{userImg:tc.conf.appUISetting.commonWidget.user,botImg:tc.conf.appUISetting.commonWidget.bot,msgEncyption:tc.conf.appUISetting.commonWidget.msgEncryption,widgetType:tc.conf.appUISetting.commonWidget.widgetType,pageTitle:tc.conf.appUISetting.commonWidget.pageTitle}};if(tc.widgetData&&tc.widgetData.wsurl){k.devbox={enc:false,wsurl:tc.widgetData.wsurl}}var f=btoa(JSON.stringify(k));var a=tc.conf.appUrl+"?data="+f+h+e+g;var d=document.createElement("iframe");d.setAttribute("src",a);var b=document.getElementById(b);b.innerHTML="";b.appendChild(d)},supportChatMobile:function(){var f="&botkey="+tc.conf.botkey;var e="&domain="+window.location.origin;var d="&timestamp="+new Date().getTime();var a={contentScreen:tc.conf.appUISetting.contentScreen,sender:tc.widgetData.user,persistenceMenu:tc.conf.appUISetting.commonWidget.persistenceMenu,common:{userImg:tc.conf.appUISetting.commonWidget.user,botImg:tc.conf.appUISetting.commonWidget.bot,msgEncyption:tc.conf.appUISetting.commonWidget.msgEncryption,widgetType:tc.conf.appUISetting.commonWidget.widgetType,pageTitle:tc.conf.appUISetting.commonWidget.pageTitle,isMobile:tc.conf.mobileDevice}};var c=btoa(JSON.stringify(a));var b=tc.conf.appUrl+"?data="+c+f+e+d;window.open(b,"_blank")},askFriend:function(d,b,c){if(this.verify(d)){tc.util.log(d,b,c);var a=tc.html.createIframe(b);tc.util.createInterface(d,a);tc.events.init(d,b,c)}else{tc.util.log("Missing Keys : "+tc.conf.missingKeys.join(","))}},embedRooms:function(c,b){if(this.verify(c)){var a=tc.html.getDeepLinkedUrl("rooms");tc.util.createInterface(c,a);tc.events.init(c,"deepcopy",b)}else{tc.util.log("Missing Keys : "+tc.conf.missingKeys.join(","))}},embedRoom:function(d,b,c){if(this.verify(d)){tc.util.log(d,b);var a=tc.html.getDeepLinkedUrl("stream",{roomId:b});tc.util.createInterface(d,a);tc.events.init(d,"deepcopy",c)}else{tc.util.log("Missing Keys : "+tc.conf.missingKeys.join(","))}},embedChatlet:function(e,b,c,d){if(this.verify(e)){tc.util.log(e,b,c);var a=tc.html.getDeepLinkedUrl("msg",{roomId:b,mId:c});tc.util.createInterface(e,a);tc.events.init(e,"deepcopy",d)}else{tc.util.log("Missing Keys : "+tc.conf.missingKeys.join(","))}}},tc.html={createIframe:function(d){var h="&gId="+tc.util.getUrlParam("gId");var b="&mId="+tc.util.getUrlParam("mId");var f=this.productDetails(d);var e="&domain="+window.location.origin;var g="&appId="+tc.conf.appId;var a=tc.conf.appUrl+"?data="+f+e+h+b+g+"&v="+new Date().getTime();var c=document.createElement("iframe");c.setAttribute("src",a);return c},getDeepLinkedUrl:function(b,c){var a="";switch(b){case"msg":a=this.createChatletIframe(c);break;case"stream":a=this.createStreamIframe(c);break;case"rooms":default:a=this.createRoomsIframe();break}return a},createRoomsIframe:function(){tc.util.log("rooms");var a=tc.conf.appUrl+"?default=true&domain="+tc.conf.vendorUrl+"&data="+btoa(JSON.stringify({sid:tc.conf.token,msg:""}));tc.util.log(a);var b=document.createElement("iframe");b.setAttribute("src",a);tc.util.log(b);return b},createChatletIframe:function(c){var a="http://dev02-enterprise.teamchat.com/webjim-echat/clientApi/html/cmsg.html?gId="+c.roomId+"&domain="+tc.conf.vendorUrl+"&mId="+c.mId+"&tk="+tc.conf.token+"&uId="+tc.conf.userId;var b=document.createElement("iframe");b.setAttribute("src",a);return b},createStreamIframe:function(c){var a="http://dev02-enterprise.teamchat.com/webjim-echat/clientApi/html/room.html?gId="+c.roomId+"&tk="+tc.conf.token+"&uId="+tc.conf.userId+"&domain="+tc.conf.vendorUrl;var b=document.createElement("iframe");b.setAttribute("src",a);return b},msgJson:function(a){return JSON.stringify({productURL:a.productUrl,content:{text:a.text,html:"<img style='width:100%;height:300px;' src = '"+a.url+"'/>"},imgUrl:"",xslt:"primary-2.7.2",summdesc:{fields:[{operation:"Count",drilldown:"resp",hidden:"true",name:"yesno",display:"Count",fieldname:"resp"}]},detailsLinkVisibility:"all",queslabel:"Question",detdesc:{label:"Replies",showcount:"true",fields:[{display:"Response",key:"resp"}]},type:"primary",actionreplace:"replace",actions:{actitem:[{yesno:{}}]},displayname:a.displayname,minCrv:"3",comments:{addcomment:"true"}})},productDetails:function(b){var a=tc.conf.token;if(a!=null){return btoa(JSON.stringify({sid:a,message:btoa(this.msgJson(b))}))}else{return btoa(JSON.stringify({message:btoa(this.msgJson(b))}))}}};tc.events={init:function(a,b,c){tc.events.send(a,b,c);this.receive(c)},send:function(b,d,e){tc.util.log(b);b=document.getElementById(b);try{var c=b.getElementsByTagName("iframe")[0];c.contentWindow.postMessage({message:d,data:tc.conf},"*")}catch(a){tc.util.log(a,"error")}},receive:function(e){var d=window.addEventListener?"addEventListener":"attachEvent";var b=window[d];var a=d=="attachEvent"?"onmessage":"message";try{b(a,function(f){tc.util.log("reading from inside",f);if(f.data){e(f)}},false)}catch(c){tc.util.log("Error :"+c)}},data:function(a){if(a.data.event=="user-authenticated"){tc.util.setCookie(tc.conf.appId,btoa(JSON.stringify(a.data.message)),15)}if(a.data.event=="echat"){tc.events.init("widget","deepcopy",function(b){})}}},tc.util={uuid:function(){function a(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)}return a()+a()+"-"+a()+"-"+a()+a()},removeInterface:function(){for(i in document.getElementsByClassName("tc-widget")){document.getElementsByClassName("tc-widget")[i].style.display="none"}},deepFind:function(d,c){var e=c.split("."),b=d,a;for(a=0;a<e.length;++a){if(b[e[a]]==undefined){return undefined}else{b=b[e[a]]}}return b},createInterface:function(c,b){if(c){var c=document.getElementById(c);c.innerHTML="";c.appendChild(b)}else{var a="toolbar=0,location=1,directories=0,status=1,menubar=0,scrollbars=1,resizable=0,top=0,left=0,width=460,height="+(screen.height*0.8)+";";mainwin=window.open(b.src,"Powered by Teamchat",a);tc.util.log(mainwin);mainwin.onbeforeunload=function(){tc.util.log("before unload","warning")};mainwin.addEventListener("beforeunload",function(d){tc.util.log("fired close event","warning")},false)}},getParam:function(a){return this.deepFind(tc,a)},getUrlParam:function(a){return decodeURI((RegExp(a+"=(.+?)(&|$)").exec(location.search)||[,null])[1])},log:function(b,a){try{if(typeof logstr=="object"){logstr=JSON.stringify(b)}var a=(a)?a:"log";if(window.console){window.console.log(b)}}catch(c){}},isEmpty:function(a){if(typeof a=="undefined"||a==""||a==null||a=="null"){return true}else{if(typeof a=="object"&&Object.keys(a).length==0){return true}else{if(typeof a=="string"&&a.trim().length==0){return true}}}return false},setCookie:function(b,f,c){var e=new Date();e.setTime(e.getTime()+(c*24*60*60*1000));var a="expires="+e.toUTCString();document.cookie=b+"="+f+"; "+a},getCookie:function(d){var b=d+"=";var a=document.cookie.split(";");for(var e=0;e<a.length;e++){var f=a[e];while(f.charAt(0)==" "){f=f.substring(1)}if(f.indexOf(b)==0){return f.substring(b.length,f.length)}}return""}};tcAsyncInit()})();
