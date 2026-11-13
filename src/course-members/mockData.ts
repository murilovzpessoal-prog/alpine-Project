import type { CourseData, UserAccount } from './types';

export const INITIAL_USER: UserAccount = {
  name: 'Murilo Vaz',
  email: 'aluno@projeto.com',
  memberSince: 'Novembro 2026',
  tier: 'Membro Fundador • Acesso Vitalício',
};

export const COURSE_DATA: CourseData = {
  title: 'Formação Oficial do Projeto',
  subtitle:
    'Domine do zero à escala no TikTok Shop: ativação, nichos virais, estrutura validada, formatos de alta conversão e automação com o Agente de IA da Orbiex.',
  instructor: {
    name: 'Equipe Executiva do Projeto',
    title: 'Especialistas em Escala & Operação TikTok Shop',
    avatar: '',
  },
  totalHours: '16 horas curriculares',
  announcements: [
    {
      id: 'ann-1',
      title: '🔥 Recomendação Oficial: Utilize a Orbiex (Agente de IA)',
      date: 'Hoje',
      badge: 'IMPORTANTE',
      content:
        'Todo membro do Projeto já possui acesso à Orbiex. Utilize a Biblioteca de Prompts da Orbiex e o Material da Orbiex para aplicar todas as aulas com máxima performance.',
    },
    {
      id: 'ann-2',
      title: '⚡ Todos os 15 Módulos da Formação Liberados',
      date: 'Esta semana',
      badge: 'OFICIAL',
      content:
        'A trilha completa do Projeto — desde Seja Bem-Vindo, Nichos Virais, Estrutura Validada, formatos POV, Cabide, Bumerangue, Plus Size, Mirror No Face, No Face, Algoritmo, 1K em 30 Dias, Escala, Oniprompt, 2K de Seguidores e Central Orbiex IA — já está 100% disponível.',
    },
  ],
  modules: [
    // ==================================================
    // MÓDULO 01: SEJA BEM-VINDO
    // ==================================================
    {
      id: 'mod-1',
      number: '01',
      title: 'Seja Bem-Vindo',
      description:
        'O ponto de partida oficial da sua jornada no Projeto: boas-vindas à comunidade, direcionamento estratégico, ativação do TikTok Shop, configuração bancária e integridade da conta.',
      coverImage: '/assets/capas-modulos/modulo-1.jpg',
      badge: 'MÓDULO 01 • 6 AULAS',
      accentColor: '#ffffff',
      lessons: [
        {
          id: 'l-1-1',
          moduleId: 'mod-1',
          moduleName: 'Módulo 01: Seja Bem-Vindo',
          number: '01',
          title: 'Introdução à Comunidade',
          duration: '1080p HD',
          videoUrl: 'https://stream.cakto.com.br/9129cd6d-f024-48f5-a4bd-5d801cc2f23e/1080p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Boas-vindas oficiais ao Projeto: conheça a visão da nossa comunidade de elite e como extrair o máximo de resultado da formação.',
          fullContent:
            'Seja muito bem-vindo ao Projeto! Nesta primeira aula em 1080p Full HD, você vai entender como funciona o nosso ecossistema, os pilares da nossa comunidade e qual deve ser a sua postura desde o primeiro dia para construir resultados reais no TikTok Shop.',
          takeaways: [
            'Visão geral completa da Formação Oficial do Projeto.',
            'Como funciona a nossa comunidade e o suporte aos membros.',
            'Recomendações iniciais para aproveitar 100% do conteúdo.',
          ],
          checklist: [
            'Assistir à aula de Introdução à Comunidade até o final',
            'Alinhar suas metas iniciais dentro do Projeto',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-1-2',
          moduleId: 'mod-1',
          moduleName: 'Módulo 01: Seja Bem-Vindo',
          number: '02',
          title: 'Direcionamento',
          duration: 'Aula Prática',
          videoUrl: 'https://stream.cakto.com.br/b50a1aa6-f9cb-4164-8b77-9b53e7d8346a/360p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'O mapa completo de execução para você saber exatamente por onde começar e qual sequência seguir.',
          fullContent:
            'Nesta aula de direcionamento, traçamos a rota clara que separa quem apenas consome conteúdo de quem executa com precisão e colhe comissões todos os dias.',
          takeaways: [
            'Ordem ideal de estudo e aplicação prática dos módulos.',
            'Como organizar sua rotina diária de execução.',
            'O que priorizar na sua primeira semana de operação.',
          ],
          checklist: [
            'Definir seu horário diário dedicado à operação do Projeto',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-1-3',
          moduleId: 'mod-1',
          moduleName: 'Módulo 01: Seja Bem-Vindo',
          number: '03',
          title: 'Como ativar o shop',
          duration: 'Aula Prática',
          videoUrl: 'https://stream.cakto.com.br/010ff3a9-bf19-45ae-acb0-b7dca09d43e9/playlist.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Passo a passo completo na tela para habilitar e ativar o seu TikTok Shop sem erros.',
          fullContent:
            'Aprenda na prática todo o procedimento de ativação do TikTok Shop na sua conta, garantindo que todas as permissões de afiliado e vitrine estejam prontas para vender.',
          takeaways: [
            'Requisitos e etapas para liberar a função Shop.',
            'Preenchimento correto do cadastro sem reprovações.',
            'Validação da conta ativa para vincular produtos.',
          ],
          checklist: [
            'Realizar o processo de ativação do TikTok Shop conforme a aula',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-1-4',
          moduleId: 'mod-1',
          moduleName: 'Módulo 01: Seja Bem-Vindo',
          number: '04',
          title: 'Conhecendo o tiktok shop',
          duration: 'Aula Prática',
          videoUrl: 'https://stream.cakto.com.br/5ad5cbb9-54fc-4c66-a5bd-c08d027fdd0f/playlist.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Tour completo por dentro do painel do TikTok Shop: mercado de produtos, comissões, vitrine e métricas.',
          fullContent:
            'Domine cada botão e funcionalidade da central do TikTok Shop. Veja como navegar pelo marketplace de afiliados, analisar comissões, adicionar produtos à vitrine e acompanhar suas vendas em tempo real.',
          takeaways: [
            'Como navegar pela Central de Afiliados do TikTok Shop.',
            'Como selecionar produtos, verificar avaliações e taxas de comissão.',
            'Visão geral dos relatórios de desempenho e ganhos.',
          ],
          checklist: [
            'Explorar o painel do TikTok Shop e favoritar seus primeiros produtos',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-1-5',
          moduleId: 'mod-1',
          moduleName: 'Módulo 01: Seja Bem-Vindo',
          number: '05',
          title: 'Configurando dados bancarios',
          duration: 'Aula Prática',
          videoUrl: 'https://stream.cakto.com.br/010ff3a9-bf19-45ae-acb0-b7dca09d43e9/playlist.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Como cadastrar e vincular seus dados bancários com segurança para receber suas comissões.',
          fullContent:
            'Aprenda a configurar corretamente os dados de recebimento dentro da plataforma para que seus saques de comissões caiam direto na sua conta sem bloqueios ou atrasos.',
          takeaways: [
            'Cadastro correto de titularidade e dados bancários.',
            'Cuidados essenciais para evitar falhas no repasse de comissões.',
            'Como funcionam os prazos e solicitações de saque.',
          ],
          checklist: [
            'Deixar os dados bancários cadastrados e validados na conta',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-1-6',
          moduleId: 'mod-1',
          moduleName: 'Módulo 01: Seja Bem-Vindo',
          number: '06',
          title: 'Aprendo sobre integridade da conta',
          duration: 'Aula Prática',
          videoUrl: 'https://stream.cakto.com.br/bfb00553-6456-4920-9484-e57ec42c4a18/360p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Regras de ouro para blindar sua conta contra punições, restrições ou perda de alcance.',
          fullContent:
            'Proteger o seu ativo é fundamental. Entenda como funciona o sistema de pontuação e integridade do TikTok Shop, o que nunca fazer nos vídeos e como manter a saúde da sua conta em 100%.',
          takeaways: [
            'Principais diretrizes de comunidade e comércio do TikTok Shop.',
            'Como evitar violações ao promover produtos.',
            'Monitoramento do painel de Saúde e Integridade da Conta.',
          ],
          checklist: [
            'Verificar o painel de integridade da sua conta e aplicar as boas práticas',
          ],
          attachments: [],
          comments: [],
        },
      ],
    },

    // ==================================================
    // MÓDULO 02: NICHOS VIRAIS
    // ==================================================
    {
      id: 'mod-2',
      number: '02',
      title: 'Nichos Virais',
      description:
        'Descubra os nichos mais quentes e lucrativos do TikTok Shop — presentes, moda, infantil e diretrizes práticas de aplicação imediata.',
      coverImage: '/assets/capas-modulos/modulo-2.jpg',
      badge: 'MÓDULO 02 • 5 AULAS',
      accentColor: '#ffffff',
      lessons: [
        {
          id: 'l-2-1',
          moduleId: 'mod-2',
          moduleName: 'Módulo 02: Nichos Virais',
          number: '01',
          title: 'AVISO !',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/802fbc6d-46c0-45ef-975e-1c9b01d92ff5/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Aviso fundamental antes de escolher seu nicho de atuação e iniciar suas postagens.',
          fullContent:
            'Assista a este aviso obrigatório antes de partir para a escolha de produtos. Aqui alinhamos a visão estratégica que vai economizar semanas de testes errados na sua operação.',
          takeaways: [
            'O que você precisa saber antes de definir seu nicho principal.',
            'Erros clássicos de iniciantes na escolha de produtos.',
            'Como abordar cada nicho com mentalidade de teste e validação.',
          ],
          checklist: [
            'Assistir à aula AVISO ! completa antes de escolher o nicho',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-2-2',
          moduleId: 'mod-2',
          moduleName: 'Módulo 02: Nichos Virais',
          number: '02',
          title: 'Nicho de presentes',
          duration: 'Aula Prática',
          videoUrl: 'https://stream.cakto.com.br/0990ee46-78c1-4387-aa09-e44b4c273049/360p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Como explorar o nicho de presentes e itens criativos com altíssimo apelo emocional e compra por impulso.',
          fullContent:
            'Produtos presenteáveis vendem o ano inteiro pelo fator emoção e novidade. Veja quais tipos de produtos do nicho de presentes mais viralizam e como apresentá-los.',
          takeaways: [
            'Características dos produtos campeões no nicho de presentes.',
            'Ângulos emocionais e visuais que despertam compra imediata.',
            'Exemplos reais de itens com alta conversão.',
          ],
          checklist: [
            'Mapear oportunidades de produtos no nicho de presentes',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-2-3',
          moduleId: 'mod-2',
          moduleName: 'Módulo 02: Nichos Virais',
          number: '03',
          title: 'Nicho de moda',
          duration: '1080p HD',
          videoUrl: 'https://stream.cakto.com.br/cfea1c18-a138-4f57-8dee-1eb473fcc160/1080p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'O maior motor de vendas recorrentes do TikTok Shop: como dominar o nicho de moda e vestuário em 1080p.',
          fullContent:
            'O nicho de moda é o mais escalável para aplicar nossas técnicas de modelos ultra realistas, Cabide, Bumerangue, Plus Size e No Face. Entenda como selecionar peças vencedoras.',
          takeaways: [
            'Por que moda é o nicho número 1 em volume de vendas.',
            'Como escolher roupas com alto giro e excelente margem de comissão.',
            'Conexão direta com os módulos práticos de geração visual.',
          ],
          checklist: [
            'Selecionar peças de moda campeãs no painel do TikTok Shop',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-2-4',
          moduleId: 'mod-2',
          moduleName: 'Módulo 02: Nichos Virais',
          number: '04',
          title: 'Nicho infantil',
          duration: 'Aula Prática',
          videoUrl: 'https://stream.cakto.com.br/6394101e-42de-42cf-9cfc-18af3cddb982/360p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Como atuar no nicho infantil com produtos de alta demanda entre pais e familiares.',
          fullContent:
            'Descubra o potencial inexplorado do nicho infantil: brinquedos educativos, utilidades e vestuário que geram altíssima taxa de conversão.',
          takeaways: [
            'Melhores subcategorias dentro do nicho infantil.',
            'Como comunicar benefícios direto para quem decide a compra.',
            'Cuidados e boas práticas ao criar conteúdos para esse segmento.',
          ],
          checklist: [
            'Analisar os produtos mais vendidos da categoria infantil',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-2-5',
          moduleId: 'mod-2',
          moduleName: 'Módulo 02: Nichos Virais',
          number: '05',
          title: 'Dicas para aplicação',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/dac37033-1d1a-44b0-9f09-8f39a4b5b7c7/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Diretrizes práticas para colocar o seu nicho escolhido em operação imediata.',
          fullContent:
            'Fechando o módulo de Nichos Virais, confira as dicas táticas de aplicação para validar rapidamente seu nicho escolhido e começar a gerar tráfego qualificado.',
          takeaways: [
            'Critérios objetivos para bater o martelo no seu nicho.',
            'Como estruturar o perfil de acordo com o segmento escolhido.',
            'Checklist prático de partida.',
          ],
          checklist: [
            'Definir oficialmente o nicho da sua conta e separar os primeiros produtos',
          ],
          attachments: [],
          comments: [],
        },
      ],
    },

    // ==================================================
    // MÓDULO 03: ESTRUTURA VALIDADA
    // ==================================================
    {
      id: 'mod-3',
      number: '03',
      title: 'Estrutura Validada',
      description:
        'A engenharia por trás das postagens que geram vendas todos os dias: frequência, horários, ganchos e estrutura de publicação validada.',
      coverImage: '/assets/capas-modulos/modulo-3.jpg',
      badge: 'MÓDULO 03 • AULA MASTER',
      accentColor: '#ffffff',
      lessons: [
        {
          id: 'l-3-1',
          moduleId: 'mod-3',
          moduleName: 'Módulo 03: Estrutura Validada',
          number: '01',
          title: 'Estratégias de postagem para aumentar suas vendas',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/d33e0d63-efd7-49e2-9c87-536a3e3dd8b1/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Domine a estratégia validada de postagem para multiplicar a entrega dos seus vídeos e aumentar suas vendas no TikTok Shop.',
          fullContent:
            'Não basta ter um ótimo vídeo — a forma como você estrutura suas postagens dita o seu volume de vendas. Nesta aula estratégica, você vai aprender os padrões validados de publicação para maximizar cliques no produto e conversões.',
          takeaways: [
            'Estrutura completa de postagem validada em múltiplas contas.',
            'Como posicionar o link do produto, legenda, hashtags e áudio.',
            'Cadência ideal de publicações para estimular o algoritmo a entregar mais.',
          ],
          checklist: [
            'Assistir à aula Estratégias de postagem para aumentar suas vendas',
            'Aplicar o checklist da Estrutura Validada em todas as próximas publicações',
          ],
          attachments: [],
          comments: [],
        },
      ],
    },

    // ==================================================
    // MÓDULO 04: ESTILO POV
    // ==================================================
    {
      id: 'mod-4',
      number: '04',
      title: 'Estilo POV',
      description:
        'Domine a criação de cenários imersivos em primeira pessoa, geração de vídeos virais e integração estratégica POV + YouTube.',
      coverImage: '/assets/capas-modulos/modulo-4.jpg',
      badge: 'MÓDULO 04 • 4 AULAS',
      accentColor: '#ffffff',
      lessons: [
        {
          id: 'l-4-1',
          moduleId: 'mod-4',
          moduleName: 'Módulo 04: Estilo POV',
          number: '01',
          title: 'Dominando cenário',
          duration: '1080p HD',
          videoUrl: 'https://stream.cakto.com.br/57e20173-b04b-4788-a6ae-563d4029cc60/1080p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Aprenda a estruturar e dominar a composição de cenários em primeira pessoa (POV) com realismo e retenção máxima.',
          fullContent:
            'Nesta aula inaugural do módulo Estilo POV, você vai aprender passo a passo como selecionar, preparar e dominar o cenário ideal para vídeos em primeira pessoa que prendem a atenção nos primeiros segundos.',
          takeaways: [
            'Estruturação visual e enquadramento em primeira pessoa (POV).',
            'Elementos de cenário que geram curiosidade e retenção imediata.',
            'Configuração de iluminação e profundidade para realismo absoluto.',
          ],
          checklist: [
            'Assistir à aula completa de domínio de cenário',
            'Definir a referência visual do primeiro cenário POV',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-4-2',
          moduleId: 'mod-4',
          moduleName: 'Módulo 04: Estilo POV',
          number: '02',
          title: 'Gerando videos',
          duration: 'Aula Prática',
          videoUrl: 'https://stream.cakto.com.br/96e616d0-0946-42ec-82fb-1ccf31ac4b84/360p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Processo prático de geração dos vídeos no formato POV com fluidez e consistência visual.',
          fullContent:
            'Acompanhe na prática o fluxo completo para transformar seu cenário estruturado em vídeos dinâmicos no estilo POV, prontos para engajar e converter.',
          takeaways: [
            'Configuração dos parâmetros ideais de geração de vídeo.',
            'Movimentação natural de câmera em primeira pessoa.',
            'Como evitar distorções e manter a qualidade visual.',
          ],
          checklist: [
            'Executar o processo de geração do primeiro vídeo POV',
            'Validar a fluidez e naturalidade do movimento gerado',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-4-3',
          moduleId: 'mod-4',
          moduleName: 'Módulo 04: Estilo POV',
          number: '03',
          title: 'Editando e Postando',
          duration: 'Aula Prática',
          videoUrl: 'https://stream.cakto.com.br/f6d6f978-5a1b-490e-a75e-98df23b7cd0c/playlist.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Cortes estratégicos, ritmo de retenção, sonorização e configuração exata de postagem.',
          fullContent:
            'Depois de gerar o vídeo POV, a edição e a forma de postar determinam o alcance do conteúdo. Veja como finalizar o criativo e publicar do jeito certo.',
          takeaways: [
            'Edição dinâmica focada em watch time e repetição (loop).',
            'Ajuste de áudio, efeitos e sincronização.',
            'Boas práticas de publicação para entrega imediata.',
          ],
          checklist: [
            'Realizar a edição seguindo o padrão ensinado na aula',
            'Publicar o criativo aplicando as configurações recomendadas',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-4-4',
          moduleId: 'mod-4',
          moduleName: 'Módulo 04: Estilo POV',
          number: '04',
          title: 'POV + YTB',
          duration: 'Aula Prática',
          videoUrl: 'https://stream.cakto.com.br/134d24f5-6807-43e8-9890-e193135644ec/playlist.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Como combinar o formato POV com referências do YouTube para multiplicar suas fontes de criativos.',
          fullContent:
            'Aprenda a estratégia avançada de integração entre o formato POV e conteúdos do YouTube para criar vídeos únicos em escala.',
          takeaways: [
            'Mineração de referências de alta retenção no YouTube.',
            'Adaptação para o formato vertical POV.',
            'Multiplicação de criativos sem depender de gravações complexas.',
          ],
          checklist: [
            'Selecionar referências estratégicas no YouTube',
            'Criar o primeiro criativo combinando POV + YTB',
          ],
          attachments: [],
          comments: [],
        },
      ],
    },

    // ==================================================
    // MÓDULO 05: CABIDE
    // ==================================================
    {
      id: 'mod-5',
      number: '05',
      title: 'Cabide',
      description:
        'Crie vídeos altamente lucrativos exibindo peças no cabide em cenários estéticos de alto valor percebido.',
      coverImage: '/assets/capas-modulos/modulo-5.jpg',
      badge: 'MÓDULO 05 • 5 AULAS',
      accentColor: '#ffffff',
      lessons: [
        {
          id: 'l-5-1',
          moduleId: 'mod-5',
          moduleName: 'Módulo 05: Cabide',
          number: '01',
          title: 'Introdução',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/302d41df-700f-4a03-b714-b9b1d9fc1649/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Entenda o potencial do formato Cabide para apresentar produtos sem precisar de modelo.',
          fullContent:
            'O estilo Cabide é um dos formatos mais rápidos, limpos e escaláveis para vitrines de moda. Veja como funciona toda a estrutura antes de colocar a mão na massa.',
          takeaways: [
            'Vantagens do formato Cabide para escala rápida de produtos.',
            'Padrão visual que desperta desejo imediato de compra.',
            'Estrutura das aulas práticas do módulo.',
          ],
          checklist: [
            'Assistir à introdução e separar os produtos que serão trabalhados',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-5-2',
          moduleId: 'mod-5',
          moduleName: 'Módulo 05: Cabide',
          number: '02',
          title: 'criando cenário',
          duration: 'Aula Prática',
          videoUrl: 'https://stream.cakto.com.br/e71eb732-fb18-44b0-a366-f832704d6f32/360p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Como criar cenários de loja, quarto estético ou boutique para destacar o cabide.',
          fullContent:
            'Aprenda a construir o ambiente perfeito ao fundo para que a peça no cabide pareça filmada em uma boutique ou ambiente real de alto padrão.',
          takeaways: [
            'Criação de fundos limpos, elegantes e realistas.',
            'Harmonia de cores entre o ambiente e a roupa.',
            'Posicionamento do suporte e iluminação natural.',
          ],
          checklist: [
            'Criar o cenário-base para posicionar o cabide',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-5-3',
          moduleId: 'mod-5',
          moduleName: 'Módulo 05: Cabide',
          number: '03',
          title: 'colocando roupa no cabide',
          duration: 'Aula Prática',
          videoUrl: 'https://stream.cakto.com.br/56f0596c-7f16-435c-95a7-e25aba03abcf/playlist.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Técnica exata para encaixar a roupa do produto no cabide com caimento natural.',
          fullContent:
            'Veja passo a passo como posicionar a peça no cabide respeitando o peso do tecido, as alças, golas e detalhes originais do produto.',
          takeaways: [
            'Encaixe perfeito da peça no cabide sem deformar o produto.',
            'Preservação de estampas, botões e texturas reais.',
            'Ajuste fino de sombras e profundidade.',
          ],
          checklist: [
            'Aplicar a roupa escolhida no cabide dentro do cenário criado',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-5-4',
          moduleId: 'mod-5',
          moduleName: 'Módulo 05: Cabide',
          number: '04',
          title: 'Gerando video',
          duration: 'Aula Prática',
          videoUrl: 'https://stream.cakto.com.br/011c0587-f7a0-49cc-92da-5c08809af0bb/playlist.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Gerando o movimento suave de câmera e balanço natural da peça no cabide.',
          fullContent:
            'Aprenda a transformar a imagem estática do cabide em um vídeo ultra realista com movimento orgânico de câmera.',
          takeaways: [
            'Movimento sutil de aproximação e foco nos detalhes da roupa.',
            'Balanço natural do tecido para comprovar realismo.',
            'Exportação em alta nitidez.',
          ],
          checklist: [
            'Gerar o vídeo da peça no cabide com movimento fluido',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-5-5',
          moduleId: 'mod-5',
          moduleName: 'Módulo 05: Cabide',
          number: '05',
          title: 'Editando e Postando',
          duration: 'Aula Prática',
          videoUrl: 'https://stream.cakto.com.br/2b41a4eb-bbfa-4c8e-8a1e-7eecb5f44e33/playlist.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Edição final, áudio em alta e publicação otimizada para conversão no TikTok Shop.',
          fullContent:
            'Finalize seu vídeo no estilo Cabide com cortes precisos, música comercial e publique vinculando o produto corretamente.',
          takeaways: [
            'Ajustes finais de cor, nitidez e tempo de tela.',
            'Escolha de áudio e chamada para o carrinho.',
            'Publicação pronta para rodar e converter.',
          ],
          checklist: [
            'Editar e postar o vídeo finalizado na sua conta',
          ],
          attachments: [],
          comments: [],
        },
      ],
    },

    // ==================================================
    // MÓDULO 06: BUMERANGUE
    // ==================================================
    {
      id: 'mod-6',
      number: '06',
      title: 'Bumerangue',
      description:
        'Domine a técnica Bumerangue do zero: captura de cenário, modificação inteligente de roupas, geração e postagem.',
      coverImage: '/assets/capas-modulos/modulo-6.jpg',
      badge: 'MÓDULO 06 • 5 AULAS',
      accentColor: '#ffffff',
      lessons: [
        {
          id: 'l-6-1',
          moduleId: 'mod-6',
          moduleName: 'Módulo 06: Bumerangue',
          number: '01',
          title: 'Introdução',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/8e5b5302-ef76-4942-a0c0-dc24850fdcfd/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Visão geral completa sobre o formato Bumerangue e por que ele converte tanto em moda e vestuário.',
          fullContent:
            'Entenda a lógica por trás dos vídeos no estilo Bumerangue, como eles prendem a atenção do público comprador e qual é a esteira completa de produção.',
          takeaways: [
            'Por que o efeito Bumerangue gera alto engajamento em produtos de moda.',
            'Visão completa das etapas: cenário, roupa, geração e edição.',
            'Exemplos práticos de aplicação imediata.',
          ],
          checklist: [
            'Compreender o fluxo completo do método Bumerangue',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-6-2',
          moduleId: 'mod-6',
          moduleName: 'Módulo 06: Bumerangue',
          number: '02',
          title: 'Pegando cenário',
          duration: 'Aula Prática',
          videoUrl: 'https://stream.cakto.com.br/edf36bc0-947f-4f4e-94a9-c8c9d8c97682/360p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Como selecionar e capturar a base de cenário perfeita para aplicar a técnica Bumerangue.',
          fullContent:
            'Saiba exatamente onde buscar e como escolher os melhores cenários e ângulos que valorizam o caimento das peças de roupa.',
          takeaways: [
            'Critérios de escolha de cenário com aparência orgânica e autêntica.',
            'Iluminação e posicionamento ideais para vestuário.',
            'Preparação da imagem-base para a etapa de modificação.',
          ],
          checklist: [
            'Separar ao menos 3 cenários validados para seus testes',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-6-3',
          moduleId: 'mod-6',
          moduleName: 'Módulo 06: Bumerangue',
          number: '03',
          title: 'Modificando roupas',
          duration: 'Aula Prática',
          videoUrl: 'https://stream.cakto.com.br/7db42a8c-83e4-435e-bc1d-f458f26909b6/playlist.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Passo a passo técnico para substituir e ajustar qualquer peça de roupa com perfeição e fidelidade ao produto.',
          fullContent:
            'Aprenda na prática como aplicar a roupa do produto afiliado sobre a base escolhida, mantendo textura, costuras, cores e caimento ultra realistas.',
          takeaways: [
            'Substituição precisa de peças mantendo fidelidade ao produto do carrinho.',
            'Ajuste de textura, dobras e iluminação sobre o tecido.',
            'Como evitar falhas visuais nas bordas da roupa.',
          ],
          checklist: [
            'Realizar a modificação da roupa com fidelidade total ao anúncio',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-6-4',
          moduleId: 'mod-6',
          moduleName: 'Módulo 06: Bumerangue',
          number: '04',
          title: 'Gerando video',
          duration: 'Aula Prática',
          videoUrl: 'https://stream.cakto.com.br/b5673c9f-0a1a-4e29-a8e3-50c921c8b95e/360p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Transformando a imagem com a roupa modificada em um vídeo dinâmico e natural.',
          fullContent:
            'Veja como dar movimento realista à peça e à cena para gerar o vídeo base do seu Bumerangue com máxima qualidade.',
          takeaways: [
            'Comandos e ajustes para movimento natural do corpo e tecido.',
            'Tempo ideal de duração do clipe gerado.',
            'Controle de estabilidade da peça durante o movimento.',
          ],
          checklist: [
            'Gerar o vídeo a partir da imagem com a roupa aplicada',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-6-5',
          moduleId: 'mod-6',
          moduleName: 'Módulo 06: Bumerangue',
          number: '05',
          title: 'Editando e postando',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/4f3059e8-92a1-4356-b60c-478440c9a158/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Como aplicar o loop de Bumerangue na edição, finalizar os detalhes e publicar para vender.',
          fullContent:
            'A etapa final que dá o efeito hipnótico de Bumerangue: aprenda a configurar o avanço e reverso suave na edição e publicar com os parâmetros certos.',
          takeaways: [
            'Construção do loop infinito (ida e volta) sem travamentos.',
            'Velocidade e transições que aumentam a retenção.',
            'Check-up final e publicação estratégica no TikTok Shop.',
          ],
          checklist: [
            'Editar o vídeo no formato Bumerangue e publicar na conta',
          ],
          attachments: [],
          comments: [],
        },
      ],
    },

    // ==================================================
    // MÓDULO 07: PLUS SIZE
    // ==================================================
    {
      id: 'mod-7',
      number: '07',
      title: 'Plus Size',
      description:
        'Explore um dos nichos menos explorados e mais lucrativos do TikTok Shop criando influencers e vídeos Plus Size ultra realistas.',
      coverImage: '/assets/capas-modulos/modulo-7.jpg',
      badge: 'MÓDULO 07 • 5 AULAS',
      accentColor: '#ffffff',
      lessons: [
        {
          id: 'l-7-1',
          moduleId: 'mod-7',
          moduleName: 'Módulo 07: Plus Size',
          number: '01',
          title: 'Introdução',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/c5d9c8c9-ac47-4495-a60c-fe8334b74a08/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'A oportunidade gigantesca do mercado Plus Size e como se posicionar para vender todos os dias.',
          fullContent:
            'O público Plus Size possui altíssima demanda reprimida e baixa concorrência qualificada. Entenda como estruturar criativos certeiros para esse segmento.',
          takeaways: [
            'Por que o nicho Plus Size tem conversão acima da média.',
            'Quais tipos de peças e modelagens mais vendem.',
            'Visão completa do fluxo de produção.',
          ],
          checklist: [
            'Assistir à introdução e mapear produtos Plus Size vencedores',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-7-2',
          moduleId: 'mod-7',
          moduleName: 'Módulo 07: Plus Size',
          number: '02',
          title: 'Criando influencer',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/84657f2b-ced1-408e-88ae-7b5cd7962f20/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Como gerar uma modelo/influencer Plus Size ultra realista, carismática e consistente.',
          fullContent:
            'Aprenda a criar sua própria influencer Plus Size com proporções reais, pele natural e cenário autêntico para gerar conexão imediata com o público.',
          takeaways: [
            'Estrutura de prompts para biotipo Plus Size realista.',
            'Poses naturais de espelho e ambiente doméstico.',
            'Padronização da modelo para usar em múltiplos vídeos.',
          ],
          checklist: [
            'Criar a imagem-base da sua influencer Plus Size',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-7-3',
          moduleId: 'mod-7',
          moduleName: 'Módulo 07: Plus Size',
          number: '03',
          title: 'Colocando roupa',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/38c593ff-25e9-474c-86d1-34a511ba5a99/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Vestindo a modelo Plus Size mantendo o caimento real e valorizando a modelagem da peça.',
          fullContent:
            'Veja como aplicar vestidos, conjuntos, jeans e blusas na modelo Plus Size preservando exatamente os detalhes do produto anunciado.',
          takeaways: [
            'Ajuste anatômico da roupa ao corpo da modelo.',
            'Fidelidade de cor, estampa e tecido.',
            'Correção de detalhes para acabamento profissional.',
          ],
          checklist: [
            'Vestir a modelo com o produto selecionado para o criativo',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-7-4',
          moduleId: 'mod-7',
          moduleName: 'Módulo 07: Plus Size',
          number: '04',
          title: 'Gerando video',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/222acaea-b4c7-4557-b9df-ff035a68c65f/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Animando a modelo Plus Size com movimentos naturais de demonstração de look.',
          fullContent:
            'Transforme a foto pronta em um vídeo realista onde a modelo exibe o caimento da roupa com naturalidade e fluidez.',
          takeaways: [
            'Prompts de movimentação corporal suave e realista.',
            'Destaque para o caimento e conforto da peça.',
            'Geração limpa sem artefatos visuais.',
          ],
          checklist: [
            'Gerar o vídeo animado da modelo Plus Size',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-7-5',
          moduleId: 'mod-7',
          moduleName: 'Módulo 07: Plus Size',
          number: '05',
          title: 'Editando video',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/c97cbb9f-99b6-4073-ae57-f0a9be9d3ed7/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Finalização e edição estratégica para maximizar cliques no carrinho e conversões.',
          fullContent:
            'Aprenda a editar o vídeo gerado com ritmo dinâmico, ajustes visuais e preparação completa para postagem.',
          takeaways: [
            'Cortes estratégicos que valorizam os melhores momentos do vídeo.',
            'Configuração de qualidade de exportação.',
            'Preparação final para publicação.',
          ],
          checklist: [
            'Finalizar a edição do vídeo Plus Size',
          ],
          attachments: [],
          comments: [],
        },
      ],
    },

    // ==================================================
    // MÓDULO 08: MIRROR NO FACE
    // ==================================================
    {
      id: 'mod-8',
      number: '08',
      title: 'Mirror No Face',
      description:
        'Crie vídeos virais no espelho sem mostrar o rosto (Mirror No Face), gerando identificação imediata e foco 100% no look.',
      coverImage: '/assets/capas-modulos/modulo-8.jpg',
      badge: 'MÓDULO 08 • 4 AULAS',
      accentColor: '#ffffff',
      lessons: [
        {
          id: 'l-8-1',
          moduleId: 'mod-8',
          moduleName: 'Módulo 08: Mirror No Face',
          number: '01',
          title: 'Introdução + Criando Corpo',
          duration: 'Aula Prática',
          videoUrl: 'https://stream.cakto.com.br/978a3843-3f10-467e-ba43-01ba7224355d/playlist.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Como funciona o formato Mirror No Face e criação da estrutura corporal em frente ao espelho.',
          fullContent:
            'Vídeos gravados em frente ao espelho com o celular cobrindo o rosto têm estética 100% orgânica e focam toda a atenção do espectador na roupa. Aprenda a criar a base perfeita.',
          takeaways: [
            'Posicionamento do celular e ângulo de espelho que mais converte.',
            'Criação de corpo e iluminação de quarto/closet realista.',
            'Eliminação de qualquer aspecto artificial pois o rosto fica oculto.',
          ],
          checklist: [
            'Criar a base corporal Mirror No Face seguindo a aula',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-8-2',
          moduleId: 'mod-8',
          moduleName: 'Módulo 08: Mirror No Face',
          number: '02',
          title: 'Colocando roupa na modelo',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/fb40ab77-ebae-42bd-8f29-4f96ebe76c49/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Aplicação precisa do look na modelo em frente ao espelho mantendo todos os detalhes do produto.',
          fullContent:
            'Veja como vestir sua modelo Mirror No Face com a peça do TikTok Shop, respeitando reflexo, iluminação e textura original.',
          takeaways: [
            'Técnica de aplicação da roupa em poses de espelho.',
            'Cuidado com a mão e o celular à frente do corpo.',
            'Acabamento limpo e ultra fiel ao anúncio.',
          ],
          checklist: [
            'Aplicar a roupa do produto na base Mirror No Face',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-8-3',
          moduleId: 'mod-8',
          moduleName: 'Módulo 08: Mirror No Face',
          number: '03',
          title: 'Gerando vídeo',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/b20dda47-f7ee-4f59-91da-98fbdd3db598/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Gerando o movimento autêntico de gravação em frente ao espelho.',
          fullContent:
            'Aprenda a animar a cena para reproduzir o movimento real de alguém gravando o próprio look no espelho com o celular.',
          takeaways: [
            'Movimento natural de quadril, postura e celular.',
            'Comportamento realista do tecido da roupa em movimento.',
            'Como validar o resultado final antes da edição.',
          ],
          checklist: [
            'Gerar o vídeo Mirror No Face com movimento orgânico',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-8-4',
          moduleId: 'mod-8',
          moduleName: 'Módulo 08: Mirror No Face',
          number: '04',
          title: 'Editando e postando',
          duration: 'Aula Prática',
          videoUrl: 'https://stream.cakto.com.br/6f840c40-c7ce-4834-9260-c361128ddd56/360p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Edição rápida e estratégica para publicar seus vídeos Mirror No Face com alto alcance.',
          fullContent:
            'Finalize o vídeo com os cortes, ritmo e configurações ideais para postar e escalar suas vendas.',
          takeaways: [
            'Ajuste de tempo e cortes para retenção máxima.',
            'Configuração de postagem e vinculação do produto.',
            'Padrão de frequência para alimentar a conta.',
          ],
          checklist: [
            'Editar e publicar o vídeo Mirror No Face',
          ],
          attachments: [],
          comments: [],
        },
      ],
    },

    // ==================================================
    // MÓDULO 09: NO FACE
    // ==================================================
    {
      id: 'mod-9',
      number: '09',
      title: 'No Face',
      description:
        'Domine o formato No Face (enquadramento focado no corpo e no produto sem exibir o rosto) para produzir em alta velocidade.',
      coverImage: '/assets/capas-modulos/modulo-9.jpg',
      badge: 'MÓDULO 09 • 4 AULAS',
      accentColor: '#ffffff',
      lessons: [
        {
          id: 'l-9-1',
          moduleId: 'mod-9',
          moduleName: 'Módulo 09: No Face',
          number: '01',
          title: 'Introdução + Criando Corpo',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/b96f65a5-342f-459d-8408-45f68a340182/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Fundamentos do formato No Face e criação da estrutura corporal com enquadramento focado no look.',
          fullContent:
            'No formato No Face, o enquadramento vai do pescoço para baixo, eliminando qualquer distração e destacando 100% o caimento da peça no corpo.',
          takeaways: [
            'Enquadramento estratégico que valoriza o produto.',
            'Criação de bases corporais versáteis para diferentes nichos.',
            'Agilidade de produção em escala.',
          ],
          checklist: [
            'Criar a base corporal No Face conforme demonstrado',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-9-2',
          moduleId: 'mod-9',
          moduleName: 'Módulo 09: No Face',
          number: '02',
          title: 'Colocando roupa na modelo',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/efc791d6-c62b-4af4-a754-83c442dc4e60/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Como vestir a modelo No Face com precisão milimétrica nos detalhes da peça.',
          fullContent:
            'Como o foco do vídeo No Face está totalmente no tronco e nas pernas, a aplicação da roupa precisa ser impecável. Veja como fazer passo a passo.',
          takeaways: [
            'Alinhamento perfeito da peça no enquadramento aproximado.',
            'Nitidez de tecido, costuras e caimento.',
            'Validação visual comparando com a foto real do lojista.',
          ],
          checklist: [
            'Aplicar a roupa na base No Face com máxima nitidez',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-9-3',
          moduleId: 'mod-9',
          moduleName: 'Módulo 09: No Face',
          number: '03',
          title: 'Gerando vídeo',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/99fe4e65-078c-4460-9016-aba07b6023b1/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Geração de vídeo com movimento natural mostrando todos os detalhes da peça no corpo.',
          fullContent:
            'Aprenda a animar a cena No Face para que a modelo mostre o caimento da roupa com naturalidade, giro sutil e fluidez.',
          takeaways: [
            'Prompts específicos para movimentação de mostruário no corpo.',
            'Estabilidade de imagem e consistência da peça.',
            'Ajustes para resultado 100% humanizado.',
          ],
          checklist: [
            'Gerar o vídeo No Face em alta definição',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-9-4',
          moduleId: 'mod-9',
          moduleName: 'Módulo 09: No Face',
          number: '04',
          title: 'Editando e postando',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/c182320b-662e-4dd9-8146-5ab6a1ae555d/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Edição dinâmica e publicação estratégica para converter visualizações em vendas.',
          fullContent:
            'Finalize o criativo No Face com edição limpa e publique seguindo as diretrizes de conversão do treinamento.',
          takeaways: [
            'Finalização rápida na linha do tempo.',
            'Otimização visual e sonora para o feed.',
            'Publicação e acompanhamento das primeiras métricas.',
          ],
          checklist: [
            'Editar e postar seu criativo No Face',
          ],
          attachments: [],
          comments: [],
        },
      ],
    },

    // ==================================================
    // MÓDULO 10: ALGORITMO TIKTOK SHOP
    // ==================================================
    {
      id: 'mod-10',
      number: '10',
      title: 'Algoritmo TikTok Shop',
      description:
        'Domine o funcionamento do algoritmo de vendas do TikTok Shop, definição de metas claras, organização de rotina e propósito inabalável.',
      coverImage: '/assets/capas-modulos/modulo-10.jpg',
      badge: 'MÓDULO 10 • 4 AULAS',
      accentColor: '#ffffff',
      lessons: [
        {
          id: 'l-10-1',
          moduleId: 'mod-10',
          moduleName: 'Módulo 10: Algoritmo TikTok Shop',
          number: '01',
          title: 'Aprendendo sobre Algoritimo',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/cbfcbe04-db3d-4955-b5e8-89b409d579d8/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Entenda exatamente como o algoritmo do TikTok Shop distribui vídeos com carrinho e encontra compradores.',
          fullContent:
            'O algoritmo de e-commerce do TikTok funciona de forma diferente do algoritmo de entretenimento comum. Descubra quais sinais ele lê nos primeiros minutos após a postagem para impulsionar seus vídeos para pessoas prontas para comprar.',
          takeaways: [
            'Como funciona a esteira de testes de entrega do TikTok Shop.',
            'Sinais de retenção, clique no produto e intenção de compra.',
            'Como trabalhar a favor do algoritmo todos os dias.',
          ],
          checklist: [
            'Assistir à aula Aprendendo sobre Algoritimo e revisar suas postagens',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-10-2',
          moduleId: 'mod-10',
          moduleName: 'Módulo 10: Algoritmo TikTok Shop',
          number: '02',
          title: 'Metas',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/88b5b3b5-9af3-4b27-98a2-9a9a19ed923b/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Como traçar metas tangíveis de produção e faturamento para manter evolução contínua.',
          fullContent:
            'Quem não sabe onde quer chegar aceita qualquer resultado. Aprenda a quebrar grandes metas financeiras em metas operacionais diárias que estão 100% sob o seu controle.',
          takeaways: [
            'Diferença entre meta de resultado (vendas) e meta de execução (vídeos postados).',
            'Como estruturar seus marcos de 7, 15 e 30 dias.',
            'Acompanhamento de evolução semanal.',
          ],
          checklist: [
            'Escrever suas metas diárias de produção e mensais de faturamento',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-10-3',
          moduleId: 'mod-10',
          moduleName: 'Módulo 10: Algoritmo TikTok Shop',
          number: '03',
          title: 'Organização',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/359320fc-f7dd-413a-b64b-0531a1d9ee47/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Método prático de organização de arquivos, prompts, produtos e horários para produzir em dobro na metade do tempo.',
          fullContent:
            'A desorganização mata a constância. Veja como estruturar seu fluxo de trabalho para separar produtos, gerar imagens na Orbiex, animar e editar em blocos produtivos.',
          takeaways: [
            'Produção em blocos: separação de produtos, geração e edição.',
            'Como organizar suas pastas de criativos e referências.',
            'Rotina enxuta para não perder tempo.',
          ],
          checklist: [
            'Organizar seu ambiente e fluxo de produção diária',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-10-4',
          moduleId: 'mod-10',
          moduleName: 'Módulo 10: Algoritmo TikTok Shop',
          number: '04',
          title: 'Propósito',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/2ebab4c0-9f8e-4978-a79d-f84d080efb4a/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'A força motora por trás dos membros que constroem resultados extraordinários no Projeto.',
          fullContent:
            'Para fechar o módulo de Algoritmo e Gestão, conecte sua execução diária ao propósito real que trouxe você até o Projeto. É isso que mantém você imparável.',
          takeaways: [
            'Blindagem mental contra distrações e procrastinação.',
            'Clareza sobre o motivo pelo qual você está construindo seu negócio.',
            'Compromisso inegociável com o seu resultado.',
          ],
          checklist: [
            'Concluir o Módulo 10 com clareza total de propósito e direção',
          ],
          attachments: [],
          comments: [],
        },
      ],
    },

    // ==================================================
    // MÓDULO 11: 1K EM 30 DIAS
    // ==================================================
    {
      id: 'mod-11',
      number: '11',
      title: '1K em 30 Dias',
      description:
        'O desafio prático passo a passo: criação e animação de modelo ultra realista, edição, plano de ação, Grok, Freepink, YouTube Create e Biblioteca Orbiex IA.',
      coverImage: '/assets/capas-modulos/modulo-11.jpg',
      badge: 'MÓDULO 11 • 9 AULAS + MATERIAIS',
      accentColor: '#ffffff',
      lessons: [
        {
          id: 'l-11-1',
          moduleId: 'mod-11',
          moduleName: 'Módulo 11: 1K em 30 Dias',
          number: '01',
          title: 'Bem vindo ao desafio !',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/e51b0efc-f1a7-473f-9294-1536843a1fa1/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Boas-vindas ao desafio 1K em 30 Dias: regras do jogo, comprometimento e visão geral da jornada.',
          fullContent:
            'Bem-vindo ao Desafio 1K em 30 Dias! Entenda como funciona o cronograma prático para sair do absoluto zero e conquistar seus primeiros resultados sólidos em 30 dias de execução focada.',
          takeaways: [
            'Como aproveitar 100% do desafio pelos próximos 30 dias.',
            'O que diferencia os alunos que batem a meta rapidamente.',
            'Organização da rotina diária de produção.',
          ],
          checklist: [
            'Assumir o compromisso de execução diária pelos 30 dias',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-11-2',
          moduleId: 'mod-11',
          moduleName: 'Módulo 11: 1K em 30 Dias',
          number: '02',
          title: 'Criando sua modelo ultra realista',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/8f28436a-9081-4dfe-ad1f-12a555207e8c/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Como criar do zero uma modelo digital ultra realista com textura de pele humana e feições naturais.',
          fullContent:
            'Aprenda o método completo para gerar sua modelo ultra realista, garantindo aparência 100% humana, iluminação orgânica e alta credibilidade.',
          takeaways: [
            'Construção da identidade visual da sua modelo.',
            'Textura de pele, cabelo e iluminação natural.',
            'Como manter consistência nas gerações.',
          ],
          checklist: [
            'Gerar sua primeira modelo ultra realista',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-11-3',
          moduleId: 'mod-11',
          moduleName: 'Módulo 11: 1K em 30 Dias',
          number: '03',
          title: 'Como animar sua modelo',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/8e698f47-980c-466b-8e5d-836fab18bdfd/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Transformando a imagem estática da sua modelo em um vídeo fluido e impossível de distinguir de uma gravação real.',
          fullContent:
            'Domine a etapa de animação da modelo para criar movimentos sutis, expressões naturais e apresentação impecável dos produtos.',
          takeaways: [
            'Configuração exata para animar sem distorcer o rosto ou mãos.',
            'Direcionamento de movimento natural de câmera.',
            'Exportação pronta para edição.',
          ],
          checklist: [
            'Animar sua modelo ultra realista seguindo os parâmetros da aula',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-11-4',
          moduleId: 'mod-11',
          moduleName: 'Módulo 11: 1K em 30 Dias',
          number: '04',
          title: 'Aprendendo a editar',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/050371b0-e101-4294-84f8-e9a8d4ca644c/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Passo a passo de edição prática para deixar seus criativos prontos para performar no algoritmo.',
          fullContent:
            'Aprenda a editar seus vídeos de forma rápida e objetiva, aplicando os cortes, ajustes de ritmo e elementos que retêm a audiência até o fim.',
          takeaways: [
            'Estrutura de edição enxuta e focada em conversão.',
            'Ajustes de tempo, transições e áudio.',
            'Como ganhar velocidade editando em lote.',
          ],
          checklist: [
            'Editar seu vídeo aplicando a estrutura ensinada',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-11-5',
          moduleId: 'mod-11',
          moduleName: 'Módulo 11: 1K em 30 Dias',
          number: '05',
          title: 'Plano / Direcionamento',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/40e7227d-b145-4c9e-98f0-cdc2cf0dc11f/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'O plano tático de direcionamento diário para alcançar a meta de 1K em 30 dias com consistência.',
          fullContent:
            'Não basta saber criar o vídeo — você precisa de direção clara sobre quantos vídeos postar, como escolher os produtos e como manter a constância ao longo das 4 semanas.',
          takeaways: [
            'Meta diária de produção e postagem.',
            'Como organizar sua esteira semanal de testes.',
            'Análise do que está funcionando para dobrar a aposta.',
          ],
          checklist: [
            'Estruturar seu plano semanal de postagens',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-11-6',
          moduleId: 'mod-11',
          moduleName: 'Módulo 11: 1K em 30 Dias',
          number: '06',
          title: 'Grok',
          duration: '720p HD • Com Material',
          videoUrl: 'https://stream.cakto.com.br/16ae0160-76c9-4047-8508-44a5cf4a48d0/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Como utilizar o Grok para geração de imagens e vídeos com os prompts oficiais disponibilizados abaixo.',
          fullContent:
            'Aprenda a dominar o Grok na sua operação e utilize o documento oficial de prompts abaixo para copiar e aplicar diretamente nos seus criativos.',
          takeaways: [
            'Como configurar e extrair o máximo de qualidade no Grok.',
            'Uso prático dos prompts validados da aula.',
            'Otimização do fluxo de geração rápida.',
          ],
          checklist: [
            'Assistir à aula prática sobre o Grok',
            'Acessar o documento de PROMPTS utilizados na aula no botão de material complementar',
          ],
          attachments: [
            {
              id: 'att-11-6',
              name: 'Acesse os PROMPTS utilizados na aula (Google Docs)',
              description: 'Documento oficial com todos os prompts utilizados na aula de Grok.',
              size: 'Google Docs',
              type: 'link',
              url: 'https://docs.google.com/document/d/1gdn4LH7UX2e5ykHK-K09Aco1h48yklMWGOLM4mEIyPM/edit?usp=sharing',
            },
          ],
          comments: [],
        },
        {
          id: 'l-11-7',
          moduleId: 'mod-11',
          moduleName: 'Módulo 11: 1K em 30 Dias',
          number: '07',
          title: 'Freepink',
          duration: '720p HD • Com Material',
          videoUrl: 'https://stream.cakto.com.br/df4ba060-89f3-46cd-a997-e37b60495a89/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Domine a ferramenta na prática e acesse diretamente pelo link exclusivo no material complementar.',
          fullContent:
            'Veja passo a passo como utilizar o espaço configurado da ferramenta para elevar o nível de realismo e definição das suas criações.',
          takeaways: [
            'Acesso direto ao ambiente configurado da ferramenta.',
            'Configurações recomendadas para máxima fidelidade visual.',
            'Fluxo completo de uso na prática.',
          ],
          checklist: [
            'Assistir à aula completa',
            'Clicar no LINK DE ACESSO à ferramenta no material complementar',
          ],
          attachments: [
            {
              id: 'att-11-7',
              name: 'LINK DE ACESSO à ferramenta (Magnific / Freepink)',
              description: 'Link de convite direto para acessar o espaço exclusivo da ferramenta mostrada na aula.',
              size: 'Acesso Direto',
              type: 'link',
              url: 'https://www.magnific.com/app/spaces/a1dba314-f454-4e15-8194-d65e9271dfcd/invite?payload=eyJpdiI6Ijh3OFJTWWVVSUdwOXFnZHNETEhSTnc9PSIsInZhbHVlIjoiRzg0Tk5EN2xLNEhEWDUvNDdNOFVjNkNkem9KRE9rN0N5a2dZcWVwZXA0Z0dnUWZxWnBrNU1IRlpLZ0xObTVTSHE0TWNtMjNKeEpPczhjNHFBRlZXRG45Zm82eml0ZG5ZYTdEclNkQVI0dVZ6Sml5Q0lCNWlHZVEydElzemJDd2kiLCJtYWMiOiI0ZmVjNGJiZGMwYjFhYWViMmZmYTFkODU3M2UyNzVkYzRhOWNiNjc3MDE1MDViMDM2NWMzMGE2NTI4YTNhZWQyIiwidGFnIjoiIn0%3D',
            },
          ],
          comments: [],
        },
        {
          id: 'l-11-8',
          moduleId: 'mod-11',
          moduleName: 'Módulo 11: 1K em 30 Dias',
          number: '08',
          title: 'Youtube create / 0 custo',
          duration: '720p HD • Com Material',
          videoUrl: 'https://stream.cakto.com.br/0a9118da-3ec7-475a-aa7e-57e9b9988141/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Estratégia completa para produzir criativos com custo zero utilizando o YouTube Create e os prompts da aula.',
          fullContent:
            'Aprenda como produzir e escalar criativos sem precisar gastar com ferramentas caras, combinando o método 0 custo com a nossa lista de prompts exclusiva.',
          takeaways: [
            'Como operar no modelo 0 custo com alta qualidade.',
            'Aplicação prática dos prompts do documento oficial.',
            'Passo a passo do início à exportação.',
          ],
          checklist: [
            'Assistir à aula Youtube create / 0 custo',
            'Abrir o LINK DOS PROMPTS no material complementar abaixo',
          ],
          attachments: [
            {
              id: 'att-11-8',
              name: 'LINK DOS PROMPTS — YouTube Create / 0 Custo (Google Docs)',
              description: 'Documento oficial com os prompts prontos para utilizar na estratégia 0 custo.',
              size: 'Google Docs',
              type: 'link',
              url: 'https://docs.google.com/document/d/1zaV0rQz6MMhyMQpPMIulCbxv1n-eMRkohFpZm1SuSpo/edit?usp=sharing',
            },
          ],
          comments: [],
        },
        {
          id: 'l-11-9',
          moduleId: 'mod-11',
          moduleName: 'Módulo 11: 1K em 30 Dias',
          number: '09',
          title: 'Criando modelo ultra realista | atualizado',
          duration: '720p HD • Material Orbiex',
          videoUrl: 'https://stream.cakto.com.br/43b9ea5e-8268-430f-9308-f8342c4f0ca7/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Método atualizado para criar modelos ultra realistas utilizando a Biblioteca de Prompts e o Agente de IA da Orbiex.',
          fullContent:
            'Importante: todas as aulas foram gravadas com o material anterior, mas neste exato momento utilizamos 100% o material e o Agente de IA da Orbiex, que é o que mais compensa para toda a galera do Projeto. Como todo membro do Projeto já tem acesso à Orbiex, pegue seus prompts diretamente na Biblioteca de Prompts da Orbiex!',
          takeaways: [
            'Novo fluxo atualizado de criação de modelos ultra realistas.',
            'Utilização direta do Agente de IA da Orbiex e da Biblioteca de Prompts da Orbiex.',
            'Qualidade fotográfica superior e o melhor custo-benefício para membros do Projeto.',
          ],
          checklist: [
            'Acessar a Biblioteca de Prompts da Orbiex (já liberada para membros do Projeto)',
            'Aplicar o material da Orbiex na criação da sua modelo ultra realista',
          ],
          attachments: [
            {
              id: 'att-11-9',
              name: 'Biblioteca Oficial de Prompts & Material da Orbiex (Agente de IA)',
              description:
                'Todo membro do Projeto já possui a Orbiex liberada. Utilize diretamente a Biblioteca de Prompts da Orbiex e o Agente de IA da Orbiex para aplicar esta aula.',
              size: 'Orbiex IA • Incluso no Projeto',
              type: 'template',
              downloadContent:
                'DIRETRIZ OFICIAL DO PROJETO — ORBIEX IA\n\nTodas as aulas foram gravadas utilizando o material anterior, mas neste exato momento utilizamos 100% o material da Orbiex (nosso Agente de IA), que é o que mais compensa para toda a galera do Projeto.\n\nTodo mundo que está dentro do Projeto já tem a Orbiex liberada:\n1. Acesse o Agente de IA da Orbiex\n2. Pegue os comandos diretamente na Biblioteca de Prompts da Orbiex\n3. Utilize o material da Orbiex em todas as suas criações.',
            },
          ],
          comments: [],
        },
      ],
    },

    // ==================================================
    // MÓDULO 12: ESCALA
    // ==================================================
    {
      id: 'mod-12',
      number: '12',
      title: 'Escala',
      description:
        'Como multiplicar seus resultados: análise de métricas reais, mentalidade de operação e a estratégia validada 3,3,3.',
      coverImage: '/assets/capas-modulos/modulo-12-escala.jpg',
      badge: 'MÓDULO 12 • 4 AULAS',
      accentColor: '#ffffff',
      lessons: [
        {
          id: 'l-12-1',
          moduleId: 'mod-12',
          moduleName: 'Módulo 12: Escala',
          number: '01',
          title: 'Contando sobre a escala (introdução)',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/8cf86be1-71a2-4775-9e0f-aa36e28c6ce3/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'O que realmente significa escalar uma operação no TikTok Shop e como sair de vendas isoladas para faturamento constante.',
          fullContent:
            'Entenda os pilares da fase de escala: como identificar o momento certo de acelerar e estruturar múltiplas frentes de vendas.',
          takeaways: [
            'Transição da fase de validação para a fase de escala.',
            'Erros que travam o crescimento e como evitá-los.',
            'Visão de longo prazo e construção de ativos.',
          ],
          checklist: [
            'Assistir à introdução sobre escala operacional',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-12-2',
          moduleId: 'mod-12',
          moduleName: 'Módulo 12: Escala',
          number: '02',
          title: 'Analisando dados',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/e3810b51-25e3-436b-ac9e-f040f42645d4/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Como ler os dados dos seus vídeos e produtos para tomar decisões baseadas em números reais.',
          fullContent:
            'Aprenda a interpretar retenção, taxa de clique no produto, conversão e horários para repetir padrões vencedores.',
          takeaways: [
            'Quais métricas realmente importam no painel do TikTok Shop.',
            'Como identificar um vídeo pré-viral através dos dados.',
            'Otimização baseada em performance comprovada.',
          ],
          checklist: [
            'Analisar as métricas dos seus últimos vídeos publicados',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-12-3',
          moduleId: 'mod-12',
          moduleName: 'Módulo 12: Escala',
          number: '03',
          title: 'Mentalidade',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/e2e325a6-a7e3-4ef0-b54d-4ce818297fda/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'A mentalidade profissional de quem constrói uma operação sólida, resiliente e altamente lucrativa.',
          fullContent:
            'Operadores de elite tratam o TikTok Shop como um negócio sério. Desenvolva a disciplina e visão estratégica necessárias para escalar sem desistir no meio do caminho.',
          takeaways: [
            'Consistência operacional acima de motivação passageira.',
            'Como lidar com testes de produtos e variações de alcance.',
            'Foco em volume com qualidade.',
          ],
          checklist: [
            'Alinhar sua rotina e mentalidade de execução diária',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-12-4',
          moduleId: 'mod-12',
          moduleName: 'Módulo 12: Escala',
          number: '04',
          title: 'Estratégia 3,3,3',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/1a9de576-9189-437c-8a95-908624ce80f0/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'O método prático 3,3,3 para testar, validar e escalar produtos e criativos com máxima velocidade.',
          fullContent:
            'Conheça e aplique a Estratégia 3,3,3 — o framework definitivo para organizar seus testes de produtos, ângulos e postagens para encontrar campeões de vendas.',
          takeaways: [
            'Como funciona a regra 3,3,3 passo a passo.',
            'Organização prática da rotina de postagens usando o método.',
            'Multiplicação dos vídeos que apresentarem maior conversão.',
          ],
          checklist: [
            'Implementar a Estratégia 3,3,3 na sua operação hoje mesmo',
          ],
          attachments: [],
          comments: [],
        },
      ],
    },

    // ==================================================
    // MÓDULO 13: ONIPROMPT / ONE PROMPT
    // ==================================================
    {
      id: 'mod-13',
      number: '13',
      title: 'Oniprompt / One Prompt',
      description:
        'Domine a tecnologia Oniprompt / One Prompt em 1080p Full HD: como extrair o prompt exato e gerar vídeos perfeitos em segundos.',
      coverImage: '/assets/capas-modulos/modulo-13-oneprompt.jpg',
      badge: 'MÓDULO 13 • 3 AULAS',
      accentColor: '#ffffff',
      lessons: [
        {
          id: 'l-13-1',
          moduleId: 'mod-13',
          moduleName: 'Módulo 13: Oniprompt / One Prompt',
          number: '01',
          title: 'Introdução',
          duration: '1080p HD',
          videoUrl: 'https://stream.cakto.com.br/e9ce1d8e-27c5-4a6c-b37b-030bfa5e564d/1080p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Como funciona o sistema Oniprompt / One Prompt e como ele acelera drasticamente sua criação.',
          fullContent:
            'Entenda o conceito do One Prompt: como condensar toda a instrução visual necessária em um único comando poderoso para resultados consistentes.',
          takeaways: [
            'Fundamentos do método Oniprompt / One Prompt.',
            'Economia de tempo e padronização de qualidade.',
            'Visão geral das ferramentas utilizadas.',
          ],
          checklist: [
            'Assistir à aula introdutória em 1080p',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-13-2',
          moduleId: 'mod-13',
          moduleName: 'Módulo 13: Oniprompt / One Prompt',
          number: '02',
          title: 'Gerando Video',
          duration: '1080p HD',
          videoUrl: 'https://stream.cakto.com.br/7dee051a-55d5-4440-a787-5da948b29732/1080p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Demonstração prática da geração de vídeo utilizando a estrutura One Prompt.',
          fullContent:
            'Acompanhe na tela a geração completa do vídeo aplicando o comando estruturado para obter movimento, iluminação e fidelidade.',
          takeaways: [
            'Execução prática da geração de vídeo.',
            'Ajustes de parâmetros para resolução máxima.',
            'Validação do resultado final.',
          ],
          checklist: [
            'Gerar seu vídeo utilizando o método ensinado',
          ],
          attachments: [],
          comments: [],
        },
        {
          id: 'l-13-3',
          moduleId: 'mod-13',
          moduleName: 'Módulo 13: Oniprompt / One Prompt',
          number: '03',
          title: 'Pegando Prompt',
          duration: '1080p HD',
          videoUrl: 'https://stream.cakto.com.br/841308cb-5138-4690-bc30-b0340f4642bc/1080p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Como extrair e estruturar o prompt perfeito para replicar qualquer estilo de vídeo.',
          fullContent:
            'Aprenda a técnica exata para capturar e montar o prompt ideal a partir das suas referências de produtos e cenas.',
          takeaways: [
            'Engenharia reversa de cenas para extração de prompt.',
            'Personalização rápida para qualquer produto.',
            'Criação do seu próprio banco de prompts validados.',
          ],
          checklist: [
            'Extrair e testar seu primeiro One Prompt personalizado',
          ],
          attachments: [],
          comments: [],
        },
      ],
    },

    // ==================================================
    // MÓDULO 14: 2K DE SEGUIDORES
    // ==================================================
    {
      id: 'mod-14',
      number: '14',
      title: '2K de Seguidores',
      description:
        'A metodologia validada na prática para conquistar rapidamente os 2.000 seguidores e destravar todas as funcionalidades comerciais da conta.',
      coverImage: '/assets/capas-modulos/modulo-14-2k.jpg',
      badge: 'MÓDULO 14 • AULA PRÁTICA',
      accentColor: '#ffffff',
      lessons: [
        {
          id: 'l-14-1',
          moduleId: 'mod-14',
          moduleName: 'Módulo 14: 2K de Seguidores',
          number: '01',
          title: 'Metodologia na prática',
          duration: '720p HD',
          videoUrl: 'https://stream.cakto.com.br/5c04ccd8-eeec-40c8-b04d-38f9e19c0d1e/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Passo a passo direto ao ponto aplicando a metodologia prática para bater 2K de seguidores em tempo recorde.',
          fullContent:
            'Precisa bater a meta de seguidores para destravar novas contas de TikTok Shop com velocidade? Nesta aula prática você aprende exatamente como aplicar a nossa metodologia para atingir 2.000 seguidores qualificados de forma rápida e segura.',
          takeaways: [
            'Como funciona a metodologia prática para atingir 2K de seguidores.',
            'Execução passo a passo na tela para acelerar o crescimento do perfil.',
            'Como manter a integridade da conta durante o crescimento acelerado.',
          ],
          checklist: [
            'Assistir à aula Metodologia na prática',
            'Aplicar o método nas contas que precisam atingir 2K de seguidores',
          ],
          attachments: [],
          comments: [],
        },
      ],
    },

    // ==================================================
    // MÓDULO 15: CENTRAL DE PROMPTS & FERRAMENTAS (ORBIEX IA)
    // ==================================================
    {
      id: 'mod-15',
      number: '15',
      title: 'Central de Prompts & Ferramentas',
      description:
        'Diretriz oficial para membros do Projeto: utilize o Agente de IA da Orbiex, a Biblioteca de Prompts da Orbiex e todo o material oficial da Orbiex na sua operação.',
      coverImage: '/assets/capas-modulos/modulo-15.jpg',
      badge: 'MÓDULO 15 • ORBIEX IA',
      accentColor: '#ffffff',
      lessons: [
        {
          id: 'l-15-1',
          moduleId: 'mod-15',
          moduleName: 'Módulo 15: Central de Prompts & Ferramentas',
          number: '01',
          title: 'Utilizando o Agente de IA & Biblioteca de Prompts da Orbiex',
          duration: '720p HD • Diretriz Oficial',
          videoUrl: 'https://stream.cakto.com.br/43b9ea5e-8268-430f-9308-f8342c4f0ca7/720p/video.m3u8',
          coverImage: '/assets/thumb-continuar-aula.jpg',
          description:
            'Por que todos os membros do Projeto devem utilizar a Orbiex (nosso Agente de IA) e pegar todos os comandos diretamente da Biblioteca de Prompts da Orbiex.',
          fullContent:
            'Atenção total a esta orientação: todas as aulas práticas desta formação foram gravadas inicialmente com o meu material antigo, porém, neste exato momento, eu estou utilizando 100% o material da Orbiex — que é o Agente de IA oficial e é o que mais compensa de longe para toda a galera do Projeto. Todo mundo que está dentro do Projeto já tem acesso à Orbiex, então você não precisa buscar nada fora: pegue todos os seus comandos diretamente da Biblioteca de Prompts da Orbiex e utilize o material da Orbiex em todas as suas criações.',
          takeaways: [
            'Todas as aulas foram feitas com o material antigo, mas hoje utilizamos 100% o material da Orbiex.',
            'A Orbiex (Agente de IA) é a ferramenta que mais compensa em qualidade, velocidade e resultado para a galera do Projeto.',
            'Todo membro que está dentro do Projeto já tem a Orbiex liberada.',
            'Pegue sempre seus prompts na Biblioteca de Prompts da Orbiex e aplique o material da Orbiex em cada módulo.',
          ],
          checklist: [
            'Utilizar exclusivamente o Agente de IA da Orbiex na operação',
            'Pegar os prompts diretamente na Biblioteca de Prompts da Orbiex',
            'Aplicar o material da Orbiex em todos os formatos (POV, Bumerangue, Cabide, Plus Size, Mirror No Face e No Face)',
          ],
          attachments: [
            {
              id: 'att-15-1',
              name: 'Orbiex — Agente de IA & Biblioteca Oficial de Prompts',
              description:
                'Todo membro do Projeto já tem a Orbiex. Utilize a Biblioteca de Prompts da Orbiex e o material da Orbiex — é o que mais compensa para a sua operação.',
              size: 'Orbiex IA • Liberado para Membros',
              type: 'template',
              downloadContent:
                'GUIA OFICIAL — CENTRAL DE PROMPTS & FERRAMENTAS (ORBIEX IA)\n\n1. O QUE UTILIZAR AGORA:\nTodas as aulas foram feitas com o material antigo, mas nesse exato momento estamos utilizando 100% o material da Orbiex (Agente de IA), que é o que mais compensa para toda a galera do Projeto.\n\n2. ACESSO DOS MEMBROS:\nTodo mundo que está dentro do Projeto já tem a Orbiex liberada.\n\n3. COMO APLICAR NAS AULAS:\nSempre que uma aula pedir criação de cenário, modelo ultra realista, substituição de roupa ou geração de vídeo, pegue os comandos diretamente da Biblioteca de Prompts da Orbiex e utilize o material da Orbiex.',
            },
            {
              id: 'att-15-2',
              name: 'PROMPTS Utilizados na Aula — Grok (Google Docs)',
              description: 'Material complementar de apoio da aula de Grok.',
              size: 'Google Docs',
              type: 'link',
              url: 'https://docs.google.com/document/d/1gdn4LH7UX2e5ykHK-K09Aco1h48yklMWGOLM4mEIyPM/edit?usp=sharing',
            },
            {
              id: 'att-15-3',
              name: 'LINK DE ACESSO à Ferramenta — Freepink / Magnific',
              description: 'Link complementar mostrado na aula de Freepink.',
              size: 'Acesso Direto',
              type: 'link',
              url: 'https://www.magnific.com/app/spaces/a1dba314-f454-4e15-8194-d65e9271dfcd/invite?payload=eyJpdiI6Ijh3OFJTWWVVSUdwOXFnZHNETEhSTnc9PSIsInZhbHVlIjoiRzg0Tk5EN2xLNEhEWDUvNDdNOFVjNkNkem9KRE9rN0N5a2dZcWVwZXA0Z0dnUWZxWnBrNU1IRlpLZ0xObTVTSHE0TWNtMjNKeEpPczhjNHFBRlZXRG45Zm82eml0ZG5ZYTdEclNkQVI0dVZ6Sml5Q0lCNWlHZVEydElzemJDd2kiLCJtYWMiOiI0ZmVjNGJiZGMwYjFhYWViMmZmYTFkODU3M2UyNzVkYzRhOWNiNjc3MDE1MDViMDM2NWMzMGE2NTI4YTNhZWQyIiwidGFnIjoiIn0%3D',
            },
            {
              id: 'att-15-4',
              name: 'LINK DOS PROMPTS — YouTube Create / 0 Custo (Google Docs)',
              description: 'Material complementar de apoio da aula YouTube Create / 0 custo.',
              size: 'Google Docs',
              type: 'link',
              url: 'https://docs.google.com/document/d/1zaV0rQz6MMhyMQpPMIulCbxv1n-eMRkohFpZm1SuSpo/edit?usp=sharing',
            },
          ],
          comments: [],
        },
      ],
    },
  ],
};
