// src/components/Content.js
import React, { useState } from 'react';
import './Content.css';

function Content() {
  // Estrutura de dados com informações dos filósofos
  const [filosofo, setFilosofo] = useState('');
  const [resultado, setResultado] = useState(null);

  const filosofos = {
    "Nietzsche": {
      biografia: `Friedrich Nietzsche (1844-1900) foi um filósofo, poeta e crítico cultural alemão, amplamente reconhecido como um dos pensadores mais influentes da modernidade. Nascido em Röcken, na Prússia, Nietzsche começou sua carreira acadêmica como professor de filologia clássica na Universidade da Basiléia. No entanto, sua paixão pela filosofia rapidamente o levou a se afastar da academia e a se dedicar à escrita.
  
      Nietzsche desafiou as bases do cristianismo e da moralidade tradicional ocidental. Suas obras são notáveis pela prosa poética e pela profundidade das suas ideias, abordando temas como a vontade de poder, o eterno retorno e o conceito do 'Übermensch' (além-do-homem). Ele acreditava que a moralidade era uma construção humana, e que os valores tradicionais deveriam ser reavaliados à luz de uma nova perspectiva.
  
      A influência de Nietzsche se estendeu por várias disciplinas, incluindo literatura, psicologia e arte. Ele criticou a cultura ocidental por sua conformidade e apatia, instigando a busca pela autenticidade e pela autoafirmação. Seu trabalho continua a ressoar com pensadores contemporâneos, inspirando movimentos existencialistas e pós-modernos. Nietzsche morreu em 1900, após anos de luta contra problemas de saúde mental, mas seu legado permanece vivo e relevante até hoje.`,
      
      obras: "Assim Falou Zaratustra, Além do Bem e do Mal, A Genealogia da Moral",
      
      frases: [
        "Aquilo que não me mata, me fortalece.",
        "Deus está morto.",
        "A vida sem música seria um erro.",
        "Quem tem um porquê para viver pode suportar quase qualquer como.",
        "A esperança é o pior dos males, pois prolonga o tormento do homem.",
        "Não há fatos, apenas interpretações.",
        "Todo o mundo é mais sábio do que você.",
        "O indivíduo deve lutar para não ser esmagado pela tribo.",
        "O destino dos homens é feito de escolhas.",
        "O homem é algo que deve ser superado."
      ],
      
    },
    
    "Platão": {
      biografia: `Platão (427-347 a.C.) foi um filósofo ateniense, aluno de Sócrates e fundador da Academia em Atenas, uma das primeiras instituições de ensino superior do mundo ocidental. Ele desempenhou um papel fundamental no desenvolvimento da filosofia ocidental, especialmente em questões de ética, política e metafísica. Platão escreveu uma série de diálogos, nos quais Sócrates geralmente é o personagem principal, explorando questões fundamentais sobre a justiça, a beleza e a verdade.
  
      A teoria das Ideias ou Formas de Platão sugere que o mundo sensível é apenas uma cópia imperfeita de uma realidade mais elevada e eterna. Em suas obras, como "A República", ele discute a ideia de um estado ideal governado por filósofos-reis. Platão acreditava que a educação era essencial para cultivar a virtude e a sabedoria nos cidadãos. Seu pensamento influenciou não apenas a filosofia, mas também a teologia, a política e a ciência.
  
      Platão também teve uma profunda influência na filosofia cristã, cujos pensadores adaptaram suas ideias sobre a imortalidade da alma e o mundo das Ideias. A Academia que fundou permaneceu ativa por cerca de 900 anos, servindo como um centro de aprendizado e reflexão. Platão faleceu em 347 a.C., deixando um legado duradouro que moldou o curso do pensamento ocidental.`,
      
      obras: "A República, Fédon, Banquete",
      
      frases: [
        "A justiça é a harmonia da alma.",
        "Conhece-te a ti mesmo.",
        "A sabedoria começa na reflexão.",
        "O homem é a medida de todas as coisas.",
        "A educação é a melhor provisionamento para a velhice.",
        "O maior erro é não reconhecer o erro.",
        "A verdade é a luz do conhecimento.",
        "O amor é uma forma de buscar a verdade.",
        "A vida deve ser uma busca pela verdade.",
        "A filosofia é a arte de questionar."
      ],
      
    },
    
    "Diógenes": {
      biografia: `Diógenes de Sinope (412-323 a.C.) foi um filósofo grego da escola cínica, conhecido por seu estilo de vida austero e por sua crítica às convenções sociais. Diógenes desafiou as normas da sociedade ateniense, vivendo em um barril e desprezando a riqueza e o status social. Ele acreditava que a verdadeira felicidade era encontrada na autossuficiência e na simplicidade.
  
      Uma figura icônica do cinismo, Diógenes usava a provocação para criticar a hipocrisia da sociedade. Ele era famoso por andar pelas ruas de Atenas com uma lanterna durante o dia, afirmando que estava à procura de um homem honesto. Suas ideias sobre a vida em conformidade com a natureza e a crítica à cultura materialista tiveram uma influência duradoura.
  
      Diógenes enfatizava a importância de viver de acordo com a razão e a natureza, e suas filosofias serviram de inspiração para muitos pensadores posteriores, incluindo os estoicos. Ele morreu em Corinto, mas seu legado como um defensor da liberdade e da autenticidade continua a inspirar até hoje.`,
      
      obras: "Vida e Doutrinas dos Filósofos Ilustres",
      
      frases: [
        "O melhor jeito de se defender é não se defender.",
        "Eu procuro um homem.",
        "A sabedoria é uma habilidade para viver com pouco.",
        "Não é suficiente para um homem viver; ele deve também viver bem.",
        "O que é um homem? Um animal que fala.",
        "A riqueza não é um bem; é uma ilusão.",
        "Viver é a melhor resposta à dor.",
        "A verdadeira sabedoria é reconhecer a própria ignorância.",
        "O homem deve ser livre para ser ele mesmo.",
        "A vida é uma busca pela autenticidade."
      ],
      
    },
    
    "Sócrates": {
      biografia: `Sócrates (470-399 a.C.) foi um filósofo grego e um dos fundadores da filosofia ocidental. Ele é conhecido principalmente através dos diálogos de Platão, onde suas ideias e métodos são discutidos. Sócrates não deixou escritos, mas seu legado se mantém vivo através de suas conversas e ensinamentos.
  
      Ele usou o método socrático, uma técnica de questionamento que busca desafiar suposições e esclarecer ideias. Sócrates acreditava que o conhecimento verdadeiro era fundamental para a virtude e que a sabedoria vinha da consciência da própria ignorância. Seu lema, "Conhece-te a ti mesmo", encapsula sua busca pela verdade e pela moralidade.
  
      Sócrates foi um crítico da democracia ateniense e questionou a ética e os valores da sociedade de seu tempo. Ele foi condenado à morte por "corromper a juventude" e por "introduzir novos deuses", mas enfrentou sua morte com serenidade, preferindo morrer a renunciar às suas convicções. Sua vida e morte deixaram uma marca indelével na história do pensamento e da filosofia.`,
      
      obras: "Nenhuma obra escrita, legado através de diálogos platônicos",
      
      frases: [
        "A vida não examinada não vale a pena ser vivida.",
        "Só sei que nada sei.",
        "A virtude é conhecimento.",
        "O verdadeiro sábio não busca riquezas.",
        "É melhor sofrer uma injustiça do que cometê-la.",
        "A felicidade é o bem supremo.",
        "Conhece-te a ti mesmo.",
        "A educação é a chave para a moralidade.",
        "O diálogo é essencial para a verdade.",
        "O maior bem é o bem da alma."
      ],
      
    },
    
    "Aristóteles": {
      biografia: `Aristóteles (384-322 a.C.) foi um filósofo grego, aluno de Platão e professor de Alexandre, o Grande. Ele é considerado um dos pensadores mais influentes da história da filosofia ocidental. Aristóteles fundou sua própria escola, o Liceu, onde desenvolveu suas ideias sobre uma ampla gama de tópicos, incluindo lógica, metafísica, ética, política e ciências naturais.
  
      Sua abordagem empírica e sistemática para o conhecimento estabeleceu as bases para o método científico moderno. Aristóteles acreditava que a felicidade era o objetivo supremo da vida humana e que a virtude era essencial para alcançá-la. Em suas obras, como "Ética a Nicômaco" e "Política", ele discute a importância da razão e da amizade na vida moral.
  
      A filosofia de Aristóteles teve um impacto duradouro em várias disciplinas, incluindo ciência, ética, política e teologia. Ele foi um defensor do realismo e da observação, enfatizando a importância da experiência na formação do conhecimento. Aristóteles morreu em 322 a.C., deixando um legado que ainda é estudado e discutido em todo o mundo.`,
      
      obras: "Ética a Nicômaco, Política, Metafísica",
      
      frases: [
        "A felicidade é o significado e o propósito da vida.",
        "A virtude está no meio termo entre dois extremos.",
        "Conhecimento é poder.",
        "O todo é maior do que a soma de suas partes.",
        "A educação é a melhor provisão para a velhice.",
        "A amizade é uma alma em dois corpos.",
        "O homem é um animal político.",
        "A lógica é a ciência do pensamento correto.",
        "A coragem é a primeira das qualidades humanas.",
        "A excelência é uma hábito."
      ],
      
    },
    
    "Epicteto": {
      biografia: `Epicteto (50-135 d.C.) foi um filósofo estoico romano, conhecido por suas lições de autocontrole e a importância da ética na vida cotidiana. Nascido como escravo, Epicteto foi libertado e se tornou um dos mais influentes pensadores estoicos. Ele ensinava que a felicidade vem de aceitar as coisas que não podemos controlar e focar na nossa própria conduta e atitudes.
  
      Suas ideias foram compiladas por seus alunos na obra "Encheirídion", onde enfatiza que a verdadeira liberdade é alcançada por meio da virtude e da sabedoria. Epicteto acreditava que as emoções são resultado de nossas interpretações e que podemos treiná-las por meio da razão. O estoicismo, como promovido por Epicteto, encoraja a resiliência e a autodisciplina como caminhos para a paz interior.
  
      Ele se opôs ao hedonismo e ao materialismo, defendendo que a riqueza e o status não são essenciais para uma vida boa. O legado de Epicteto permanece vivo em muitas correntes filosóficas e práticas de autoajuda contemporâneas. Ele morreu em 135 d.C., mas seu ensinamento continua a inspirar aqueles que buscam uma vida virtuosa e significativa.`,
      
      obras: "Encheirídion, Discursos",
      
      frases: [
        "Não são as coisas que nos perturbam, mas a opinião que temos sobre elas.",
        "A liberdade é o bem supremo.",
        "O que importa não é o que acontece com você, mas como você reage a isso.",
        "Não procure que os eventos aconteçam como você deseja, mas deseje que eles aconteçam como acontecem.",
        "A verdadeira riqueza é viver com pouco.",
        "Você tem poder sobre sua mente, não sobre eventos externos.",
        "Seja imperturbável diante da dor e do prazer.",
        "As dificuldades são oportunidades para desenvolver a força interior.",
        "Ninguém pode te fazer sentir inferior sem o seu consentimento.",
        "A paz interior é o fruto da sabedoria."
      ],
      
    }
  };


  // / Função de pesquisa para encontrar o filósofo digitado
  const buscarFilosofo = () => {
    const resultadoBusca = filosofos[filosofo] || null;
    setResultado(resultadoBusca);
  };

  return (
    <div className="content">
      <div className="input-container">
        <input
          type="text"
          placeholder="Digite o nome do filósofo"
          value={filosofo}
          onChange={(e) => setFilosofo(e.target.value)}
        />
        <button onClick={buscarFilosofo}>Buscar</button>
      </div>

      {resultado ? (
        <div className="resultado">
          <h2>Biografia de {filosofo}</h2>
          <p>{resultado.biografia}</p>
          <p><strong>Obras Destacadas:</strong> {resultado.obras}</p>
          <img src={resultado.imagem} alt={`Retrato de ${filosofo}`} width="200" />
        </div>
      ) : (
        <p>Nenhum filósofo encontrado. Tente novamente.</p>
      )}
    </div>
  );
}

export default Content;