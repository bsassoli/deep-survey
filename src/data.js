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
          html: "<h3>Valuta quanto è AI-ready la tua azienda.</h3>",
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
          name: "problem-identification",
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
            "Stakeholder-buy-in: il management, l'IT e i team operativi sono allineati?",
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
          name: "technical-infrastructure",
          title:
            "Infrastruttura tecnica: I tuoi dati sono organizzati, puliti e pronti?",
          description:
            "Il tuo stack esistente è compatibile? La tua infrastruttura IT è pronta per supportare l'espansione?",
          type: TYPE,
          choices: CHOICES,
        },
        {
          name: "internal-skills",
          title:
            "Competenze interne: Il tuo team ha le competenze necessarie per implementare e gestire soluzioni di IA?",
          description:
            "Disporre di personale con competenze in ambito data science, machine learning e AI è fondamentale per il successo dei progetti di intelligenza artificiale.",
          type: TYPE,
          choices: CHOICES,
        },
        {
          name: "training-plan",
          title:
            "Formazione: Hai un piano di formazione per migliorare le competenze AI del personale?",
          description:
            "Un programma di formazione strutturato permette di sviluppare internamente le competenze necessarie e favorisce l'adozione delle nuove tecnologie.",
          type: TYPE,
          choices: CHOICES,
        },
        {
          name: "company-culture",
          title:
            "Cultura aziendale: La tua organizzazione è aperta all'innovazione e al cambiamento necessari per l'adozione dell'IA?",
          description:
            "Una cultura aziendale che abbraccia il cambiamento e l'innovazione è essenziale per il successo dell'implementazione dell'IA.",
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
            "Un budget ben definito che mira a componenti specifici dell'IA, come le risorse cloud, permette una previsione più accurata dell'ROI, influenzando aree come la riduzione dei costi del customer care.",
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
          name: "KPI-monitoring",
          title:
            "KPI e monitoraggio: Hai stabilito metriche di performance e cicli di feedback?",
          description:
            "Stabilire KPI chiari e cicli di feedback regolari permette di monitorare l'efficacia delle soluzioni AI implementate e apportare correzioni tempestive.",
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
          name: "tasks-identification",
          title:
            "Identificazione dei compiti: Hai identificato compiti che l'IA può automatizzare o potenziare?",
          description:
            "Automatizzare processi come il punteggio dei lead o l'integrazione dei clienti può migliorare l'efficienza e la coerenza.",
          type: TYPE,
          choices: CHOICES,
        },
        {
          name: "tools-evaluation",
          title:
            "Valutazione degli strumenti: Hai ricercato e testato strumenti IA adatti alle tue funzioni specifiche?",
          description:
            "Esempi includono il testing A/B di chatbot per il servizio clienti guidati dall'IA, la valutazione di strumenti IA per l'analisi dei sentimenti o la valutazione di algoritmi IA per l'ottimizzazione delle scorte.",
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
          name: "IP-protection",
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
            "Stabilire un team dedicato o programmare revisioni trimestrali per valutare l'efficacia delle soluzioni implementate permette di migliorare continuamente le performance.",
          type: TYPE,
          choices: CHOICES,
        },
        {
          name: "future-planning",
          title:
            "Pianificazione futura: Hai un processo in atto per tenere d'occhio le tendenze dell'IA per future adattamenti?",
          description:
            "Sfruttare i rapporti di settore e le consulenze con esperti di IA per identificare e valutare continuamente le nuove tecnologie pertinenti agli obiettivi aziendali.",
          type: TYPE,
          choices: CHOICES,
        },
      ],
    },
    {
      elements: [
        {
          type: "html",
          html: "<h4>Etica e compliance</h4>",
        },
        {
          name: "ethical-framework",
          title:
            "Framework etici: Hai implementato framework etici per l'uso dell'IA nella tua organizzazione?",
          description:
            "Adottare linee guida etiche per lo sviluppo e l'utilizzo dell'IA garantisce che le soluzioni implementate rispettino valori fondamentali e normative vigenti.",
          type: TYPE,
          choices: CHOICES,
        },
        {
          name: "transparency",
          title:
            "Trasparenza: Esistono procedure per garantire la trasparenza delle decisioni basate sull'IA?",
          description:
            "Implementare meccanismi che rendano comprensibili e spiegabili le decisioni prese dai sistemi di IA aumenta la fiducia degli utenti e degli stakeholder.",
          type: TYPE,
          choices: CHOICES,
        },
        {
          name: "bias-assessment",
          title:
            "Valutazione dei bias: Hai valutato i rischi di bias nei tuoi dati e modelli di IA?",
          description:
            "Identificare e mitigare potenziali pregiudizi nei dati di addestramento e negli algoritmi è essenziale per garantire risultati equi e imparziali.",
          type: TYPE,
          choices: CHOICES,
        },
      ],
    },
    {
      elements: [
        {
          type: "html",
          html: "<h4>Data strategy</h4>",
        },
        {
          name: "data-governance",
          title:
            "Governance dei dati: Hai una strategia di governance dei dati per l'IA?",
          description:
            "Una strategia di governance dei dati definisce ruoli, responsabilità e processi per garantire la qualità, la sicurezza e la conformità dei dati utilizzati nei sistemi di IA.",
          type: TYPE,
          choices: CHOICES,
        },
        {
          name: "data-accessibility",
          title:
            "Accessibilità dei dati: I tuoi dati sono accessibili e utilizzabili dai sistemi di IA?",
          description:
            "Avere dati facilmente accessibili, in formati standardizzati e con API ben definite facilita l'implementazione e l'addestramento dei modelli di IA.",
          type: TYPE,
          choices: CHOICES,
        },
        {
          name: "data-quality",
          title:
            "Qualità dei dati: Hai procedure per garantire la qualità e l'integrità dei dati?",
          description:
            "Implementare processi di pulizia, validazione e aggiornamento dei dati è fondamentale per ottenere risultati affidabili dai modelli di IA.",
          type: TYPE,
          choices: CHOICES,
        },
      ],
    },
    {
      elements: [
        {
          type: "html",
          html: "<h4>Integrazione tecnologica</h4>",
        },
        {
          name: "legacy-integration",
          title:
            "Integrazione con sistemi legacy: I tuoi sistemi legacy sono integrabili con le nuove soluzioni di IA?",
          description:
            "Valutare la compatibilità dei sistemi esistenti con le nuove tecnologie di IA e pianificare eventuali adattamenti necessari per garantire un'integrazione fluida.",
          type: TYPE,
          choices: CHOICES,
        },
        {
          name: "cloud-strategy",
          title:
            "Strategia cloud: Hai una strategia cloud per supportare le tue iniziative di IA?",
          description:
            "Una strategia cloud ben definita fornisce la flessibilità, la scalabilità e le risorse computazionali necessarie per implementare e gestire soluzioni di IA.",
          type: TYPE,
          choices: CHOICES,
        },
        {
          name: "infrastructure-needs",
          title:
            "Esigenze infrastrutturali: Hai valutato le esigenze di infrastruttura per implementare l'IA a scala?",
          description:
            "Pianificare l'infrastruttura necessaria in termini di capacità di calcolo, storage e rete per garantire prestazioni ottimali dei sistemi di IA in produzione.",
          type: TYPE,
          choices: CHOICES,
        },
      ],
    },
    {
      elements: [
        {
          type: "html",
          html: "<h4>Sicurezza</h4>",
        },
        {
          name: "security-risks",
          title:
            "Rischi di sicurezza: Hai valutato i rischi di sicurezza associati all'implementazione dell'IA?",
          description:
            "Identificare e mitigare potenziali vulnerabilità di sicurezza nei sistemi di IA per proteggere dati sensibili e garantire la continuità operativa.",
          type: TYPE,
          choices: CHOICES,
        },
        {
          name: "model-protection",
          title:
            "Protezione dei modelli: Esistono protocolli per proteggere i modelli di IA da attacchi o manipolazioni?",
          description:
            "Implementare misure di sicurezza specifiche per proteggere i modelli di IA da attacchi adversarial, data poisoning o altre forme di manipolazione.",
          type: TYPE,
          choices: CHOICES,
        },
        {
          name: "incident-management",
          title:
            "Gestione degli incidenti: Hai procedure per gestire violazioni di dati o malfunzionamenti dei sistemi di IA?",
          description:
            "Definire protocolli di risposta agli incidenti specifici per i sistemi di IA permette di minimizzare l'impatto di eventuali problemi e garantire un rapido ripristino delle operazioni.",
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
  startSurveyText: "Inizia l'assessment!",
  completedHtml: "Grazie per aver completato l'AI assessment",
};

export default data;