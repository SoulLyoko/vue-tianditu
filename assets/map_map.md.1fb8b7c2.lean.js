import{_ as o,r as n,c as r,b as s,w as c,d as t,e as a,a as p,o as l}from"./app.dcc99b05.js";const w='{"title":"\u57FA\u7840\u5730\u56FE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"},{"level":2,"title":"\u6240\u6709\u7EC4\u4EF6\u90FD\u6709\u7684\u4E8B\u4EF6","slug":"\u6240\u6709\u7EC4\u4EF6\u90FD\u6709\u7684\u4E8B\u4EF6"}],"relativePath":"map/map.md","lastUpdated":1640654436786}',u={},i=t("h1",{id:"\u57FA\u7840\u5730\u56FE",tabindex:"-1"},[a("\u57FA\u7840\u5730\u56FE "),t("a",{class:"header-anchor",href:"#\u57FA\u7840\u5730\u56FE","aria-hidden":"true"},"#")],-1),k=t("h2",{id:"\u793A\u4F8B",tabindex:"-1"},[a("\u793A\u4F8B "),t("a",{class:"header-anchor",href:"#\u793A\u4F8B","aria-hidden":"true"},"#")],-1),g=t("p",null,"\u5F53\u53C2\u6570 center \u548C zoom \u6B63\u786E\u65F6\u5730\u56FE\u624D\u4F1A\u6B63\u5E38\u663E\u793A",-1),m=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("div")]),a(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("mapDiv"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("tdt-map")]),a(),t("span",{class:"token attr-name"},":center"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("state.center"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},":zoom"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("state.zoom"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("tdt-map")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("script")]),a(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("ts"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[a(`
`),t("span",{class:"token keyword"},"import"),a(),t("span",{class:"token punctuation"},"{"),a(" reactive "),t("span",{class:"token punctuation"},"}"),a(),t("span",{class:"token keyword"},"from"),a(),t("span",{class:"token string"},'"vue-demi"'),t("span",{class:"token punctuation"},";"),a(`

`),t("span",{class:"token keyword"},"const"),a(" state "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token function"},"reactive"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),a(`
  center`),t("span",{class:"token operator"},":"),a(),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"113.280637"),t("span",{class:"token punctuation"},","),a(),t("span",{class:"token number"},"23.125178"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),a(`
  zoom`),t("span",{class:"token operator"},":"),a(),t("span",{class:"token number"},"11"),a(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),a(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("script")]),t("span",{class:"token punctuation"},">")]),a(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("script")]),a(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[a(`
`),t("span",{class:"token keyword"},"export"),a(),t("span",{class:"token keyword"},"default"),a(),t("span",{class:"token punctuation"},"{"),a(" name"),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},'"demo-map"'),a(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),a(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("script")]),t("span",{class:"token punctuation"},">")]),a(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("style")]),a(),t("span",{class:"token attr-name"},"scoped"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[a(`
`),t("span",{class:"token selector"},".mapDiv"),a(),t("span",{class:"token punctuation"},"{"),a(`
  `),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),a(" 100%"),t("span",{class:"token punctuation"},";"),a(`
  `),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),a(" 300px"),t("span",{class:"token punctuation"},";"),a(`
`),t("span",{class:"token punctuation"},"}"),a(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("style")]),t("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),h=p("",6);function y(v,_,b,x,f,P){const e=n("demo-map"),d=n("code-details");return l(),r("div",null,[i,k,g,s(e),s(d,null,{default:c(()=>[m]),_:1}),h])}var S=o(u,[["render",y]]);export{w as __pageData,S as default};
