# Plano de implementacao - React Music

## Objetivo

Redesenhar a Home com base na referencia visual fornecida, mantendo os dados da Deezer, busca, favoritos e playlist existentes. A onda deve representar o preview da musica em reproducao, sem usar o microfone do usuario.

## Stack atual

- React 18 com TypeScript e Create React App
- Styled Components para estilos
- Zustand para estado global
- React Query e Axios para dados
- npm como gerenciador de pacotes

## Dependencias

Instalar o WaveSurfer e sua integracao oficial com React:

```bash
npm install wavesurfer.js @wavesurfer/react
```

O WaveSurfer deve ser o controlador do audio e da onda. Nao manter outro elemento `<audio>` reproduzindo a mesma faixa.

## Estrutura visual

### Header

- Campo de busca largo no lado esquerdo.
- Acoes de notificacao, acesso a playlist, contador de favoritos e avatar no lado direito.
- Manter o campo conectado ao `search.inputValue` atual.
- Em telas menores, ocultar acoes secundarias e preservar busca e player.

### Painel principal

- Criar um painel `Now Playing` com fundo escuro, borda azul e imagem desfocada da capa ao fundo.
- Exibir capa, titulo, artista, favorito e metadados disponiveis.
- Adicionar onda clicavel, progresso atual, duracao e seek.
- Adicionar controles de embaralhar, anterior, play/pause, proxima e repetir.
- Usar estado visual para carregamento, erro e ausencia de musica selecionada.

### Fila Up Next

- Exibir as proximas faixas a partir da posicao da musica atual.
- Destacar a faixa atual com azul/ciano.
- Permitir selecionar uma faixa diretamente.
- Limitar a lista visivel no desktop e fornecer acesso para ver a playlist completa.

### Top 100

- Exibir titulo, descricao e filtros em formato de chips.
- Manter `Top 100` e `My playlist` funcionais com os dados atuais.
- Nao criar filtros de genero sem uma fonte de dados real; chips adicionais podem ser adicionados quando a API fornecer genero.
- Renderizar cards com capa, titulo, artista e botao de favorito.
- Destacar a musica atual e manter carregamento infinito apenas no modo `Top 100`.

## Arquitetura do player

### Estado global

Atualizar `src/store/usePlayerStore/types.d.ts` e `src/store/usePlayerStore/index.tsx` com:

- `isPlaying: boolean`
- `currentTime: number`
- `duration: number`
- `isLoading: boolean`
- `playbackError: string | null`
- `repeatMode: "off" | "all" | "one"`
- `isShuffled: boolean`
- Acoes para play/pause, seek, progresso, duracao, erro e fim da faixa.

Evitar armazenar componentes React ou icones mutaveis no Zustand. Os icones devem ser definidos pelo componente a partir do estado atual.

### WaveformPlayer

Criar `src/components/WaveformPlayer/index.tsx` e `style.ts`:

- Receber a URL `currentMusic.preview`.
- Inicializar `useWavesurfer` com cores ciano e azul escuro.
- Configurar barras estreitas, altura responsiva, cursor e normalizacao.
- Sincronizar eventos `ready`, `play`, `pause`, `timeupdate`, `finish` e `error` com o Zustand.
- Permitir seek ao clicar ou arrastar sobre a onda.
- Destruir a instancia e listeners ao trocar de musica ou desmontar.
- Exibir uma onda visual estatica enquanto nenhum audio estiver pronto.

### Comportamento esperado

- Selecionar um card atualiza `currentMusic` e inicia a reproducao por uma acao explicita do usuario.
- Play/pause controla a mesma instancia usada pela onda.
- Anterior e proxima respeitam os limites da playlist.
- Ao terminar, repetir a faixa ou avancar conforme `repeatMode`.
- Volume e estado de reproducao continuam sincronizados ao trocar de musica.
- Falhas de `audio.play()` devem ser tratadas sem deixar a interface em estado incorreto.

## Componentes e arquivos

### Alterar

