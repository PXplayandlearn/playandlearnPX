webpackJsonp([26],{1031:function(t,e,a){var s=a(1032);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(73)("e28728a0",s,!0,{})},1032:function(t,e,a){(t.exports=a(38)(!1)).push([t.i,".wrapper .primarycheck .custom-control-input:checked~.custom-control-label:before,.wrapper .primaryradio .custom-control-input:checked~.custom-control-label:before{background-color:#428bca!important}.wrapper .infocheck .custom-control-input:checked~.custom-control-label:before,.wrapper .inforadio .custom-control-input:checked~.custom-control-label:before{background-color:#4fc1e9!important}.wrapper .warningcheck .custom-control-input:checked~.custom-control-label:before,.wrapper .warningradio .custom-control-input:checked~.custom-control-label:before{background-color:#ffb65f!important}.wrapper .dangercheck .custom-control-input:checked~.custom-control-label:before,.wrapper .dangerradio .custom-control-input:checked~.custom-control-label:before{background-color:#fb8678!important}.wrapper .successcheck .custom-control-input:checked~.custom-control-label:before,.wrapper .successradio .custom-control-input:checked~.custom-control-label:before{background-color:#22d69d!important}.wrapper .defaultcheck .custom-control-input:checked~.custom-control-label:before,.wrapper .defaultradio .custom-control-input:checked~.custom-control-label:before{background-color:#ccc!important}input{cursor:pointer}.cur{cursor:not-allowed}",""])},1033:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a(1034),a(1036),e.default={name:"radios_checkboxes",data:function(){return{options:[{text:"First Checkbox",value:"first"},{text:"Second Checkbox",value:"second"},{text:"Third Checkbox",value:"third"}],checked:!0,indeterminate:!0,radiooptions:[{text:"First radio",value:"first"},{text:"Second radio",value:"second"},{text:"Third radio",value:"third"}]}},methods:{changeState:function(){var t=document.getElementById("indeterminateCheckbox");t.readOnly?t.checked=t.readOnly=!1:t.checked||(t.readOnly=t.indeterminate=!0)}}}},1034:function(t,e,a){var s=a(1035);"string"==typeof s&&(s=[[t.i,s,""]]);var r={transform:void 0};a(74)(s,r);s.locals&&(t.exports=s.locals)},1035:function(t,e,a){(t.exports=a(38)(!1)).push([t.i,"@-webkit-keyframes hey{50%{-webkit-transform:scale(1.5);transform:scale(1.5);-webkit-filter:blur(20px);filter:blur(20px)}90%{-webkit-filter:blur(40px);filter:blur(40px)}to{-webkit-transform:none;transform:none;-webkit-filter:none;filter:none}}@keyframes hey{50%{-webkit-transform:scale(1.5);transform:scale(1.5);-webkit-filter:blur(20px);filter:blur(20px)}90%{-webkit-filter:blur(40px);filter:blur(40px)}to{-webkit-transform:none;transform:none;-webkit-filter:none;filter:none}}.checkbox-hey:checked{-webkit-animation:hey .8s linear;animation:hey .8s linear}@-webkit-keyframes omg{59%{-webkit-transform:translateY(-4px);transform:translateY(-4px)}60%{-webkit-transform:translateX(-8px) translateY(12px);transform:translateX(-8px) translateY(12px)}70%{-webkit-transform:translateY(-8px);transform:translateY(-8px)}80%{-webkit-transform:translateX(8px);transform:translateX(8px)}90%{-webkit-transform:scale(.4);transform:scale(.4)}to{-webkit-transform:none;transform:none}}@keyframes omg{59%{-webkit-transform:translateY(-4px);transform:translateY(-4px)}60%{-webkit-transform:translateX(-8px) translateY(12px);transform:translateX(-8px) translateY(12px)}70%{-webkit-transform:translateY(-8px);transform:translateY(-8px)}80%{-webkit-transform:translateX(8px);transform:translateX(8px)}90%{-webkit-transform:scale(.4);transform:scale(.4)}to{-webkit-transform:none;transform:none}}.checkbox-omg:checked{-webkit-animation:omg .5s linear;animation:omg .5s linear}.checkbox-splash:active{-webkit-transform:scale(2);transform:scale(2)}.checkbox-roll:checked,.checkbox-splash:active{-webkit-transition:all .15s linear;transition:all .15s linear}.checkbox-roll:checked{-webkit-transform:rotateX(1turn);transform:rotateX(1turn)}.checkbox-rotate:checked{-webkit-transform:rotate(1turn);transform:rotate(1turn);-webkit-transition:all .2s linear;transition:all .2s linear}.checkbox-down{transition:all .15s linear}.checkbox-down,.checkbox-up,.checkbox-yo{-webkit-transition:all .15s linear}.checkbox-down:checked{-webkit-transform:translateY(10px);transform:translateY(10px)}.checkbox-up{transition:all .15s linear}.checkbox-up:checked{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.checkbox-yo{transition:all .15s linear}.checkbox-yo:checked{-webkit-transform:rotate(-45deg) translateZ(0);transform:rotate(-45deg) translateZ(0)}@-webkit-keyframes inout{30%{-webkit-transform:scale(1.3);transform:scale(1.3)}70%{-webkit-transform:scale(.3);transform:scale(.3)}90%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:none;transform:none}}@keyframes inout{30%{-webkit-transform:scale(1.3);transform:scale(1.3)}70%{-webkit-transform:scale(.3);transform:scale(.3)}90%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:none;transform:none}}.checkbox-inout:checked{-webkit-animation:inout .5s linear;animation:inout .5s linear}.checkbox-away{-webkit-transition:all .15s linear;transition:all .15s linear}.checkbox-away:checked{-webkit-transform:translateX(-10px);transform:translateX(-10px)}@-webkit-keyframes jump{50%{-webkit-transform:scale(.6) translateY(-10px);transform:scale(.6) translateY(-10px)}70%{-webkit-transform:scale(.8) translateY(-5px);transform:scale(.8) translateY(-5px)}90%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}to{-webkit-transform:none;transform:none}}@keyframes jump{50%{-webkit-transform:scale(.6) translateY(-10px);transform:scale(.6) translateY(-10px)}70%{-webkit-transform:scale(.8) translateY(-5px);transform:scale(.8) translateY(-5px)}90%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}to{-webkit-transform:none;transform:none}}.checkbox-jump:checked{-webkit-animation:jump .35s linear;animation:jump .35s linear}@-webkit-keyframes tv{50%{-webkit-transform:scale(.6) rotateY(100deg) skew(45deg);transform:scale(.6) rotateY(100deg) skew(45deg)}70%{-webkit-transform:scale(.8) rotateY(200deg) skew(70deg);transform:scale(.8) rotateY(200deg) skew(70deg)}90%{-webkit-transform:scale(1) rotateY(500deg) skew(20deg);transform:scale(1) rotateY(500deg) skew(20deg)}to{-webkit-transform:none;transform:none}}@keyframes tv{50%{-webkit-transform:scale(.6) rotateY(100deg) skew(45deg);transform:scale(.6) rotateY(100deg) skew(45deg)}70%{-webkit-transform:scale(.8) rotateY(200deg) skew(70deg);transform:scale(.8) rotateY(200deg) skew(70deg)}90%{-webkit-transform:scale(1) rotateY(500deg) skew(20deg);transform:scale(1) rotateY(500deg) skew(20deg)}to{-webkit-transform:none;transform:none}}.checkbox-tv:checked{-webkit-animation:tv .3s linear;animation:tv .3s linear}",""])},1036:function(t,e,a){var s=a(1037);"string"==typeof s&&(s=[[t.i,s,""]]);var r={transform:void 0};a(74)(s,r);s.locals&&(t.exports=s.locals)},1037:function(t,e,a){(t.exports=a(38)(!1)).push([t.i,"@-webkit-keyframes focus{0%{opacity:.4;-webkit-transform:scale(3);transform:scale(3)}10%{-webkit-transform:scale(2.5);transform:scale(2.5)}90%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:none;transform:none}}@keyframes focus{0%{opacity:.4;-webkit-transform:scale(3);transform:scale(3)}10%{-webkit-transform:scale(2.5);transform:scale(2.5)}90%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:none;transform:none}}.radiobox-focus:checked{-webkit-animation:focus .25s ease-out;animation:focus .25s ease-out}@-webkit-keyframes tremolo{0%{-webkit-transform:translateY(.5px) translateX(-.5px) scale(1) skewY(1deg) skewX(-1deg);transform:translateY(.5px) translateX(-.5px) scale(1) skewY(1deg) skewX(-1deg)}50%{-webkit-transform:translateX(0) translateY(0) scale(1.1) skewY(0) skewX(0);transform:translateX(0) translateY(0) scale(1.1) skewY(0) skewX(0)}90%{-webkit-transform:translateY(-.5px) translateX(.5px) scale(1) skewY(1deg) skewX(-1deg);transform:translateY(-.5px) translateX(.5px) scale(1) skewY(1deg) skewX(-1deg)}to{-webkit-transform:none;transform:none}}@keyframes tremolo{0%{-webkit-transform:translateY(.5px) translateX(-.5px) scale(1) skewY(1deg) skewX(-1deg);transform:translateY(.5px) translateX(-.5px) scale(1) skewY(1deg) skewX(-1deg)}50%{-webkit-transform:translateX(0) translateY(0) scale(1.1) skewY(0) skewX(0);transform:translateX(0) translateY(0) scale(1.1) skewY(0) skewX(0)}90%{-webkit-transform:translateY(-.5px) translateX(.5px) scale(1) skewY(1deg) skewX(-1deg);transform:translateY(-.5px) translateX(.5px) scale(1) skewY(1deg) skewX(-1deg)}to{-webkit-transform:none;transform:none}}.radiobox-tremolo:checked{-webkit-animation:tremolo 65ms linear;animation:tremolo 65ms linear;-webkit-animation-iteration-count:7;animation-iteration-count:7}@-webkit-keyframes boing{0%{-webkit-transform:translateY(3px) scaleY(.8);transform:translateY(3px) scaleY(.8)}50%{-webkit-transform:translateY(-5px);transform:translateY(-5px)}90%{opacity:.5;-webkit-transform:translateY(2px) scaleY(1) scaleX(1.5);transform:translateY(2px) scaleY(1) scaleX(1.5)}to{-webkit-transform:none;transform:none}}@keyframes boing{0%{-webkit-transform:translateY(3px) scaleY(.8);transform:translateY(3px) scaleY(.8)}50%{-webkit-transform:translateY(-5px);transform:translateY(-5px)}90%{opacity:.5;-webkit-transform:translateY(2px) scaleY(1) scaleX(1.5);transform:translateY(2px) scaleY(1) scaleX(1.5)}to{-webkit-transform:none;transform:none}}.radiobox-boing:checked{-webkit-animation:boing .2s ease-in-out;animation:boing .2s ease-in-out;-webkit-animation-iteration-count:3;animation-iteration-count:3}@-webkit-keyframes scatman{0%{-webkit-transform:translateX(-20px);transform:translateX(-20px)}20%{-webkit-transform:translateX(-2px);transform:translateX(-2px)}40%{-webkit-transform:translateX(-1px);transform:translateX(-1px)}60%{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:none;transform:none}}@keyframes scatman{0%{-webkit-transform:translateX(-20px);transform:translateX(-20px)}20%{-webkit-transform:translateX(-2px);transform:translateX(-2px)}40%{-webkit-transform:translateX(-1px);transform:translateX(-1px)}60%{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:none;transform:none}}.radiobox-scatman:checked{-webkit-animation:scatman .3s ease-in-out;animation:scatman .3s ease-in-out;-webkit-animation-iteration-count:2;animation-iteration-count:2}@-webkit-keyframes ufo{0%{-webkit-transform:scaleY(.8);transform:scaleY(.8)}60%{-webkit-transform:scaleY(1) scaleX(1.43) rotate(270deg);transform:scaleY(1) scaleX(1.43) rotate(270deg)}to{-webkit-transform:none;transform:none}}@keyframes ufo{0%{-webkit-transform:scaleY(.8);transform:scaleY(.8)}60%{-webkit-transform:scaleY(1) scaleX(1.43) rotate(270deg);transform:scaleY(1) scaleX(1.43) rotate(270deg)}to{-webkit-transform:none;transform:none}}.radiobox-ufo:checked{-webkit-animation:ufo .2s linear;animation:ufo .2s linear;-webkit-animation-iteration-count:4;animation-iteration-count:4}@-webkit-keyframes flash{0%,60%{-webkit-transform:scale(0);transform:scale(0)}30%{-webkit-transform:scale(.5);transform:scale(.5)}90%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:none;transform:none}}@keyframes flash{0%,60%{-webkit-transform:scale(0);transform:scale(0)}30%{-webkit-transform:scale(.5);transform:scale(.5)}90%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:none;transform:none}}.radiobox-flash:checked{-webkit-animation:flash .2s cubic-bezier(.03,.61,.17,.97);animation:flash .2s cubic-bezier(.03,.61,.17,.97);-webkit-animation-iteration-count:3;animation-iteration-count:3}@-webkit-keyframes return{0%{-webkit-transform:scale(.3) translateX(7px);transform:scale(.3) translateX(7px)}50%{-webkit-transform:scale(.8) rotate(270deg) translateY(-10px);transform:scale(.8) rotate(270deg) translateY(-10px)}90%{-webkit-transform:skewX(15deg) rotate(270deg);transform:skewX(15deg) rotate(270deg)}}@keyframes return{0%{-webkit-transform:scale(.3) translateX(7px);transform:scale(.3) translateX(7px)}50%{-webkit-transform:scale(.8) rotate(270deg) translateY(-10px);transform:scale(.8) rotate(270deg) translateY(-10px)}90%{-webkit-transform:skewX(15deg) rotate(270deg);transform:skewX(15deg) rotate(270deg)}}.radiobox-return:checked{-webkit-animation:return .25s cubic-bezier(.03,.61,.17,.97);animation:return .25s cubic-bezier(.03,.61,.17,.97);-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes boom{0%{opacity:.2;-webkit-transform:scale(2);transform:scale(2)}90%{opacity:.01;-webkit-transform:scale(6);transform:scale(6)}to{-webkit-transform:none;transform:none}}@keyframes boom{0%{opacity:.2;-webkit-transform:scale(2);transform:scale(2)}90%{opacity:.01;-webkit-transform:scale(6);transform:scale(6)}to{-webkit-transform:none;transform:none}}.radiobox-boom:checked{-webkit-animation:boom .2s ease-in;animation:boom .2s ease-in;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes vertigo{0%{-webkit-transform:scale(1) rotate(50deg);transform:scale(1) rotate(50deg)}30%{-webkit-transform:scale(.5) skewX(45deg) translateY(3px) translateX(-3px);transform:scale(.5) skewX(45deg) translateY(3px) translateX(-3px)}60%{-webkit-transform:scale(1.2) skewY(5deg) rotate(0);transform:scale(1.2) skewY(5deg) rotate(0)}90%{-webkit-transform:skew(-9deg,-9deg);transform:skew(-9deg,-9deg)}to{-webkit-transform:none;transform:none}}@keyframes vertigo{0%{-webkit-transform:scale(1) rotate(50deg);transform:scale(1) rotate(50deg)}30%{-webkit-transform:scale(.5) skewX(45deg) translateY(3px) translateX(-3px);transform:scale(.5) skewX(45deg) translateY(3px) translateX(-3px)}60%{-webkit-transform:scale(1.2) skewY(5deg) rotate(0);transform:scale(1.2) skewY(5deg) rotate(0)}90%{-webkit-transform:skew(-9deg,-9deg);transform:skew(-9deg,-9deg)}to{-webkit-transform:none;transform:none}}.radiobox-vertigo:checked{-webkit-animation:vertigo .2s ease-in;animation:vertigo .2s ease-in;-webkit-animation-iteration-count:5;animation-iteration-count:5}@-webkit-keyframes pump{0%,to{-webkit-transform:rotate(15deg) skewX(10deg) skewY(-20deg);transform:rotate(15deg) skewX(10deg) skewY(-20deg)}50%{-webkit-transform:scale(.8);transform:scale(.8)}80%{-webkit-transform:rotate(15deg) skewX(10deg) skewY(-40deg);transform:rotate(15deg) skewX(10deg) skewY(-40deg)}}@keyframes pump{0%,to{-webkit-transform:rotate(15deg) skewX(10deg) skewY(-20deg);transform:rotate(15deg) skewX(10deg) skewY(-20deg)}50%{-webkit-transform:scale(.8);transform:scale(.8)}80%{-webkit-transform:rotate(15deg) skewX(10deg) skewY(-40deg);transform:rotate(15deg) skewX(10deg) skewY(-40deg)}}@-webkit-keyframes pumpit{0%{-webkit-transform:none;transform:none}50%{-webkit-transform:scale(.8);transform:scale(.8)}80%{-webkit-transform:rotate(-15deg) skewX(-10deg) skewY(40deg);transform:rotate(-15deg) skewX(-10deg) skewY(40deg)}to{-webkit-transform:rotate(-15deg) skewX(-10deg) skewY(20deg);transform:rotate(-15deg) skewX(-10deg) skewY(20deg)}}@keyframes pumpit{0%{-webkit-transform:none;transform:none}50%{-webkit-transform:scale(.8);transform:scale(.8)}80%{-webkit-transform:rotate(-15deg) skewX(-10deg) skewY(40deg);transform:rotate(-15deg) skewX(-10deg) skewY(40deg)}to{-webkit-transform:rotate(-15deg) skewX(-10deg) skewY(20deg);transform:rotate(-15deg) skewX(-10deg) skewY(20deg)}}.radiobox-pump:checked{-webkit-animation:pump .4s cubic-bezier(.03,.61,.17,.97),pumpit .4s .4s linear;animation:pump .4s cubic-bezier(.03,.61,.17,.97),pumpit .4s .4s linear;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes hooray{0%{opacity:.1;-webkit-transform:scale(5);transform:scale(5)}60%{-webkit-transform:none;transform:none}}@keyframes hooray{0%{opacity:.1;-webkit-transform:scale(5);transform:scale(5)}60%{-webkit-transform:none;transform:none}}.radiobox-hooray:checked{-webkit-animation:hooray .2s ease-in;animation:hooray .2s ease-in;-webkit-animation-iteration-count:3;animation-iteration-count:3}@-webkit-keyframes wheel{0%{-webkit-transform:scale(1) rotate(50deg);transform:scale(1) rotate(50deg)}30%{-webkit-transform:scale(.9) skewX(9deg);transform:scale(.9) skewX(9deg)}60%{-webkit-transform:scale(1.1) skewY(9deg) rotate(270deg);transform:scale(1.1) skewY(9deg) rotate(270deg)}90%{-webkit-transform:skew(-9deg,-9deg);transform:skew(-9deg,-9deg)}to{-webkit-transform:none;transform:none}}@keyframes wheel{0%{-webkit-transform:scale(1) rotate(50deg);transform:scale(1) rotate(50deg)}30%{-webkit-transform:scale(.9) skewX(9deg);transform:scale(.9) skewX(9deg)}60%{-webkit-transform:scale(1.1) skewY(9deg) rotate(270deg);transform:scale(1.1) skewY(9deg) rotate(270deg)}90%{-webkit-transform:skew(-9deg,-9deg);transform:skew(-9deg,-9deg)}to{-webkit-transform:none;transform:none}}.radiobox-wheel:checked{-webkit-animation:wheel .1s cubic-bezier(.03,.61,.17,.97);animation:wheel .1s cubic-bezier(.03,.61,.17,.97);-webkit-animation-iteration-count:5;animation-iteration-count:5}.infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}",""])},1038:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row check"},[a("div",{staticClass:"col-lg-12"},[a("b-card",{staticClass:"bg-warning-card",attrs:{header:"Toggle Buttons","header-tag":"h4"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h5",[t._v("Colors")]),t._v(" "),a("toggle-button",{attrs:{value:!1,sync:!0,labels:!0,color:{checked:"#09BD8F",unchecked:"#dc6460"}}}),t._v(" "),a("h5",{staticClass:"mt-3\n"},[t._v("Lables")]),t._v(" "),a("toggle-button",{attrs:{value:!0,labels:{checked:"Checked",unchecked:"UnChecked"},width:100,color:{checked:"#09BD8F",unchecked:"#dc6460"}}}),t._v(" "),a("h5",{staticClass:"mt-3"},[t._v("Width")]),t._v(" "),a("toggle-button",{attrs:{value:!0,labels:!0,width:50,color:{checked:"#09BD8F",unchecked:"#dc6460"}}}),t._v(" "),a("toggle-button",{attrs:{value:!0,labels:!0,width:60,color:{checked:"#09BD8F",unchecked:"#dc6460"}}}),t._v(" "),a("toggle-button",{attrs:{value:!0,labels:!0,width:100,color:{checked:"#09BD8F",unchecked:"#dc6460"}}}),t._v(" "),a("toggle-button",{attrs:{value:!0,labels:!0,width:120,color:{checked:"#09BD8F",unchecked:"#dc6460"}}})],1),t._v(" "),a("div",{staticClass:"col-lg-6 "},[a("h5",{staticClass:"mb-3 mt-3"},[t._v("Basic")]),t._v(" "),a("toggle-button",{staticClass:"mb-5 togglesiwtch",attrs:{value:!1,sync:!0,labels:!0,color:{checked:"#6f9dd6",unchecked:"#6f9dd6"}}}),t._v(" "),a("h5",{staticClass:"mb-3"},[t._v("Disabled")]),t._v(" "),a("div",{staticClass:"cur"},[a("toggle-button",{staticClass:"cur",attrs:{value:!1,sync:!0,labels:!0,disabled:!0}}),t._v(" "),a("toggle-button",{staticClass:"cur",attrs:{value:!0,sync:!0,labels:!0,disabled:!0}})],1)],1)])])],1),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("b-card",{staticClass:"bg-info-card",attrs:{header:"Checkboxes with animations","header-tag":"h4"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",[a("label",[a("input",{staticClass:"checkbox-hey",attrs:{type:"checkbox"}}),t._v(" Hey")])]),t._v(" "),a("div",[a("label",[a("input",{staticClass:"checkbox-away",attrs:{type:"checkbox"}}),t._v(" Away")])]),t._v(" "),a("div",[a("label",[a("input",{staticClass:"checkbox-inout",attrs:{type:"checkbox"}}),t._v(" Inout\n                            ")])]),t._v(" "),a("div",[a("label",[a("input",{staticClass:"checkbox-rotate",attrs:{type:"checkbox"}}),t._v(" Rotate\n                            ")])]),t._v(" "),a("div",[a("label",[a("input",{staticClass:"checkbox-yo",attrs:{type:"checkbox"}}),t._v(" Yo")])]),t._v(" "),a("div",[a("label",[a("input",{staticClass:"checkbox-roll",attrs:{type:"checkbox"}}),t._v(" Roll")])])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",[a("label",[a("input",{staticClass:"checkbox-up",attrs:{type:"checkbox"}}),t._v(" Up")])]),t._v(" "),a("div",[a("label",[a("input",{staticClass:"checkbox-down",attrs:{type:"checkbox"}}),t._v(" Down\n                            ")])]),t._v(" "),a("div",[a("label",[a("input",{staticClass:"checkbox-tv",attrs:{type:"checkbox"}}),t._v(" Tv")])]),t._v(" "),a("div",[a("label",[a("input",{staticClass:"checkbox-jump",attrs:{type:"checkbox"}}),t._v(" Jump")])]),t._v(" "),a("div",[a("label",[a("input",{staticClass:"checkbox-omg",attrs:{type:"checkbox"}}),t._v(" Omg")])]),t._v(" "),a("div",[a("label",[a("input",{staticClass:"checkbox-splash",attrs:{type:"checkbox"}}),t._v(" Splash")])])])])])],1),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("b-card",{staticClass:"bg-danger-card",attrs:{header:"Radios with animations","header-tag":"h4"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",[a("label",{attrs:{tabindex:"0"}},[a("input",{staticClass:"radiobox-tremolo",attrs:{type:"radio",name:"x",value:"1"}}),t._v(" Tremolo\n                            ")])]),t._v(" "),a("div",[a("label",[a("input",{staticClass:"radiobox-boing",attrs:{type:"radio",name:"x",value:"2"}}),t._v(" Boing\n                            ")])]),t._v(" "),a("div",[a("label",[a("input",{staticClass:"radiobox-boom",attrs:{type:"radio",name:"x",value:"3"}}),t._v(" Boom\n                            ")])]),t._v(" "),a("div",[a("label",[a("input",{staticClass:"radiobox-flash",attrs:{type:"radio",name:"x"}}),t._v(" Flash\n                            ")])]),t._v(" "),a("div",[a("label",[a("input",{staticClass:"radiobox-wheel",attrs:{type:"radio",name:"x"}}),t._v(" Wheel\n                            ")])]),t._v(" "),a("div",[a("label",[a("input",{staticClass:"radiobox-return",attrs:{type:"radio",name:"x"}}),t._v(" Return\n                            ")])])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("div",[a("label",[a("input",{staticClass:"radiobox-scatman",attrs:{type:"radio",name:"x"}}),t._v(" Scatman\n                            ")])]),t._v(" "),a("div",{staticClass:" "},[a("label",[a("input",{staticClass:"radiobox-vertigo",attrs:{type:"radio",name:"x"}}),t._v(" Vertigo\n                            ")])]),t._v(" "),a("div",[a("label",[a("input",{staticClass:"radiobox-pump",attrs:{type:"radio",name:"x"}}),t._v(" Pump")])]),t._v(" "),a("div",[a("label",[a("input",{staticClass:"radiobox-focus",attrs:{type:"radio",name:"x"}}),t._v(" Focus\n                            ")])]),t._v(" "),a("div",[a("label",[a("input",{staticClass:"radiobox-hooray",attrs:{type:"radio",name:"x"}}),t._v(" Hooray\n                            ")])]),t._v(" "),a("div",[a("label",[a("input",{staticClass:"radiobox-ufo",attrs:{type:"radio",name:"x"}}),t._v(" Ufo\n                            ")])])])])])],1),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("b-card",{staticClass:"bg-success-card",attrs:{header:"Check boxes","header-tag":"h4"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mb-2"},[a("h5",[t._v("Color checkboxes")])]),t._v(" "),a("div",{staticClass:"col-lg-4 col-md-6"},[a("b-form-checkbox",{staticClass:"primarycheck"},[t._v("Primary")])],1),t._v(" "),a("div",{staticClass:"col-lg-4 col-md-6"},[a("b-form-checkbox",{staticClass:"infocheck"},[t._v("Info")])],1),t._v(" "),a("div",{staticClass:"col-lg-4 col-md-6"},[a("b-form-checkbox",{staticClass:"warningcheck"},[t._v("Warning")])],1),t._v(" "),a("div",{staticClass:"col-lg-4 col-md-6"},[a("b-form-checkbox",{staticClass:"dangercheck"},[t._v("Danger")])],1),t._v(" "),a("div",{staticClass:"col-lg-4 col-md-6"},[a("b-form-checkbox",{staticClass:"successcheck"},[t._v("Success")])],1),t._v(" "),a("div",{staticClass:"col-lg-4 col-md-6"},[a("b-form-checkbox",{staticClass:"defaultcheck"},[t._v("Default")])],1)]),t._v(" "),a("div",{staticClass:"row "},[a("div",{staticClass:"col-12 mt-3"},[a("h5",[t._v("Inline checkboxes")])]),t._v(" "),a("div",{staticClass:"col-12"},[a("b-form-checkbox-group",{attrs:{options:t.options,name:"radioInline"}})],1)]),t._v(" "),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-12"},[a("h5",[t._v("Intermediate checkboxes")])]),t._v(" "),a("div",{staticClass:"col-lg-4 col-md-6 mt-2"},[a("b-form-checkbox",{attrs:{indeterminate:t.indeterminate},on:{"update:indeterminate":function(e){t.indeterminate=e}},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("\n                            Intermediate\n                        ")])],1)]),t._v(" "),a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-12"},[a("h5",[t._v(" Disabled  ")])]),t._v(" "),a("div",{staticClass:"col-lg-4 col-md-6 mt-2"},[a("b-form-checkbox",{attrs:{disabled:!0}},[t._v("Can't check\n                        ")])],1),t._v(" "),a("div",{staticClass:"col-lg-4 col-md-6 mt-2"},[a("b-form-checkbox",{attrs:{disabled:!0}},[t._v("This too\n                        ")])],1),t._v(" "),a("div",{staticClass:"col-lg-4 col-md-6 mt-2"},[a("b-form-checkbox",{attrs:{disabled:!0}},[t._v("And this\n                        ")])],1)])])],1),t._v(" "),a("div",{staticClass:"col-lg-6 "},[a("b-card",{staticClass:"bg-info-card",attrs:{header:"Radios","header-tag":"h4"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mb-2"},[a("h5",[t._v("Color Radios")])]),t._v(" "),a("div",{staticClass:"col-lg-4 col-md-6"},[a("div",{staticClass:"custom-controls-stacked"},[a("b-form-radio",{staticClass:"primaryradio",attrs:{checked:"false"}},[t._v("Primary\n                            ")])],1)]),t._v(" "),a("div",{staticClass:"col-lg-4 col-md-6"},[a("b-form-radio",{staticClass:"inforadio",attrs:{checked:"false"}},[t._v("Info\n                        ")])],1),t._v(" "),a("div",{staticClass:"col-lg-4 col-md-6"},[a("b-form-radio",{staticClass:"warningradio",attrs:{checked:"false"}},[t._v("Warning\n                        ")])],1),t._v(" "),a("div",{staticClass:"col-lg-4 col-md-6"},[a("b-form-radio",{staticClass:"dangerradio",attrs:{checked:"false"}},[t._v("Danger\n                        ")])],1),t._v(" "),a("div",{staticClass:"col-lg-4 col-md-6"},[a("b-form-radio",{staticClass:"successradio",attrs:{checked:"false"}},[t._v("Success\n                        ")])],1),t._v(" "),a("div",{staticClass:"col-lg-4 col-md-6 mb-3"},[a("b-form-radio",{staticClass:"defaultradio",attrs:{checked:"false"}},[t._v("Default\n                        ")])],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h5",[t._v("Inline radios")])]),t._v(" "),a("div",{staticClass:"col-lg-12 mt-2"},[a("div",{staticClass:"custom-controls-stacked"},[a("b-form-radio-group",{attrs:{options:t.radiooptions}})],1)])]),t._v(" "),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-12"},[a("h5",[t._v(" Disabled state")])]),t._v(" "),a("div",{staticClass:"col-lg-6 mt-3"},[a("b-form-radio",{attrs:{disabled:!0,checked:"false"}},[t._v("Its Disbaled")])],1),t._v(" "),a("div",{staticClass:"col-lg-6 mt-3"},[a("b-form-radio",{attrs:{disabled:!0,checked:"false"}},[t._v("Can't check")])],1)])])],1)])},staticRenderFns:[]}},1478:function(t,e,a){var s=a(182)(a(1033),a(1038),!1,function(t){a(1031)},null,null);t.exports=s.exports}});