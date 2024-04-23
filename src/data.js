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
  ],
  showQuestionNumbers: "off",
  pageNextText: "Avanti",
  completeText: "Invia",
  showPrevButton: false,
  firstPageIsStarted: true,
  startSurveyText: "Inizia il test",
  completedHtml: "Grazie!",
};
export default data;