- `src/pages/Home/index.tsx`: montar o novo layout e corrigir keys/listagem.
- `src/pages/Home/style.ts`: grid principal e responsividade.
- `src/components/Player/index.tsx`: transformar no painel `Now Playing`.
- `src/components/Player/style.ts`: aplicar o visual da referencia.
- `src/components/MobilePlayer/index.tsx`: usar o mesmo estado e nao criar outro audio.
- `src/components/Search/index.tsx`: separar busca das acoes do header.
- `src/components/Search/style.ts`: adaptar tamanhos, cores e estados.
- `src/components/MusicItem/index.tsx`: selecao, favorito e acessibilidade.
- `src/components/MusicItem/style.ts`: cards responsivos.
- `src/store/usePlayerStore/index.tsx`: estado e comandos do player.
- `src/store/usePlayerStore/types.d.ts`: tipos do novo estado.
- `src/style/attributes/colors.ts`: consolidar cores da nova interface.
- `src/style/global.tsx`: fundo, fonte, botoes e estilos globais.

### Criar

- `src/components/WaveformPlayer/index.tsx`
- `src/components/WaveformPlayer/style.ts`
- `src/components/UpNext/index.tsx`
- `src/components/UpNext/style.ts`

Criar outros componentes somente se uma secao ficar grande ou precisar ser reutilizada.

## Responsividade

### Desktop

- Header em uma linha.
- Painel principal ocupando aproximadamente 70% e `Up Next` 30%.
- Grade com cinco cards quando houver largura suficiente.

### Tablet

- Reduzir o painel principal para duas colunas mais equilibradas.
- Grade com tres ou quatro cards.
- Permitir scroll horizontal dos filtros.

### Mobile

- Header simplificado e busca em largura total.
- Ocultar o painel grande e usar mini player fixo na parte inferior.
- Expandir o mini player para mostrar capa, onda e controles.
- Exibir cards em uma ou duas colunas conforme a largura.
- Manter areas clicaveis com pelo menos 44px.

## Ordem de implementacao

- [ ] Instalar `wavesurfer.js` e `@wavesurfer/react`.
- [ ] Corrigir e ampliar os tipos e o estado do player.
- [ ] Criar `WaveformPlayer` e integrar o preview da faixa atual.
- [ ] Refatorar `Player` para o painel `Now Playing`.
- [ ] Criar a fila `Up Next`.
- [ ] Remodelar header, busca e navegacao de playlist.
- [ ] Remodelar os cards e a grade `Top 100`.
- [ ] Adaptar o `MobilePlayer` sem duplicar o audio.
- [ ] Implementar estados vazio, carregando e erro.
- [ ] Ajustar responsividade e acessibilidade.
- [ ] Executar `npm run type-check`.

## Riscos e validacoes

- Os previews remotos podem bloquear leitura ou decodificacao por CORS. Validar uma URL real antes de concluir a integracao.
- Se houver bloqueio de CORS, usar picos pre-calculados ou um endpoint proprio/proxy; nao tentar contornar a seguranca do navegador.
- Os previews da Deezer sao curtos, portanto a duracao exibida deve vir do audio carregado e nao da duracao completa da musica.
- O navegador pode bloquear autoplay. A primeira reproducao deve acontecer depois de uma interacao do usuario.
- Nao usar dados ficticios para genero, ano ou perfil; ocultar elementos sem dados reais ou fornecer dados locais explicitamente definidos.

## Criterios de aceite

- A Home segue a composicao, cores e hierarquia da referencia em desktop e mobile.
- A onda representa a faixa atual, atualiza durante a reproducao e aceita seek.
- Play, pause, anterior, proxima, volume, favorito e selecao de faixa funcionam.
- Existe apenas uma fonte de audio ativa na aplicacao.
- Busca, Top 100, favoritos e scroll infinito continuam funcionando.
- Troca de faixa nao deixa listeners ou instancias do WaveSurfer ativos.
- Estados de carregamento, erro e playlist vazia sao visiveis.
- A aplicacao passa em `npm run type-check`.
