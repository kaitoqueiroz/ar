const _0x17fd88=_0x2b3a;(function(_0x1b40d0,_0x4a9ee1){const _0x1d46b2=_0x2b3a,_0x49c57e=_0x1b40d0();while(!![]){try{const _0x29213c=-parseInt(_0x1d46b2(0x1f4))/0x1*(parseInt(_0x1d46b2(0x1e8))/0x2)+parseInt(_0x1d46b2(0x1e4))/0x3+-parseInt(_0x1d46b2(0x1f7))/0x4+parseInt(_0x1d46b2(0x1f5))/0x5*(-parseInt(_0x1d46b2(0x1f1))/0x6)+-parseInt(_0x1d46b2(0x1e5))/0x7*(-parseInt(_0x1d46b2(0x1e9))/0x8)+-parseInt(_0x1d46b2(0x1fb))/0x9*(-parseInt(_0x1d46b2(0x1e7))/0xa)+parseInt(_0x1d46b2(0x1f3))/0xb*(-parseInt(_0x1d46b2(0x203))/0xc);if(_0x29213c===_0x4a9ee1)break;else _0x49c57e['push'](_0x49c57e['shift']());}catch(_0x1df4a0){_0x49c57e['push'](_0x49c57e['shift']());}}}(_0x72ea,0x18eee));function _0x2b3a(_0xb8a1f1,_0x4959de){const _0x72ea07=_0x72ea();return _0x2b3a=function(_0x2b3a0c,_0x373c77){_0x2b3a0c=_0x2b3a0c-0x1e4;let _0x5a8953=_0x72ea07[_0x2b3a0c];return _0x5a8953;},_0x2b3a(_0xb8a1f1,_0x4959de);}const sceneEl=document[_0x17fd88(0x1e6)]('a-scene'),videoElement=document[_0x17fd88(0x1f0)]('overlay-video'),cameraOverlay=document[_0x17fd88(0x1f0)](_0x17fd88(0x201)),activateCameraButton=document['getElementById'](_0x17fd88(0x1fd));function _0x72ea(){const _0x4d471d=['581049xRSDla','179347VXEvuE','querySelector','2160YsuiwJ','194ZGYhav','40SJsOVF','none','ready','pause','start','systems','click','getElementById','1038LjrVit','error','44LADWCF','1569tqCEDo','1000lMtJMP','muted','45300FuPgrW','mindar-image-system','targetLost','log','3537Rszyjf','addEventListener','activate-camera-button','loaded','flex','Target\x20found','activate-camera-overlay','targetFound','319296mbxnpo','play'];_0x72ea=function(){return _0x4d471d;};return _0x72ea();}let arSystem;sceneEl[_0x17fd88(0x1fc)](_0x17fd88(0x1fe),function(){const _0x2295f8=_0x17fd88;arSystem=sceneEl[_0x2295f8(0x1ee)][_0x2295f8(0x1f8)],console[_0x2295f8(0x1fa)](_0x2295f8(0x1eb)),cameraOverlay['style']['display']=_0x2295f8(0x1ff);});const playVideo=async()=>{const _0x8e78d5=_0x17fd88;try{await videoElement[_0x8e78d5(0x204)](),videoElement[_0x8e78d5(0x1f6)]=![];}catch(_0x3551ca){console[_0x8e78d5(0x1fa)](_0x3551ca);}};sceneEl[_0x17fd88(0x1fc)](_0x17fd88(0x202),async()=>{const _0x1e3e3e=_0x17fd88;console[_0x1e3e3e(0x1fa)](_0x1e3e3e(0x200)),await playVideo();}),sceneEl['addEventListener'](_0x17fd88(0x1f9),()=>{const _0x35cf87=_0x17fd88;console[_0x35cf87(0x1fa)]('Target\x20lost'),videoElement[_0x35cf87(0x1ec)]();}),videoElement['onerror']=()=>{const _0x39cff7=_0x17fd88;alert(videoElement[_0x39cff7(0x1f2)]['message']);},activateCameraButton[_0x17fd88(0x1fc)](_0x17fd88(0x1ef),()=>{const _0x59f022=_0x17fd88;cameraOverlay['style']['display']=_0x59f022(0x1ea),arSystem[_0x59f022(0x1ed)]();});