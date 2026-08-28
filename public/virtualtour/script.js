(function(){
    var script = {
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_541C44FE_58FC_36D1_41AA_94DC832CDFB5_playlist,this.mainPlayList]); try { this.playAudioList([this.audio_71ABDDF6_6093_72E1_41A8_C378D133592C]); } catch(e){}",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_5429BD09_58FC_5733_41CE_9D81FCF0A87C",
  "this.ThumbnailList_541C44FE_58FC_36D1_41AA_94DC832CDFB5",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_54299D09_58FC_5733_4187_154098A160DA",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "class": "Player",
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "initialPosition": {
  "yaw": 125.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_70B547A1_6171_3F63_41D0_4CF772F85018",
 "class": "PanoramaCamera"
},
{
 "levels": [
  {
   "url": "media/popup_6E32FFFF_60B1_2EDF_41C7_E3B7FE7A9258_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_6E32FFFF_60B1_2EDF_41C7_E3B7FE7A9258_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_6E32FFFF_60B1_2EDF_41C7_E3B7FE7A9258_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_707A9537_60B3_136F_41D2_D3917BCB79A8",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_6FC4E99B_6091_1326_41D2_3383D692B604_0_0.jpg",
   "width": 12000,
   "class": "ImageResourceLevel",
   "height": 3600
  },
  {
   "url": "media/popup_6FC4E99B_6091_1326_41D2_3383D692B604_0_1.jpg",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 2457
  },
  {
   "url": "media/popup_6FC4E99B_6091_1326_41D2_3383D692B604_0_2.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 1228
  },
  {
   "url": "media/popup_6FC4E99B_6091_1326_41D2_3383D692B604_0_3.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 614
  },
  {
   "url": "media/popup_6FC4E99B_6091_1326_41D2_3383D692B604_0_4.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 307
  },
  {
   "url": "media/popup_6FC4E99B_6091_1326_41D2_3383D692B604_0_5.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 153
  }
 ],
 "id": "ImageResource_74C81013_609F_3127_41D2_53F689E432E2",
 "class": "ImageResource"
},
{
 "horizontalAlign": "center",
 "titleFontFamily": "Arial",
 "closeButtonBorderColor": "#000000",
 "id": "window_6CA7AF3E_60AF_6F5E_41C5_63EE81D27612",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverIconLineWidth": 5,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "footerBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "minWidth": 20,
 "closeButtonRollOverBorderSize": 0,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "titleFontSize": "1.29vmin",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "closeButtonPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "titlePaddingBottom": 5,
 "headerPaddingLeft": 10,
 "layout": "vertical",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.viewer_uid70746728_6171_3F61_41B0_5B4BED98CC06"
 ],
 "bodyPaddingTop": 0,
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "borderRadius": 5,
 "titlePaddingTop": 5,
 "closeButtonBorderRadius": 0,
 "closeButtonPressedBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "headerPaddingBottom": 5,
 "footerBackgroundOpacity": 0,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonBackgroundOpacity": 0.3,
 "titlePaddingLeft": 5,
 "paddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingBottom": 0,
 "headerBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "data": {
  "name": "Window1550"
 }
},
{
 "items": [
  {
   "media": "this.video_51787A91_5C75_4FAD_41CA_DCAC88230F39",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7076F72B_6171_3F67_41D4_BE19C6AB76EF, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7076F72B_6171_3F67_41D4_BE19C6AB76EF, 0)"
  }
 ],
 "id": "playList_7076F72B_6171_3F67_41D4_BE19C6AB76EF",
 "class": "PlayList"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_0_t.jpg",
 "id": "album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_0",
 "width": 4000,
 "label": "DSC09682",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_0.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 6000
},
{
 "initialPosition": {
  "yaw": -90.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_70A8076F_6171_3FFF_41D0_71996E6B520B",
 "class": "PanoramaCamera"
},
{
 "horizontalAlign": "center",
 "titleFontFamily": "Arial",
 "closeButtonBorderColor": "#000000",
 "id": "window_72E484D9_6093_7123_41D1_344D8B679F68",
 "backgroundOpacity": 1,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 20,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverIconLineWidth": 5,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "footerBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "backgroundColor": [],
 "closeButtonRollOverBorderColor": "#000000",
 "minWidth": 20,
 "closeButtonRollOverBorderSize": 0,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "bodyBackgroundOpacity": 0,
 "borderSize": 0,
 "titleFontSize": "1.29vmin",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "headerPaddingRight": 0,
 "backgroundColorDirection": "vertical",
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "footerHeight": 5,
 "headerBackgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "shadowHorizontalLength": 3,
 "shadowBlurRadius": 6,
 "closeButtonPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 5,
 "closeButtonPaddingLeft": 5,
 "titlePaddingBottom": 5,
 "headerPaddingLeft": 10,
 "layout": "vertical",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "children": [
  "this.viewer_uid7074D729_6171_3F63_41D3_6B54AE48D340"
 ],
 "bodyPaddingTop": 0,
 "closeButtonRollOverIconColor": "#666666",
 "paddingRight": 0,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "borderRadius": 5,
 "titlePaddingTop": 5,
 "closeButtonBorderRadius": 0,
 "closeButtonPressedBorderColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "headerPaddingBottom": 5,
 "footerBackgroundOpacity": 0,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonIconWidth": 20,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#888888",
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonBackgroundOpacity": 0.3,
 "titlePaddingLeft": 5,
 "paddingBottom": 0,
 "closeButtonPaddingTop": 5,
 "closeButtonIconColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 0,
 "closeButtonPressedBorderSize": 0,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyPaddingBottom": 0,
 "headerBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "data": {
  "name": "Window12721"
 }
},
{
 "initialPosition": {
  "yaw": -125.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_70DB07C4_6171_3F21_41D7_F13A4161024C",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_7285D706_6093_3F2E_41BD_468E52501098",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid7074D729_6171_3F63_41D3_6B54AE48D340VideoPlayer)",
   "player": "this.viewer_uid7074D729_6171_3F63_41D3_6B54AE48D340VideoPlayer",
   "start": "this.viewer_uid7074D729_6171_3F63_41D3_6B54AE48D340VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_74672EFB_6091_EEE6_41D7_38501B9C2EFA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_74672EFB_6091_EEE6_41D7_38501B9C2EFA, 0)"
  }
 ],
 "id": "PlayList_74672EFB_6091_EEE6_41D7_38501B9C2EFA",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 25.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_70BBB791_6171_3F23_41B5_CFA42ABA2171",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_6F6A8CAD_60F3_3163_41B0_179E94C55F4A_0_t.jpg",
 "id": "album_6F6A8CAD_60F3_3163_41B0_179E94C55F4A_0",
 "width": 1600,
 "label": "002",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_6F6A8CAD_60F3_3163_41B0_179E94C55F4A_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 900
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 11.99,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6E6A02E2_60B3_36E1_41B1_1089ED78439C",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_6E6A02E2_60B3_36E1_41B1_1089ED78439C_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 2.81,
 "hideEasing": "cubic_out",
 "yaw": 56.62,
 "popupMaxWidth": "95%"
},
{
 "levels": [
  {
   "url": "media/popup_53B3CA9F_5CAA_4CC0_41D4_40C44EA46426_0_0.jpg",
   "width": 1600,
   "class": "ImageResourceLevel",
   "height": 900
  },
  {
   "url": "media/popup_53B3CA9F_5CAA_4CC0_41D4_40C44EA46426_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_53B3CA9F_5CAA_4CC0_41D4_40C44EA46426_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_525248F1_5CAA_CC43_41B4_F3391FAE9FEE",
 "class": "ImageResource"
},
{
 "thumbnailUrl": "media/video_7285D706_6093_3F2E_41BD_468E52501098_t.jpg",
 "id": "video_7285D706_6093_3F2E_41BD_468E52501098",
 "width": 1920,
 "loop": false,
 "class": "Video",
 "label": "viji-1",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_7285D706_6093_3F2E_41BD_468E52501098.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_4_t.jpg",
 "id": "album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_4",
 "width": 4000,
 "label": "DSC09699",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_4.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 6000
},
{
 "initialPosition": {
  "yaw": -32.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_7090675E_6171_3F21_41AA_9B8A59612A55"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 12,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6E32FFFF_60B1_2EDF_41C7_E3B7FE7A9258",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_6E32FFFF_60B1_2EDF_41C7_E3B7FE7A9258_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 1.52,
 "hideEasing": "cubic_out",
 "yaw": -56.91,
 "popupMaxWidth": "95%"
},
{
 "items": [
  {
   "media": "this.panorama_527FFB31_58F5_D352_41CD_A55F73F06667",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_541C44FE_58FC_36D1_41AA_94DC832CDFB5_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_527FFB31_58F5_D352_41CD_A55F73F06667_camera"
  },
  {
   "media": "this.panorama_528D5649_58F5_D532_41C2_57FD34F57382",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_541C44FE_58FC_36D1_41AA_94DC832CDFB5_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_528D5649_58F5_D532_41C2_57FD34F57382_camera"
  },
  {
   "media": "this.panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_541C44FE_58FC_36D1_41AA_94DC832CDFB5_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_camera"
  },
  {
   "media": "this.panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_541C44FE_58FC_36D1_41AA_94DC832CDFB5_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_camera"
  },
  {
   "media": "this.panorama_52ABF414_58F4_7552_41C9_1CB853399629",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_541C44FE_58FC_36D1_41AA_94DC832CDFB5_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_52ABF414_58F4_7552_41C9_1CB853399629_camera"
  },
  {
   "media": "this.panorama_45B12AC5_597C_DD32_41B7_64E298E28559",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_541C44FE_58FC_36D1_41AA_94DC832CDFB5_playlist, 5, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_45B12AC5_597C_DD32_41B7_64E298E28559_camera"
  }
 ],
 "id": "ThumbnailList_541C44FE_58FC_36D1_41AA_94DC832CDFB5_playlist",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/video_51787A91_5C75_4FAD_41CA_DCAC88230F39_t.jpg",
 "id": "video_51787A91_5C75_4FAD_41CA_DCAC88230F39",
 "width": 1920,
 "loop": false,
 "class": "Video",
 "label": "viji",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_51787A91_5C75_4FAD_41CA_DCAC88230F39.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": 12.49,
  "class": "PanoramaCameraPosition",
  "pitch": -0.15
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/video_41C52DF2_5935_D6D6_419C_D39793FF585A_t.jpg",
 "id": "video_41C52DF2_5935_D6D6_419C_D39793FF585A",
 "width": 1920,
 "loop": false,
 "class": "Video",
 "label": "eyenet",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1280,
  "mp4Url": "media/video_41C52DF2_5935_D6D6_419C_D39793FF585A.mp4",
  "class": "VideoResource",
  "height": 720
 }
},
{
 "initialPosition": {
  "yaw": -8.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0.1
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_52ABF414_58F4_7552_41C9_1CB853399629_camera",
 "class": "PanoramaCamera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 12,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6EDEBF64_60AF_2FE1_41CB_18991459E0BC",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_6EDEBF64_60AF_2FE1_41CB_18991459E0BC_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.07,
 "hideEasing": "cubic_out",
 "yaw": 117.75,
 "popupMaxWidth": "95%"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_5_t.jpg",
 "id": "album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_5",
 "width": 4000,
 "label": "DSC09703",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_5.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 6000
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_57EA7D33_58F4_5756_41D1_FB8800D55BA8",
  "this.overlay_4C2745AD_5CBA_44C0_41D0_1EE95D4DF6E7",
  "this.popup_6FC4E99B_6091_1326_41D2_3383D692B604"
 ],
 "thumbnailUrl": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_t.jpg",
 "id": "panorama_527FFB31_58F5_D352_41CD_A55F73F06667",
 "label": "EYE NET",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 11.12,
   "class": "AdjacentPanorama",
   "backwardYaw": 171.06,
   "panorama": "this.panorama_528D5649_58F5_D532_41C2_57FD34F57382",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_2_t.jpg",
 "id": "album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_2",
 "width": 4000,
 "label": "DSC09690",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_2.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 6000
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_6F6A8CAD_60F3_3163_41B0_179E94C55F4A_1_t.jpg",
 "id": "album_6F6A8CAD_60F3_3163_41B0_179E94C55F4A_1",
 "width": 1600,
 "label": "003",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_6F6A8CAD_60F3_3163_41B0_179E94C55F4A_1.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 900
},
{
 "items": [
  {
   "media": "this.panorama_527FFB31_58F5_D352_41CD_A55F73F06667",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_527FFB31_58F5_D352_41CD_A55F73F06667_camera"
  },
  {
   "media": "this.panorama_528D5649_58F5_D532_41C2_57FD34F57382",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_528D5649_58F5_D532_41C2_57FD34F57382_camera"
  },
  {
   "media": "this.panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_camera"
  },
  {
   "media": "this.panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_camera"
  },
  {
   "media": "this.panorama_52ABF414_58F4_7552_41C9_1CB853399629",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_52ABF414_58F4_7552_41C9_1CB853399629_camera"
  },
  {
   "media": "this.panorama_45B12AC5_597C_DD32_41B7_64E298E28559",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_45B12AC5_597C_DD32_41B7_64E298E28559_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/video_54E9FFEA_5947_FE56_41B4_75E0897465FF_t.jpg",
 "id": "video_54E9FFEA_5947_FE56_41B4_75E0897465FF",
 "width": 1920,
 "loop": false,
 "class": "Video",
 "label": "eyenet-1",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1280,
  "mp4Url": "media/video_54E9FFEA_5947_FE56_41B4_75E0897465FF.mp4",
  "class": "VideoResource",
  "height": 720
 }
},
{
 "items": [
  {
   "media": "this.video_7285D706_6093_3F2E_41BD_468E52501098",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7089472C_6171_3F61_41CD_13CB22578F1E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7089472C_6171_3F61_41CD_13CB22578F1E, 0)"
  }
 ],
 "id": "playList_7089472C_6171_3F61_41CD_13CB22578F1E",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -86.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_70D6A7DB_6171_3F27_4160_62D8739EE390",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_54E9FFEA_5947_FE56_41B4_75E0897465FF",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7076C72B_6171_3F67_41BB_70F63B1D0B66, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7076C72B_6171_3F67_41BB_70F63B1D0B66, 0)"
  }
 ],
 "id": "playList_7076C72B_6171_3F67_41BB_70F63B1D0B66",
 "class": "PlayList"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_71ABDDF6_6093_72E1_41A8_C378D133592C.ogg",
  "mp3Url": "media/audio_71ABDDF6_6093_72E1_41A8_C378D133592C.mp3"
 },
 "id": "audio_71ABDDF6_6093_72E1_41A8_C378D133592C",
 "data": {
  "label": "bharathicolours-10"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_48DE3755_590C_73D2_41D5_A544782AFE9E",
  "this.overlay_4855AEF4_590C_D2D2_41AB_4C02AECB51A8",
  "this.overlay_49E0DAE4_590C_D2F1_41A3_7844C889F0F2",
  "this.overlay_48799778_5914_33D2_41CE_1C53992FD46D",
  "this.overlay_515CE031_5CA6_7BC3_41D1_A60633E5A83F",
  "this.popup_53B3CA9F_5CAA_4CC0_41D4_40C44EA46426",
  "this.overlay_4C4D0429_5CBA_7BC3_41D2_E3F453BC4F14",
  "this.popup_71E066AA_6093_1161_41B8_82561917C9A0"
 ],
 "thumbnailUrl": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_t.jpg",
 "id": "panorama_528D5649_58F5_D532_41C2_57FD34F57382",
 "label": "RECEPTION",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -143.98,
   "class": "AdjacentPanorama",
   "backwardYaw": 52.74,
   "panorama": "this.panorama_52ABF414_58F4_7552_41C9_1CB853399629",
   "distance": 1
  },
  {
   "yaw": -54.71,
   "class": "AdjacentPanorama",
   "backwardYaw": 54.94,
   "panorama": "this.panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA",
   "distance": 1
  },
  {
   "yaw": 89.23,
   "class": "AdjacentPanorama",
   "backwardYaw": 93.11,
   "panorama": "this.panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202",
   "distance": 1
  },
  {
   "yaw": 171.06,
   "class": "AdjacentPanorama",
   "backwardYaw": 11.12,
   "panorama": "this.panorama_527FFB31_58F5_D352_41CD_A55F73F06667",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "items": [
  {
   "media": "this.video_51787A91_5C75_4FAD_41CA_DCAC88230F39",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid70746728_6171_3F61_41B0_5B4BED98CC06VideoPlayer)",
   "player": "this.viewer_uid70746728_6171_3F61_41B0_5B4BED98CC06VideoPlayer",
   "start": "this.viewer_uid70746728_6171_3F61_41B0_5B4BED98CC06VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_70199513_60B3_1327_41D0_278A69D8C722, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_70199513_60B3_1327_41D0_278A69D8C722, 0)"
  }
 ],
 "id": "PlayList_70199513_60B3_1327_41D0_278A69D8C722",
 "class": "PlayList"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_6F6A8CAD_60F3_3163_41B0_179E94C55F4A_2_t.jpg",
 "id": "album_6F6A8CAD_60F3_3163_41B0_179E94C55F4A_2",
 "width": 1600,
 "label": "004",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_6F6A8CAD_60F3_3163_41B0_179E94C55F4A_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 900
},
{
 "levels": [
  {
   "url": "media/popup_6EDEBF64_60AF_2FE1_41CB_18991459E0BC_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_6EDEBF64_60AF_2FE1_41CB_18991459E0BC_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_6EDEBF64_60AF_2FE1_41CB_18991459E0BC_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_706D752A_60B3_1361_41D1_BDE854C964A6",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 10.76,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_71E066AA_6093_1161_41B8_82561917C9A0",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_71E066AA_6093_1161_41B8_82561917C9A0_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -26.3,
 "hideEasing": "cubic_out",
 "yaw": -9.04,
 "popupMaxWidth": "95%"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_1_t.jpg",
 "id": "album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_1",
 "width": 4000,
 "label": "DSC09686",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_1.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 6000
},
{
 "buttonPause": "this.IconButton_54292D09_58FC_5733_41D2_393C230F0966",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4BA3D896_5914_5D5E_41AC_C2755D182F94",
  "this.overlay_48B67D07_591C_573F_41B9_2AEB8B5952FC",
  "this.overlay_489C76B6_591C_755E_4178_41D0630C001E",
  "this.overlay_4881E84D_591C_FD32_41B1_2B2A50D670C4",
  "this.overlay_535A5438_5CAA_5BC1_41C6_B7E8A7840B28",
  "this.overlay_4C9BED8E_5CA6_C4C1_41BE_BAB7C4FEF9B0",
  "this.overlay_4C4092DB_5CBA_DC47_41C3_05B992296121",
  "this.popup_6F6DCF65_6057_7D19_41D2_12AB8AA14C8E",
  "this.popup_6E32FFFF_60B1_2EDF_41C7_E3B7FE7A9258",
  "this.popup_7160B2D5_6093_7122_41A7_BC1047A31630"
 ],
 "thumbnailUrl": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_t.jpg",
 "id": "panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA",
 "label": "FASHION STUDIO",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_52ABF414_58F4_7552_41C9_1CB853399629",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 54.94,
   "class": "AdjacentPanorama",
   "backwardYaw": -54.71,
   "panorama": "this.panorama_528D5649_58F5_D532_41C2_57FD34F57382",
   "distance": 1
  },
  {
   "panorama": "this.panorama_527FFB31_58F5_D352_41CD_A55F73F06667",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -127.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_70CC37B4_6171_3F61_41B4_1E3ABA50DE9D",
 "class": "PanoramaCamera"
},
{
 "buttonPause": "this.IconButton_54292D09_58FC_5733_41D2_393C230F0966",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_45B12AC5_597C_DD32_41B7_64E298E28559_camera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_3_t.jpg",
 "id": "album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_3",
 "width": 4000,
 "label": "DSC09695",
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_3.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 6000
},
{
 "initialPosition": {
  "yaw": -11.46,
  "class": "PanoramaCameraPosition",
  "pitch": 1
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_528D5649_58F5_D532_41C2_57FD34F57382_camera",
 "class": "PanoramaCamera"
},
{
 "playList": "this.album_6F6A8CAD_60F3_3163_41B0_179E94C55F4A_AlbumPlayList",
 "thumbnailUrl": "media/album_6F6A8CAD_60F3_3163_41B0_179E94C55F4A_t.png",
 "id": "album_6F6A8CAD_60F3_3163_41B0_179E94C55F4A",
 "label": "Photo Album 002",
 "class": "PhotoAlbum"
},
{
 "levels": [
  {
   "url": "media/popup_71E066AA_6093_1161_41B8_82561917C9A0_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_71E066AA_6093_1161_41B8_82561917C9A0_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_71E066AA_6093_1161_41B8_82561917C9A0_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_74BC5B36_6093_376E_417F_73757E46BCB9",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 11.51,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_53B3CA9F_5CAA_4CC0_41D4_40C44EA46426",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_53B3CA9F_5CAA_4CC0_41D4_40C44EA46426_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -16.45,
 "hideEasing": "cubic_out",
 "yaw": 29.61,
 "popupMaxWidth": "95%"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "colCount": 9,
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "colCount": 5,
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4BF0C6D2_591C_32D6_41A9_0620F6C0395D",
  "this.overlay_4B082E38_591D_D552_41D6_21EDC82E6886",
  "this.overlay_414A56C2_5934_7531_41D0_ADCCFF08F6E9",
  "this.overlay_5331518E_5CA5_DCC1_41C5_80B0D1391310",
  "this.popup_6ED94811_60B0_F123_41C3_83AC4EA1FE61"
 ],
 "thumbnailUrl": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_t.jpg",
 "id": "panorama_52ABF414_58F4_7552_41C9_1CB853399629",
 "label": "CLASS ROOM-1",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 52.74,
   "class": "AdjacentPanorama",
   "backwardYaw": -143.98,
   "panorama": "this.panorama_528D5649_58F5_D532_41C2_57FD34F57382",
   "distance": 1
  },
  {
   "yaw": -154.27,
   "class": "AdjacentPanorama",
   "backwardYaw": 147.45,
   "panorama": "this.panorama_45B12AC5_597C_DD32_41B7_64E298E28559",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 9.7,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6ED94811_60B0_F123_41C3_83AC4EA1FE61",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_6ED94811_60B0_F123_41C3_83AC4EA1FE61_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.86,
 "hideEasing": "cubic_out",
 "yaw": -76.5,
 "popupMaxWidth": "95%"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4B38B515_5914_5752_41C8_CE8583FDE619",
  "this.overlay_4C4C5D9B_5CBA_44C7_41B7_740419CD7BFA",
  "this.popup_6EDEBF64_60AF_2FE1_41CB_18991459E0BC"
 ],
 "thumbnailUrl": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_t.jpg",
 "id": "panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202",
 "label": "COMPUTER LAB",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 93.11,
   "class": "AdjacentPanorama",
   "backwardYaw": 89.23,
   "panorama": "this.panorama_528D5649_58F5_D532_41C2_57FD34F57382",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "playList": "this.album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_AlbumPlayList",
 "thumbnailUrl": "media/album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_t.png",
 "id": "album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8",
 "label": "Photo Album DSC09682",
 "class": "PhotoAlbum"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "hfov": 11.47,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6FC4E99B_6091_1326_41D2_3383D692B604",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/popup_6FC4E99B_6091_1326_41D2_3383D692B604_0_4.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 307
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 17.06,
 "hideEasing": "cubic_out",
 "yaw": 0.83,
 "popupMaxWidth": "95%"
},
{
 "levels": [
  {
   "url": "media/popup_6E6A02E2_60B3_36E1_41B1_1089ED78439C_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_6E6A02E2_60B3_36E1_41B1_1089ED78439C_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_6E6A02E2_60B3_36E1_41B1_1089ED78439C_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_7079C539_60B3_1363_41B5_080F66E71AB7",
 "class": "ImageResource"
},
{
 "autoplay": true,
 "rotationX": 0,
 "hfov": 9.17,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_6F6DCF65_6057_7D19_41D2_12AB8AA14C8E",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "class": "PopupPanoramaOverlay",
 "pitch": -19.17,
 "hideEasing": "cubic_out",
 "yaw": -26.69,
 "popupMaxWidth": "95%",
 "video": {
  "width": 1920,
  "mp4Url": "media/video_51787A91_5C75_4FAD_41CA_DCAC88230F39.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "autoplay": true,
 "rotationX": 0,
 "hfov": 6.33,
 "rotationZ": 0,
 "rotationY": 0,
 "showEasing": "cubic_in",
 "hideDuration": 500,
 "showDuration": 500,
 "id": "popup_7160B2D5_6093_7122_41A7_BC1047A31630",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "loop": false,
 "class": "PopupPanoramaOverlay",
 "pitch": -21.41,
 "hideEasing": "cubic_out",
 "yaw": 20.62,
 "popupMaxWidth": "95%",
 "video": {
  "width": 1920,
  "mp4Url": "media/video_7285D706_6093_3F2E_41BD_468E52501098.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "initialPosition": {
  "yaw": 36.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_709AB74C_6171_3F21_41CF_03A253763FD2",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_41C52DF2_5935_D6D6_419C_D39793FF585A",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_7076D72B_6171_3F67_41D5_87723F0512DA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_7076D72B_6171_3F67_41D5_87723F0512DA, 0)"
  }
 ],
 "id": "playList_7076D72B_6171_3F67_41D5_87723F0512DA",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -168.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_70E517EB_6171_3EE7_41CD_8FD4E99B2AA6",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 52.22,
  "class": "PanoramaCameraPosition",
  "pitch": -1.37
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -8.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_70A37780_6171_3F21_41C5_A1E496EE296D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_527FFB31_58F5_D352_41CD_A55F73F06667_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.album_6F6A8CAD_60F3_3163_41B0_179E94C55F4A",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_7076172B_6171_3F67_41B5_84D3481EB3FB",
 "class": "PlayList"
},
{
 "levels": [
  {
   "url": "media/popup_6ED94811_60B0_F123_41C3_83AC4EA1FE61_0_0.jpg",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 800
  },
  {
   "url": "media/popup_6ED94811_60B0_F123_41C3_83AC4EA1FE61_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_6ED94811_60B0_F123_41C3_83AC4EA1FE61_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_707B4538_60B3_1361_41B9_718A201B139E",
 "class": "ImageResource"
},
{
 "buttonPlayRight": "this.IconButton_54296D09_58FC_5733_41B9_A73F9AE02C8A",
 "displayPlaybackBar": true,
 "buttonZoomIn": "this.IconButton_54298D09_58FC_5733_41B0_E224706B7C7B",
 "viewerArea": "this.MainViewer",
 "buttonMoveLeft": "this.IconButton_54291D09_58FC_5733_41C0_A7028603F825",
 "id": "MainViewerPanoramaPlayer",
 "buttonMoveRight": "this.IconButton_54297D09_58FC_5733_41BF_535C5ABE4F41",
 "mouseControlMode": "drag_acceleration",
 "class": "PanoramaPlayer",
 "buttonPlayLeft": "this.IconButton_5436DD09_58FC_5733_41C4_C17DEBBF0AD6",
 "buttonMoveUp": "this.IconButton_54293D09_58FC_5733_41D3_71F7185EADCB",
 "buttonPause": "this.IconButton_54292D09_58FC_5733_41D2_393C230F0966",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonZoomOut": "this.IconButton_5436BD09_58FC_5733_41A3_EA86FC2F139F",
 "touchControlMode": "drag_rotation",
 "buttonMoveDown": "this.IconButton_54294D09_58FC_5733_41C2_94CC97553749"
},
{
 "items": [
  {
   "media": "this.album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_7089572B_6171_3F67_41A9_539791B1478B",
 "class": "PlayList"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_428F0F6C_597C_73F1_41D3_C9845A3B1B86",
  "this.overlay_450E84D4_597D_F6D2_41C9_08F29B84DFD2",
  "this.overlay_547B3E2C_5947_81D3_4198_7FDB4A3D0185",
  "this.overlay_564E96A8_594B_8ED2_41B2_42B2C4B5CF44",
  "this.overlay_4C7C9131_5CBE_5DC3_41D0_E89590BCA484",
  "this.overlay_4DBDA5CF_5CA6_C45F_41C4_5751843B5D49",
  "this.popup_6E6A02E2_60B3_36E1_41B1_1089ED78439C"
 ],
 "thumbnailUrl": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_t.jpg",
 "id": "panorama_45B12AC5_597C_DD32_41B7_64E298E28559",
 "label": "COUNSELING CABIN",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 147.45,
   "class": "AdjacentPanorama",
   "backwardYaw": -154.27,
   "panorama": "this.panorama_52ABF414_58F4_7552_41C9_1CB853399629",
   "distance": 1
  },
  {
   "panorama": "this.panorama_528D5649_58F5_D532_41C2_57FD34F57382",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_527FFB31_58F5_D352_41CD_A55F73F06667",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "class": "ViewerArea",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "toolTipShadowVerticalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_5429BD09_58FC_5733_41CE_9D81FCF0A87C",
 "backgroundOpacity": 0.29,
 "width": 442,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.IconButton_5436BD09_58FC_5733_41A3_EA86FC2F139F",
  "this.IconButton_5436DD09_58FC_5733_41C4_C17DEBBF0AD6",
  "this.IconButton_54291D09_58FC_5733_41C0_A7028603F825",
  "this.Container_54290D09_58FC_5733_41D1_C14FDCB8AC53",
  "this.IconButton_54297D09_58FC_5733_41BF_535C5ABE4F41",
  "this.IconButton_54296D09_58FC_5733_41B9_A73F9AE02C8A",
  "this.IconButton_54299D09_58FC_5733_4187_154098A160DA",
  "this.IconButton_54298D09_58FC_5733_41B0_E224706B7C7B"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "hidden",
 "backgroundColorRatios": [
  0.71
 ],
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "bottom": "0.29%",
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 442,
 "layout": "horizontal",
 "height": "17.962%",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 4,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container6716"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_541C44FE_58FC_36D1_41AA_94DC832CDFB5",
 "left": "0.1%",
 "width": "66.293%",
 "itemBorderRadius": 0,
 "backgroundOpacity": 0.2,
 "scrollBarMargin": 2,
 "itemVerticalAlign": "middle",
 "paddingLeft": 20,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "ThumbnailList",
 "itemOpacity": 1,
 "height": 134.09,
 "playList": "this.ThumbnailList_541C44FE_58FC_36D1_41AA_94DC832CDFB5_playlist",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "itemBackgroundColor": [],
 "itemThumbnailShadowSpread": 1,
 "itemThumbnailOpacity": 1,
 "borderSize": 0,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "backgroundColorDirection": "vertical",
 "itemThumbnailShadowOpacity": 0.8,
 "scrollBarColor": "#FFFFFF",
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "layout": "horizontal",
 "itemThumbnailHeight": 75,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "itemThumbnailShadowBlurRadius": 4,
 "paddingRight": 20,
 "itemLabelGap": 5,
 "borderRadius": 5,
 "backgroundColorRatios": [
  0
 ],
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": true,
 "itemThumbnailShadowVerticalLength": 3,
 "bottom": "0.08%",
 "itemThumbnailWidth": 75,
 "itemLabelFontColor": "#FFFFFF",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemHorizontalAlign": "center",
 "gap": 10,
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailShadowColor": "#000000",
 "paddingBottom": 10,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList1355"
 },
 "itemThumbnailBorderRadius": 5,
 "itemLabelFontFamily": "Arial"
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "class": "UIComponent",
 "top": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent13747"
 },
 "shadow": false,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "class": "ZoomImage",
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage13748"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
 "paddingRight": 5,
 "paddingLeft": 5,
 "borderRadius": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "class": "CloseButton",
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "pressedIconColor": "#888888",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderColor": "#000000",
 "minWidth": 0,
 "mode": "push",
 "iconBeforeLabel": true,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "CloseButton13749"
 },
 "fontSize": "1.29vmin",
 "shadow": false,
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_54299D09_58FC_5733_4187_154098A160DA",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_54299D09_58FC_5733_4187_154098A160DA_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_54299D09_58FC_5733_4187_154098A160DA.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button6727"
 },
 "cursor": "hand"
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid70746728_6171_3F61_41B0_5B4BED98CC06",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "class": "ViewerArea",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "toolTipShadowVerticalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea13745"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid7074D729_6171_3F63_41D3_6B54AE48D340",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "class": "ViewerArea",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "toolTipShadowVerticalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea13746"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "buttonPause": "this.IconButton_54292D09_58FC_5733_41D2_393C230F0966",
 "viewerArea": "this.viewer_uid7074D729_6171_3F63_41D3_6B54AE48D340",
 "id": "viewer_uid7074D729_6171_3F63_41D3_6B54AE48D340VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4,
   "yaw": 11.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Eye Net ",
   "click": "this.startPanoramaWithCamera(this.panorama_528D5649_58F5_D532_41C2_57FD34F57382, this.camera_70A37780_6171_3F21_41C5_A1E496EE296D); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0_HS_0_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.67,
   "yaw": 11.12
  }
 ],
 "id": "overlay_57EA7D33_58F4_5756_41D1_FB8800D55BA8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.47,
   "yaw": 0.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6FC4E99B_6091_1326_41D2_3383D692B604, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':5,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#FFFFFF','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':5,'rollOverBorderColor':'#FFFFFF','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#FFFFFF'}, this.ImageResource_74C81013_609F_3127_41D2_53F689E432E2, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4E8A5D42_5CBE_4441_41D2_F12A24596EE9",
   "pitch": 17.06,
   "hfov": 11.47,
   "yaw": 0.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4C2745AD_5CBA_44C0_41D0_1EE95D4DF6E7",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8,
   "yaw": 171.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Eye Net Exterior ",
   "click": "this.startPanoramaWithCamera(this.panorama_527FFB31_58F5_D352_41CD_A55F73F06667, this.camera_70E517EB_6171_3EE7_41CD_8FD4E99B2AA6); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0_HS_0_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.68,
   "yaw": 171.06
  }
 ],
 "id": "overlay_48DE3755_590C_73D2_41D5_A544782AFE9E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8,
   "yaw": 89.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Computer Lab",
   "click": "this.startPanoramaWithCamera(this.panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202, this.camera_70D6A7DB_6171_3F27_4160_62D8739EE390); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0_HS_1_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.65,
   "yaw": 89.23
  }
 ],
 "id": "overlay_4855AEF4_590C_D2D2_41AB_4C02AECB51A8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.99,
   "yaw": -54.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Fashion Studio",
   "click": "this.startPanoramaWithCamera(this.panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA, this.camera_70DB07C4_6171_3F21_41D7_F13A4161024C); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0_HS_2_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.23,
   "yaw": -54.71
  }
 ],
 "id": "overlay_49E0DAE4_590C_D2F1_41A3_7844C889F0F2",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8,
   "yaw": -143.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Class room",
   "click": "this.startPanoramaWithCamera(this.panorama_52ABF414_58F4_7552_41C9_1CB853399629, this.camera_70CC37B4_6171_3F61_41B4_1E3ABA50DE9D); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0_HS_3_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.93,
   "yaw": -143.98
  }
 ],
 "id": "overlay_48799778_5914_33D2_41CE_1C53992FD46D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.51,
   "yaw": 29.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_53B3CA9F_5CAA_4CC0_41D4_40C44EA46426, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_525248F1_5CAA_CC43_41B4_F3391FAE9FEE, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4CCB7A64_5CA7_CC40_41D6_FA85B3D1FF18",
   "pitch": -16.45,
   "hfov": 11.51,
   "yaw": 29.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_515CE031_5CA6_7BC3_41D1_A60633E5A83F",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.76,
   "yaw": -9.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_71E066AA_6093_1161_41B8_82561917C9A0, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_74BC5B36_6093_376E_417F_73757E46BCB9, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7520DA9F_6091_115E_41D1_3A6D834C0B48",
   "pitch": -26.3,
   "hfov": 10.76,
   "yaw": -9.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4C4D0429_5CBA_7BC3_41D2_E3F453BC4F14",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "buttonPause": "this.IconButton_54292D09_58FC_5733_41D2_393C230F0966",
 "viewerArea": "this.viewer_uid70746728_6171_3F61_41B0_5B4BED98CC06",
 "id": "viewer_uid70746728_6171_3F61_41B0_5B4BED98CC06VideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "horizontalAlign": "center",
 "id": "IconButton_54292D09_58FC_5733_41D2_393C230F0966",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_54292D09_58FC_5733_41D2_393C230F0966_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_54292D09_58FC_5733_41D2_393C230F0966.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button6723"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8,
   "yaw": 83.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Computer lab",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0_HS_0_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.29,
   "yaw": 83.64
  }
 ],
 "id": "overlay_4BA3D896_5914_5D5E_41AC_C2755D182F94",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8,
   "yaw": 54.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Reception",
   "click": "this.startPanoramaWithCamera(this.panorama_528D5649_58F5_D532_41C2_57FD34F57382, this.camera_70B547A1_6171_3F63_41D0_4CF772F85018); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0_HS_1_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.58,
   "yaw": 54.94
  }
 ],
 "id": "overlay_48B67D07_591C_573F_41B9_2AEB8B5952FC",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.98,
   "yaw": 112.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Eye net Exterior",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0_HS_2_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.65,
   "yaw": 112.19
  }
 ],
 "id": "overlay_489C76B6_591C_755E_4178_41D0630C001E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.99,
   "yaw": -162.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Class room",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0_HS_3_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.87,
   "yaw": -162.74
  }
 ],
 "id": "overlay_4881E84D_591C_FD32_41B1_2B2A50D670C4",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.17,
   "yaw": -26.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6F6DCF65_6057_7D19_41D2_12AB8AA14C8E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_6CA7AF3E_60AF_6F5E_41C5_63EE81D27612, this.video_51787A91_5C75_4FAD_41CA_DCAC88230F39, this.PlayList_70199513_60B3_1327_41D0_278A69D8C722, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4C4E53D4_5CA6_3C41_41CC_6A05F521DD71",
   "pitch": -19.17,
   "hfov": 9.17,
   "yaw": -26.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_535A5438_5CAA_5BC1_41C6_B7E8A7840B28",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.33,
   "yaw": 20.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_7160B2D5_6093_7122_41A7_BC1047A31630, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_72E484D9_6093_7123_41D1_344D8B679F68, this.video_7285D706_6093_3F2E_41BD_468E52501098, this.PlayList_74672EFB_6091_EEE6_41D7_38501B9C2EFA, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4E92B8F1_5CA5_CC43_41CD_43033EEFDA8D",
   "pitch": -21.41,
   "hfov": 6.33,
   "yaw": 20.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4C9BED8E_5CA6_C4C1_41BE_BAB7C4FEF9B0",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12,
   "yaw": -56.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6E32FFFF_60B1_2EDF_41C7_E3B7FE7A9258, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_707A9537_60B3_136F_41D2_D3917BCB79A8, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4C37AA64_5CA7_CC40_41D2_1BF8F51FAFB1",
   "pitch": 1.52,
   "hfov": 12,
   "yaw": -56.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4C4092DB_5CBA_DC47_41C3_05B992296121",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "items": [
  {
   "media": "this.album_6F6A8CAD_60F3_3163_41B0_179E94C55F4A_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.27",
     "class": "PhotoCameraPosition",
     "y": "0.52",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_6F6A8CAD_60F3_3163_41B0_179E94C55F4A_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.32",
     "class": "PhotoCameraPosition",
     "y": "0.63",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_6F6A8CAD_60F3_3163_41B0_179E94C55F4A_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.43",
     "class": "PhotoCameraPosition",
     "y": "0.63",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  }
 ],
 "id": "album_6F6A8CAD_60F3_3163_41B0_179E94C55F4A_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.47,
   "yaw": 52.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Receptiion",
   "click": "this.startPanoramaWithCamera(this.panorama_528D5649_58F5_D532_41C2_57FD34F57382, this.camera_709AB74C_6171_3F21_41CF_03A253763FD2); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0_HS_0_0.png",
      "width": 300,
      "class": "ImageResourceLevel",
      "height": 300
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.74,
   "yaw": 52.74
  }
 ],
 "id": "overlay_4BF0C6D2_591C_32D6_41A9_0620F6C0395D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.46,
   "yaw": -154.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Counseling cabin",
   "click": "this.startPanoramaWithCamera(this.panorama_45B12AC5_597C_DD32_41B7_64E298E28559, this.camera_7090675E_6171_3F21_41AA_9B8A59612A55); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0_HS_1_0.png",
      "width": 300,
      "class": "ImageResourceLevel",
      "height": 300
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.17,
   "yaw": -154.27
  }
 ],
 "id": "overlay_4B082E38_591D_D552_41D6_21EDC82E6886",
 "data": {
  "label": "Image"
 }
},
{
 "yaw": -50.8,
 "blending": 0,
 "id": "overlay_414A56C2_5934_7531_41D0_ADCCFF08F6E9",
 "roll": 0.15,
 "loop": true,
 "image": {
  "levels": [
   {
    "url": "media/overlay_414A56C2_5934_7531_41D0_ADCCFF08F6E9_t.jpg",
    "width": 1920,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -0.41,
 "useHandCursor": true,
 "rotationX": 0.49,
 "autoplay": true,
 "vfov": 16.87,
 "rotationY": 32.87,
 "hfov": 28.7,
 "toolTip": "Fashion Show",
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "distance": 50,
 "videoVisibleOnStop": false,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 1280,
  "mp4Url": "media/video_41C52DF2_5935_D6D6_419C_D39793FF585A.mp4",
  "class": "VideoResource",
  "height": 720
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.7,
   "yaw": -76.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6ED94811_60B0_F123_41C3_83AC4EA1FE61, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_707B4538_60B3_1361_41B9_718A201B139E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4C34EA64_5CA7_CC40_41D1_EC58312DC1D0",
   "pitch": -1.86,
   "hfov": 9.7,
   "yaw": -76.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5331518E_5CA5_DCC1_41C5_80B0D1391310",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8,
   "yaw": 93.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Reception",
   "click": "this.startPanoramaWithCamera(this.panorama_528D5649_58F5_D532_41C2_57FD34F57382, this.camera_70A8076F_6171_3FFF_41D0_71996E6B520B); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0_HS_0_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.65,
   "yaw": 93.11
  }
 ],
 "id": "overlay_4B38B515_5914_5752_41C8_CE8583FDE619",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12,
   "yaw": 117.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6EDEBF64_60AF_2FE1_41CB_18991459E0BC, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_706D752A_60B3_1361_41D1_BDE854C964A6, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_75234A9F_6091_115E_41C7_13FB01A17C39",
   "pitch": -1.07,
   "hfov": 12,
   "yaw": 117.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4C4C5D9B_5CBA_44C7_41B7_740419CD7BFA",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "items": [
  {
   "media": "this.album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.72",
     "class": "PhotoCameraPosition",
     "y": "0.37",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.46",
     "class": "PhotoCameraPosition",
     "y": "0.60",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.32",
     "class": "PhotoCameraPosition",
     "y": "0.70",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.28",
     "class": "PhotoCameraPosition",
     "y": "0.44",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_4",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.33",
     "class": "PhotoCameraPosition",
     "y": "0.74",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  },
  {
   "media": "this.album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_5",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.35",
     "class": "PhotoCameraPosition",
     "y": "0.60",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  }
 ],
 "id": "album_4C672DFE_5C97_C557_4183_DDF2D57BE9C8_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_54296D09_58FC_5733_41B9_A73F9AE02C8A",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_54296D09_58FC_5733_41B9_A73F9AE02C8A_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_54296D09_58FC_5733_41B9_A73F9AE02C8A_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_54296D09_58FC_5733_41B9_A73F9AE02C8A.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button6726"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_54298D09_58FC_5733_41B0_E224706B7C7B",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_54298D09_58FC_5733_41B0_E224706B7C7B_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_54298D09_58FC_5733_41B0_E224706B7C7B_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_54298D09_58FC_5733_41B0_E224706B7C7B.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button6728"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_54291D09_58FC_5733_41C0_A7028603F825",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_54291D09_58FC_5733_41C0_A7028603F825_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_54291D09_58FC_5733_41C0_A7028603F825_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_54291D09_58FC_5733_41C0_A7028603F825.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button6720"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_54297D09_58FC_5733_41BF_535C5ABE4F41",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_54297D09_58FC_5733_41BF_535C5ABE4F41_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_54297D09_58FC_5733_41BF_535C5ABE4F41_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_54297D09_58FC_5733_41BF_535C5ABE4F41.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button6725"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5436DD09_58FC_5733_41C4_C17DEBBF0AD6",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_5436DD09_58FC_5733_41C4_C17DEBBF0AD6_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5436DD09_58FC_5733_41C4_C17DEBBF0AD6_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_5436DD09_58FC_5733_41C4_C17DEBBF0AD6.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button6719"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_54293D09_58FC_5733_41D3_71F7185EADCB",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_54293D09_58FC_5733_41D3_71F7185EADCB_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_54293D09_58FC_5733_41D3_71F7185EADCB_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_54293D09_58FC_5733_41D3_71F7185EADCB.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button6722"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5436BD09_58FC_5733_41A3_EA86FC2F139F",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_5436BD09_58FC_5733_41A3_EA86FC2F139F_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5436BD09_58FC_5733_41A3_EA86FC2F139F_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_5436BD09_58FC_5733_41A3_EA86FC2F139F.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button6717"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_54294D09_58FC_5733_41C2_94CC97553749",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_54294D09_58FC_5733_41C2_94CC97553749_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_54294D09_58FC_5733_41C2_94CC97553749_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_54294D09_58FC_5733_41C2_94CC97553749.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button6724"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.99,
   "yaw": -113.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Reception",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_1_HS_0_0.png",
      "width": 199,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.27,
   "yaw": -113.9
  }
 ],
 "id": "overlay_428F0F6C_597C_73F1_41D3_C9845A3B1B86",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8,
   "yaw": -13.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Eye net Exterior",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_1_HS_1_0.png",
      "width": 199,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.58,
   "yaw": -13.63
  }
 ],
 "id": "overlay_450E84D4_597D_F6D2_41C9_08F29B84DFD2",
 "data": {
  "label": "Image"
 }
},
{
 "yaw": -87.43,
 "blending": 0,
 "id": "overlay_547B3E2C_5947_81D3_4198_7FDB4A3D0185",
 "roll": -1.95,
 "loop": false,
 "image": {
  "levels": [
   {
    "url": "media/overlay_547B3E2C_5947_81D3_4198_7FDB4A3D0185_t.jpg",
    "width": 1920,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 2.1,
 "useHandCursor": true,
 "rotationX": -4.86,
 "autoplay": true,
 "vfov": 11.82,
 "rotationY": 28.5,
 "hfov": 17.57,
 "toolTip": "Fashion show ",
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "distance": 50,
 "videoVisibleOnStop": false,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 1280,
  "mp4Url": "media/video_54E9FFEA_5947_FE56_41B4_75E0897465FF.mp4",
  "class": "VideoResource",
  "height": 720
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8,
   "yaw": 147.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Class room ",
   "click": "this.startPanoramaWithCamera(this.panorama_52ABF414_58F4_7552_41C9_1CB853399629, this.camera_70BBB791_6171_3F23_41B5_CFA42ABA2171); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0_HS_3_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.61,
   "yaw": 147.45
  }
 ],
 "id": "overlay_564E96A8_594B_8ED2_41B2_42B2C4B5CF44",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.31,
   "yaw": 40.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_7076172B_6171_3F67_41B5_84D3481EB3FB, 0, this.panorama_45B12AC5_597C_DD32_41B7_64E298E28559)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_4E8C1D52_5CBE_4441_41D4_BA3FC3EDF315",
   "pitch": -31.1,
   "hfov": 8.31,
   "yaw": 40.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4C7C9131_5CBE_5DC3_41D0_E89590BCA484",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.99,
   "yaw": 56.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6E6A02E2_60B3_36E1_41B1_1089ED78439C, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_7079C539_60B3_1363_41B5_080F66E71AB7, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_700C6508_60B3_1321_41B8_4231D75FEAA7",
   "pitch": 2.81,
   "hfov": 11.99,
   "yaw": 56.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4DBDA5CF_5CA6_C45F_41C4_5751843B5D49",
 "data": {
  "label": "Info Red 02"
 }
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_54290D09_58FC_5733_41D1_C14FDCB8AC53",
 "backgroundOpacity": 0,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "hidden",
 "children": [
  "this.IconButton_54293D09_58FC_5733_41D3_71F7185EADCB",
  "this.IconButton_54292D09_58FC_5733_41D2_393C230F0966",
  "this.IconButton_54294D09_58FC_5733_41C2_94CC97553749"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "class": "Container",
 "height": "100%",
 "minWidth": 20,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 4,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container6721"
 },
 "shadow": false
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_527FFB31_58F5_D352_41CD_A55F73F06667_0_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_4E8A5D42_5CBE_4441_41D2_F12A24596EE9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0_HS_6_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_4CCB7A64_5CA7_CC40_41D6_FA85B3D1FF18",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_528D5649_58F5_D532_41C2_57FD34F57382_0_HS_7_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_7520DA9F_6091_115E_41D1_3A6D834C0B48",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0_HS_9_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_4C4E53D4_5CA6_3C41_41CC_6A05F521DD71",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0_HS_10_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_4E92B8F1_5CA5_CC43_41CD_43033EEFDA8D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_52AAC99C_58F5_FF51_41C0_C4759B7B99AA_0_HS_11_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_4C37AA64_5CA7_CC40_41D2_1BF8F51FAFB1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_52ABF414_58F4_7552_41C9_1CB853399629_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_4C34EA64_5CA7_CC40_41D1_EC58312DC1D0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_52A88896_58F4_5D51_41C7_7D8FA42E7202_0_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_75234A9F_6091_115E_41C7_13FB01A17C39",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_4E8C1D52_5CBE_4441_41D4_BA3FC3EDF315",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_45B12AC5_597C_DD32_41B7_64E298E28559_0_HS_5_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "id": "AnimatedImageResource_700C6508_60B3_1321_41B8_4231D75FEAA7",
 "rowCount": 6,
 "colCount": 4
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getKey": function(key){  return window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "existsKey": function(key){  return key in window; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "unregisterKey": function(key){  delete window[key]; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } try { var p = audio.play(); if (p && p.catch) { p.catch(function(){}); } } catch(e){} return audio; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "registerKey": function(key, value){  window[key] = value; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player435"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
