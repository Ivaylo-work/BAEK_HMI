var TcHmi;!function(t){!function(e){!function(n){!function(n){class r extends t.Controls.System.TcHmiControl{constructor(t,n,r){super(t,n,r),this.__loadBaChildren=!1,this.__loadTexts=!1,this.busyHandler=new e.BusyHandler(this),this.logger=new e.Logger({name:this.__id}),this.eventHandler=new e.EventHandler(this),this.childrenHandler=new e.Components.BaseNode.ChildrenHandler(this),this.errorIndicator=new e.Components.ErrorIndicator(this),this.__destroyersToCallOnDetach=[],this.__destroyersToCallOnDestroy=[],this.__attrHandler=new e.AttrHandler(this)}__previnit(){null==this.__baFc&&(this.__baFc=new e.Components.Base(this.__id+"-ba-fc",this)),super.__previnit()}__init(){super.__init()}__attach(){super.__attach(),this.busyHandler.checkForBusyChildren()}__detach(){for(let t=0;t<this.__destroyersToCallOnDetach.length;t++)this.__destroyersToCallOnDetach[t]();this.__destroyersToCallOnDetach=[],super.__detach()}destroy(){if(!this.__keepAlive){for(let t=0;t<this.__destroyersToCallOnDestroy.length;t++)this.__destroyersToCallOnDestroy[t]();this.__destroyersToCallOnDestroy=[],this.__baFc.destroy(),super.destroy()}}setBaParent(t){this.__baParent=t}getBaParent(){return this.__baParent}hide(){return this.__element.css("display","none"),this}show(){return this.__element.css("display",""),this}__getNextAttachedParent(){let t=this.__baParent;for(;t;){if(t.getIsAttached())return t;t=t.getBaParent()}return null}setAttributes(t){return null==t?(this.__attrHandler.invalidAttribute("Attributes",t),this):(void 0!==t.readOnly&&this.setReadOnly(t.readOnly),void 0!==t.contentPadding&&this.setContentPadding(t.contentPadding),this)}getAttributes(){return this.__attrHandler.getRef()}setReadOnly(e){let n=t.ValueConverter.toBoolean(e);return null==n&&(n=this.getAttributeDefaultValueInternal("ReadOnly")),tchmi_equal(n,this.__baFc.getReadOnly())||void 0===n||null!=n&&"boolean"!=typeof n||(this.__attrHandler.readOnly=n,this.__baFc.setReadOnly(n),t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ReadOnly"}),this.__processReadOnly()),this}__processReadOnly(){!1===this.__attrHandler.readOnly?this.__element.removeClass("read-only"):this.__element.addClass("read-only")}getReadOnly(){return this.__baFc.getReadOnly()}setContentPadding(e){let n=t.ValueConverter.toObject(e);return null==n&&(n=this.getAttributeDefaultValueInternal("ContentPadding")),tchmi_equal(n,this.__baFc.getContentPadding())||void 0===n||null!=n&&!t.isFourSidedCss(n)||(this.__attrHandler.contentPadding=n,this.__baFc.setContentPadding(n),t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ContentPadding"}),this.__processContentPadding()),this}__processContentPadding(){if(null==this.__attrHandler.contentPadding)this.__element.css("--tchmi-ba-content-padding","");else{let e;e=t.isFourSidedCss(this.__attrHandler.contentPadding)?this.__attrHandler.contentPadding:{top:this.__attrHandler.contentPadding,right:this.__attrHandler.contentPadding,bottom:this.__attrHandler.contentPadding,left:this.__attrHandler.contentPadding},this.__element.css("--tchmi-ba-content-padding",""+e.top+(e.topUnit?e.topUnit:"px")+" "+e.right+(e.rightUnit?e.rightUnit:"px")+" "+e.bottom+(e.bottomUnit?e.bottomUnit:"px")+" "+e.left+(e.leftUnit?e.leftUnit:"px"))}}getContentPadding(){return this.__attrHandler.contentPadding}__processAllBackground(){t.StyleProvider.processBackground(this.__baFc.getElement(),this.__background)}__processBorderRadius(){super.__processBorderRadius(),t.StyleProvider.processBorderRadius(this.__baFc.getElement(),this.__borderRadius)}}n.BaseControl=r}(n.System||(n.System={}))}(e.Controls||(e.Controls={}))}(t.BuildingAutomation||(t.BuildingAutomation={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("BaseControl","TcHmi.BuildingAutomation.Controls.System",TcHmi.BuildingAutomation.Controls.System.BaseControl);