var TcHmi;!function(t){!function(e){!function(e){!function(s){class i extends e.System.TextControl{constructor(t,e,s){super(t,e,s),this.__localeSymbols=[]}__previnit(){if(this.__list=this.__element.children("ul"),0===this.__list.length)throw new Error("Invalid Template.html");super.__previnit()}__init(){super.__init()}__attach(){super.__attach()}__detach(){super.__detach()}destroy(){this.__keepAlive||(this.__localeSymbols.forEach(t=>t.destroy()),this.__localeSymbols=[],super.destroy())}setEntries(e){let s=t.ValueConverter.toObject(e);return null==s&&(s=this.getAttributeDefaultValueInternal("Entries")),s===this.__entries||(this.__entries=s,this.__processEntries(),t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Entries"})),this}__processEntries(){if(this.__list.empty(),this.__localeSymbols.forEach(t=>t.destroy()),this.__localeSymbols=[],null!=this.__entries)for(let e=0;e<this.__entries.length;e++){let s=this.__entries[e],i=$("<li>");if(s.indexOf("%l%")>-1){let e=new t.Symbol(s);e.watch(t=>{null==t.value||t.value.length<=0||t.value===e.getExpression().getContent()?i.hide():(i.html(t.value),i.show())}),this.__localeSymbols.push(e)}else i.html(s);this.__list.append(i)}}getEntries(){return this.__entries}setListStyleImage(e){let s=t.ValueConverter.toString(e);return null==s&&(s=this.getAttributeDefaultValueInternal("ListStyleImage")),s===this.__listStyleImage||(null!=s&&"/"!=s[0]&&(s="/"+s),this.__listStyleImage=s,this.__processListStyleImage(),t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ListStyleImage"})),this}__processListStyleImage(){null==this.__listStyleImage?(this.__list.css("--list-style-image",""),this.__list.removeClass("use-list-style-image")):(this.__list.addClass("use-list-style-image"),this.__list.css("--list-style-image",`url(${this.__listStyleImage})`))}getListStyleImage(){return this.__listStyleImage}__processTextColor(){super.__processTextColor()}}s.BulletPointList=i}(e.Common||(e.Common={}))}(e.Controls||(e.Controls={}))}(t.BuildingAutomation||(t.BuildingAutomation={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("BulletPointList","TcHmi.BuildingAutomation.Controls.Common",TcHmi.BuildingAutomation.Controls.Common.BulletPointList);