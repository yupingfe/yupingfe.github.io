import{_ as o,o as e,c,b as n,a as t,d as s,e as p,r as u}from"./app.4a7dda62.js";const l={},r=n("h1",{id:"\u5173\u4E8Evue3-\u7684\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E0E\u89E3\u6784\u8D4B\u503C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5173\u4E8Evue3-\u7684\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E0E\u89E3\u6784\u8D4B\u503C","aria-hidden":"true"},"#"),s(" \u5173\u4E8EVue3 \u7684\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E0E\u89E3\u6784\u8D4B\u503C")],-1),k=n("h2",{id:"\u6982\u5FF5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6982\u5FF5","aria-hidden":"true"},"#"),s(" \u6982\u5FF5")],-1),i=s("Vue3\u5F53\u4E2D\u52A0\u5165\u4E86\u54CD\u5E94\u5F0FAPI\u5BF9\u8C61\uFF0C\u54CD\u5E94\u5F0F\u5BF9\u8C61\u5176\u5B9E\u662F "),d={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy",target:"_blank",rel:"noopener noreferrer"},f=s("JavaScript Proxy"),m=s("\uFF0C\u5176\u884C\u4E3A\u8868\u73B0\u4E0E\u4E00\u822C\u5BF9\u8C61\u76F8\u4F3C\u3002\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E Vue \u80FD\u591F\u8DDF\u8E2A\u5BF9\u54CD\u5E94\u5F0F\u5BF9\u8C61\u5C5E\u6027\u7684\u8BBF\u95EE\u4E0E\u66F4\u6539\u64CD\u4F5C\u3002"),v=p(`<h2 id="\u5E38\u7528\u7684api" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u7684api" aria-hidden="true">#</a> \u5E38\u7528\u7684API</h2><h3 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref()</h3><p>\u63A5\u53D7\u4E00\u4E2A\u5185\u90E8\u503C\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7684\u3001\u53EF\u66F4\u6539\u7684 ref \u5BF9\u8C61\uFF0C\u6B64\u5BF9\u8C61\u53EA\u6709\u4E00\u4E2A\u6307\u5411\u5176\u5185\u90E8\u503C\u7684\u5C5E\u6027 <code>.value</code>\u3002ref \u5BF9\u8C61\u662F\u53EF\u66F4\u6539\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F60\u53EF\u4EE5\u4E3A <code>.value</code> \u8D4B\u4E88\u65B0\u7684\u503C\u3002\u5B83\u4E5F\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u5373\u6240\u6709\u5BF9 <code>.value</code> \u7684\u64CD\u4F5C\u90FD\u5C06\u88AB\u8FFD\u8E2A\uFF0C\u5E76\u4E14\u5199\u64CD\u4F5C\u4F1A\u89E6\u53D1\u4E0E\u4E4B\u76F8\u5173\u7684\u526F\u4F5C\u7528\u3002</p><p><strong>example</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 0</span>

count<span class="token punctuation">.</span>value<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre></div><h3 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive" aria-hidden="true">#</a> reactive()</h3><p>\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u7684\u54CD\u5E94\u5F0F\u4EE3\u7406\u3002</p><p>\u54CD\u5E94\u5F0F\u8F6C\u6362\u662F<strong>\u6DF1\u5C42</strong>\u7684\uFF1A\u5B83\u4F1A\u5F71\u54CD\u5230\u6240\u6709\u5D4C\u5957\u7684\u5C5E\u6027\u3002</p><p>\u5982\u679Creactive\u4F20\u5165\u4E86ref\uFF0C\u90A3\u4E48\u5B83\u4F1A\u5C06\u5176\u89E3\u5305(destructured)\uFF0C\u5C31\u662F\u83B7\u53D6\u5B83\u7684\u503C\u4E0D\u518D\u9700\u8981\u4F7F\u7528<code>.value</code>\uFF0C\u4F46\u5176\u54CD\u5E94\u6027\u4F9D\u7136\u53EF\u4EE5\u5F97\u5230\u4FDD\u6301\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>count<span class="token operator">++</span> <span class="token comment">// 1</span>

<span class="token comment">// \u5C06\u4E00\u4E2A ref \u8D4B\u503C\u7ED9\u4E3A\u4E00\u4E2A reactive \u5C5E\u6027\u65F6\uFF0C\u8BE5 ref \u4F1A\u88AB\u81EA\u52A8\u89E3\u5305\uFF1A</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// ref\u4F1A\u88AB\u81EA\u52A8\u7684\u89E3\u5305</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value <span class="token operator">===</span> obj<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token comment">// \u65E0\u8BBA\u64CD\u4F5C\u539F\u59CBref\u7684\u503C\uFF0C\u8FD8\u662Freactive\u4E2D\u7684\u5F15\u7528\uFF0C\u90FD\u4F1A\u53CC\u5411\u66F4\u65B0</span>
count<span class="token punctuation">.</span>value<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value <span class="token operator">===</span> obj<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// true</span>

obj<span class="token punctuation">.</span>count<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value <span class="token operator">===</span> obj<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// true</span>

</code></pre></div><p>\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u5F53\u8BBF\u95EE\u5230\u67D0\u4E2A\u54CD\u5E94\u5F0F\u6570\u7EC4\u6216 <code>Map</code> \u8FD9\u6837\u7684\u539F\u751F\u96C6\u5408\u7C7B\u578B\u4E2D\u7684 ref \u5143\u7D20\u65F6\uFF0C\u4E0D\u4F1A\u6267\u884C ref \u7684\u89E3\u5305\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> books <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Vue 3 Guide&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// \u8FD9\u91CC\u9700\u8981 .value</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>books<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>

<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">,</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// \u8FD9\u91CC\u9700\u8981 .value</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u89E3\u6784\u4E0E\u8D4B\u503C" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6784\u4E0E\u8D4B\u503C" aria-hidden="true">#</a> \u89E3\u6784\u4E0E\u8D4B\u503C</h2><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4E0D\u80FD\u5BF9<code>reactive</code>\u76F4\u63A5\u91CD\u65B0\u8D4B\u503C\uFF0C\u8FD9\u6837\u4F1A\u4F7F\u5176\u5931\u53BB\u54CD\u5E94\uFF01</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u6B64\u65F6state\u662F\u4E00\u4E2Aproxy\u5BF9\u8C61\uFF0C\u662F\u53EF\u4EE5\u548C\u548Cview\u7ED1\u5B9A\u7684</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>

state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
<span class="token comment">// \u6B64\u65F6state\u5DF2\u7ECF\u53D8\u6210\u4E86\u666E\u901A\u5BF9\u8C61\uFF0C\u5931\u53BB\u4E86\u548Cview\u7684\u54CD\u5E94</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> 
</code></pre></div><p>\u6B64\u5916\u8FD8\u6709\u4EE5\u4E0B\u89E3\u6784\u7684\u60C5\u51B5\uFF0C\u90FD\u4F1A\u4F7F\u5176\u5931\u53BB\u54CD\u5E94\uFF01</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> n <span class="token operator">=</span> state<span class="token punctuation">.</span>count
n<span class="token operator">++</span>
<span class="token comment">// \u5931\u53BB\u54CD\u5E94\u6027\u8FDE\u63A5,\u4E0D\u5F71\u54CDstate</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// 0</span>

<span class="token comment">// \u76F4\u63A5\u7ED3\u6784\u8D4B\u503Ccount \u4E5F\u4F1A\u548C state.count \u5931\u53BB\u4E86\u54CD\u5E94\u6027\u8FDE\u63A5</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> count <span class="token punctuation">}</span> <span class="token operator">=</span> state
<span class="token comment">// \u4E0D\u4F1A\u5F71\u54CD\u539F\u59CB\u7684 state</span>
count<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre></div><p>\u56E0\u6B64\uFF0C\u5982\u679C\u9700\u8981\u7ED3\u6784\u590D\u5236\uFF0C\u5E76\u4FDD\u6301\u5176\u54CD\u5E94\uFF0C\u9700\u8981\u501F\u52A9<code>toRef</code>\u548C<code>toRefs</code></p><h3 id="toref" tabindex="-1"><a class="header-anchor" href="#toref" aria-hidden="true">#</a> toRef()</h3><p>\u57FA\u4E8E\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E0A\u7684\u4E00\u4E2A\u5C5E\u6027\uFF0C\u521B\u5EFA\u4E00\u4E2A\u5BF9\u5E94\u7684 ref\u3002\u8FD9\u6837\u521B\u5EFA\u7684 ref \u4E0E\u5176<strong>\u6E90\u5C5E\u6027</strong>\u4FDD\u6301\u540C\u6B65\uFF1A\u6539\u53D8\u6E90\u5C5E\u6027\u7684\u503C\u5C06\u66F4\u65B0 ref \u7684\u503C\uFF0C\u53CD\u4E4B\u4EA6\u7136\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> fooRef <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u66F4\u6539\u8BE5 ref \u4F1A\u66F4\u65B0\u6E90\u5C5E\u6027</span>
fooRef<span class="token punctuation">.</span>value<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>foo<span class="token punctuation">)</span> <span class="token comment">// 2</span>

