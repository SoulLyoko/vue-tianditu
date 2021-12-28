import{_ as c,r as a,c as l,b as s,w as u,a as o,o as i,d as t,e as n}from"./app.dcc99b05.js";const f='{"title":"\u63A7\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u63A7\u4EF6","slug":"\u81EA\u5B9A\u4E49\u63A7\u4EF6"},{"level":2,"title":"\u7F29\u653E\u63A7\u4EF6","slug":"\u7F29\u653E\u63A7\u4EF6"},{"level":2,"title":"\u6BD4\u4F8B\u5C3A\u63A7\u4EF6","slug":"\u6BD4\u4F8B\u5C3A\u63A7\u4EF6"},{"level":2,"title":"\u7248\u6743\u63A7\u4EF6","slug":"\u7248\u6743\u63A7\u4EF6"},{"level":2,"title":"\u9E70\u773C\u5730\u56FE\u63A7\u4EF6","slug":"\u9E70\u773C\u5730\u56FE\u63A7\u4EF6"},{"level":2,"title":"\u5730\u56FE\u7C7B\u578B\u63A7\u4EF6","slug":"\u5730\u56FE\u7C7B\u578B\u63A7\u4EF6"}],"relativePath":"map/control.md","lastUpdated":1640654436786}',r={},k=o("",4),d=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
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
  controls`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(" name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"Zoom"'),t("span",{class:"token punctuation"},","),n(" position"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"topleft"'),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},'"Scale"'),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},'"Copyright"'),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},'"MapType"'),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},'"OverviewMap"'),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
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
`)])])],-1),h=o("",18);function g(m,_,b,v,q,y){const e=a("demo-control"),p=a("code-details");return i(),l("div",null,[k,s(e),s(p,null,{default:u(()=>[d]),_:1}),h])}var A=c(r,[["render",g]]);export{f as __pageData,A as default};