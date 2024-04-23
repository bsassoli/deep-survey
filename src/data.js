const CHOICES = [
  {
    value: 3,
    text: "Preparati",
  },
  {
    value: 2,
    text: "Abbastanza preparati",
  },
  {
    value: 1,
    text: "Per nulla preparati",
  },
];

const TYPE = "radiogroup";

const data = {
  pages: [
    {
      elements: [
        {
          type: "html",
          html: "<h4>Fai il nostro test per valutare quanto è preparata la tua azienda.</h4>",
        },
      ],
    },
    {
      elements: [
        {
          type: "html",
          html: "<h4>Strategia e obiettivi.</h4>",
        },
        {
          name: "problem-id",
          title:
            "Identificazione dei problemi: Hai identificato problemi specifici che l'intelligenza artificiale può risolvere per te?",
          description:
            "Affrontare questioni come la perdita di clienti o le inefficienze operative può portare vantaggi significativi e mirati dall'uso dell'IA, invece di adottarla solo perché è di moda.",
          type: TYPE,
          choices: CHOICES,
        },
        {
          name: "desired-outcomes",
          title:
            "Risultati attesi: Hai definito metriche di successo per l'implementazione dell'IA? ",
          description:
            "Metriche come la riduzione dei costi operativi, l'aumento dell'impegno dei clienti o il miglioramento dei tassi di conversione dei potenziali clienti ti permettono di misurare oggettivamente l'efficacia dell'IA.",
          type: TYPE,
          choices: CHOICES,
        },
        {
          name: "stakeholder-buy-in",
          title:
            "Stakeholder-buy-in: il management,  l'IT e i team operativi sono allineati?",
          description:
            "Assicurare un'allineamento tra i dipartimenti IT, operativi e legali è fondamentale per un processo di implementazione dell'IA senza intoppi e per mantenere un approccio unificato.",
          type: TYPE,
          choices: CHOICES,
        },
      ],
    },
    {
      elements: [
        {
          type: "html",
          html: "<h4>Organizzazione e HR.</h4>",
        },
        {
          name: "problem-id",
          title:
            "Infrastruttura tecnica: I tuoi dati sono organizzati, puliti e pronti?",
          description:
            " Il tuo stack esistente è compatibile? La tua infrastruttura IT è pronta per supportare l'espansione?",
          type: TYPE,
          choices: CHOICES,
        },
        {
          name: "desired-outcomes",
          title:
            "Risultati attesi: Hai definito metriche di successo per l'implementazione dell'IA? ",
          description:
            "Metriche come la riduzione dei costi operativi, l'aumento dell'impegno dei clienti o il miglioramento dei tassi di conversione dei potenziali clienti ti permettono di misurare oggettivamente l'efficacia dell'IA.",
          type: TYPE,
          choices: CHOICES,
        },
        {
          name: "stakeholder-buy-in",
          title:
            "Stakeholder-buy-in: il management,  l'IT e i team operativi sono allineati?",
          description:
            "Assicurare un'allineamento tra i dipartimenti IT, operativi e legali è fondamentale per un processo di implementazione dell'IA senza intoppi e per mantenere un approccio unificato.",
          type: TYPE,
          choices: CHOICES,
        },
      ],
    },
    {
        elements: [
          {
            type: "html",
            html: "<h4>ROI e financials.</h4>",
          },
          {
            name: "investment-strategy",
            title:
              "Strategia di investimento: Hai definito il tuo budget e l'ROI atteso per l'IA?",
            description:
              " Un budget ben definito che mira a componenti specifici dell'IA, come le risorse cloud, permette una previsione più accurata dell'ROI, influenzando aree come la riduzione dei costi del customer care.",
            type: TYPE,
            choices: CHOICES,
          },
          {
            name: "cost-benefit",
            title:
              "Analisi costi-benefici: Hai validato la fattibilità finanziaria dell'implementazione dell'IA?",
            description:
              "Per es., confrontare i costi dei chatbot rispetto al customer care tradizionale può fornire un quadro più chiaro dei risparmi a lungo termine.",
            type: TYPE,
            choices: CHOICES,
          },
          {
            name: "KPI",
            title:
              "KPI e monitoraggio: Hai stabilito metriche di performance e cicli di feedback?",
            description:
              "Assicurare un'allineamento tra i dipartimenti IT, operativi e legali è fondamentale per un processo di implementazione dell'IA senza intoppi e per mantenere un approccio unificato.",
            type: TYPE,
            choices: CHOICES,
          },
        ],
      },
      {
        elements: [
          {
            type: "html",
            html: "<h4>Marketing, sales, CRM</h4>",
          },
          {
            name: "tasks",
            title:
              "Identificazione dei compiti: Hai identificato compiti che l'IA può automatizzare o potenziare?",
            description:
              " Automatizzare processi come il punteggio dei lead o l'integrazione dei clienti può migliorare l'efficienza e la coerenza.",
            type: TYPE,
            choices: CHOICES,
          },
          {
            name: "tools-evaluation",
            title:
              "Valutazione degli strumenti: Hai ricercato e testato strumenti IA adatti alle tue funzioni specifiche?",
            description:
              " Esempi includono il testing A/B di chatbot per il servizio clienti guidati dall'IA, la valutazione di strumenti IA per l'analisi dei sentimenti o la valutazione di algoritmi IA per l'ottimizzazione delle scorte.",
            type: TYPE,
            choices: CHOICES,
          },
          {
            name: "user-training",
            title:
              "Formazione degli utenti: I membri del team sono formati sugli strumenti IA scelti?",
            description:
              "Per esempio, formare i team di vendita sugli strumenti IA per l'analitica predittiva può consentire loro di individuare meglio i potenziali lead.",
            type: TYPE,
            choices: CHOICES,
          },
        ],
      },
      {
        elements: [
          {
            type: "html",
            html: "<h4>Gestione ongoing ed evoluzione</h4>",
          },
          {
            name: "IP",
            title:
              "Protezione della proprietà intellettuale: La tua organizzazione ha una strategia in corso per proteggere i diritti di proprietà intellettuale nell'IA?",
            description:
              "Le strategie possono includere la sicurezza dei set di dati proprietari, la licenza di algoritmi di terze parti o la stipula di accordi di non divulgazione con collaboratori e fornitori.",
            type: TYPE,
            choices: CHOICES,
          },
          {
            name: "feedback-loops",
            title:
              "Cicli di feedback: Hai un processo in atto per raccogliere continuamente feedback sulle prestazioni di utenti e sistemi?",
            description:
              "Stabilire un team dedicato o programmare revisioni trimestrali per valutare le tecnologie IA emergenti che potrebbero beneficiare il tuo settore specifico.",
            type: TYPE,
            choices: CHOICES,
          },
          {
            name: "future-planning",
            title:
              "Pianificazione futura: Hai un processo in atto per tenere d'occhio le tendenze dell'IA per future adattamenti?",
            description:
              "Sfruttare i rapporti di settore e le consulenze con esperti di IA per identificare e valutare continuamente le nuove tecnologie pertinenti agli obiettivi aziendali",
            type: TYPE,
            choices: CHOICES,
          },
        ],
      },
  ],
  showQuestionNumbers: "off",
  pageNextText: "Continua",
  completeText: "Invia",
  showPrevButton: false,
  firstPageIsStarted: true,
  startSurveyText: "Inizia!",
  completedHtml: "Grazie per aver completato l'assessment di {deepers_!",
};
export default data;
