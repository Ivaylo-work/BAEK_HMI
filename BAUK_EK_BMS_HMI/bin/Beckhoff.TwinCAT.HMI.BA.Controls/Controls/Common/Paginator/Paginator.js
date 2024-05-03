var TcHmi;!function(t){!function(e){!function(o){!function(o){class i extends t.Controls.System.TcHmiRegion{constructor(t,o,s){super(t,o,s),this.logger=new e.Logger({name:this.__id}),this.__showNavigationButtons=!1,this.__separateNavigationButtons=!1,this.__startPos=0,this.__curDeltaX=0,this.__curPageIdx=0,this.__touchStartHandler=t=>{this.__isSliderElement(t.target)||(this.__elementTemplateRoot.on("touchmove",this.__touchMoveHandler),this.__elementTemplateRoot.on("touchend",this.__touchEndHandler),this.__startPos=t.touches[0].clientX)},this.__touchMoveHandler=t=>{this.__curDeltaX=t.touches[0].clientX-this.__startPos,this.__elementTemplateRoot.css("left",this.__curDeltaX+"px")},this.__touchEndHandler=()=>{this.__elementTemplateRoot.off("touchend",this.__touchEndHandler),this.__elementTemplateRoot.off("touchmove",this.__touchMoveHandler),this.__curDeltaX>i.__switchLimit?this.__loadNextContent():this.__curDeltaX<-i.__switchLimit?this.__loadPrevContent():this.__moveToCenter()},this.__forwardHandler=()=>{this.goForward()},this.__backwardHandler=()=>{this.goBackward()}}__previnit(){super.__previnit()}__init(){super.__init(),this.__elementTemplateRoot.css("left","0")}__attach(){super.__attach(),this.__element.on("touchstart",this.__touchStartHandler)}__detach(){super.__detach()}destroy(){var t,e;this.__keepAlive||(null===(t=this.__forwardIcon)||void 0===t||t.destroy(),null===(e=this.__backwardIcon)||void 0===e||e.destroy(),super.destroy())}__loadNextContent(){let t=!1,e=()=>{t=!0,null!=this.__pages&&(this.__curPageIdx++,this.__curPageIdx>this.__pages.length-1&&(this.__curPageIdx=0),this.setTargetContent(this.__pages[this.__curPageIdx]),this.__elementTemplateRoot.off("transitionend",e),this.__elementTemplateRoot.removeClass("paginator-transition"),this.__elementTemplateRoot.css("overflow","auto"),this.__elementTemplateRoot.css("left","-100%"),setTimeout(()=>{this.__moveToCenter()},0))};setTimeout(()=>{t||e()},300),this.__elementTemplateRoot.addClass("paginator-transition"),this.__elementTemplateRoot.css("overflow","hidden"),this.__elementTemplateRoot.on("transitionend",e),this.__elementTemplateRoot.css("left","100%")}__loadPrevContent(){let t=!1,e=()=>{t=!0,null!=this.__pages&&(this.__curPageIdx--,this.__curPageIdx<0&&(this.__curPageIdx=this.__pages.length-1),this.setTargetContent(this.__pages[this.__curPageIdx]),this.__elementTemplateRoot.off("transitionend",e),this.__elementTemplateRoot.removeClass("paginator-transition"),this.__elementTemplateRoot.css("overflow","auto"),this.__elementTemplateRoot.css("left","100%"),setTimeout(()=>{this.__moveToCenter()},0))};setTimeout(()=>{t||e()},300),this.__elementTemplateRoot.addClass("paginator-transition"),this.__elementTemplateRoot.css("overflow","hidden"),this.__elementTemplateRoot.on("transitionend",e),this.__elementTemplateRoot.css("left","-100%")}__moveToCenter(){let t=()=>{this.__elementTemplateRoot.off("transitionend",t),this.__elementTemplateRoot.removeClass("paginator-transition"),this.__elementTemplateRoot.css("overflow","auto")};this.__elementTemplateRoot.addClass("paginator-transition"),this.__elementTemplateRoot.css("overflow","hidden"),this.__elementTemplateRoot.on("transitionend",t),this.__elementTemplateRoot.css("left","0"),this.__curDeltaX=0}__isSliderElement(t){const e=["TcHmi_Controls_Beckhoff_TcHmiLinearGauge","slider"];if(t.classList){for(let o=0;o<t.classList.length;o++)for(let i=0;i<e.length;i++)if(t.classList[o].indexOf(e[i])>-1)return!0;if(null!=t.parentElement)return!t.parentElement.classList.contains(".TcHmi_BuildingAutomation_Controls_Common_Paginator")&&this.__isSliderElement(t.parentElement)}return!1}goForward(){this.__loadNextContent()}goBackward(){this.__loadPrevContent()}goToPage(t){if(null!=this.__pages){if(null==this.__pages[t])return void this.logger.log(e.Logger.Severity.warn,`No page with id '${t}' found!`);this.setTargetContent(this.__pages[t]),this.__curPageIdx=t}}setPages(e){let o=t.ValueConverter.toObject(e);return null==o&&(o=this.getAttributeDefaultValueInternal("Pages")),o===this.__pages||(this.__pages=o,this.__processPages(),t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Pages"})),this}__processPages(){null==this.__pages||this.__pages.length<=0?(this.setTargetContent(null),this.__pages=null):this.setTargetContent(this.__pages[0]),this.__processShowNavigationButtons()}getPages(){return this.__pages}setShowNavigationButtons(e){let o=t.ValueConverter.toBoolean(e);return null==o&&(o=this.getAttributeDefaultValueInternal("ShowNavigationButtons")),o===this.__showNavigationButtons||(this.__showNavigationButtons=null!=o&&o,this.__processShowNavigationButtons(),t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ShowNavigationButtons"})),this}__processShowNavigationButtons(){var t,o,i,s,n,a,_,r;null===(t=this.__forwardIcon)||void 0===t||t.getElement().off("click",this.__forwardHandler),null===(o=this.__backwardIcon)||void 0===o||o.getElement().off("click",this.__backwardHandler),this.__showNavigationButtons?null!=this.__pages&&this.__pages.length>1?(null==this.__forwardIcon&&(this.__forwardIcon=new e.Components.Base(this.__id+"-forward-button",null,{background:{image:e.Icons.Standard.Right.path,useSVG:!0,imageHeight:100,imageHeightUnit:"%",imageWidth:100,imageWidthUnit:"%"},cssClass:"navigation-button forward"})),this.__element.append(this.__forwardIcon.getElement()),this.__forwardIcon.getElement().on("click",this.__forwardHandler),null==this.__backwardIcon&&(this.__backwardIcon=new e.Components.Base(this.__id+"-backward-button",null,{background:{image:e.Icons.Standard.Left.path,useSVG:!0,imageHeight:100,imageHeightUnit:"%",imageWidth:100,imageWidthUnit:"%"},cssClass:"navigation-button backward"})),this.__element.append(this.__backwardIcon.getElement()),this.__backwardIcon.getElement().on("click",this.__backwardHandler)):(null===(i=this.__forwardIcon)||void 0===i||i.getElement().detach(),null===(s=this.__backwardIcon)||void 0===s||s.getElement().detach()):(null===(n=this.__backwardIcon)||void 0===n||n.getElement().detach(),null===(a=this.__backwardIcon)||void 0===a||a.destroy(),delete this.__backwardIcon,null===(_=this.__forwardIcon)||void 0===_||_.getElement().detach(),null===(r=this.__forwardIcon)||void 0===r||r.destroy(),delete this.__forwardIcon),this.__processSeparateNavigationButtons()}getShowNavigationButtons(){return this.__showNavigationButtons}setSeparateNavigationButtons(e){let o=t.ValueConverter.toBoolean(e);return null==o&&(o=this.getAttributeDefaultValueInternal("SeparateNavigationButtons")),o===this.__separateNavigationButtons||(this.__separateNavigationButtons=null!=o&&o,this.__processSeparateNavigationButtons(),t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"SeparateNavigationButtons"})),this}__processSeparateNavigationButtons(){1==this.__separateNavigationButtons&&1==this.__showNavigationButtons?this.__element.addClass("show-navigation-buttons"):this.__element.removeClass("show-navigation-buttons")}getSeparateNavigationButtons(){return this.__separateNavigationButtons}}i.__switchLimit=100,o.Paginator=i}(o.Common||(o.Common={}))}(e.Controls||(e.Controls={}))}(t.BuildingAutomation||(t.BuildingAutomation={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("Paginator","TcHmi.BuildingAutomation.Controls.Common",TcHmi.BuildingAutomation.Controls.Common.Paginator);