<span class="token comment">// \u66F4\u6539\u6E90\u5C5E\u6027\u4E5F\u4F1A\u66F4\u65B0\u8BE5 ref</span>
state<span class="token punctuation">.</span>foo<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fooRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 3</span>
</code></pre></div><h3 id="torefs" tabindex="-1"><a class="header-anchor" href="#torefs" aria-hidden="true">#</a> toRefs()</h3>`,22),h=s("\u5C06\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\u8F6C\u6362\u4E3A\u4E00\u4E2A\u666E\u901A\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u666E\u901A\u5BF9\u8C61\u7684\u6BCF\u4E2A\u5C5E\u6027\u90FD\u662F\u6307\u5411\u6E90\u5BF9\u8C61\u76F8\u5E94\u5C5E\u6027\u7684 ref\u3002\u6BCF\u4E2A\u5355\u72EC\u7684 ref \u90FD\u662F\u4F7F\u7528 "),g={href:"https://cn.vuejs.org/api/reactivity-utilities.html#toref",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"toRef()",-1),y=s(" \u521B\u5EFA\u7684\u3002"),b=p(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> stateAsRefs <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>

<span class="token comment">// \u8FD9\u4E2A ref \u548C\u6E90\u5C5E\u6027\u5DF2\u7ECF\u201C\u94FE\u63A5\u4E0A\u4E86\u201D</span>
state<span class="token punctuation">.</span>foo<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stateAsRefs<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 2</span>

stateAsRefs<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>value<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>foo<span class="token punctuation">)</span> <span class="token comment">// 3</span>


<span class="token comment">// \u6267\u884C\u89E3\u6784\uFF0C\u8FD9\u6837\u4F9D\u7136\u4F1A\u4FDD\u6301\u4E0E\u539F\u6765state\u7684\u8054\u7CFB</span>
<span class="token keyword">const</span><span class="token punctuation">{</span> foo <span class="token punctuation">}</span> <span class="token operator">=</span> stateAsRefs
foo<span class="token punctuation">.</span>value<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>foo<span class="token punctuation">)</span> <span class="token comment">// 4</span>
</code></pre></div>`,1);function j(x,w){const a=u("ExternalLinkIcon");return e(),c("div",null,[r,k,n("p",null,[i,n("a",d,[f,t(a)]),m]),v,n("p",null,[h,n("a",g,[_,t(a)]),y]),b])}var A=o(l,[["render",j],["__file","vue3-proxy-and-destructuring-assignment.html.vue"]]);export{A as default};