import{_ as i,r as o,o as p,c as r,a as s,b as e,d as n,w as c,e as l}from"./app.19999065.js";const d={},u=l(`<h1 id="docs-site" tabindex="-1"><a class="header-anchor" href="#docs-site" aria-hidden="true">#</a> Docs &amp; Site</h1><p>Documentation &amp; site contribution guide.</p><h2 id="initial-setup" tabindex="-1"><a class="header-anchor" href="#initial-setup" aria-hidden="true">#</a> Initial Setup</h2><p>Fork <code>asdf</code> on GitHub and/or Git clone the default branch:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># clone your fork</span></span>
<span class="line"><span style="color:#F8F8F2;">git clone https://github.com/</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">GITHUB_USER</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">/asdf.git</span></span>
<span class="line"><span style="color:#88846F;"># or clone asdf</span></span>
<span class="line"><span style="color:#F8F8F2;">git clone https://github.com/asdf-vm/asdf.git</span></span>
<span class="line"></span></code></pre></div><p>The tools for Docs site development are managed with <code>asdf</code> in the <code>docs/.tool-versions</code>. Add the plugins with:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs</span></span>
<span class="line"></span></code></pre></div><p>Install the tool version(s) with:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf install</span></span>
<span class="line"></span></code></pre></div>`,9),F={href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"},h=l(`<p>Install Node.js dependencies from <code>docs/package.json</code>:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">npm install</span></span>
<span class="line"></span></code></pre></div><h2 id="development" tabindex="-1"><a class="header-anchor" href="#development" aria-hidden="true">#</a> Development</h2>`,3),v={href:"https://v2.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://docsify.js.org/",target:"_blank",rel:"noopener noreferrer"},b=l(`<p><code>package.json</code> contains the scripts required for development:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;">&quot;scripts&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;">&quot;dev&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;vuepress dev .&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;">&quot;build&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;vuepress build .&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;">&quot;format&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;npx -y prettier --write &#39;{.vuepress/{config,navbar,sidebar}.js,./**/*.md}&#39;&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;">&quot;devDependencies&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;">&quot;@vuepress/plugin-active-header-links&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;^2.0.0-beta.53&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;">&quot;@vuepress/plugin-search&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;^2.0.0-beta.53&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;">&quot;@vuepress/plugin-shiki&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;^2.0.0-beta.53&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;">&quot;vuepress&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;^2.0.0-beta.53&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To start the local development server:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">npm run dev</span></span>
<span class="line"></span></code></pre></div><p>Format the code before committing:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">npm run format</span></span>
<span class="line"></span></code></pre></div><h2 id="pull-requests-releases-conventional-commits" tabindex="-1"><a class="header-anchor" href="#pull-requests-releases-conventional-commits" aria-hidden="true">#</a> Pull Requests, Releases &amp; Conventional Commits</h2>`,7),y=s("code",null,"asdf",-1),f=s("p",null,[e("When creating a PR for documentation changes please make the PR title with the Conventional Commit type "),s("code",null,"docs"),e(" in the format "),s("code",null,"docs: <description>"),e(".")],-1),g=s("h2",{id:"vuepress",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress","aria-hidden":"true"},"#"),e(" Vuepress")],-1),_=s("p",null,"Configuration of the site is contained within a few JavaScript files with JS Objects used to represent the config. They are:",-1),q=s("code",null,"docs/.vuepress/config.js",-1),k={href:"https://v2.vuepress.vuejs.org/guide/configuration.html#config-file",target:"_blank",rel:"noopener noreferrer"},C=s("p",null,[e("To simplify the root config, the larger JS Objects representing the "),s("em",null,"navbar"),e(" and "),s("em",null,"sidebar"),e(" configuration have been extracted and separated by their locale. See both in:")],-1),w=s("ul",null,[s("li",null,[s("code",null,"docs/.vuepress/navbar.js")]),s("li",null,[s("code",null,"docs/.vuepress/sidebar.js")])],-1),D={href:"https://v2.vuepress.vuejs.org/reference/default-theme/config.html#locale-config",target:"_blank",rel:"noopener noreferrer"},E=l(`<h2 id="i18n" tabindex="-1"><a class="header-anchor" href="#i18n" aria-hidden="true">#</a> I18n</h2><p>Vuepress has first-class support for internationalization. The root config <code>docs/.vuepress/config.js</code> defines the supported locales with their URL, title in the selection dropdown menu and navbar/sidebar configs references.</p><p>The navbar/sidebar configs are captured in the aforementioned config files, separated by locale and exported individually.</p><p>The markdown content for each locale must fall under a folder with the same name as the keys for <code>locales</code> in the root config. That is:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">...</span></span>
<span class="line"><span style="color:#F8F8F2;">  themeConfig: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    locales: {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#E6DB74;">&quot;/&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#F8F8F2;">        selectLanguageName: </span><span style="color:#E6DB74;">&quot;English (US)&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        sidebar: sidebar.en,</span></span>
<span class="line"><span style="color:#F8F8F2;">        navbar: navbar.en</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#E6DB74;">&quot;/pt-BR/&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#F8F8F2;">        selectLanguageName: </span><span style="color:#E6DB74;">&quot;Brazilian Portuguese&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        sidebar: sidebar.pt_br,</span></span>
<span class="line"><span style="color:#F8F8F2;">        navbar: navbar.pt_br</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>/pt-BR/</code> will require the same set of markdown files located under <code>docs/pt-BR/</code>, like so:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">docs</span></span>
<span class="line"><span style="color:#F8F8F2;">├─ README.md</span></span>
<span class="line"><span style="color:#F8F8F2;">├─ foo.md</span></span>
<span class="line"><span style="color:#F8F8F2;">├─ nested</span></span>
<span class="line"><span style="color:#F8F8F2;">│  └─ README.md</span></span>
<span class="line"><span style="color:#F8F8F2;">└─ pt-BR</span></span>
<span class="line"><span style="color:#F8F8F2;">   ├─ README.md</span></span>
<span class="line"><span style="color:#F8F8F2;">   ├─ foo.md</span></span>
<span class="line"><span style="color:#F8F8F2;">   └─ nested</span></span>
<span class="line"><span style="color:#F8F8F2;">      └─ README.md</span></span>
<span class="line"></span></code></pre></div>`,7),x={href:"https://v2.vuepress.vuejs.org/guide/i18n.html#site-i18n-config",target:"_blank",rel:"noopener noreferrer"};function j(R,S){const a=o("ExternalLinkIcon"),t=o("RouterLink");return p(),r("div",null,[u,s("ul",null,[s("li",null,[s("a",F,[e("Node.js"),n(a)]),e(": JavaScript runtime built on Chrome's V8 JavaScript engine.")])]),h,s("p",null,[s("a",v,[e("Vuepress (v2)"),n(a)]),e(" is the Static Site Generator (SSG) we use to build the asdf documentation site. It was chosen to replace "),s("a",m,[e("Docsify.js"),n(a)]),e(" as we would like to support an HTML only fallback when users do not have JavaScript available or enabled. This was not possible with Docsify. Other than this, the feature-set is largely the same, with the focus on writing Markdown files with minimal configuration.")]),b,s("p",null,[y,e(" is using an automated release pipeline which relies on Conventional Commits in PR titles. Detailed documentation found in the "),n(t,{to:"/contribute/core.html"},{default:c(()=>[e("core contribution guide")]),_:1}),e(".")]),f,g,_,s("ul",null,[s("li",null,[q,e(": the root config file for the site. Read the "),s("a",k,[e("Vuepress documentation"),n(a)]),e(" for it's spec.")])]),C,w,s("p",null,[e("With the official documentation for these configs living in the "),s("a",D,[e("Default Theme Reference"),n(a)]),e(".")]),E,s("p",null,[e("The "),s("a",x,[e("official Vuepress i18n documentation"),n(a)]),e(" goes into more detail.")])])}const B=i(d,[["render",j],["__file","documentation.html.vue"]]);export{B as default};
