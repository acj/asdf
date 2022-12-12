import{_ as c,r as l,o as r,c as t,a as s,b as e,d as a,w as p,e as o}from"./app.19999065.js";const d={},u=o(`<h1 id="docs-site" tabindex="-1"><a class="header-anchor" href="#docs-site" aria-hidden="true">#</a> Docs &amp; Site</h1><blockquote><p>Hi, we&#39;ve recently migrated our docs and added some new pages. If you would like to help translate this page, see the &quot;Edit this page&quot; link at the bottom of the page.</p></blockquote><p>Documentação e guia de contribuição do site.</p><h2 id="configuracao-inicial" tabindex="-1"><a class="header-anchor" href="#configuracao-inicial" aria-hidden="true">#</a> Configuração inicial</h2><p>Fork <code>asdf</code> no GitHub e/ou Git clone o branch padrão:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># clone your fork</span></span>
<span class="line"><span style="color:#F8F8F2;">git clone https://github.com/</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">GITHUB_USER</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">/asdf.git</span></span>
<span class="line"><span style="color:#88846F;"># or clone asdf</span></span>
<span class="line"><span style="color:#F8F8F2;">git clone https://github.com/asdf-vm/asdf.git</span></span>
<span class="line"></span></code></pre></div><p>As ferramentas para desenvolvimento de sites Docs são gerenciadas com <code>asdf</code> em <code>docs/.tool-versions</code>. Adicione os plugins com:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs</span></span>
<span class="line"></span></code></pre></div><p>Instale a(s) versão(ões) da ferramenta com:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf install</span></span>
<span class="line"></span></code></pre></div>`,10),m={href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"},v=s("li",null,null,-1),F=o(`<p>Instale as dependências do Node.js do <code>docs/package.json</code>:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">npm install</span></span>
<span class="line"></span></code></pre></div><h2 id="desenvolvimento" tabindex="-1"><a class="header-anchor" href="#desenvolvimento" aria-hidden="true">#</a> Desenvolvimento</h2>`,3),h={href:"https://v2.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://docsify.js.org/",target:"_blank",rel:"noopener noreferrer"},f=o(`<p><code>package.json</code> contém os scripts necessários para o desenvolvimento:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">File not found</span></span></code></pre><div class="highlight-lines"></div><div class="line-numbers" aria-hidden="true"></div></div><p>Para iniciar o servidor de desenvolvimento local:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">npm run dev</span></span>
<span class="line"></span></code></pre></div><p>Formate o código antes de confirmar:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">npm run format</span></span>
<span class="line"></span></code></pre></div><h2 id="pull-requests-releases-e-commits-convencionais" tabindex="-1"><a class="header-anchor" href="#pull-requests-releases-e-commits-convencionais" aria-hidden="true">#</a> Pull Requests, Releases e Commits Convencionais</h2>`,7),b=s("code",null,"asdf",-1),y=s("p",null,[e("Ao criar um PR para alterações na documentação, por favor, faça o título do PR com o tipo de Commit Convencional "),s("code",null,"docs"),e(" no formato "),s("code",null,"docs: <description>"),e(".")],-1),_=s("h2",{id:"vuepress",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress","aria-hidden":"true"},"#"),e(" Vuepress")],-1),k=s("p",null,"A configuração do site está contida em alguns arquivos JavaScript com objetos JS usados para representar a configuração. Eles estão:",-1),j=s("code",null,"docs/.vuepress/config.js",-1),x={href:"https://v2.vuepress.vuejs.org/guide/configuration.html#config-file",target:"_blank",rel:"noopener noreferrer"},q=s("p",null,[e("Para simplificar a configuração raiz, os objetos JS maiores que representam a configuração "),s("em",null,"navbar"),e(" e "),s("em",null,"sidebar"),e(" foram extraídos e separados por sua localidade. Veja os dois em:")],-1),E=s("ul",null,[s("li",null,[s("code",null,"docs/.vuepress/navbar.js")]),s("li",null,[s("code",null,"docs/.vuepress/sidebar.js")])],-1),R={href:"https://v2.vuepress.vuejs.org/reference/default-theme/config.html#locale-config",target:"_blank",rel:"noopener noreferrer"},D=o(`<h2 id="i18n" tabindex="-1"><a class="header-anchor" href="#i18n" aria-hidden="true">#</a> I18n</h2><p>Vuepress tem suporte de primeira classe para internacionalização. O root config <code>docs/.vuepress/config.js</code> define os locais suportados com sua URL, título no menu suspenso de seleção e referências de configurações navbar/sidebar.</p><p>As configurações da barra de navegação/barra lateral são capturadas nos arquivos de configuração mencionados acima, separadas por localidade e exportadas individualmente.</p><p>O conteúdo de markdown para cada localidade deve estar em uma pasta com o mesmo nome das chaves para <code>locales</code> na configuração raiz. Isso é:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">{</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>/pt-BR/</code> exigirá o mesmo conjunto de arquivos markdown localizados em <code>docs/pt-BR/</code>, assim:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">docs</span></span>
<span class="line"><span style="color:#F8F8F2;">├─ README.md</span></span>
<span class="line"><span style="color:#F8F8F2;">├─ foo.md</span></span>
<span class="line"><span style="color:#F8F8F2;">├─ nested</span></span>
<span class="line"><span style="color:#F8F8F2;">│  └─ README.md</span></span>
<span class="line"><span style="color:#F8F8F2;">└─ pt-BR</span></span>
<span class="line"><span style="color:#F8F8F2;">   ├─ README.md</span></span>
<span class="line"><span style="color:#F8F8F2;">   ├─ foo.md</span></span>
<span class="line"><span style="color:#F8F8F2;">   └─ nested</span></span>
<span class="line"><span style="color:#F8F8F2;">      └─ README.md</span></span>
<span class="line"></span></code></pre></div>`,7),S={href:"https://v2.vuepress.vuejs.org/guide/i18n.html#site-i18n-config",target:"_blank",rel:"noopener noreferrer"};function B(C,V){const n=l("ExternalLinkIcon"),i=l("RouterLink");return r(),t("div",null,[u,s("ul",null,[s("li",null,[s("a",m,[e("Node.js"),a(n)]),e(": tempo de execução JavaScript criado no mecanismo JavaScript V8 do Chrome.")]),v]),F,s("p",null,[s("a",h,[e("Vuepress (v2)"),a(n)]),e(" é o Static Site Generator (SSG) que usamos para construir o site de documentação do asdf. Foi escolhido para substituir "),s("a",g,[e("Docsify.js"),a(n)]),e(", pois gostaríamos de oferecer suporte a um substituto somente HTML quando os usuários não tiverem JavaScript disponível ou ativado. Isso não era possível com o Docsify. Fora isso, o conjunto de recursos é basicamente o mesmo, com foco em escrever arquivos Markdown com configuração mínima.")]),f,s("p",null,[b,e(" está usando um pipeline de lançamento automatizado que depende de Commits Convencionais em títulos de PR. Documentação detalhada encontrada no "),a(i,{to:"/pt-br/contribute/core.html"},{default:p(()=>[e("guia de contribuição principal")]),_:1}),e(".")]),y,_,k,s("ul",null,[s("li",null,[j,e(": o arquivo de configuração raiz do site. Leia a "),s("a",x,[e("documentação do Vuepress"),a(n)]),e(" para obter as especificações.")])]),q,E,s("p",null,[e("Com a documentação oficial para essas configurações vivendo na "),s("a",R,[e("Referência de tema padrão"),a(n)]),e(".")]),D,s("p",null,[e("A "),s("a",S,[e("documentação oficial do Vuepress i18n"),a(n)]),e(" entra em mais detalhes.")])])}const I=c(d,[["render",B],["__file","documentation.html.vue"]]);export{I as default};
