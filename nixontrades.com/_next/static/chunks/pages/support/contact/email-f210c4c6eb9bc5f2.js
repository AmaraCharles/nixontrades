(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9310],{97179:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/support/contact/email",function(){return a(20416)}])},61739:function(e,t,a){"use strict";a.d(t,{Af:function(){return f},F3:function(){return u},lj:function(){return m},oe:function(){return h},xG:function(){return p}});var r=a(43692),n=a(12042),s=a(99728),i=a(21157),o=a(61557),c=a(65954),l=function(e){return"zh-CN"===e?"zh-CN":"zh-Hant"===e?"zh-TW":"en-US"},d=function(e,t,a){return("en-US"===a?"".concat(e).concat(t):"".concat(e,"/").concat(a).concat(t)).replace(/\/+$/,"")},h=function(e,t,a,r){var n="https://www.proultimatewealth.com",s={title:a||"",description:r||""};return s.canonical=d(n,e,t),s.languageAlternates=[{href:d(n,e,"en-US"),hrefLang:"en"},{href:d(n,e,"zh-CN"),hrefLang:"zh-hans"},{href:d(n,e,"zh-TW"),hrefLang:"zh-hant"},{href:d(n,e,"en-US"),hrefLang:"x-default"}],s},u=function(e,t){if(e.length<=t)return[e];for(var a=[],r=0;r<e.length;)a.push(e.slice(r,r+t)),r+=t;return a},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Intl.NumberFormat("en-US",(0,s.Z)((0,n.Z)({style:"currency"},a),{currency:t})).format(e)},m=function(e,t,a){return 1===e?t*(1+a):m(e-1,t,a)+t*Math.pow(1+a,e)},f=(function(){var e=(0,r.Z)((function(e,t){var a,r,n,s,i,d,h,u,p,m,f,g=arguments;return(0,o.__generator)(this,(function(o){switch(o.label){case 0:return a=g.length>2&&void 0!==g[2]&&g[2],r=[],n=function(a){var r={fields:["Slug","locale"],locale:"all",pagination:{page:a,pageSize:100}};return t&&(r.filters=t),(0,c.s1)(e,{params:r})},s=function(e){e.length&&e.forEach((function(e){var t=l(e.attributes.locale);r.push({params:a?{slug:[e.attributes.Slug]}:{slug:e.attributes.Slug},locale:t})}))},[4,n(1)];case 1:if(i=o.sent(),d=i.data,h=d.data,u=d.meta,s(h),!(u.pagination.pageCount>1))return[3,3];for(p=[],m=2;m<=u.pagination.pageCount;m+=1)f=n(m),p.push(f);return[4,Promise.all(p)];case 2:o.sent().forEach((function(e){var t=e.data.data;s(t)})),o.label=3;case 3:return[2,r]}}))}))}(),function(){var e=(0,r.Z)((function(e,t,a){var r,n,s,l,d,h,u,p,m,f,g,v,b,x,y,N,j,C,_;return(0,o.__generator)(this,(function(o){switch(o.label){case 0:return d=e.params.slug,h=e.locale,u=function(e){return"zh-CN"===e?"zh-CN":"zh-TW"===e?"zh-Hant":"en"}(h),p={},m=[(0,c.s1)("/api/guides",{params:{locale:u,filters:{Slug:{$eq:d},Category:{$eq:t}},fields:["Slug","Title","Subtitle","Content"],populate:["Section","SEO"]}})],a&&m.push((0,c.s1)("/api/videos",{params:{locale:u,filters:{Slug:{$eq:a}},populate:"Videos"}})),[4,Promise.all(m)];case 1:return f=i.Z.apply(void 0,[o.sent(),2]),g=f[0],v=f[1],b=g.data,(null===(x=b.data)||void 0===x?void 0:x.length)?(y=(0,i.Z)(x,1),N=y[0],p.title=N.attributes.Title,p.subTitle=N.attributes.Subtitle||"",p.slug=N.attributes.Slug,p.content=N.attributes.Content||"",p.sections=N.attributes.Section||null,p.seo={title:(null===(r=N.attributes)||void 0===r||null===(n=r.SEO)||void 0===n?void 0:n.Title)||null,description:(null===(s=N.attributes)||void 0===s||null===(l=s.SEO)||void 0===l?void 0:l.Description)||null},p.videos=[],a&&(j=v.data,(null===(C=j.data)||void 0===C?void 0:C.length)&&(_=(0,i.Z)(C,1),_[0].attributes.Videos.forEach((function(e){var t={title:e.Title,subTitle:e.Time,classNames:"bg-".concat(e.Theme),alt:e.Alt,sources:[{src:e.URL,type:"video/mp4"}]};p.videos.push(t)})))),[2,p]):[2,!1]}}))}))}(),function(e,t){for(var a=null,r=0;r<e.length;r+=1){if(t.includes(e[r].value)){a=e[r];break}if(e[r].options&&(a=f(e[r].options,t)))break}return a})},20416:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return q},default:function(){return U}});var r=a(43692),n=a(12042),s=a(99728),i=a(61557),o=a(8014),c=a(56168),l=a(62044),d=a(83021),h=a.n(d),u=a(75657),p=a.n(u),m=a(22319),f=a(61739),g=a(80241),v=a.n(g),b=a(46834),x=a(31110),y=a(70443),N=a(50744),j=a.n(N),C=a(65954),_={"New Account Application Status":["Application Status","Cancel Application","Supported Document Upload"],"My Account & Login":["Account Information Update","Margin Removal","Password Reset and Login Help","Sign up for Additional Feature","Other"],"Account Closure Request":["Close My Account"],"Assets & Fund Transfers":["ACH Deposit","ACH Withdrawal","Bank Profile Setup","IRA Contribution and Distribution","Account Transfer into Nixontrades","Account Transfer out of Nixontrades","Wire Deposit","Wire Withdrawal","Other"],Trading:["Daytrade rules & Daytrade calls","Dividends Reinvestment (DRIP)","Margin Calls","Options Exercise and Assignment","Options Trading","Penny for Lot","Stock Splits and Corporate Actions","Stocks Trading","Other"],"Nixontrades Cash Management Account":["CMA Application Status","Debit Card & Check Writing","Fees","Purchases & ATMs","Other"],"Documents & Taxes":["1099 & Taxes","3210 Letter","Account Statements","B-Notice","Trade confirmations","Transaction History","Verification Letter","Other"],"General Questions":["Comments and Suggestions","Referrals & Promotions","Research & Tools","Technical Support","Other"]},S=a(74369),w=a(10714);function R(e){var t=e&&e.ownerDocument||document;return{document:t,window:t.defaultView||t.parentWindow||window}}function Z(e){return e||document.head}var A="hcaptcha-api-script-id",O="hcaptchaOnLoad",E=[],L=function(e){void 0===e&&(e={});var t=Z(e.scriptLocation);delete e.scriptLocation;var a=R(t),r=E.find((function(e){return e.scope===a.window}));if(a.document.getElementById(A)&&r)return r.promise;var n=new Promise((function(r,n){a.window.hcaptchaOnLoad=r;var s=e.apihost||"https://js.hcaptcha.com";delete e.apihost;var i=a.document.createElement("script");i.id=A,i.src=s+"/1/api.js?render=explicit&onload="+O,i.async=void 0===e.loadAsync||e.loadAsync,delete e.loadAsync,i.onerror=function(e){return n("script-error")};var o=function(e){return Object.entries(e).filter((function(e){e[0];var t=e[1];return t||!1===t})).map((function(e){var t=e[0],a=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(a)})).join("&")}(e);i.src+=""!==o?"&"+o:"",t.appendChild(i)}));return E.push({promise:n,scope:a.window}),n},k=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this)._hcaptcha=void 0,a.renderCaptcha=a.renderCaptcha.bind((0,S.Z)(a)),a.resetCaptcha=a.resetCaptcha.bind((0,S.Z)(a)),a.removeCaptcha=a.removeCaptcha.bind((0,S.Z)(a)),a.isReady=a.isReady.bind((0,S.Z)(a)),a.loadCaptcha=a.loadCaptcha.bind((0,S.Z)(a)),a.handleOnLoad=a.handleOnLoad.bind((0,S.Z)(a)),a.handleSubmit=a.handleSubmit.bind((0,S.Z)(a)),a.handleExpire=a.handleExpire.bind((0,S.Z)(a)),a.handleError=a.handleError.bind((0,S.Z)(a)),a.handleOpen=a.handleOpen.bind((0,S.Z)(a)),a.handleClose=a.handleClose.bind((0,S.Z)(a)),a.handleChallengeExpired=a.handleChallengeExpired.bind((0,S.Z)(a)),a.ref=c.createRef(),a.apiScriptRequested=!1,a.state={isApiReady:!1,isRemoved:!1,elementId:t.id,captchaId:""},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,(0,w.Z)(t,a);var n=r.prototype;return n.componentDidMount=function(){var e=this,t=R(Z(this.props.scriptLocation));this._hcaptcha=t.window.hcaptcha||void 0,"undefined"!==typeof this._hcaptcha?this.setState({isApiReady:!0},(function(){e.renderCaptcha()})):this.loadCaptcha()},n.componentWillUnmount=function(){var e=this.state.captchaId,t=this._hcaptcha;this.isReady()&&(t.reset(e),t.remove(e))},n.shouldComponentUpdate=function(e,t){return this.state.isApiReady===t.isApiReady&&this.state.isRemoved===t.isRemoved},n.componentDidUpdate=function(e){var t=this;["sitekey","size","theme","tabindex","languageOverride","endpoint"].every((function(a){return e[a]===t.props[a]}))||this.removeCaptcha((function(){t.renderCaptcha()}))},n.loadCaptcha=function(){if(!this.apiScriptRequested){var e=this.props,t=e.apihost,a=e.assethost,r=e.endpoint,n=e.host,s=e.imghost,i=e.languageOverride,o=e.reCaptchaCompat,c=e.reportapi,l=e.sentry,d=e.custom,h=e.loadAsync,u=e.scriptLocation;L({apihost:t,assethost:a,endpoint:r,hl:i,host:n,imghost:s,recaptchacompat:!1===o?"off":null,reportapi:c,sentry:l,custom:d,loadAsync:h,scriptLocation:u}).then(this.handleOnLoad).catch(this.handleError),this.apiScriptRequested=!0}},n.renderCaptcha=function(e){if(this.state.isApiReady){var t=Object.assign({"open-callback":this.handleOpen,"close-callback":this.handleClose,"error-callback":this.handleError,"chalexpired-callback":this.handleChallengeExpired,"expired-callback":this.handleExpire,callback:this.handleSubmit},this.props,{hl:this.props.hl||this.props.languageOverride,languageOverride:void 0}),a=this._hcaptcha.render(this.ref.current,t);this.setState({isRemoved:!1,captchaId:a},(function(){e&&e()}))}},n.resetCaptcha=function(){var e=this.state.captchaId,t=this._hcaptcha;this.isReady()&&t.reset(e)},n.removeCaptcha=function(e){var t=this.state.captchaId,a=this._hcaptcha;this.isReady()&&this.setState({isRemoved:!0},(function(){a.remove(t),e&&e()}))},n.handleOnLoad=function(){var e=this;this.setState({isApiReady:!0},(function(){var t=R(Z(e.props.scriptLocation));e._hcaptcha=t.window.hcaptcha,e.renderCaptcha((function(){var t=e.props.onLoad;t&&t()}))}))},n.handleSubmit=function(e){var t=this.props.onVerify,a=this.state,r=a.isRemoved,n=a.captchaId,s=this._hcaptcha;if("undefined"!==typeof s&&!r){var i=s.getResponse(n),o=s.getRespKey(n);t&&t(i,o)}},n.handleExpire=function(){var e=this.props.onExpire,t=this.state.captchaId,a=this._hcaptcha;this.isReady()&&(a.reset(t),e&&e())},n.handleError=function(e){var t=this.props.onError,a=this.state.captchaId,r=this._hcaptcha;this.isReady()&&r.reset(a),t&&t(e)},n.isReady=function(){var e=this.state,t=e.isApiReady,a=e.isRemoved;return t&&!a},n.handleOpen=function(){this.isReady()&&this.props.onOpen&&this.props.onOpen()},n.handleClose=function(){this.isReady()&&this.props.onClose&&this.props.onClose()},n.handleChallengeExpired=function(){this.isReady()&&this.props.onChalExpired&&this.props.onChalExpired()},n.execute=function(e){void 0===e&&(e=null);var t=this.state.captchaId,a=this._hcaptcha;if(this.isReady())return e&&"object"!==typeof e&&(e=null),a.execute(t,e)},n.setData=function(e){var t=this.state.captchaId,a=this._hcaptcha;this.isReady()&&(e&&"object"!==typeof e&&(e=null),a.setData(t,e))},n.getResponse=function(){return this._hcaptcha.getResponse(this.state.captchaId)},n.getRespKey=function(){return this._hcaptcha.getRespKey(this.state.captchaId)},n.render=function(){var e=this.state.elementId;return c.createElement("div",{ref:this.ref,id:e})},r}(c.Component),T={firstName:"",lastName:"",email:"",category:void 0,topic:void 0,message:""},I={valueContainer:function(e){return(0,s.Z)((0,n.Z)({},e),{paddingTop:0,paddingBottom:0})},input:function(e){return(0,s.Z)((0,n.Z)({},e),{paddingTop:0,paddingBottom:0,margin:0})},singleValue:function(e){return(0,s.Z)((0,n.Z)({},e),{color:"#4d6582"})}},F=encodeURIComponent("/content/customerservice/contactus/email/"),B="h-[45px] w-full rounded border pl-2.5",P="text-pure-red mt-2",D=Object.keys(_).map((function(e){return{value:e,label:e}}));var q=!0,U=function(){var e=(0,l.Z)("email"),t=e.t,a=e.lang,d=(0,c.useState)(!1),u=d[0],g=d[1],N=(0,c.useState)([]),S=N[0],w=N[1],R=(0,c.useRef)(null),Z=(0,c.useRef)(null),A=(0,c.useId)(),O=(0,c.useId)(),E=(0,y.TA)({initialValues:T,validate:function(){var e=(0,r.Z)((function(e){var a,r;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:g(!1),a={},r=h().object({firstName:h().string().max(100).required().label(t("contact.form.first_name")),lastName:h().string().max(100).required().label(t("contact.form.last_name")),email:h().string().max(100).email({tlds:!1}).required().label(t("contact.form.email_address")),category:h().any().required().label(t("contact.form.category")),topic:h().any().required().label(t("contact.form.topic")),message:h().string().required().max(3200).label(t("contact.form.message"))}),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,r.validateAsync(e,{abortEarly:!1,errors:{wrap:{label:!1}},messages:{"string.empty":t("errors.string.empty"),"string.max":t("errors.string.max"),"string.email":t("errors.string.email"),"any.required":t("errors.any.required")}})];case 2:return n.sent(),[3,4];case 3:return n.sent().details.forEach((function(e){a[e.path[0]]=e.message})),[3,4];case 4:return[2,a]}}))}));return function(t){return e.apply(this,arguments)}}(),onSubmit:(0,r.Z)((function(){var e,r,n,s,o,c,l,d,h,u,p,m,f;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,Z.current.execute({async:!0})];case 1:return e=i.sent(),[3,3];case 2:return i.sent(),E.setStatus({message:t("fail_hcaptcha"),code:1008}),E.setSubmitting(!1),[2];case 3:if(!e)return E.setStatus({message:t("fail_hcaptcha"),code:1008}),E.setSubmitting(!1),[2];if(!(r=e.response))return E.setStatus({message:t("fail_hcaptcha"),code:1006}),E.setSubmitting(!1),[2];n=E.values,s=n.firstName,o=n.lastName,c=n.email,l=n.category,d=n.topic,h=n.message,u={firstName:s,lastName:o,email:c,category:l.value,topic:d.value,message:h,token:r},i.label=4;case 4:return i.trys.push([4,6,7,8]),[4,(0,C.WY)("/api/email",{method:"post",params:{locale:a},data:u})];case 5:return i.sent(),w([]),R.current.clearValue(),E.resetForm(T),g(!0),[3,8];case 6:return(p=i.sent()).response&&p.response.data&&(m=p.response,"validation"===(null===(f=m.data)||void 0===f?void 0:f.errorType)?Object.keys(e.error).forEach((function(t){E.setFieldError(t,e.error[t].message)})):E.setStatus(e.error)),[3,8];case 7:return E.setSubmitting(!1),[7];case 8:return[2]}}))}))}),L=(0,c.useCallback)((function(e){return t(e.label)}),[t]),q=(0,c.useCallback)((function(e){return t(e.label)}),[t]),U=(0,c.useCallback)((function(e){e&&w(_[e.value].map((function(e){return{label:e,value:e}}))),E.setFieldValue("category",e)}),[E]),z=(0,c.useCallback)((function(e){E.setFieldValue("topic",e)}),[E]),W=(0,f.oe)("/support/contact/email",a,t("meta_title"),t("meta_description")),V=W.title,M=W.description,K=W.canonical,H=W.languageAlternates;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.PB,{title:V,description:M,canonical:K,languageAlternates:H}),(0,o.jsx)("div",{className:"bg-white py-11",children:(0,o.jsxs)("div",{className:"container max-w-7xl",children:[(0,o.jsx)("h1",{className:"font-futura text-4xl text-ft-blue",children:t("contact.header")}),(0,o.jsx)("div",{className:"my-4 text-lg",children:(0,o.jsx)(b.Z,{i18nKey:"contact.desc",ns:"email",components:{login:(0,o.jsx)("a",{href:"https://invest.proultimatewealth.com/cgi-bin/login?ft_locale=".concat(a.toLocaleLowerCase(),"&redirect=").concat(F),rel:"noopener noreferrer",children:"log in"})}})}),(0,o.jsx)("div",{className:"my-4",children:t("contact.required")}),(0,o.jsxs)("div",{className:"grid grid-cols-12 gap-x-8 gap-y-8",children:[(0,o.jsxs)("div",{className:"col-span-12 rounded bg-[#fafafa] px-8 py-6 lg:col-span-9",children:[(0,o.jsx)("p",{children:(0,o.jsx)(b.Z,{i18nKey:"contact.form.header",ns:"email",components:{login:(0,o.jsx)("a",{href:"https://invest.proultimatewealth.com/cgi-bin/login?ft_locale=".concat(a.toLocaleLowerCase(),"&redirect=").concat(F),rel:"noopener noreferrer",children:"Log in"})}})}),(0,o.jsxs)("form",{onSubmit:E.handleSubmit,className:"mb-8",children:[(0,o.jsx)(k,{sitekey:"eea0f7fb-fdd4-461a-b14c-4e20b54e37b0",ref:Z,size:"invisible",languageOverride:"en-US"===a?"en":a}),(0,o.jsxs)("div",{className:"mb-4 flex flex-row space-x-4",children:[(0,o.jsxs)("div",{className:"flex-1",children:[(0,o.jsx)("div",{className:"mb-2",children:(0,o.jsx)("label",{className:"font-bold",htmlFor:"firstName",children:t("contact.form.first_name")})}),(0,o.jsx)("div",{children:(0,o.jsx)("input",{type:"text",className:j()(B,E.touched.firstName&&E.errors.firstName?"border-pure-red":"border-light-slate"),"aria-label":t("contact.form.first_name"),value:E.values.firstName,name:"firstName",id:"firstName",onBlur:E.handleBlur,onChange:E.handleChange,maxLength:100})}),E.touched.firstName&&E.errors.firstName&&(0,o.jsx)("div",{className:P,children:E.errors.firstName})]}),(0,o.jsxs)("div",{className:"flex-1",children:[(0,o.jsx)("div",{className:"mb-2",children:(0,o.jsx)("label",{className:"font-bold",htmlFor:"lastName",children:t("contact.form.last_name")})}),(0,o.jsx)("div",{children:(0,o.jsx)("input",{type:"text",className:j()(B,E.touched.lastName&&E.errors.lastName?"border-pure-red":"border-light-slate"),"aria-label":t("contact.form.last_name"),value:E.values.lastName,name:"lastName",id:"lastName",onBlur:E.handleBlur,onChange:E.handleChange,maxLength:100})}),E.touched.lastName&&E.errors.lastName&&(0,o.jsx)("div",{className:P,children:E.errors.lastName})]})]}),(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("div",{className:"mb-2",children:(0,o.jsx)("label",{className:"font-bold",htmlFor:"email",children:t("contact.form.email_address")})}),(0,o.jsx)("div",{children:(0,o.jsx)("input",{type:"text",className:j()(B,E.touched.email&&E.errors.email?"border-pure-red":"border-light-slate"),"aria-label":t("contact.form.email_address"),value:E.values.email,name:"email",id:"email",onBlur:E.handleBlur,onChange:E.handleChange,maxLength:100})}),E.touched.email&&E.errors.email&&(0,o.jsx)("div",{className:P,children:E.errors.email})]}),(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("div",{className:"mb-2",children:(0,o.jsx)("label",{className:"font-bold",htmlFor:"category",id:"aria-category-label",children:t("contact.form.category")})}),(0,o.jsx)("div",{children:(0,o.jsx)(x.ZP,{instanceId:A,ref:R,"aria-labelledby":"aria-category-label",inputId:"category",name:"category",placeholder:t("contact.form.select_category"),value:E.values.category,onChange:U,onBlur:E.handleBlur,options:D,getOptionLabel:L,styles:(0,s.Z)((0,n.Z)({},I),{control:function(e){return(0,s.Z)((0,n.Z)({},e),{height:45,borderColor:E.touched.category&&E.errors.category?"#ff0000":"#a6b2c0"})}})})}),E.touched.category&&E.errors.category&&(0,o.jsx)("div",{className:P,children:E.errors.category})]}),E.values.category&&S.length>0&&(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("div",{className:"sr-only mb-2",children:(0,o.jsx)("label",{className:"font-bold",htmlFor:"topic",id:"aria-topic-label",children:t("contact.form.topic")})}),(0,o.jsx)("div",{children:(0,o.jsx)(x.ZP,{instanceId:O,"aria-label":t("contact.form.topic"),inputId:"topic",name:"topic",placeholder:t("contact.form.select_topic"),value:E.values.topic,onChange:z,onBlur:E.handleBlur,options:S,getOptionLabel:q,styles:(0,s.Z)((0,n.Z)({},I),{control:function(e){return(0,s.Z)((0,n.Z)({},e),{height:45,borderColor:E.touched.topic&&E.errors.topic?"#ff0000":"#a6b2c0"})}})})}),E.touched.topic&&E.errors.topic&&(0,o.jsx)("div",{className:P,children:E.errors.topic})]}),(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("div",{className:"mb-2",children:(0,o.jsx)("label",{className:"font-bold",htmlFor:"message",id:"aria-message-label",children:t("contact.form.message")})}),(0,o.jsx)("div",{children:(0,o.jsx)("textarea",{"aria-labelledby":"aria-message-label",className:j()("h-[250px] w-full rounded border p-3",E.touched.message&&E.errors.message?"border-pure-red":"border-light-slate"),type:"text",name:"message",id:"message",value:E.values.message,onChange:E.handleChange,onBlur:E.handleBlur,maxLength:3200})}),E.touched.message&&E.errors.message&&(0,o.jsx)("div",{className:P,children:E.errors.message})]}),E.status&&(0,o.jsxs)("div",{className:"float-right my-3 flex flex-row space-x-2",children:[E.status.message&&(0,o.jsx)("div",{className:"text-pure-red",children:E.status.message}),E.status.code&&(0,o.jsx)("div",{className:"text-pure-red",children:t("error_code",{code:E.status.code})})]}),(0,o.jsx)("div",{className:"flex w-full justify-end",children:(0,o.jsx)("button",{type:"submit",className:"button-primary button-primary-blue",disabled:E.isSubmitting,children:t("contact.form.send")})})]}),u&&(0,o.jsxs)("div",{className:"mb-4 flex items-center justify-start space-x-2",children:[(0,o.jsx)(v(),{src:"/images/check_circle.svg",alt:"check_circle",width:"18px",height:"18px"}),(0,o.jsx)("div",{className:"text-green",children:t("Thank you for contacting Nixontrades")})]}),(0,o.jsxs)("div",{className:"text-sm text-light-slate",children:[(0,o.jsx)(b.Z,{i18nKey:"contact.bottom_desc",ns:"email",components:{privacy:(0,o.jsx)(p(),{href:"/legal/privacy",children:"Privacy & Security Policy"})}}),(0,o.jsx)(b.Z,{i18nKey:"hcaptha_note",ns:"email",components:{pp:(0,o.jsx)("a",{href:"https://www.hcaptcha.com/privacy",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"}),ts:(0,o.jsx)("a",{href:"https://www.hcaptcha.com/terms",target:"_blank",rel:"noopener noreferrer",children:"Terms of Service"})}})]})]}),(0,o.jsx)("div",{className:"col-span-12 lg:col-span-3",children:(0,o.jsxs)("div",{className:"rounded bg-grey-smoke py-4 px-6",children:[(0,o.jsx)("h3",{className:"font-futura text-lg font-semibold",children:t("contact.help_center.header")}),(0,o.jsx)("p",{children:t("contact.help_center.desc")}),(0,o.jsx)("div",{children:(0,o.jsx)("a",{href:"https://help.".concat(a,".proultimatewealth.com/"),target:"_blank",rel:"noopener noreferrer",children:t("contact.help_center.go_to")})})]})})]})]})})]})}}},function(e){e.O(0,[2319,1110,3646,9774,2888,179],(function(){return t=97179,e(e.s=t);var t}));var t=e.O();_N_E=t}]);