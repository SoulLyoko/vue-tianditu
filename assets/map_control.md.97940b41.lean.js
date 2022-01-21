import{_ as c,r as a,c as l,b as s,w as u,a as o,o as i,d as t,e as n}from"./app.b7039d40.js";const A='{"title":"\u63A7\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u63A7\u4EF6","slug":"\u81EA\u5B9A\u4E49\u63A7\u4EF6"},{"level":2,"title":"\u7F29\u653E\u63A7\u4EF6","slug":"\u7F29\u653E\u63A7\u4EF6"},{"level":2,"title":"\u6BD4\u4F8B\u5C3A\u63A7\u4EF6","slug":"\u6BD4\u4F8B\u5C3A\u63A7\u4EF6"},{"level":2,"title":"\u7248\u6743\u63A7\u4EF6","slug":"\u7248\u6743\u63A7\u4EF6"},{"level":2,"title":"\u9E70\u773C\u5730\u56FE\u63A7\u4EF6","slug":"\u9E70\u773C\u5730\u56FE\u63A7\u4EF6"},{"level":2,"title":"\u5730\u56FE\u7C7B\u578B\u63A7\u4EF6","slug":"\u5730\u56FE\u7C7B\u578B\u63A7\u4EF6"}],"relativePath":"map/control.md","lastUpdated":1642732628619}',r={},k=o("",4),d=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("button")]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("state.visible = !state.visible"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("visible:{{ state.visible }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mapDiv"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("tdt-map")]),n(),t("span",{class:"token attr-name"},":center"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("state.center"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":zoom"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("state.zoom"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":controls"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("state.controls"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("tdt-control")]),n(),t("span",{class:"token attr-name"},"position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("topright"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":visible"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("state.visible"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("button")]),t("span",{class:"token punctuation"},">")]),n("\u81EA\u5B9A\u4E49\u63A7\u4EF6"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("tdt-control")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("tdt-map")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" reactive "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},'"vue-demi"'),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" state "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"reactive"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  center`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"113.280637"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"23.125178"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
  zoom`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"11"),t("span",{class:"token punctuation"},","),n(`
  controls`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
    `),t("span",{class:"token punctuation"},"{"),n(" name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"Zoom"'),t("span",{class:"token punctuation"},","),n(" position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"topright"'),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token string"},'"Scale"'),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token string"},'"Copyright"'),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"{"),n(`
      name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"MapType"'),t("span",{class:"token punctuation"},","),n(`
      position`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"topleft"'),t("span",{class:"token punctuation"},","),n(`
      mapTypes`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          title`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"\u5730\u56FE"'),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token comment"},"//\u5730\u56FE\u63A7\u4EF6\u4E0A\u6240\u8981\u663E\u793A\u7684\u56FE\u5C42\u540D\u79F0"),n(`
          icon`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"http://api.tianditu.gov.cn/v4.0/image/map/maptype/vector.png"'),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token comment"},"//\u5730\u56FE\u63A7\u4EF6\u4E0A\u6240\u8981\u663E\u793A\u7684\u56FE\u5C42\u56FE\u6807\uFF08\u9ED8\u8BA4\u56FE\u6807\u5927\u5C0F 80x80\uFF09"),n(`
          layer`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"TMAP_NORMAL_MAP"'),n(),t("span",{class:"token comment"},"//\u5730\u56FE\u7C7B\u578B\uFF0C\u5728\u539F\u5929\u5730\u56FEapi\u4E2D\u4EE5window.TMAP_NORMAL_MAP\u8868\u793A\uFF0C\u6B64\u5904\u4E3A\u5B57\u7B26\u4E32"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          title`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"\u536B\u661F"'),t("span",{class:"token punctuation"},","),n(`
          icon`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'" http://api.tianditu.gov.cn/v4.0/image/map/maptype/satellite.png"'),t("span",{class:"token punctuation"},","),n(`
          layer`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"TMAP_SATELLITE_MAP"'),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          title`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"\u536B\u661F\u6DF7\u5408"'),t("span",{class:"token punctuation"},","),n(`
          icon`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"http://api.tianditu.gov.cn/v4.0/image/map/maptype/satellitepoi.png"'),t("span",{class:"token punctuation"},","),n(`
          layer`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"TMAP_HYBRID_MAP"'),n(`
        `),t("span",{class:"token punctuation"},"}"),n(`
        `),t("span",{class:"token comment"},"// {"),n(`
        `),t("span",{class:"token comment"},'//   title: "\u5730\u5F62",'),n(`
        `),t("span",{class:"token comment"},'//   icon: "http://api.tianditu.gov.cn/v4.0/image/map/maptype/terrain.png",'),n(`
        `),t("span",{class:"token comment"},'//   layer: "TMAP_TERRAIN_MAP"'),n(`
        `),t("span",{class:"token comment"},"// },"),n(`
        `),t("span",{class:"token comment"},"// {"),n(`
        `),t("span",{class:"token comment"},'//   title: "\u5730\u5F62\u6DF7\u5408",'),n(`
        `),t("span",{class:"token comment"},'//   icon: "http://api.tianditu.gov.cn/v4.0/image/map/maptype/terrainpoi.png",'),n(`
        `),t("span",{class:"token comment"},'//   layer: "TMAP_TERRAIN_HYBRID_MAP"'),n(`
        `),t("span",{class:"token comment"},"// }"),n(`
      `),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"{"),n(`
      name`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"OverviewMap"'),t("span",{class:"token punctuation"},","),n(`
      isOpen`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
      anchor`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"bottomright"'),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
  visible`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(" name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"demo-control"'),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),n(),t("span",{class:"token attr-name"},"scoped"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".mapDiv"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 100%"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),n(" 300px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),g=o("",18);function h(m,_,v,b,q,y){const p=a("demo-control"),e=a("code-details");return i(),l("div",null,[k,s(p),s(e,null,{default:u(()=>[d]),_:1}),g])}var M=c(r,[["render",h]]);export{A as __pageData,M as default};
