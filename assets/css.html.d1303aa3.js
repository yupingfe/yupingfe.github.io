import{_ as e,o,c,b as n,a as t,w as p,d as s,e as l,r as i}from"./app.4a7dda62.js";const u={},r=n("h1",{id:"css\u9762\u8BD5\u9898",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#css\u9762\u8BD5\u9898","aria-hidden":"true"},"#"),s(" CSS\u9762\u8BD5\u9898")],-1),d={class:"table-of-contents"},k=s("\u76D2\u5B50\u6A21\u578B\u9610\u8FF0"),h=s("Link\u548C@import\u7684\u533A\u522B"),g=s("CSS\u9009\u62E9\u5668\u4F18\u5148\u7EA7"),b=s("CSS\u52A8\u753B"),m=s("sass less\u7684\u4F5C\u7528"),f=s("css\u5B9E\u73B0\u4E00\u4E2A\u4E09\u89D2\u5F62"),x=s("\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u5F0F"),S=s("CSS\u7CBE\u7075\u56FE"),_=s("rem\u548Crpx\u6709\u4EC0\u4E48\u533A\u522B\uFF1F\u4E3A\u4EC0\u4E48\u7528\uFF1F"),y=s("display\uFF1Ainline-block \u6709\u7F1D\u9699\uFF0C\u600E\u4E48\u89E3\u51B3\uFF1F"),v=s("\u6709\u54EA\u4E9B\u5E03\u5C40\u65B9\u5F0F\uFF1F"),C=s("\u6D4F\u89C8\u5668\u517C\u5BB9\u95EE\u9898"),w=s("z-index\u662F\u4EC0\u4E48\uFF1F\u9ED8\u8BA4\u503C\uFF1F"),z=s("inline-block\u3001inline \u548C block \u7684\u533A\u522B?"),q=s("\u4E3A\u4EC0\u4E48 img \u662F inline \u8FD8\u53EF\u4EE5\u8BBE\u7F6E\u5BBD\u9AD8\uFF1F"),E=s("CSS3\u7684\u65B0\u7279\u6027"),I=l(`<h2 id="\u76D2\u5B50\u6A21\u578B\u9610\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u76D2\u5B50\u6A21\u578B\u9610\u8FF0" aria-hidden="true">#</a> \u76D2\u5B50\u6A21\u578B\u9610\u8FF0</h2><p>W3C\u6807\u51C6\u76D2\uFF1A\u5C5E\u6027width,height\u53EA\u5305\u542B\u5185\u5BB9content\uFF0C\u4E0D\u5305\u542Bborder\u548Cpadding</p><p>IE\u76D2\u6A21\u578B\uFF1A\u5C5E\u6027width,height\u5305\u542Bborder\u548Cpadding\uFF0C\u6307\u7684\u662Fcontent+padding+border</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">box-sizing</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span> <span class="token comment">/* \u6807\u51C6\u76D2 */</span>
<span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span> <span class="token comment">/* IE\u76D2 */</span>
</code></pre></div><h2 id="link\u548C-import\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#link\u548C-import\u7684\u533A\u522B" aria-hidden="true">#</a> Link\u548C@import\u7684\u533A\u522B</h2><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>style.css<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ol><li><p>link \u662F HTML \u6807\u7B7E\uFF0C\u4E0D\u4EC5\u53EF\u4EE5\u52A0\u8F7D CSS \u6587\u4EF6\uFF0C\u8FD8\u53EF\u4EE5\u5B9A\u4E49 RSS\u3001rel \u8FDE\u63A5\u5C5E\u6027\u7B49\uFF1B</p><p>@import \u662F CSS2.1\u63D0\u4F9B\u7684\u8BED\u6CD5\uFF0C<strong>\u53EA\u6709\u5BFC\u5165\u6837\u5F0F\u8868\u7684\u4F5C\u7528\u3002</strong></p></li><li><p>\u52A0\u8F7D\u9875\u9762\u65F6\uFF0Clink \u6807\u7B7E\u5F15\u5165\u7684 CSS \u88AB\u540C\u65F6\u52A0\u8F7D\uFF1B</p><p>@import \u5F15\u5165\u7684 CSS \u5C06\u5728<strong>\u9875\u9762\u52A0\u8F7D\u5B8C\u6BD5</strong>\u540E\u88AB\u52A0\u8F7D\u3002</p></li><li><p>@import \u662F <strong>CSS2.1</strong> \u624D\u6709\u7684\u8BED\u6CD5\uFF0C\u6545\u53EA\u53EF\u5728 IE5+ \u624D\u80FD\u8BC6\u522B\uFF1B</p><p>link \u6807\u7B7E\u4F5C\u4E3A HTML \u5143\u7D20\uFF0C\u4E0D\u5B58\u5728\u517C\u5BB9\u6027\u95EE\u9898\u3002</p></li><li><p>\u53EF\u4EE5\u901A\u8FC7 JS \u64CD\u4F5C DOM \uFF0C\u63D2\u5165 link \u6807\u7B7E\u6765\u6539\u53D8\u6837\u5F0F\uFF1B</p><p>JS\u65E0\u6CD5\u7528@import \u7684\u65B9\u5F0F\u63D2\u5165\u6837\u5F0F\u3002</p></li><li><p>link \u5F15\u5165\u7684\u6837\u5F0F<strong>\u6743\u91CD\u5927</strong>\u4E8E@import \u5F15\u5165\u7684\u6837\u5F0F\u3002</p></li></ol><h2 id="css\u9009\u62E9\u5668\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#css\u9009\u62E9\u5668\u4F18\u5148\u7EA7" aria-hidden="true">#</a> CSS\u9009\u62E9\u5668\u4F18\u5148\u7EA7</h2><p>\u9009\u62E9\u5668\u6309\u4F18\u5148\u7EA7\u5148\u540E\u6392\u5217\uFF1A!important&gt;\u5185\u8054&gt;id&gt;class = \u5C5E\u6027 = \u4F2A\u7C7B &gt;\u6807\u7B7E = \u4F2A\u5143\u7D20 &gt; \u901A\u914D\u7B26 *</p><h2 id="css\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#css\u52A8\u753B" aria-hidden="true">#</a> CSS\u52A8\u753B</h2><p><strong>Transition</strong></p><p>\u200B transition\u5173\u6CE8\u7684\u662FCSSproperty\u7684\u53D8\u5316\uFF0Cproperty\u503C\u548C\u65F6\u95F4\u7684\u5173\u7CFB\u662F\u4E00\u4E2A\u4E09\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBFcubic-bezier(n,n,n,n)\u3002</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">transition</span><span class="token punctuation">:</span> width 2s linear 0<span class="token punctuation">;</span> 
<span class="token property">transition</span><span class="token punctuation">:</span> width 2s <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span>n<span class="token punctuation">,</span>n<span class="token punctuation">,</span>n<span class="token punctuation">)</span> 0<span class="token punctuation">;</span> 
<span class="token comment">/*\u5C5E\u6027 \u6301\u7EED\u65F6\u95F4 \u901F\u5EA6\u6548\u679C \u5EF6\u8FDF*/</span>
<span class="token comment">/*\u591A\u4E2A\u52A8\u753B\u7528,\u9694\u5F00 \u53EF\u4EE5\u7528all\u4EE3\u8868\u5168\u90E8\u5C5E\u6027*/</span>
</code></pre></div><p><strong>Animation</strong></p><p>\u200B animation\u4F5C\u7528\u4E8E\u5143\u7D20\u672C\u8EAB\u800C\u4E0D\u662F\u6837\u5F0F\u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5173\u952E\u5E27\u7684\u6982\u5FF5\uFF0C\u5E94\u8BE5\u8BF4\u53EF\u4EE5\u5B9E\u73B0\u66F4\u81EA\u7531\u7684\u52A8\u753B\u6548\u679C\u3002</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> animation1 2s ease 0s infinite alternate<span class="token punctuation">;</span>
  <span class="token comment">/* \u52A8\u753B\u540D \u6301\u7EED\u65F6\u95F4 \u901F\u5EA6\u6548\u679C \u5EF6\u8FDF \u6B21\u6570 \u662F\u5426\u53CD\u5411 */</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> animation1</span> <span class="token punctuation">{</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">}</span>
  <span class="token selector">to</span> <span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span> cyan<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="sass-less\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#sass-less\u7684\u4F5C\u7528" aria-hidden="true">#</a> sass less\u7684\u4F5C\u7528</h2><p>CSS \u662F\u4E00\u95E8\u975E\u7A0B\u5E8F\u5F0F\u8BED\u8A00\uFF0C\u6CA1\u6709\u53D8\u91CF\u3001\u51FD\u6570\u3001SCOPE\uFF08\u4F5C\u7528\u57DF\uFF09\uFF0C\u9700\u8981\u4E66\u5199\u5927\u91CF\u770B\u4F3C\u6CA1\u6709\u903B\u8F91\u7684\u4EE3\u7801\uFF0C\u4E0D\u65B9\u4FBF\u7EF4\u62A4\u53CA\u6269\u5C55\uFF0C\u4E0D\u5229\u4E8E\u590D\u7528\u3002</p><p>Sass(Syntactically Awesome Style Sheets)\u662F\u5BF9CSS\u7684\u8BED\u6CD5\u7684\u4E00\u79CD\u6269\u5145\uFF0C\u8BDE\u751F\u4E8E2007\u5E74\uFF0C\u6700\u65E9\u4E5F\u662F\u6700\u6210\u719F\u7684\u4E00\u6B3E<strong>CSS\u9884\u5904\u7406\u5668\u8BED\u8A00</strong>\uFF0C\u5B83\u53EF\u4EE5\u4F7F\u7528\u53D8\u91CF\u3001\u5E38\u91CF\u3001\u5D4C\u5957\u3001\u6DF7\u5165\u3001\u51FD\u6570\u7B49\u529F\u80FD\uFF0C\u53EF\u4EE5\u66F4\u6709\u6548\u6709\u5F39\u6027\u7684\u5199\u51FACSS\u3002</p><p>Sass\u662FRuby\u8BED\u8A00\u5199\u7684\uFF0C\u9700\u8981\u5148\u5B89\u88C5Ruby\uFF0C\u6BD4\u8F83\u7E41\u7410\u3002</p><p>Less\u662F\u4E5F\u662FCSS\u9884\u5904\u7406\u5668\u8BED\u8A00\uFF0C\u53EF\u4EE5\u5728\u5BA2\u6237\u7AEF\u6216\u670D\u52A1\u5668\u7AEF\u8FD0\u884C\uFF0C\u5E2E\u52A9\u6211\u4EEC\u81EA\u5B9A\u4E49\uFF0C\u7BA1\u7406\u548C\u91CD\u7528\u7F51\u9875\u7684\u6837\u5F0F\u8868\uFF0C\u5F00\u6E90\uFF0C\u4E0D\u9700\u8981\u88C5Ruby\u3002</p><h2 id="css\u5B9E\u73B0\u4E00\u4E2A\u4E09\u89D2\u5F62" tabindex="-1"><a class="header-anchor" href="#css\u5B9E\u73B0\u4E00\u4E2A\u4E09\u89D2\u5F62" aria-hidden="true">#</a> css\u5B9E\u73B0\u4E00\u4E2A\u4E09\u89D2\u5F62</h2><p>\u5229\u7528border\u5373\u53EF\u5B9E\u73B0\u3002</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 50px solid #00ff00<span class="token punctuation">;</span>
  <span class="token property">border-left</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
  <span class="token property">border-right</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 50px solid transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u5F0F" aria-hidden="true">#</a> \u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u5F0F</h2><p>\u5229\u7528\u4F2A\u5143\u7D20\u9009\u62E9\u5668\uFF0C\u5728\u9700\u8981\u6E05\u9664\u6D6E\u52A8\u7684\u5143\u7D20\u540E\u65B9\u52A8\u6001\u63D2\u5165\u4E00\u4E2A\u5143\u7D20\u6765\u5B9E\u73B0\u3002</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.warp::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="css\u7CBE\u7075\u56FE" tabindex="-1"><a class="header-anchor" href="#css\u7CBE\u7075\u56FE" aria-hidden="true">#</a> CSS\u7CBE\u7075\u56FE</h2><p>\u5C06\u4E00\u4E2A\u9875\u9762\u6D89\u53CA\u5230\u7684\u6240\u6709\u56FE\u7247\u90FD\u5305\u542B\u5230\u4E00\u5F20\u5927\u56FE\u4E2D\u53BB\uFF0C\u7136\u540E\u5229\u7528CSS\u7684background-image\uFF0Cbackground-repeat\uFF0Cbackground-position\u7684\u7EC4\u5408\u8FDB\u884C\u80CC\u666F\u5B9A\u4F4D\u3002 \u5229\u7528CSSSprites\u80FD\u5F88\u597D\u5730\u51CF\u5C11\u7F51\u9875\u7684http\u8BF7\u6C42\uFF0C\u4ECE\u800C\u5F88\u597D\u7684\u63D0\u9AD8\u9875\u9762\u7684\u6027\u80FD\uFF1BCSSSprites\u80FD\u51CF\u5C11\u56FE\u7247\u7684\u5B57\u8282\u3002</p><p>\u4F18\u70B9\uFF1A \u51CF\u5C11HTTP\u8BF7\u6C42\u6570\uFF0C\u6781\u5927\u5730\u63D0\u9AD8\u9875\u9762\u52A0\u8F7D\u901F\u5EA6 \u589E\u52A0\u56FE\u7247\u4FE1\u606F\u91CD\u590D\u5EA6\uFF0C\u63D0\u9AD8\u538B\u7F29\u6BD4\uFF0C\u51CF\u5C11\u56FE\u7247\u5927\u5C0F \u66F4\u6362\u98CE\u683C\u65B9\u4FBF\uFF0C\u53EA\u9700\u5728\u4E00\u5F20\u6216\u51E0\u5F20\u56FE\u7247\u4E0A\u4FEE\u6539\u989C\u8272\u6216\u6837\u5F0F\u5373\u53EF\u5B9E\u73B0</p><p>\u7F3A\u70B9\uFF1A \u56FE\u7247\u5408\u5E76\u9EBB\u70E6 \u7EF4\u62A4\u9EBB\u70E6\uFF0C\u4FEE\u6539\u4E00\u4E2A\u56FE\u7247\u53EF\u80FD\u9700\u8981\u91CD\u65B0\u5E03\u5C40\u6574\u4E2A\u56FE\u7247\uFF0C\u6837\u5F0F</p><h2 id="rem\u548Crpx\u6709\u4EC0\u4E48\u533A\u522B-\u4E3A\u4EC0\u4E48\u7528" tabindex="-1"><a class="header-anchor" href="#rem\u548Crpx\u6709\u4EC0\u4E48\u533A\u522B-\u4E3A\u4EC0\u4E48\u7528" aria-hidden="true">#</a> rem\u548Crpx\u6709\u4EC0\u4E48\u533A\u522B\uFF1F\u4E3A\u4EC0\u4E48\u7528\uFF1F</h2><p>em\u662F\u76F8\u5BF9\u957F\u5EA6\u5355\u4F4D\u3002\u76F8\u5BF9\u4E8E\u5F53\u524D\u5BF9\u8C61\u5185\u6587\u672C\u7684\u5B57\u4F53\u5C3A\u5BF8\u3002\u5982\u5F53\u524D\u5BF9\u884C\u5185\u6587\u672C\u7684\u5B57\u4F53\u5C3A\u5BF8\u672A\u88AB\u4EBA\u4E3A\u8BBE\u7F6E\uFF0C\u5219\u76F8\u5BF9\u4E8E\u6D4F\u89C8\u5668\u7684\u9ED8\u8BA4\u5B57\u4F53\u5C3A\u5BF8\uFF0816px\uFF09\u3002 em\u7279\u70B9 em\u7684\u503C\u5E76\u4E0D\u662F\u56FA\u5B9A\u7684\uFF1B em\u4F1A\u7EE7\u627F\u7236\u7EA7\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F\u3002</p><p>rem\u662FCSS3\u65B0\u589E\u7684\u4E00\u4E2A\u76F8\u5BF9\u5355\u4F4D\uFF08root em\uFF0C\u6839em\uFF09\uFF0C\u8FD9\u4E2A\u5355\u4F4D\u4E0Eem\u6709\u4EC0\u4E48\u533A\u522B\u5462\uFF1F\u533A\u522B\u5728\u4E8E\u4F7F\u7528rem\u4E3A\u5143\u7D20\u8BBE\u5B9A\u5B57\u4F53\u5927\u5C0F\u65F6\uFF0C\u4ECD\u7136\u662F\u76F8\u5BF9\u5927\u5C0F\uFF0C\u4F46\u76F8\u5BF9\u7684\u53EA\u662FHTML\u6839\u5143\u7D20\u3002\u96C6\u76F8\u5BF9\u5927\u5C0F\u548C\u7EDD\u5BF9\u5927\u5C0F\u7684\u4F18\u70B9\u4E8E\u4E00\u8EAB\uFF0C\u901A\u8FC7\u5B83\u65E2\u53EF\u4EE5\u505A\u5230\u53EA\u4FEE\u6539\u6839\u5143\u7D20\u5C31\u6210\u6BD4\u4F8B\u5730\u8C03\u6574\u6240\u6709\u5B57\u4F53\u5927\u5C0F\uFF0C\u53C8\u53EF\u4EE5\u907F\u514D\u5B57\u4F53\u5927\u5C0F\u9010\u5C42\u590D\u5408\u7684\u8FDE\u9501\u53CD\u5E94\u3002(IE9\u4EE5\u4E0B\u4E0D\u652F\u6301)</p><p>rpx \u4E3A\u5C0F\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u7684\u76F8\u5BF9\u5355\u4F4D\uFF0C\u7528\u6CD5\u548Crem\u7C7B\u4F3C\uFF0C 1rpx = \u5C4F\u5E55\u5BBD\u5EA6/750 px, \u6240\u4EE5\u5728\u5C4F\u5E55\u5BBD\u5EA6\u4E3A750\u7684\u8BBE\u8BA1\u7A3F\u4E2D\uFF0C1rpx = 1px\u3002</p><h2 id="display-inline-block-\u6709\u7F1D\u9699-\u600E\u4E48\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#display-inline-block-\u6709\u7F1D\u9699-\u600E\u4E48\u89E3\u51B3" aria-hidden="true">#</a> display\uFF1Ainline-block \u6709\u7F1D\u9699\uFF0C\u600E\u4E48\u89E3\u51B3\uFF1F</h2><p>\u8FD9\u4E2A\u662F\u7531\u4E8E\u6362\u884C\u7B26\u51B3\u5B9A\u7684\uFF0C\u89E3\u51B3\uFF1A</p><p>1.\u5143\u7D20\u4E4B\u95F4\u4E0D\u6362\u884C <code>&lt;span&gt;1&lt;/span&gt;&lt;span&gt;2&lt;/span&gt;</code></p><ol start="2"><li>\u4F7F\u7528flex\u5E03\u5C40</li></ol><h2 id="\u6709\u54EA\u4E9B\u5E03\u5C40\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6709\u54EA\u4E9B\u5E03\u5C40\u65B9\u5F0F" aria-hidden="true">#</a> \u6709\u54EA\u4E9B\u5E03\u5C40\u65B9\u5F0F\uFF1F</h2><p>\u6587\u6863\u6D41\u6D6E\u52A8\u5E03\u5C40\uFF0C\u5B9A\u4F4D\u5E03\u5C40\uFF0C<code>flex</code>\u5E03\u5C40 <code>Grid</code>\u5E03\u5C40</p><p>\u5723\u676F\u5E03\u5C40\u548C\u53CC\u98DE\u7FFC\u5E03\u5C40</p><h2 id="\u6D4F\u89C8\u5668\u517C\u5BB9\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u517C\u5BB9\u95EE\u9898" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u517C\u5BB9\u95EE\u9898</h2><div class="language-text ext-text"><pre class="language-text"><code>IE6\u8BC6\u522B_   _background-color:#1e0bd1;
ie6,7\u8BC6\u522B*+# +background-color:#a200ff;
ie8\u8BC6\u522B\\0 
ie9\u8BC6\u522B\u5728\u5C5E\u6027\u540E\\9\\0 .background-color:#00deff\\9;
</code></pre></div><h2 id="z-index\u662F\u4EC0\u4E48-\u9ED8\u8BA4\u503C" tabindex="-1"><a class="header-anchor" href="#z-index\u662F\u4EC0\u4E48-\u9ED8\u8BA4\u503C" aria-hidden="true">#</a> z-index\u662F\u4EC0\u4E48\uFF1F\u9ED8\u8BA4\u503C\uFF1F</h2><p>z-index \u5C5E\u6027\u8BBE\u7F6E\u5143\u7D20\u7684\u5806\u53E0\u987A\u5E8F\uFF0C\u4E14\u53EA\u5728\u5C5E\u6027position: relative/absolute/fixed \u7684\u65F6\u5019\u624D\u751F\u6548\u3002 <code>z-index: auto</code> \u662F\u9ED8\u8BA4\u503C\uFF0C\u4E0E<code>z-index: 0</code>\u662F\u6709\u533A\u522B\u7684\uFF1A <code>z-index: 0</code> \u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5806\u53E0\u4E0A\u4E0B\u6587\uFF0C\u800C <code>z-index: auto</code> \u4E0D\u4F1A\u521B\u5EFA\u65B0\u7684\u5806\u53E0\u4E0A\u4E0B\u6587</p><h2 id="inline-block\u3001inline-\u548C-block-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#inline-block\u3001inline-\u548C-block-\u7684\u533A\u522B" aria-hidden="true">#</a> inline-block\u3001inline \u548C block \u7684\u533A\u522B?</h2><p>Block \u662F\u5757\u7EA7\u5143\u7D20\uFF0C\u5176\u524D\u540E\u90FD\u4F1A\u6709\u6362\u884C\u7B26\uFF0C\u80FD\u8BBE\u7F6E\u5BBD\u5EA6\uFF0C\u9AD8\u5EA6\uFF0Cmargin/padding \u6C34\u5E73\u5782\u76F4\u65B9\u5411\u90FD\u6709\u6548\u3002</p><p>Inline\uFF1A\u8BBE\u7F6E width \u548C height \u65E0\u6548\uFF0Cmargin \u5728\u7AD6\u76F4\u65B9\u5411\u4E0A\u65E0\u6548\uFF0Cpadding\u6709\u6548\uFF0C\u524D\u540E\u65E0\u6362\u884C\u7B26</p><p>Inline-block\uFF1A\u80FD\u8BBE\u7F6E\u5BBD\u5EA6\u9AD8\u5EA6\uFF0Cmargin/padding \u6C34\u5E73\u5782\u76F4\u65B9\u5411 \u90FD\u6709\u6548\uFF0C\u524D\u540E\u65E0\u6362\u884C\u7B26</p><h2 id="\u4E3A\u4EC0\u4E48-img-\u662F-inline-\u8FD8\u53EF\u4EE5\u8BBE\u7F6E\u5BBD\u9AD8" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48-img-\u662F-inline-\u8FD8\u53EF\u4EE5\u8BBE\u7F6E\u5BBD\u9AD8" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48 img \u662F inline \u8FD8\u53EF\u4EE5\u8BBE\u7F6E\u5BBD\u9AD8\uFF1F</h2><p>img \u662F\u53EF\u66FF\u6362\u5143\u7D20\u3002</p><p>\u5728 CSS \u4E2D\uFF0C\u53EF\u66FF\u6362\u5143\u7D20\uFF08replaced element\uFF09\u7684\u5C55\u73B0\u6548\u679C\u4E0D\u662F\u7531 CSS \u6765\u63A7\u5236\u7684\u3002\u8FD9\u4E9B\u5143\u7D20\u662F\u4E00\u79CD\u5916\u90E8\u5BF9\u8C61\uFF0C\u5B83\u4EEC\u5916\u89C2\u7684\u6E32\u67D3\uFF0C\u662F\u72EC\u7ACB\u4E8E CSS \u7684\u3002 \u7B80\u5355\u6765\u8BF4\uFF0C\u5B83\u4EEC\u7684\u5185\u5BB9\u4E0D\u53D7\u5F53\u524D\u6587\u6863\u7684\u6837\u5F0F\u7684\u5F71\u54CD\u3002CSS \u53EF\u4EE5\u5F71\u54CD\u53EF\u66FF\u6362\u5143\u7D20\u7684\u4F4D\u7F6E\uFF0C\u4F46\u4E0D\u4F1A\u5F71\u54CD\u5230\u53EF\u66FF\u6362\u5143\u7D20\u81EA\u8EAB\u7684\u5185\u5BB9\u3002 \u5178\u578B\u7684\u53EF\u66FF\u6362\u5143\u7D20\u6709\uFF1A<code>&lt;iframe&gt; &lt;video&gt; &lt;embed&gt; &lt;img&gt;</code> CSS \u7684 content \u5C5E\u6027\u7528\u4E8E\u5728\u5143\u7D20\u7684 ::before \u548C ::after \u4F2A\u5143\u7D20\u4E2D\u63D2\u5165\u5185\u5BB9\u3002\u4F7F\u7528 content \u5C5E\u6027\u63D2\u5165\u7684\u5185\u5BB9\u90FD\u662F\u533F\u540D\u7684\u53EF\u66FF\u6362\u5143\u7D20\u3002</p><h2 id="css3\u7684\u65B0\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#css3\u7684\u65B0\u7279\u6027" aria-hidden="true">#</a> CSS3\u7684\u65B0\u7279\u6027</h2><ol><li><p>\u4F2A\u7C7B\u9009\u62E9\u5668</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token punctuation">:</span>first-child<span class="token punctuation">;</span> <span class="token punctuation">:</span>last-child<span class="token punctuation">;</span> <span class="token function">nth-child</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>before<span class="token punctuation">;</span> <span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token property">after</span>
<span class="token punctuation">:</span>first-letter<span class="token punctuation">;</span> <span class="token punctuation">:</span>first-line
</code></pre></div></li><li><p>\u80CC\u666F\u8FB9\u6846\u989C\u8272\u900F\u660E\u5EA6</p><div class="language-css ext-css"><pre class="language-css"><code>background-size<span class="token punctuation">;</span> background-origin<span class="token punctuation">;</span>
border-radius<span class="token punctuation">;</span> border-image<span class="token punctuation">;</span>
box-shadow<span class="token punctuation">;</span>
<span class="token function">rgba</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div></li><li><p>\u6587\u5B57\u6548\u679C</p><div class="language-css ext-css"><pre class="language-css"><code>text-shadow<span class="token punctuation">;</span> word-wrap<span class="token punctuation">;</span>
</code></pre></div></li><li><p>2D\u548C3D\u8F6C\u6362</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">skew</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">perspective</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div></li><li><p>\u52A8\u753B\u548C\u8FC7\u6E21</p><div class="language-css ext-css"><pre class="language-css"><code>aniamtion<span class="token punctuation">,</span> transition
</code></pre></div></li><li><p>\u591A\u5217</p></li><li><p>\u7528\u6237\u754C\u9762</p></li></ol>`,55);function T(L,B){const a=i("router-link");return o(),c("div",null,[r,n("nav",d,[n("ul",null,[n("li",null,[t(a,{to:"#\u76D2\u5B50\u6A21\u578B\u9610\u8FF0"},{default:p(()=>[k]),_:1})]),n("li",null,[t(a,{to:"#link\u548C-import\u7684\u533A\u522B"},{default:p(()=>[h]),_:1})]),n("li",null,[t(a,{to:"#css\u9009\u62E9\u5668\u4F18\u5148\u7EA7"},{default:p(()=>[g]),_:1})]),n("li",null,[t(a,{to:"#css\u52A8\u753B"},{default:p(()=>[b]),_:1})]),n("li",null,[t(a,{to:"#sass-less\u7684\u4F5C\u7528"},{default:p(()=>[m]),_:1})]),n("li",null,[t(a,{to:"#css\u5B9E\u73B0\u4E00\u4E2A\u4E09\u89D2\u5F62"},{default:p(()=>[f]),_:1})]),n("li",null,[t(a,{to:"#\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u5F0F"},{default:p(()=>[x]),_:1})]),n("li",null,[t(a,{to:"#css\u7CBE\u7075\u56FE"},{default:p(()=>[S]),_:1})]),n("li",null,[t(a,{to:"#rem\u548Crpx\u6709\u4EC0\u4E48\u533A\u522B-\u4E3A\u4EC0\u4E48\u7528"},{default:p(()=>[_]),_:1})]),n("li",null,[t(a,{to:"#display-inline-block-\u6709\u7F1D\u9699-\u600E\u4E48\u89E3\u51B3"},{default:p(()=>[y]),_:1})]),n("li",null,[t(a,{to:"#\u6709\u54EA\u4E9B\u5E03\u5C40\u65B9\u5F0F"},{default:p(()=>[v]),_:1})]),n("li",null,[t(a,{to:"#\u6D4F\u89C8\u5668\u517C\u5BB9\u95EE\u9898"},{default:p(()=>[C]),_:1})]),n("li",null,[t(a,{to:"#z-index\u662F\u4EC0\u4E48-\u9ED8\u8BA4\u503C"},{default:p(()=>[w]),_:1})]),n("li",null,[t(a,{to:"#inline-block\u3001inline-\u548C-block-\u7684\u533A\u522B"},{default:p(()=>[z]),_:1})]),n("li",null,[t(a,{to:"#\u4E3A\u4EC0\u4E48-img-\u662F-inline-\u8FD8\u53EF\u4EE5\u8BBE\u7F6E\u5BBD\u9AD8"},{default:p(()=>[q]),_:1})]),n("li",null,[t(a,{to:"#css3\u7684\u65B0\u7279\u6027"},{default:p(()=>[E]),_:1})])])]),I])}var M=e(u,[["render",T],["__file","css.html.vue"]]);export{M as default};