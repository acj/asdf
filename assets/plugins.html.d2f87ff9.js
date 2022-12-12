import{_ as r,r as i,o as d,c as p,a as s,b as a,d as e,w as t,e as n}from"./app.19999065.js";const c={},u=s("h1",{id:"plugins",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#plugins","aria-hidden":"true"},"#"),a(" Plugins")],-1),h=s("blockquote",null,[s("p",null,`Hi, we've recently migrated our docs and added some new pages. If you would like to help translate this page, see the "Edit this page" link at the bottom of the page.`)],-1),m=s("p",null,[a("Plugins são como "),s("code",null,"asdf"),a(" sabe lidar com diferentes ferramentas, tais quais Node.js, Ruby, Elixir etc.")],-1),g=n(`<h2 id="adicionar" tabindex="-1"><a class="header-anchor" href="#adicionar" aria-hidden="true">#</a> Adicionar</h2><p>Adicione os plugins via sua Url Git:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">git-url</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin add elm https://github.com/vic/asdf-elm</span></span>
<span class="line"></span></code></pre></div><p>ou pelo nome abreviado dentro do repositório de plugins:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin add erlang</span></span>
<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">Recommendation</p><p>Prefira o método mais longo <code>git-url</code>, pois ele é independente do repositório de nome abreviado.</p></div><h2 id="listar-instalados" tabindex="-1"><a class="header-anchor" href="#listar-instalados" aria-hidden="true">#</a> Listar Instalados</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin list</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin list</span></span>
<span class="line"><span style="color:#88846F;"># java</span></span>
<span class="line"><span style="color:#88846F;"># nodejs</span></span>
<span class="line"></span></code></pre></div><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin list --urls</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin list</span></span>
<span class="line"><span style="color:#88846F;"># java            https://github.com/halcyon/asdf-java.git</span></span>
<span class="line"><span style="color:#88846F;"># nodejs          https://github.com/asdf-vm/asdf-nodejs.git</span></span>
<span class="line"></span></code></pre></div><h2 id="listar-todos-nomes-abreviados-no-repositorio" tabindex="-1"><a class="header-anchor" href="#listar-todos-nomes-abreviados-no-repositorio" aria-hidden="true">#</a> Listar todos nomes abreviados no repositório</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin list all</span></span>
<span class="line"></span></code></pre></div>`,11),F={href:"https://github.com/asdf-vm/asdf-plugin-template",target:"_blank",rel:"noopener noreferrer"},f=n(`<h2 id="atualizar" tabindex="-1"><a class="header-anchor" href="#atualizar" aria-hidden="true">#</a> Atualizar</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin update --all</span></span>
<span class="line"></span></code></pre></div><p>Se você quiser atualizar um pacote específico, apenas use.</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin update </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin update erlang</span></span>
<span class="line"></span></code></pre></div>`,4),_=s("em",null,"commit",-1),v=s("em",null,"branch",-1),b=s("em",null,"origin",-1),y={href:"https://github.com/asdf-vm/asdf/pull/916",target:"_blank",rel:"noopener noreferrer"},k=n(`<h2 id="remover" tabindex="-1"><a class="header-anchor" href="#remover" aria-hidden="true">#</a> Remover</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin remove </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"><span style="color:#88846F;"># asdf plugin remove erlang</span></span>
<span class="line"></span></code></pre></div><p>Removendo o plugin irá remover todas as instalações feitas com o plugin. Isso pode ser usado como um atalho para apagar/remover sujeiras de versões não utilizadas de uma ferramenta.</p><h2 id="sincronizar-nome-abreviado-no-repositorio" tabindex="-1"><a class="header-anchor" href="#sincronizar-nome-abreviado-no-repositorio" aria-hidden="true">#</a> Sincronizar nome abreviado no repositório</h2><p>O nome abreviado do repositório é sincronizado em seu máquina local e periodicamente atualizado. Esse período pode ser determinado com o seguinte método:</p>`,5),x=s("li",null,[a("comandos "),s("code",null,"asdf plugin add <name>"),a(" ou "),s("code",null,"asdf plugin list all"),a(" disparam a sincronização")],-1),z=s("li",null,[a("ocorre uma sincronização se não houver nenhuma nos últimos "),s("code",null,"X"),a(" minutos")],-1),j=s("code",null,"X",-1),E=s("code",null,"60",-1),I=s("code",null,".asdfrc",-1),P=s("code",null,"plugin_repository_last_check_duration",-1);function L(R,V){const o=i("RouterLink"),l=i("ExternalLinkIcon");return d(),p("div",null,[u,h,m,s("p",null,[a("Veja "),e(o,{to:"/pt-br/plugins/create.html"},{default:t(()=>[a("Criando Plugins")]),_:1}),a(" para a API do plugin usada para suportar mais ferramentas.")]),g,s("p",null,[a("Veja "),s("a",F,[a("Plugins Shortname Index"),e(l)]),a(" para toda a lista de nomes curtos de plugins.")]),f,s("p",null,[a("Esta atualização irá buscar o último "),_,a(" na "),v,a(" padrão no "),b,a(" de seu respositório. Plugins e atualizações das versões estão sendo desenvolvidas ("),s("a",y,[a("#916"),e(l)]),a(")")]),k,s("ul",null,[x,z,s("li",null,[j,a(" por padrão é "),E,a(", mas pode ser mudado em "),I,a(" via as opções do "),P,a(". Seja mais em "),e(o,{to:"/pt-br/manage/configuration.html"},{default:t(()=>[a("asdf documentação de configuração")]),_:1}),a(".")])])])}const N=r(c,[["render",L],["__file","plugins.html.vue"]]);export{N as default};
