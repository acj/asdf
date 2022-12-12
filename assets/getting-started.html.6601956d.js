import{_ as d,r,o as i,c,a,b as s,d as e,w as t,e as o}from"./app.19999065.js";const p={},u=o('<h1 id="comecando" tabindex="-1"><a class="header-anchor" href="#comecando" aria-hidden="true">#</a> Começando</h1><blockquote><p>Hi, we&#39;ve recently migrated our docs and added some new pages. If you would like to help translate this page, see the &quot;Edit this page&quot; link at the bottom of the page.</p></blockquote><p>A instalação do <code>asdf</code> envolve:</p><ol><li>Instalar as dependências</li><li>Instalar o núcleo do <code>asdf</code></li><li>Adicionar o <code>asdf</code> ao seu shell</li><li>Instalar um plugin para cada ferramenta que você gostaria de gerenciar</li><li>Instalar uma versão desta ferramenta</li><li>Definir uma versão global e uma versão local através do arquivo de configuração <code>.tool-versions</code></li></ol>',4),h={href:"https://youtu.be/8W3xaSPjeog",target:"_blank",rel:"noopener noreferrer"},m=o('<h2 id="_1-instalando-as-dependencias" tabindex="-1"><a class="header-anchor" href="#_1-instalando-as-dependencias" aria-hidden="true">#</a> 1. Instalando as dependências</h2><p><strong>Linux</strong>:</p><table><thead><tr><th>Gerenciador de Pacotes</th><th>Comando</th></tr></thead><tbody><tr><td>Aptitude</td><td><code>sudo apt install curl git</code></td></tr><tr><td>DNF</td><td><code>sudo dnf install curl git</code></td></tr><tr><td>Pacman</td><td><code>sudo pacman -S curl git</code></td></tr><tr><td>Zypper</td><td><code>sudo zypper install curl git</code></td></tr></tbody></table><p><strong>macOS</strong>:</p><table><thead><tr><th>Gerenciador de Pacotes</th><th>Comando</th></tr></thead><tbody><tr><td>Homebrew</td><td>As dependências serão automaticamente instaladas pelo Homebrew.</td></tr><tr><td>Spack</td><td><code>spack install coreutils curl git</code></td></tr></tbody></table><h2 id="_2-instalando-o-asdf" tabindex="-1"><a class="header-anchor" href="#_2-instalando-o-asdf" aria-hidden="true">#</a> 2. Instalando o asdf</h2><p>Nós recomendamos a instalação através do Git, entretanto existem outros métodos específicos para algumas plataformas:</p>',7),F=a("thead",null,[a("tr",null,[a("th",null,"Método"),a("th",null,"Comando")])],-1),g=a("tr",null,[a("td",null,"Git"),a("td",null,[a("code",null,"git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.10.0")])],-1),f=a("tr",null,[a("td",null,"Homebrew"),a("td",null,[a("code",null,"brew install asdf")])],-1),v=a("td",null,"Pacman",-1),y=a("code",null,"git clone https://aur.archlinux.org/asdf-vm.git && cd asdf-vm && makepkg -si",-1),b={href:"https://wiki.archlinux.org/index.php/AUR_helpers",target:"_blank",rel:"noopener noreferrer"},_=o(`<h2 id="_3-adicionando-ao-seu-shell" tabindex="-1"><a class="header-anchor" href="#_3-adicionando-ao-seu-shell" aria-hidden="true">#</a> 3. Adicionando ao seu shell</h2><p>Existem diversas combinações de shells, sistemas operacionais e métodos de instalação que podem impactar a configuração. Abaixo, expanda a seção que se adeque mais com o seu sistema:</p><details class="custom-container details"><summary>Bash &amp; Git</summary><p>Adicione esta linha ao seu <code>~/.bashrc</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>O auto completar deve ser configurado manualmente a partir da adição da seguinte linha ao <code>.bashrc</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/completions/asdf.bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>Bash &amp; Git (macOS)</summary><p>Se você estiver usando o <strong>macOS Catalina ou mais recente</strong>, o shell padrão mudou para o <strong>ZSH</strong>. A não ser que você tenha voltado para o bash, siga as instruções de instalação para o ZSH.</p><p>Adicione esta linha ao seu <code>~/.bash_profile</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>O auto completar deve ser configurado manualmente a partir da adição da seguinte linha ao <code>.bash_profile</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/completions/asdf.bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>`,4),k={class:"custom-container details"},x=o(`<summary>Bash &amp; Homebrew (macOS)</summary><p>Se você estiver usando o <strong>macOS Catalina ou mais recente</strong>, o shell padrão mudou para o <strong>ZSH</strong>. A não ser que você tenha voltado para o bash, siga as instruções de instalação para o ZSH.</p><p>Adicione <code>asdf.sh</code> ao <code>~/.bash_profile</code> através do comando:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\n. $(brew --prefix asdf)/asdf.sh&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.bash_profile</span></span>
<span class="line"></span></code></pre></div>`,4),q={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-bash",target:"_blank",rel:"noopener noreferrer"},E=o(`<div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\n. $(brew --prefix asdf)/etc/bash_completion.d/asdf.bash&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.bash_profile</span></span>
<span class="line"></span></code></pre></div>`,1),z={class:"custom-container details"},S=o(`<summary>Bash &amp; Pacman</summary><p>Adicione a seguinte linha ao seu <code>~/.bashrc</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),D={href:"https://wiki.archlinux.org/title/bash#Common_programs_and_options",target:"_blank",rel:"noopener noreferrer"},H=a("code",null,"bash-completion",-1),w=o(`<details class="custom-container details"><summary>Fish &amp; Git</summary><p>Adicione a seguinte linha ao seu <code>~/.config/fish/config.fish</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/asdf.fish</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>O auto completar deve ser configurado manualmente através do seguinte comando:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">mkdir -p </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/completions</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> and ln -s </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/completions/asdf.fish </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/completions</span></span>
<span class="line"></span></code></pre></div></details>`,1),A={class:"custom-container details"},O=o(`<summary>Fish &amp; Homebrew</summary><p>Adicione <code>asdf.fish</code> ao seu <code>~/.config/fish/config.fish</code> através do comando:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\nsource &quot;</span><span style="color:#F8F8F2;">(brew --prefix asdf)</span><span style="color:#E6DB74;">&quot;/asdf.fish&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/config.fish</span></span>
<span class="line"></span></code></pre></div>`,3),j={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-fish",target:"_blank",rel:"noopener noreferrer"},$=o(`<details class="custom-container details"><summary>Fish &amp; Pacman</summary><p>Adicione a seguinte linha ao seu <code>~/.config/fish/config.fish</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.fish</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>O auto completar é configurado automaticamente durante a instalação do pacote AUR.</p></details><details class="custom-container details"><summary>Elvish &amp; Git</summary><p>Adicione <code>asdf.elv</code> ao <code>~/.config/elvish/rc.elv</code> através do comando:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">mkdir -p </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> ln -s </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/asdf.elv </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>
<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;use asdf _asdf; var asdf~ = $_asdf:asdf~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>
<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;set edit:completion:arg-completer[asdf] = $_asdf:arg-completer~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>
<span class="line"></span></code></pre></div><p>Ao concluir atualizará automaticamente</p></details><details class="custom-container details"><summary>Elvish &amp; Homebrew</summary><p>Adicione <code>asdf.elv</code> ao <code>~/.config/elvish/rc.elv</code> através do comando:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">mkdir -p </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> ln -s (brew --prefix asdf)/libexec/asdf.elv </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>
<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;use asdf _asdf; var asdf~ = $_asdf:asdf~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>
<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;set edit:completion:arg-completer[asdf] = $_asdf:arg-completer~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>
<span class="line"></span></code></pre></div><p>Ao concluir atualizará automaticamente</p></details><details class="custom-container details"><summary>Elvish &amp; Pacman</summary><p>Adicione <code>asdf.elv</code> ao <code>~/.config/elvish/rc.elv</code> através do comando:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">mkdir -p </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> ln -s /opt/asdf-vm/asdf.elv </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>
<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;use asdf _asdf; var asdf~ = $_asdf:asdf~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>
<span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;\\n&quot;&#39;set edit:completion:arg-completer[asdf] = $_asdf:arg-completer~&#39;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/rc.elv</span></span>
<span class="line"></span></code></pre></div><p>Ao concluir atualizará automaticamente</p></details>`,4),Z={class:"custom-container details"},B=o(`<summary>ZSH &amp; Git</summary><p>Adicione a seguinte linha ao seu <code>~/.zshrc</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),P=a("strong",null,"OU",-1),I={href:"https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/asdf",target:"_blank",rel:"noopener noreferrer"},C=o(`<p>O auto completar pode ser configurado ou pelo plugin do asdf para framework para ZSH, ou através da adição das seguintes linhas ao seu <code>.zshrc</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># append completions to fpath</span></span>
<span class="line"><span style="color:#F8F8F2;">fpath=(\${ASDF_DIR}/completions $fpath)</span></span>
<span class="line"><span style="color:#88846F;"># initialise completions with ZSH&#39;s compinit</span></span>
<span class="line"><span style="color:#F8F8F2;">autoload -Uz compinit </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#F8F8F2;"> compinit</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Se você está utilizando uma configuração <code>compinit</code> customizada, garanta que <code>compinit</code> esteja abaixo chamada <code>asdf.sh</code></li><li>Se você está utilizando uma configuração <code>compinit</code> customizada com um framework para ZSH, garanta que <code>compinit</code> esteja abaixo da chamada do framework.</li></ul><p><strong>Aviso</strong></p>`,4),G=a("code",null,"fpath",-1),M={href:"https://github.com/ohmyzsh/ohmyzsh/pull/8837",target:"_blank",rel:"noopener noreferrer"},N={class:"custom-container details"},V=o('<summary>ZSH &amp; Homebrew</summary><p>Adicione <code>asdf.sh</code> ao seu <code>~/.zshrc</code> através do comando:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\n. $(brew --prefix asdf)/asdf.sh&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> ${ZDOTDIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">~}/.zshrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',3),R=a("strong",null,"OU",-1),U={href:"https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/asdf",target:"_blank",rel:"noopener noreferrer"},L={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-zsh",target:"_blank",rel:"noopener noreferrer"},T=a("code",null,"fpath",-1),W={href:"https://github.com/ohmyzsh/ohmyzsh/pull/8837",target:"_blank",rel:"noopener noreferrer"},Q={class:"custom-container details"},J=o(`<summary>ZSH &amp; Pacman</summary><p>Adicione a seguinte linha ao seu <code>~/.zshrc</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),K={href:"https://wiki.archlinux.org/index.php/zsh#Command_completion",target:"_blank",rel:"noopener noreferrer"},X=o('<p>Os scripts do <code>asdf</code> precisam ser chamados <strong>depois</strong> de ter configurado a sua variável <code>$PATH</code> e <strong>depois</strong> de ter chamado o seu framework para ZSH (oh-my-zsh etc).</p><p>Reinicie seu shell para que as mudanças na variável <code>PATH</code> tenham efeito. Abrir uma nova janela/sessão de terminal o fará.</p><h2 id="_4-instalando-um-plugin" tabindex="-1"><a class="header-anchor" href="#_4-instalando-um-plugin" aria-hidden="true">#</a> 4. Instalando um plugin</h2>',3),Y={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},aa={href:"https://github.com/asdf-vm/asdf-nodejs/",target:"_blank",rel:"noopener noreferrer"},sa=a("code",null,"asdf-nodejs",-1),ea=o(`<h3 id="dependencias-dos-plugins" tabindex="-1"><a class="header-anchor" href="#dependencias-dos-plugins" aria-hidden="true">#</a> Dependências dos plugins</h3><p>Cada plugin possui algumas dependências, por isso precisamos checar no repositório onde elas estão listadas. Por exemplo, para o <code>asdf-nodejs</code> são:</p><table><thead><tr><th>SO</th><th>Instalação de dependencia</th></tr></thead><tbody><tr><td>Linux (Debian)</td><td><code>apt-get install dirmngr gpg curl gawk</code></td></tr><tr><td>macOS</td><td><code>brew install gpg gawk</code></td></tr></tbody></table><p>Devemos instalar instalar as dependências primeiro, pois alguns plugins exigem algumas ações após a instalação.</p><h3 id="instalando-o-plugin" tabindex="-1"><a class="header-anchor" href="#instalando-o-plugin" aria-hidden="true">#</a> Instalando o plugin</h3><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git</span></span>
<span class="line"></span></code></pre></div><h2 id="_5-instalando-uma-versao" tabindex="-1"><a class="header-anchor" href="#_5-instalando-uma-versao" aria-hidden="true">#</a> 5. Instalando uma versão</h2><p>Agora temos o plugin para o Node.js, nós podemos instalar uma versão desta ferramenta.</p><p>Podemos ver quais versões tão disponíveis através do comando <code>asdf list all nodejs</code>, ou uma lista específica de versões com <code>asdf list all nodejs 14</code></p><p>Vamos instalar somente a última versão disponível, utilizando a tag <code>latest</code>:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf install nodejs latest</span></span>
<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">Nota</p><p><code>asdf</code> exige versões exatas. A palavra <code>latest</code> resulta na instalação da versão atual na data da execução.</p></div><h2 id="_6-definindo-uma-versao" tabindex="-1"><a class="header-anchor" href="#_6-definindo-uma-versao" aria-hidden="true">#</a> 6. Definindo uma versão</h2><p><code>asdf</code> executa uma verificação das versões das ferramentas a serem utilizadas através do arquivo <code>.tool-versions</code> presente desde diretório atual, até o diretório <code>$HOME</code>. A varredura ocorre no momento em que você executa uma ferramenta que o asdf gerencia.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se uma versão não for especificada para uma ferramenta, ao executá-la resultará em erro. <code>asdf current</code> mostrará a ferramenta e sua versão, ou então a falta dela no seu diretório atual para que você possa observar quais ferramentas falharão ao serem executadas.</p></div><h3 id="versoes-globais" tabindex="-1"><a class="header-anchor" href="#versoes-globais" aria-hidden="true">#</a> Versões globais</h3><p>Os padrões globais são gerenciados em <code>$HOME/.tool-versions</code>. Defina uma versão global através do comando:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf global nodejs latest</span></span>
<span class="line"></span></code></pre></div><p><code>$HOME/.tool-versions</code> ficará assim:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,20),oa=a("code",null,"asdf",-1),na=a("code",null,"python",-1),la=a("code",null,"asdf",-1),ta=o(`<h3 id="versoes-locais" tabindex="-1"><a class="header-anchor" href="#versoes-locais" aria-hidden="true">#</a> Versões locais</h3><p>Versões locais são definidas no arquivo <code>$PWD/.tool-versions</code> (seu diretório atual). Geralmente, será um repositório Git para um projeto. Quando estiver no diretório desejado, execute:</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf </span><span style="color:#F92672;">local</span><span style="color:#F8F8F2;"> nodejs latest</span></span>
<span class="line"></span></code></pre></div><p><code>$PWD/.tool-versions</code> ficará assim:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="usando-arquivos-de-versao-existentes" tabindex="-1"><a class="header-anchor" href="#usando-arquivos-de-versao-existentes" aria-hidden="true">#</a> Usando arquivos de versão existentes</h3><p><code>asdf</code> suporta a migração de arquivos de versão provenientes de outros gerenciadores de versão. Por exemplo: <code>.ruby-version</code> para o <code>rbenv</code>. Essa funcionalidade é baseada no plugin de cada ferramenta.</p>`,7),ra={href:"https://github.com/asdf-vm/asdf-nodejs/",target:"_blank",rel:"noopener noreferrer"},da=a("code",null,"asdf-nodejs",-1),ia=a("code",null,".nvmrc",-1),ca=a("code",null,".node-version",-1),pa=a("code",null,"asdf",-1),ua=a("code",null,"$HOME/.asdfrc",-1),ha=o(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">legacy_version_file = yes</span></span>
<span class="line"><span style="color:#F8F8F2;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),ma=o('<h2 id="setup-finalizado" tabindex="-1"><a class="header-anchor" href="#setup-finalizado" aria-hidden="true">#</a> Setup finalizado!</h2><p>A configuração inicial do <code>asdf</code> foi finalizada 🎉. Agora, você pode gerenciar versões do <code>nodejs</code> para o seus projetos. Siga passos semelhantes para cada ferramenta do seu projeto.</p><p>O <code>asdf</code> possui diversos outros comandos para se acustomar ainda, você pode ver todos eles através do comando <code>asdf --help</code> ou simplesmente <code>asdf</code>. Eles estão divididos em três categorias:</p>',3),Fa=a("code",null,"asdf",-1);function ga(fa,va){const n=r("ExternalLinkIcon"),l=r("RouterLink");return i(),c("div",null,[u,a("p",null,[s("Você pode também acompanhar o passo a passo da instalação através "),a("a",h,[s("deste vídeo"),e(n)]),s(".")]),m,a("table",null,[F,a("tbody",null,[g,f,a("tr",null,[v,a("td",null,[y,s(" or use your preferred "),a("a",b,[s("AUR helper"),e(n)])])])])]),_,a("details",k,[x,a("p",null,[s("O auto completar deve ser configurado seguindo as "),a("a",q,[s("instruções da Homebrew"),e(n)]),s(", ou as seguintes:")]),E]),a("details",z,[S,a("p",null,[s("O "),a("a",D,[s("pacote "),H,e(n)]),s(" precisa ser instalado para o auto completar funcionar.")])]),w,a("details",A,[O,a("p",null,[s("O auto completar é "),a("a",j,[s("configurado pela Homebrew para o fish shell"),e(n)]),s(".")])]),$,a("details",Z,[B,a("p",null,[P,s(" utilize um framework para ZSH, como "),a("a",I,[s("asdf para oh-my-zsh"),e(n)]),s(" que irá adicionar o script e o auto completar.")]),C,a("p",null,[s("Se você está utilizando um framework para ZSH, o plugin do asdf pode precisar ser atualizado para utilização adequada do novo auto completar do ZSH através do "),G,s(". O plugin do asdf para o oh-my-zsh ainda não foi atualizado, veja: "),a("a",M,[s("ohmyzsh/ohmyzsh#8837"),e(n)]),s(".")])]),a("details",N,[V,a("p",null,[R,s(" utilize um framework para ZSH, como "),a("a",U,[s("asdf para oh-my-zsh"),e(n)]),s(" que irá adicionar o script e o auto completar.")]),a("p",null,[s("O auto completar pode ser configurado ou pelo framework para ZSH, ou de acordo com as "),a("a",L,[s("instruções da Homebrew"),e(n)]),s(". Se você está usando um framework para ZSH, pode ser que seja necessário atualizar o plugin do asdf para que o novo auto completar funcione adequadamente através do "),T,s(". O plugin do asdf para o Oh-My-ZSH ainda será atualizado, veja: "),a("a",W,[s("ohmyzsh/ohmyzsh#8837"),e(n)]),s(".")])]),a("details",Q,[J,a("p",null,[s("O auto completar é colocado em um local familiar para o ZSH, "),a("a",K,[s("mas o ZSH deve ser configurado para conseguir utilizá-lo"),e(n)]),s(".")])]),X,a("p",null,[s("Para demonstração, vamos instalar e configurar o "),a("a",Y,[s("Node.js"),e(n)]),s(" através do plugin "),a("a",aa,[sa,e(n)]),s(".")]),ea,a("p",null,[s("Alguns sistemas operacionais vêm por padrão com ferramentas que são gerenciadas pelo próprio sistema e não pelo "),oa,s(", "),na,s(" é um exemplo. Você precisa indicar para o "),la,s(" para devolver o gerenciamento para o sistema. A "),e(l,{to:"/pt-br/manage/versions.html"},{default:t(()=>[s("seção de referência de versões")]),_:1}),s(" irá guiá-lo.")]),ta,a("p",null,[s("O "),a("a",ra,[da,e(n)]),s(" suporta tanto arquivos "),ia,s(" quanto "),ca,s(". Para ativar essa funcionalidade, adicione a seguinte linha ao seu arquivo de configuração do "),pa,s(" - "),ua,s(":")]),ha,a("p",null,[s("Veja a página de refencia da "),e(l,{to:"/pt-br/manage/configuration.html"},{default:t(()=>[s("configuração")]),_:1}),s(" para mais opções de configuração.")]),ma,a("ul",null,[a("li",null,[e(l,{to:"/pt-br/manage/core.html"},{default:t(()=>[s("núcleo "),Fa]),_:1})]),a("li",null,[e(l,{to:"/pt-br/manage/plugins.html"},{default:t(()=>[s("plugins")]),_:1})]),a("li",null,[e(l,{to:"/pt-br/manage/versions.html"},{default:t(()=>[s("versões (de ferramentas)")]),_:1})])])])}const ba=d(p,[["render",ga],["__file","getting-started.html.vue"]]);export{ba as default};
