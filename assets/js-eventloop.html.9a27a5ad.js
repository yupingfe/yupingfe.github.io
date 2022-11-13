import{_ as n,o as s,c as a,e as t}from"./app.4a7dda62.js";const p={},o=t(`<h1 id="\u4E8B\u4EF6\u5FAA\u73AF-event-loop" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u5FAA\u73AF-event-loop" aria-hidden="true">#</a> \u4E8B\u4EF6\u5FAA\u73AF\uFF08Event Loop\uFF09</h1><p>Event Loop\u4E2D\uFF0C\u6BCF\u4E00\u6B21\u5FAA\u73AF\u79F0\u4E3Atick\uFF0C\u6BCF\u4E00\u6B21tick\u7684\u4EFB\u52A1\u5982\u4E0B\uFF1A</p><ul><li>\u6267\u884C\u6808\u9009\u62E9\u6700\u5148\u8FDB\u5165\u961F\u5217\u7684\u5B8F\u4EFB\u52A1\uFF08\u4E00\u822C\u90FD\u662Fscript\uFF09\uFF0C\u6267\u884C\u5176\u540C\u6B65\u4EE3\u7801\u76F4\u81F3\u7ED3\u675F\uFF1B</li><li>\u68C0\u67E5\u662F\u5426\u5B58\u5728\u5FAE\u4EFB\u52A1\uFF0C\u6709\u5219\u4F1A\u6267\u884C\u81F3\u5FAE\u4EFB\u52A1\u961F\u5217\u4E3A\u7A7A\uFF1B</li><li>\u5982\u679C\u5BBF\u4E3B\u4E3A\u6D4F\u89C8\u5668\uFF0C\u53EF\u80FD\u4F1A\u6E32\u67D3\u9875\u9762\uFF1B</li><li>\u5F00\u59CB\u4E0B\u4E00\u8F6Etick\uFF0C\u6267\u884C\u5B8F\u4EFB\u52A1\u4E2D\u7684\u5F02\u6B65\u4EE3\u7801\uFF08setTimeout\u7B49\u56DE\u8C03\uFF09\u3002</li></ul><p><strong>\u6CE8\u610F\uFF1A</strong></p><ul><li>\u5F53\u6211\u4EEC\u7B2C\u4E00\u6B21\u6267\u884C\u7684\u65F6\u5019\uFF0C\u89E3\u91CA\u5668\u4F1A\u5C06\u6574\u4F53\u4EE3\u7801<code>script</code>\u653E\u5165\u5B8F\u4EFB\u52A1\u961F\u5217\u4E2D\uFF0C\u56E0\u6B64\u4E8B\u4EF6\u5FAA\u73AF\u662F\u4ECE\u7B2C\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u5F00\u59CB\u7684\uFF1B</li><li>\u5982\u679C\u5728\u6267\u884C\u5FAE\u4EFB\u52A1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4EA7\u751F\u65B0\u7684\u5FAE\u4EFB\u52A1\u6DFB\u52A0\u5230\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\uFF0C\u4E5F\u9700\u8981\u4E00\u8D77\u6E05\u7A7A\uFF1B\u5FAE\u4EFB\u52A1\u961F\u5217\u6CA1\u6E05\u7A7A\u4E4B\u524D\uFF0C\u662F\u4E0D\u4F1A\u6267\u884C\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u7684\u3002</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>ES6 \u89C4\u8303\u4E2D\uFF0Cmicrotask \u79F0\u4E3A <code>jobs</code>\uFF0Cmacrotask \u79F0\u4E3A <code>task</code> \u5B8F\u4EFB\u52A1\u662F\u7531\u5BBF\u4E3B\u53D1\u8D77\u7684\uFF0C\u800C\u5FAE\u4EFB\u52A1\u7531JavaScript\u81EA\u8EAB\u53D1\u8D77\u3002</p></div><table><thead><tr><th></th><th>\u5B8F\u4EFB\u52A1\uFF08jobs\uFF09</th><th>\u5FAE\u4EFB\u52A1\uFF08task\uFF09</th></tr></thead><tbody><tr><td>\u53D1\u8D77\u8005</td><td>Host(Browser, Node)</td><td>JavaScript Engine</td></tr><tr><td>\u5177\u4F53\u4E8B\u4EF6</td><td>Script, setTimeOut/SetTimeInterval, UI rendering/UI Event, I/O(Node)</td><td>Promise, process.NextTick(Node)</td></tr><tr><td>\u6267\u884C\u987A\u5E8F</td><td>\u540E\u6267\u884C</td><td>\u5148\u6267\u884C</td></tr><tr><td>\u89E6\u53D1\u65B0\u4E00\u8F6ETick</td><td>\u4F1A</td><td>\u4E0D\u4F1A</td></tr></tbody></table><div class="language-javascript ext-js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;e&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;f&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8F93\u51FA\u7ED3\u679C\uFF1Aa c f d e b</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script start&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async1 end&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;async2 end&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;setTimeout&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Promise&#39;</span><span class="token punctuation">)</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise1&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise2&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script end&#39;</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/** 
script start
async2 end
Promise
script end
async1 end
promise1
promise2
setTimeout **/</span>
</code></pre></div>`,9),c=[o];function e(u,l){return s(),a("div",null,c)}var k=n(p,[["render",e],["__file","js-eventloop.html.vue"]]);export{k as default};
