import{_ as p,r as s,c as l,b as t,w as u,a as o,o as k,d as n,e as a}from"./app.dcc99b05.js";const q='{"title":"\u641C\u7D22","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"}],"relativePath":"service/search.md","lastUpdated":1640654436786}',i={},r=o(`<h1 id="\u641C\u7D22" tabindex="-1">\u641C\u7D22 <a class="header-anchor" href="#\u641C\u7D22" aria-hidden="true">#</a></h1><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>TdtSearch</code>\u662F\u5355\u72EC\u7684 UI \u7EC4\u4EF6\uFF0C\u9700\u8981\u4F7F\u7528<code>TdtControl</code>\u5B9A\u4F4D\u5230\u5730\u56FE\u4E0A\uFF0C\u6216\u6839\u636E\u9700\u8981\u4F7F\u7528\u6837\u5F0F\u5B9A\u4F4D</p><p>\u65E0\u8BBA\u5168\u5C40\u5F15\u5165\u8FD8\u662F\u6309\u9700\u5F15\u5165\u641C\u7D22\u7EC4\u4EF6\uFF0C\u90FD\u9700\u8981\u5BFC\u5165\u6837\u5F0F\u6587\u4EF6</p></div><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&quot;vue-tianditu/lib/style.css&quot;</span><span class="token punctuation">;</span>
</code></pre></div>`,4),d=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mapDiv"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tdt-map")]),a(),n("span",{class:"token attr-name"},":center"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("state.center"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":zoom"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("state.zoom"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tdt-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tdt-search")]),a(),n("span",{class:"token attr-name"},"@search-complete"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("searchComplete"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@poi-click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("poiClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tdt-search")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tdt-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tdt-map")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" reactive "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"vue-demi"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" state "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  center`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"113.280637"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"23.125178"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  zoom`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"11"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"searchComplete"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("result"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"."),a("LocalSearchResult")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("result"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"poiClick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("poi"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},"."),a("LocalSearchPoi")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("poi"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(" name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"demo-search"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),a(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".mapDiv"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),a(" 600px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),g=o('<h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>placeholder</td><td>number</td><td>&quot;\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22&quot;</td><td>\u663E\u793A\u5728\u8F93\u5165\u6846\u7684\u63D0\u793A</td></tr><tr><td>searchBtn</td><td>boolean</td><td>true</td><td>\u662F\u5426\u663E\u793A\u641C\u7D22\u6309\u94AE</td></tr><tr><td>routeBtn</td><td>boolean</td><td>true</td><td>\u662F\u5426\u663E\u793A\u5BFC\u822A\u6309\u94AE</td></tr></tbody></table>',2);function h(_,m,v,f,b,T){const e=s("demo-search"),c=s("code-details");return k(),l("div",null,[r,t(e),t(c,null,{default:u(()=>[d]),_:1}),g])}var w=p(i,[["render",h]]);export{q as __pageData,w as default};
