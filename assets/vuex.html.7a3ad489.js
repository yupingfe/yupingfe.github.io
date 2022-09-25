import{_ as n,o as s,c as a,e as t}from"./app.584bfbc7.js";const p={},o=t(`<h1 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> Vuex</h1><p>Vuex\u7684\u8BBE\u8BA1\u6A21\u5F0F\u662F<strong>\u5355\u4F8B\u6A21\u5F0F</strong>\u3002\u76F8\u5F53\u4E8Ereact\u5F53\u4E2D\u7684redux\u3002</p><p><img src="https://vuex.vuejs.org/vuex.png" alt="vuex"></p><h2 id="\u57FA\u672C\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u8BED\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u8BED\u6CD5</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">/* \u8FD9\u91CC\u5199\u9700\u8981\u5168\u5C40\u7BA1\u7406\u7684\u72B6\u6001\uFF08\u6570\u636E\uFF09 */</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Cyan&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token comment">/* \u6240\u6709\u9700\u8981\u4FEE\u6539state\u7684\u65B9\u6CD5\uFF0C\u8FD9\u91CC\u53EA\u80FD\u5199\u540C\u6B65\u4EE3\u7801 */</span>
      <span class="token function">addCount</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          state<span class="token punctuation">.</span>count <span class="token operator">+=</span> n <span class="token comment">// \u8FD9\u91CC\u53EF\u4EE5\u63D0\u4EA4\u4E00\u4E2A\u53C2\u6570n\uFF08\u63D0\u4EA4\u8F7D\u8377\uFF09</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token comment">/* \u57FA\u4E8Estate\u5F97\u5230\u7684\u4E00\u4E9B\u65B0\u6570\u636E\uFF0C \u8BA1\u7B97\u603B\u4EF7\u6570\u91CF\u7B49\u7B49 */</span>
      <span class="token function">doubleCount</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> state<span class="token punctuation">.</span>count <span class="token operator">*</span> <span class="token number">2</span> 
      <span class="token punctuation">}</span> 
  <span class="token punctuation">}</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token comment">/* \u8D1F\u8D23\u63D0\u4EA4mutation\uFF0C\u76F8\u5F53\u4E8E\u4E00\u4E2A\u4E2D\u8F6C\u7AD9\uFF0C\u4E00\u822C\u5728\u5F02\u6B65\u4FEE\u6539\u7684\u4F7F\u7528 */</span>
    	<span class="token function">addCountAsync</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token comment">//	context\u5C31\u662F\u6574\u4E2A\u5F53\u524Dstore</span>
    		<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;addCount&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token comment">/* \u5728\u4E00\u4E9B\u5927\u578B\u5E94\u7528\u91CC\u4F1A\u628Avuex\u5206\u6A21\u5757 */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
    mapState<span class="token punctuation">,</span>
    mapMutations<span class="token punctuation">,</span>
    mapGetters<span class="token punctuation">,</span>
    mapActions
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>  <span class="token comment">// \u5BFC\u5165\u6620\u5C04\u65B9\u6CD5</span>

<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">count</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;count, name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u5728template\u5F53\u4E2D\u53EF\u4EE5\u7528count\u548Cname</span>
    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;doubleCount&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">addCount</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;addCount&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u4F1A\u8C03\u7528mutations\u5F53\u4E2D\u7684addCount\u65B9\u6CD5\uFF0C\u8FDB\u800C\u6539\u53D8count\u7684\u503C</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span><span class="token function">mapMuatations</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;addCount&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u540C\u6B65\u64CD\u4F5C</span>
    <span class="token comment">//\u8FD9\u4E2AaddCount\u5C31\u662F\u518D\u76D1\u542C\u5F53\u4E2D\u9700\u8981\u7ED1\u5B9A\u7684\u51FD\u6570\u540D</span>
    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;addCountAsync&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u5F02\u6B65\u64CD\u4F5C</span>
    
<span class="token punctuation">}</span>
</code></pre></div><h3 id="tips-\u4E3A\u4EC0\u4E48mutation\u4E0D\u80FD\u63D0\u4EA4\u5F02\u6B65" tabindex="-1"><a class="header-anchor" href="#tips-\u4E3A\u4EC0\u4E48mutation\u4E0D\u80FD\u63D0\u4EA4\u5F02\u6B65" aria-hidden="true">#</a> tips\uFF1A\u4E3A\u4EC0\u4E48mutation\u4E0D\u80FD\u63D0\u4EA4\u5F02\u6B65\uFF1F</h3><p>\u200B devtool\u5F53\u4E2D\u4F1A\u6709mutation\u65E5\u5FD7\u3002\u6BCF\u4E00\u6761mutation\u88AB\u8BB0\u5F55\u3002devtools\u90FD\u9700\u8981\u6355\u6349\u5230\u524D\u4E00\u72B6\u6001\u548C\u540E\u4E00\u72B6\u6001\u7684\u5FEB\u7167\u3002**\u4EFB\u4F55\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u8FDB\u884C\u7684\u72B6\u6001\u7684\u6539\u53D8\u90FD\u662F\u4E0D\u53EF\u80FD\u8FFD\u8E2A\u7684\u3002**\u56E0\u6B64devtools\u4E0D\u77E5\u9053\u4EC0\u4E48\u65F6\u5019\u56DE\u8C03\u51FD\u6570\u88AB\u8C03\u7528,\u56E0\u6B64\u65E0\u6CD5\u8FFD\u8E2A\u3002</p><h2 id="\u4E25\u683C\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E25\u683C\u6A21\u5F0F" aria-hidden="true">#</a> \u4E25\u683C\u6A21\u5F0F</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">vuex<span class="token punctuation">.</span>store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token literal-property property">strict</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token literal-property property">strict</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;development&#39;</span>
    <span class="token comment">// vuex\u4E25\u683C\u6A21\u5F0F\u4E00\u822C\u5728\u5F00\u53D1\u4E2D\u4F7F\u7528\uFF0C\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0Cmutation\u5F53\u4E2D\u7684\u5F02\u6B65\u64CD\u4F5C\u4F1A\u62A5\u9519</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="input\u53CC\u5411\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#input\u53CC\u5411\u7ED1\u5B9A" aria-hidden="true">#</a> input\u53CC\u5411\u7ED1\u5B9A</h2><p>\u6765\u81EAvuex\u7684state\u518D\u7EC4\u4EF6\u4E0D\u80FD\u4F7F\u7528<em>v-model</em>\uFF0C\u4F1A\u62A5\u9519\uFF01\u9700\u8981\u901A\u8FC7\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u3002</p><p>\u4F7F\u7528 :value\u548C@input\u4E8B\u4EF6\u7ED3\u5408\uFF0C\u63D0\u4EA4mutation\u6765\u4FEE\u6539state</p><p><code>&lt;input type=&quot;text&quot; :value=&quot;name&quot; @input=&quot;changeName($event.target.value)&quot;&gt;</code></p>`,14),e=[o];function c(u,l){return s(),a("div",null,e)}var i=n(p,[["render",c],["__file","vuex.html.vue"]]);export{i as default};
