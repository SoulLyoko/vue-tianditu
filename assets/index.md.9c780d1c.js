import{_ as n,c as a,o as s,a as t}from"./app.dcc99b05.js";const m='{"title":"vue-tianditu","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u5FEB\u901F\u4E0A\u624B","slug":"\u5FEB\u901F\u4E0A\u624B"},{"level":3,"title":"\u5168\u5C40\u5F15\u5165","slug":"\u5168\u5C40\u5F15\u5165"},{"level":3,"title":"\u6309\u9700\u5F15\u5165","slug":"\u6309\u9700\u5F15\u5165"},{"level":3,"title":"API \u52A0\u8F7D\u5668","slug":"api-\u52A0\u8F7D\u5668"},{"level":2,"title":"\u8F85\u52A9\u51FD\u6570","slug":"\u8F85\u52A9\u51FD\u6570"},{"level":3,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E"}],"relativePath":"index.md","lastUpdated":1640654454899}',p={},o=t(`<h1 id="vue-tianditu" tabindex="-1">vue-tianditu <a class="header-anchor" href="#vue-tianditu" aria-hidden="true">#</a></h1><ul><li><p>\u5929\u5730\u56FE vue \u7EC4\u4EF6\u5E93</p></li><li><p>vue-tianditu v2 \u540C\u65F6\u652F\u6301 Vue3 \u548C Vue2(composition-api)</p></li><li><p><a href="https://soullyoko.github.io/vue-tianditu/" target="_blank" rel="noopener noreferrer">vue-tianditu v2 \u6587\u6863</a></p></li></ul><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-sh"><pre><code>npm i vue-tianditu
# or
yarn add vue-tianditu
</code></pre></div><h2 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1">\u5FEB\u901F\u4E0A\u624B <a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a></h2><h3 id="\u5168\u5C40\u5F15\u5165" tabindex="-1">\u5168\u5C40\u5F15\u5165 <a class="header-anchor" href="#\u5168\u5C40\u5F15\u5165" aria-hidden="true">#</a></h3><p>\u5168\u90E8\u5F15\u5165\uFF0C\u89E3\u653E\u53CC\u624B</p><div class="language-ts"><pre><code><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VueTianditu <span class="token keyword">from</span> <span class="token string">&quot;vue-tianditu&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueTianditu<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  v<span class="token operator">:</span> <span class="token string">&quot;4.0&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u76EE\u524D\u53EA\u652F\u63014.0\u7248\u672C</span>
  tk<span class="token operator">:</span> <span class="token string">&quot;your map token&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-html"><pre><code><span class="token comment">&lt;!-- App.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapDiv<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tdt-map</span> <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>state.center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>state.zoom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tdt-map</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> TdtMap <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-tianditu&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    center<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.280637</span><span class="token punctuation">,</span> <span class="token number">23.125178</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    zoom<span class="token operator">:</span> <span class="token number">12</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.mapDiv</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u6309\u9700\u5F15\u5165" tabindex="-1">\u6309\u9700\u5F15\u5165 <a class="header-anchor" href="#\u6309\u9700\u5F15\u5165" aria-hidden="true">#</a></h3><p>\u6309\u9700\u5F15\u5165\uFF0C\u914D\u5408 ts \u83B7\u5F97\u7C7B\u578B\u63D0\u793A</p><p><code>App.vue</code></p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapDiv<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tdt-map</span> <span class="token attr-name">:center</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>state.center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:zoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>state.zoom<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:loadConfig</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loadScript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tdt-map</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> TdtMap <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-tianditu&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> loadConfig <span class="token operator">=</span> <span class="token punctuation">{</span> v<span class="token operator">:</span> <span class="token string">&quot;4.0&quot;</span><span class="token punctuation">,</span> tk<span class="token operator">:</span> <span class="token string">&quot;your map token&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    center<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">113.280637</span><span class="token punctuation">,</span> <span class="token number">23.125178</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    zoom<span class="token operator">:</span> <span class="token number">12</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.mapDiv</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="api-\u52A0\u8F7D\u5668" tabindex="-1">API \u52A0\u8F7D\u5668 <a class="header-anchor" href="#api-\u52A0\u8F7D\u5668" aria-hidden="true">#</a></h3><p>\u751A\u81F3\u53EF\u4EE5\u628A\u5B83\u5F53\u4F5C\u65E0\u60C5\u7684 API \u52A0\u8F7D\u5DE5\u5177</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useApiLoader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-tianditu&quot;</span><span class="token punctuation">;</span>

<span class="token function">useApiLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  v<span class="token operator">:</span> <span class="token string">&quot;4.0&quot;</span><span class="token punctuation">,</span>
  tk<span class="token operator">:</span> <span class="token string">&quot;your map token&quot;</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;D3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;CarTrack&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;HeatmapOverlay&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;BufferTool&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ImageOverLayer&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">T</span></span><span class="token punctuation">.</span><span class="token function">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u8F85\u52A9\u51FD\u6570" tabindex="-1">\u8F85\u52A9\u51FD\u6570 <a class="header-anchor" href="#\u8F85\u52A9\u51FD\u6570" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> toLngLat<span class="token punctuation">,</span> toBounds<span class="token punctuation">,</span> toPoint<span class="token punctuation">,</span> toIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-tianditu&quot;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u8BF4\u660E" tabindex="-1">\u8BF4\u660E <a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a></h3><table><thead><tr><th>\u51FD\u6570\u540D</th><th>\u8FD4\u56DE\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>toLngLat(lnglat:[number,number])</td><td>T.LngLat</td><td>\u8F6C\u6362\u4E3A\u7ECF\u7EAC\u5EA6\u5BF9\u8C61\u3002<br>\u53C2\u6570\u8BF4\u660E:<br>lnglat:\u7ECF\u7EAC\u5EA6\u6570\u7EC4</td></tr><tr><td>toBounds(bounds:[[number,number],[number,number]])</td><td>T.Bounds</td><td>\u8F6C\u6362\u4E3A\u5730\u7406\u8303\u56F4\u5BF9\u8C61\u3002<br>\u53C2\u6570\u8BF4\u660E:<br>bounds:\u5730\u7406\u8303\u56F4\u6570\u7EC4</td></tr><tr><td>toPoint(point:[number,number])</td><td>T.Point</td><td>\u8F6C\u6362\u4E3A\u50CF\u7D20\u5750\u6807\u70B9\u5BF9\u8C61\u3002<br>\u53C2\u6570\u8BF4\u660E:<br>point:\u50CF\u7D20\u5750\u6807\u70B9\u6570\u7EC4</td></tr><tr><td>toIcon(icon:IconOption|string)</td><td>T.Icon</td><td>\u8F6C\u6362\u4E3A\u56FE\u6807\u5BF9\u8C61\u3002<br>\u53C2\u6570\u8BF4\u660E:<br><code>icon:string//\u56FE\u7247\u5730\u5740</code> \u6216 <code>{iconUrl:string,//\u56FE\u7247\u5730\u5740</code><br><code>iconSize:[number,number],//\u56FE\u7247\u5927\u5C0F</code><br><code>iconAnchor:[number,number]//\u504F\u79FB}</code></td></tr></tbody></table>`,20),e=[o];function c(u,l,i,k,r,d){return s(),a("div",null,e)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};
