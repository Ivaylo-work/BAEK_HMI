var TcHmi;!function(n){!function(n){!function(o){o.ConvertHslToRgbaColor=function(o){if(null==o)return null;let i,t,u,r=o.h,l=o.s,c=o.l;if(0===l)i=t=u=c;else{let n=function(n,o,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?n+6*(o-n)*i:i<.5?o:i<2/3?n+(o-n)*(2/3-i)*6:n};var a=c<.5?c*(1+l):c+l-c*l,e=2*c-a;i=n(e,a,r+1/3),t=n(e,a,r),u=n(e,a,r-1/3)}return new n.Color.RGBAColor({r:Math.round(255*i),g:Math.round(255*t),b:Math.round(255*u),a:1})}}(n.Functions||(n.Functions={}))}(n.BuildingAutomation||(n.BuildingAutomation={}))}(TcHmi||(TcHmi={})),TcHmi.Functions.registerFunctionEx("ConvertHslToRgbaColor","TcHmi.BuildingAutomation.Functions",TcHmi.BuildingAutomation.Functions.ConvertHslToRgbaColor);