import{_ as p,r as a,c,b as s,w as l,d as n,e as t,a as u,o as r}from"./app.628df8df.js";const w='{"title":"\u70B9\u805A\u5408","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"},{"level":2,"title":"Markers","slug":"markers"},{"level":2,"title":"Styles","slug":"styles"},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"}],"relativePath":"overlay/marker-clusterer.md","lastUpdated":1642728774473}',k={},i=n("h1",{id:"\u70B9\u805A\u5408",tabindex:"-1"},[t("\u70B9\u805A\u5408 "),n("a",{class:"header-anchor",href:"#\u70B9\u805A\u5408","aria-hidden":"true"},"#")],-1),d=n("h2",{id:"\u793A\u4F8B",tabindex:"-1"},[t("\u793A\u4F8B "),n("a",{class:"header-anchor",href:"#\u793A\u4F8B","aria-hidden":"true"},"#")],-1),m=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mapDiv"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("tdt-map")]),t(),n("span",{class:"token attr-name"},":center"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("state.center"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":zoom"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("state.zoom"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("tdt-marker-clusterer")]),t(),n("span",{class:"token attr-name"},":markers"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("state.markers"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":styles"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("state.styles"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("tdt-marker-clusterer")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("tdt-infowindow")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("target")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("state.target"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("state.content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("tdt-infowindow")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("tdt-map")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" reactive "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},'"vue-demi"'),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" withBase "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},'"vitepress"'),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(" state "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  center`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"116.40969"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"37.43997"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  zoom`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
  markers`),n("span",{class:"token operator"},":"),t(" Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(" length"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"500"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("e"),n("span",{class:"token punctuation"},","),t(" i")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      icon`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        iconUrl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"withBase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/marker_blue.png"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        iconAnchor`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"41"),n("span",{class:"token punctuation"},"]"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      position`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"40"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"85"),n("span",{class:"token punctuation"},","),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"random"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"30"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      extData`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"cluster-"'),t(),n("span",{class:"token operator"},"+"),t(` i
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
  styles`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"withBase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/cluster0.png"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      size`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"//\u56FE\u7247\u5927\u5C0F"),t(`
      offset`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"//\u663E\u793A\u56FE\u7247\u7684\u504F\u79FB\u91CF"),t(`
      textColor`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"#000000"'),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"//\u663E\u793A\u6570\u5B57\u7684\u989C\u8272"),t(`
      textSize`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"//\u663E\u793A\u6587\u5B57\u7684\u5927\u5C0F"),t(`
      range`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token comment"},"//\u663E\u793A\u8BE5\u56FE\u6807\u7684\u8303\u56F4"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"withBase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/cluster1.png"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      size`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"40"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      offset`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      textColor`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"#000000"'),n("span",{class:"token punctuation"},","),t(`
      textSize`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),t(`
      range`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"400"),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"withBase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/cluster2.png"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      size`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      offset`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      textColor`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"#000000"'),n("span",{class:"token punctuation"},","),t(`
      textSize`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),t(`
      range`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"400"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"500"),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  target`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),t(`
  content`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'""'),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"onClick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("e"),n("span",{class:"token operator"},":"),t(" any")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  state`),n("span",{class:"token punctuation"},"."),t("target "),n("span",{class:"token operator"},"="),t(" e"),n("span",{class:"token punctuation"},"."),t("layer"),n("span",{class:"token punctuation"},";"),t(`
  state`),n("span",{class:"token punctuation"},"."),t("content "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("e"),n("span",{class:"token punctuation"},"."),t("layer"),n("span",{class:"token punctuation"},"."),t("extData"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"<br>["),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("e"),n("span",{class:"token punctuation"},"."),t("lnglat"),n("span",{class:"token punctuation"},"."),t("lng"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},", "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("e"),n("span",{class:"token punctuation"},"."),t("lnglat"),n("span",{class:"token punctuation"},"."),t("lat"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"]"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(" name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"demo-marker-clusterer"'),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".mapDiv"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 600px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),g=u("",11);function h(b,y,f,v,_,x){const o=a("demo-marker-clusterer"),e=a("code-details");return r(),c("div",null,[i,d,s(o),s(e,null,{default:l(()=>[m]),_:1}),g])}var z=p(k,[["render",h]]);export{w as __pageData,z as default};