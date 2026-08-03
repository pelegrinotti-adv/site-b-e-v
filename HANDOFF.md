# Handoff do site Bainy & Vieira (bainyevieira.adv.br)

Checklist do que precisa ser repassado ao cliente antes de parar de dar manutenção. Baseado em uma investigação feita em 2026-08-03.

## 0. Achado importante — leia antes de repassar qualquer coisa

O DNS do domínio **hoje aponta para a Vercel** (IP `216.198.79.1` no apex, `www` como CNAME para `*.vercel-dns-*.com`), **não** para o GitHub Pages.

Só que existem **dois repositórios** com o site no GitHub da conta `pelegrinotti-adv`:

| Repositório | Último push | Conteúdo | Indício de hospedagem |
|---|---|---|---|
| `site-bainy-vieira` | 2026-06-12 (mais antigo) | HTML único, tudo inline (CSS/JS no próprio `index.html`), sem seção de artigos | Sem arquivo `CNAME`. Provável candidato a estar conectado ao projeto Vercel (Vercel não precisa de `CNAME`, o domínio é configurado direto no painel) |
| `site-b-e-v` (este repo) | 2026-07-12 (mais novo) | Refatorado: `assets/styles.css`, `assets/main.js`, página `/artigos`, `sitemap.xml`, `robots.txt` | Tem arquivo `CNAME` (mecanismo específico do **GitHub Pages** — não faz nada na Vercel) |

**Hipótese mais provável:** o ar hoje é servido pela Vercel a partir do repositório antigo (`site-bainy-vieira`), e o trabalho mais novo e mais completo (este repositório, `site-b-e-v`) **pode não estar no ar** — ele foi preparado para GitHub Pages (por isso o `CNAME`), mas o DNS nunca foi apontado para lá.

Não tenho acesso ao painel da Vercel nem ao Registro.br para confirmar 100%. **Antes de repassar ao cliente, confirme no painel da Vercel (vercel.com/dashboard) qual repositório está de fato conectado ao projeto que serve `bainyevieira.adv.br`.** Isso decide se o conteúdo novo (deste repo) precisa ser publicado antes do handoff, ou se pode ficar como está.

## 1. Domínio — bainyevieira.adv.br

- É um domínio `.adv.br`, registrado no **Registro.br**, exige vínculo com OAB/advogado responsável.
- O cliente (ou o escritório, CNPJ 38.476.642/0001-34) precisa ter acesso à conta do Registro.br onde o domínio foi registrado, para:
  - Renovar o domínio anualmente (verificar data de expiração no painel).
  - Gerenciar os registros de DNS (hoje apontando para a Vercel).
- Repasse: login/acesso da conta Registro.br, ou processo de transferência do domínio para uma conta que o cliente controle.

## 2. Hospedagem

- Confirmar no painel da Vercel qual conta é dona do projeto e transferir a propriedade (ou adicionar o cliente/outro responsável como membro do time) para que ele não dependa da sua conta pessoal.
- Se decidirem manter GitHub Pages para o repositório `site-b-e-v`, é só apontar o DNS (registro `A`/`ALIAS` para os IPs do GitHub Pages, ou `CNAME` do `www` para `pelegrinotti-adv.github.io`) e habilitar Pages nas configurações do repositório — é gratuito e não depende de conta paga.
- Não há banco de dados, backend, variável de ambiente nem serviço pago além do domínio: é um site 100% estático (HTML/CSS/JS), sem custo de servidor.

## 3. Código-fonte (GitHub)

- Hoje só `pelegrinotti-adv` tem acesso aos repositórios (`site-b-e-v` e `site-bainy-vieira`), ambos públicos.
- Repasse:
  - Adicionar o cliente (ou um novo desenvolvedor de confiança) como colaborador, ou transferir a propriedade do(s) repositório(s) para uma conta GitHub do escritório.
  - Deixar claro **qual dos dois repositórios é o "oficial"** (recomendo consolidar em um só e arquivar o outro, para não haver confusão futura sobre qual editar).

## 4. Conteúdo que só muda editando código

Não há painel de administração nem CMS. Estes dados estão **hardcoded** no `index.html` e só mudam se alguém editar o código e publicar de novo:
- E-mails: `lizibainy@gmail.com`, `josepedrovsj@hotmail.com`
- WhatsApp: `+55 53 98165-2240` (geral) e `+55 53 99144-3211` (plantão criminal)
- Endereços de Pelotas/RS e Canguçu/RS
- Nomes, OAB e bios dos advogados
- OAB/RS 10.190 e CNPJ no rodapé

Se o cliente quiser trocar telefone/e-mail/endereço no futuro sem depender de programador, isso exigiria migrar para algum CMS — hoje não existe.

## 5. O que não precisa de nenhuma ação

- Certificado SSL: gerenciado automaticamente pela plataforma de hospedagem (Vercel ou GitHub Pages), renovação automática, sem custo.
- Fontes (Google Fonts) carregadas via link público, sem chave/API.
- Não há formulário de contato, analytics, nem integração de terceiros com credenciais — o "contato" é só `mailto:` e link `wa.me`.

## 6. Passos recomendados antes de sair de vez

1. Confirmar no painel Vercel qual repositório está publicado e decidir se o conteúdo novo (`site-b-e-v`) precisa ir ao ar.
2. Consolidar em um único repositório e uma única forma de hospedagem (evitar o repo/CNAME órfão).
3. Transferir ou dar acesso: conta Registro.br (domínio), conta de hospedagem (Vercel ou ativar GitHub Pages), repositório GitHub.
4. Documentar para o cliente, por escrito, que qualquer alteração de texto/telefone/endereço exige um desenvolvedor editando e republicando o código (não é um site com painel).
