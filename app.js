const PUBLIC_KEY = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mFIEahVzQBMIKoZIzj0DAQcCAwSWYJZv4E//dlm//v0CR9iPR42uBkevtxsdtenM
09x8Jh+B2VJqAjNEQW9qYZRPFZnDAPHWexRXX2VA5qVPfnVstCZQLiBCZXllciA8
aHV1cmRlci1iYXJuc3Rpam5AcHJvdG9uLm1lPoiQBBMTCAA4FiEEAFnyqaaHSexC
RAwJk1NZvYXC1VAFAmoVc0ACGwMFCwkIBwIGFQoJCAsCBBYCAwECHgECF4AACgkQ
k1NZvYXC1VDc/AEAvynFmVvSoAyPwsfsOolF3+AL1i65aDFaa/Mm3sz5/6oBALdj
0DIk/kk9PKqD9ciQ5cxPbDHXFBArJam3NWOEj7gguFYEahVzQBIIKoZIzj0DAQcC
AwSt6yN3MrfT4fhrVBy0gZRiTxKtS87xWkNZTrtzfxCbWFa/WNPcKL4d3HGSX8ES
67BhLcBi8FZWuByisc8Q+hAbAwEIB4h4BBgTCAAgFiEEAFnyqaaHSexCRAwJk1NZ
vYXC1VAFAmoVc0ACGwwACgkQk1NZvYXC1VBscAEAxdWvEGq6c9NxVMzekzf+kGsT
nYJA3yz0XftvY1WORIgBAM7AXf+bHW0lnjRdjRiMDmaRWRwn9piXCJQS8wiwCFbA
=nq9L
-----END PGP PUBLIC KEY BLOCK-----`;

const FORM_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "5cb97146-6a95-4a46-8a4a-41d1e9103a7b";

const state = {
  lang: "nl",
  currentStep: 0,
  answers: {},
  submitting: false,
  wizardMode: "editing"
};

const copy = {
  nl: {
    brandSubtitle: "Huurdersinitiatief",
    landingEyebrow: "Samen organiseren",
    landingHeadline: "Huurders van Barnstijn Beheer B.V. – Laten we samen sterk staan.",
    landingBody: "Veel huurders hebben clausules in hun contract waardoor de verhuurder mogelijk onterecht kosten aan ons doorberekent (zoals afschrijving van meubilair via de servicekosten). Door ons te verenigen kunnen we meer transparantie eisen, kosten verlagen en als één blok onderhandelen. Dit initiatief is 100% veilig en uw gegevens worden lokaal versleuteld.",
    ctaStart: "Start / Doe mee",
    trustOneTitle: "Controleer uw servicekosten",
    trustOneBody: "Uw verhuurder moet laten zien waar uw servicekosten aan zijn besteed.",
    trustTwoTitle: "Betaalt u te veel huur?",
    trustTwoBody: "Controleer online of uw huur redelijk is volgens Nederlandse normen.",
    trustThreeTitle: "Bouw mee aan een huurderscommissie",
    trustThreeBody: "Sta samen sterker voor onze rechten als huurders.",
    trustFourTitle: "Download de campagnebrief",
    trustFourBody: "Kent u huurders die nog niet zijn geinformeerd?",
    articleReadMore: "Lees meer",
    articleKicker: "Informatie voor huurders",
    articleClose: "Sluiten",
    wizardTitle: "Aanmelden",
    progress: step => `Stap ${step} van 4`,
    back: "Terug",
    next: "Verder",
    submit: "Versleuteld verzenden",
    submitting: "Uw antwoorden worden lokaal versleuteld...",
    emailLabel: "E-mailadres",
    emailPlaceholder: "naam@example.com",
    imageFallback: "Plaats servicekosten.png naast index.html om de clausule hier te tonen.",
    textVersionButton: "Toegankelijke tekstversie",
    textVersionKicker: "Toegankelijke tekstversie",
    textVersionTitle: "Paragraaf uit huurovereenkomst",
    closeText: "Sluiten",
    terminatedTitle: "Bedankt voor uw tijd.",
    terminatedBody: "Dit initiatief is bedoeld voor huurders van Barnstijn Beheer B.V.",
    successTitle: "Dank u, uw aanmelding is veilig verzonden.",
    successBody: "Uw versleutelde antwoorden zijn ontvangen. U krijgt alleen bericht wanneer er relevante vervolgstappen zijn voor de huurderscoalitie.",
    configError: "De PGP public key en Web3Forms access key moeten nog worden ingevuld voordat inzenden werkt.",
    openPgpError: "OpenPGP is niet geladen. Controleer uw internetverbinding of probeer het later opnieuw.",
    encryptionError: "Versleutelen is niet gelukt. Controleer of de PGP-sleutel geschikt is voor encryptie.",
    submitError: "Verzenden is niet gelukt. Controleer de configuratie of probeer het later opnieuw.",
    submitDetailPrefix: "Technische details:",
    yes: "Ja",
    no: "Nee",
    stepOneKicker: "Stap 1 - Filter",
    stepOneQuestion: "Bent u huurder van Barnstijn Beheer B.V.?",
    stepTwoKicker: "Stap 2 - Servicekosten",
    stepTwoQuestion: `Heeft u deze {hotspot:clause:servicekosten-clausule} in uw huurcontract?`,
    stepTwoSame: "Ja, vrijwel hetzelfde",
    stepTwoSimilar: "Ja, vergelijkbaar",
    stepThreeKicker: "Stap 3 - Huurderscommissie",
    stepThreeQuestion: `Wilt u {hotspot:help:meewerken} aan de opbouw van een {hotspot:committee:huurderscommissie}?`,
    stepThreeYes: "Ja",
    stepThreeMaybe: "Alleen als niemand anders wil",
    stepThreeNo: "Nee",
    stepFourKicker: "Stap 4 - Contact en privacy",
    stepFourQuestion: "Waar kunnen we u bereiken?",
    consent: `Ik ga akkoord met de {hotspot:storage:veilige, versleutelde opslag} van mijn gegevens om een huurderscoalitie te vormen.`,
    tooltips: {
      help: "De verwachte tijdsinvestering is minimaal: ongeveer 2 tot 5 (rond)mails per jaar.",
      committee: "Een officiële commissie in de zin van de Wet overleg huurders verhuurder. Dit geeft ons wettelijke rechten tegenover de verhuurder.",
      clause: "Controleer de sectie onder 'Servicekosten' in uw eigen huurcontract om dit te vergelijken.",
      storage: "Verwerkingsverantwoordelijke: P. Beyer, huurder-barnstijn@proton.me. Doel: gemeenschappelijke belangen tegen Barnstijn Beheer B.V. organiseren en vertegenwoordigen. Beveiliging: uw invoer wordt direct in uw browser versleuteld. Niemand behalve de initiatiefnemer kan deze lezen. Intrekking: u kunt op elk moment een e-mail sturen om uw gegevens volledig te laten verwijderen."
    },
    serviceText: {
      title: "Servicekosten",
      paragraph: "7. Verhuurder zal zorgdragen voor de levering van de volgende zaken en diensten in verband met de bewoning van het gehuurde:",
      line: "Servicekosten van € 49,-- bestaande uit:",
      items: [
        "Onderhoud lift",
        "Verlichting openbare ruimte",
        "Schoonmaak openbare ruimte",
        "Afschrijving stoffering & apparatuur"
      ]
    },
    articles: {
      serviceCosts: {
        kicker: "Informatie voor huurders",
        title: "Controleer uw servicekosten",
        paragraphs: [
          "Servicekosten zijn geen bedrag dat u zonder uitleg hoeft te accepteren. Volgens Nederlands huurrecht moet uw verhuurder kunnen laten zien waaraan uw geld daadwerkelijk is besteed.",
          "Daarbij mogen alleen kosten worden doorberekend voor zaken en diensten die in uw huurovereenkomst zijn genoemd. U heeft recht op een jaarlijkse afrekening over de servicekosten. Die afrekening moet uiterlijk op 1 juli na afloop van het betreffende jaar worden verstrekt.",
          "In veel gevallen kunt u nog om overzichten van eerdere jaren vragen. Een termijn van vijf jaar is vaak het praktische uitgangspunt.",
          "Verwacht alleen niet dat iedere verhuurder snel en volledig meewerkt. Juist daarom is het belangrijk dat huurders elkaar vinden en samen optreden."
        ],
        linkText: "Bekijk de voorbeeldbrief van het Juridisch Loket",
        linkUrl: "https://www.juridischloket.nl/voorbeeldbrieven/voorbeeldbrief-verzoek-om-servicekostenoverzicht/"
      },
      placeholderTwo: {
        kicker: "Informatie voor huurders",
        title: "Betaalt u te veel huur?",
        paragraphs: [
          "Ook als uw woning in de vrije sector valt, kunt u controleren of de huurprijs redelijk is. De Huurcommissie biedt daarvoor een online huurprijscheck voor zelfstandige woonruimte.",
          "Als uit die check blijkt dat uw huur mogelijk te hoog is, kan de Huurcommissie in sommige situaties helpen. Maar het staat sterker wanneer huurders zich samen organiseren en patronen zichtbaar maken.",
          "Vul daarom de vragenlijst in en geef aan dat u de opbouw van een huurderscommissie steunt. Zo kunnen we samen beoordelen waar actie nodig is."
        ],
        linkText: "Doe de huurprijscheck van de Huurcommissie",
        linkUrl: "https://huurprijscheck.huurcommissie.nl/zelfstandige-woonruimte/binnenruimtes"
      },
      placeholderThree: {
        kicker: "Informatie voor huurders",
        title: "Bouw mee aan een huurderscommissie",
        paragraphs: [
          "Verhuurders met 25 of meer huurders moeten een huurderscommissie ondersteunen. Zo'n commissie heeft wettelijke rechten in het overleg met de verhuurder.",
          "Een huurderscommissie moet bijvoorbeeld worden gehoord bij huurverhogingen. Dat voorkomt een verhoging niet automatisch, maar het kan wel ruimte geven om bezwaar te maken, informatie op te vragen of de verhoging te beperken.",
          "Daarnaast moet de verhuurder een huurderscommissie een overzicht van alle huurders verstrekken. Dat zou onze positie rond de servicekosten sterk verbeteren, omdat we huurders dan veel gerichter kunnen bereiken en samen kunnen optreden.",
          "Geef daarom in de vragenlijst aan of u openstaat voor ondersteuning van de commissie, ook als u denkt dat u niet de ideale kandidaat bent. We hebben drie huurderspartijen nodig die officieel een bestuursrol willen vervullen."
        ]
      },
      campaignPdf: {
        kicker: "Campagnemateriaal",
        title: "Download de campagnebrief",
        paragraphs: [
          "Deze campagne is begonnen met brieven in de brievenbussen van huurders van Barnstijn Beheer. Op dit moment kennen we echter nog maar een deel van alle huurders.",
          "Kent u andere huurders die nog niet zijn geinformeerd, of wilt u de brief om een andere reden delen? Dan kunt u de oorspronkelijke campagnebrief hier opnieuw downloaden zodra het bestand beschikbaar is."
        ],
        linkText: "Download de campagnebrief (PDF volgt)",
        linkUrl: "#",
        isPlaceholderLink: true
      }
    }
  },
  en: {
    brandSubtitle: "Tenant initiative",
    landingEyebrow: "Organizing together",
    landingHeadline: "Tenants of Barnstijn Beheer B.V. – Let's stand together.",
    landingBody: "Many tenants have clauses in their contracts that might unlawfully shift landlord costs onto us (like depreciation of furniture via service costs). By uniting, we can demand transparency, lower costs, and negotiate as a united front. This initiative is 100% secure and your data is encrypted locally.",
    ctaStart: "Start / Join us",
    trustOneTitle: "Check your service costs",
    trustOneBody: "Your landlord must provide a breakdown of how your service costs were spent.",
    trustTwoTitle: "Are you paying too much rent?",
    trustTwoBody: "Check whether your rent is reasonable by Dutch local standards.",
    trustThreeTitle: "Let’s build a tenant committee",
    trustThreeBody: "Stand together for our rights as tenants.",
    trustFourTitle: "Download the campaign PDF",
    trustFourBody: "Do you know tenants who have not been informed yet?",
    articleReadMore: "Read more",
    articleKicker: "Tenant information",
    articleClose: "Close",
    wizardTitle: "Join",
    progress: step => `Step ${step} of 4`,
    back: "Back",
    next: "Next",
    submit: "Send encrypted",
    submitting: "Encrypting your answers locally...",
    emailLabel: "Email address",
    emailPlaceholder: "name@example.com",
    imageFallback: "Place servicekosten_eng.png next to index.html to show the clause here.",
    textVersionButton: "Accessible text version",
    textVersionKicker: "Accessible text version",
    textVersionTitle: "Rental Contract Paragraph",
    closeText: "Close",
    terminatedTitle: "Thank you for your time.",
    terminatedBody: "This initiative is intended for tenants of Barnstijn Beheer B.V.",
    successTitle: "Thank you, your response was sent securely.",
    successBody: "Your encrypted answers have been received. You will only be contacted when there are relevant next steps for the tenant coalition.",
    configError: "The PGP public key and Web3Forms access key still need to be added before submissions work.",
    openPgpError: "OpenPGP did not load. Check your internet connection or try again later.",
    encryptionError: "Encryption failed. Check whether the PGP key is suitable for encryption.",
    submitError: "Submission failed. Check the configuration or try again later.",
    submitDetailPrefix: "Technical details:",
    yes: "Yes",
    no: "No",
    stepOneKicker: "Step 1 - Filter",
    stepOneQuestion: "Are you a tenant of Barnstijn Beheer B.V.?",
    stepTwoKicker: "Step 2 - Service costs",
    stepTwoQuestion: `Do you have this {hotspot:clause:service cost clause} in your rental contract?`,
    stepTwoSame: "Yes, quite the same",
    stepTwoSimilar: "Yes, similar",
    stepThreeKicker: "Step 3 - Tenant committee",
    stepThreeQuestion: `Would you {hotspot:help:help build} a {hotspot:committee:tenant committee}?`,
    stepThreeYes: "Yes",
    stepThreeMaybe: "Only if nobody else does",
    stepThreeNo: "No",
    stepFourKicker: "Step 4 - Contact and GDPR",
    stepFourQuestion: "Where can we reach you?",
    consent: `I agree to the {hotspot:storage:secure, encrypted storage} of my data to form a tenant coalition.`,
    tooltips: {
      help: "The expected time investment is minimal: about 2 to 5 (mass) emails per year.",
      committee: "An official committee under the Dutch Tenant-Landlord Consultation Act. This grants us strong legal rights against the landlord.",
      clause: "Check the section under 'Servicekosten' in your own rental agreement to compare.",
      storage: "Data Controller: P. Beyer, huurder-barnstijn@proton.me. Purpose: To organize and represent common interests against Barnstijn Beheer B.V. Security: Your inputs are encrypted directly in your browser. No one except the initiator can read them. Withdrawal: You can send an email at any time to have your data completely deleted."
    },
    serviceText: {
      title: "Service charges",
      paragraph: "7. The landlord will arrange the provision of the following supplies and services in connection with the occupation of the rented object:",
      line: "Service costs of € 49, consisting of:",
      items: [
        "Maintenance elevator",
        "Lighting public space",
        "Cleaning public space",
        "Depreciation upholstery & equipment"
      ]
    },
    articles: {
      serviceCosts: {
        kicker: "Tenant information",
        title: "Check your service costs",
        paragraphs: [
          "Service costs are not a charge you simply have to accept without explanation. Under Dutch rental law, your landlord must be able to show how your money was actually spent.",
          "Only costs for services and supplies listed in your rental agreement may be charged. You are entitled to an annual service-cost statement, and your landlord must provide it by July 1 of the following year.",
          "In many cases, you can still request statements for previous years. A five-year period is often the practical starting point.",
          "Do not assume your landlord will cooperate quickly or fully. That is exactly why tenants need to connect and act together."
        ],
        linkText: "Open the Juridisch Loket example letter",
        linkUrl: "https://www.juridischloket.nl/voorbeeldbrieven/voorbeeldbrief-verzoek-om-servicekostenoverzicht/"
      },
      placeholderTwo: {
        kicker: "Tenant information",
        title: "Are you paying too much rent?",
        paragraphs: [
          "Even if your apartment is rented in the free-market sector, you can still check whether the rent is reasonable. The Dutch Rent Tribunal provides an online rent-price check for independent living spaces.",
          "If the result suggests that your rent may be too high, huurcommissie.nl may be able to help in some situations. But tenants are stronger when they organize together and identify shared patterns.",
          "Complete the survey and indicate that you support building a tenant committee. That gives us a stronger basis to decide what action is needed."
        ],
        linkText: "Open the Huurcommissie rent-price check",
        linkUrl: "https://huurprijscheck.huurcommissie.nl/zelfstandige-woonruimte/binnenruimtes"
      },
      placeholderThree: {
        kicker: "Tenant information",
        title: "Let’s build a tenant committee",
        paragraphs: [
          "Landlords with 25 or more tenants are required to support a tenant committee. Such a committee has legal rights in discussions with the landlord.",
          "For example, the committee must be consulted about every rent increase. That does not automatically stop an increase, but it can create room to object, request information, or at least reduce the increase.",
          "The landlord must also provide the tenant committee with a list of all tenants. That would dramatically improve our position on the service-cost issue, because we could reach other tenants directly and organize more effectively.",
          "That is why it matters to say in the survey whether you are open to supporting the committee, even if you do not think you are the perfect candidate. We need three tenant parties who are willing to officially hold a board position."
        ]
      },
      campaignPdf: {
        kicker: "Campaign material",
        title: "Download the campaign PDF",
        paragraphs: [
          "This campaign started by delivering letters to Barnstijn Beheer tenants' letterboxes. So far, however, only a fraction of tenants are known to us.",
          "If you know other tenants who have not been informed yet, or if you need it for any other purpose, you will be able to download the original campaign letter here once the PDF is available."
        ],
        linkText: "Download the campaign letter (PDF coming soon)",
        linkUrl: "#",
        isPlaceholderLink: true
      }
    }
  }
};

const steps = [
  {
    key: "isTenant",
    render() {
      const t = copy[state.lang];
      return questionTemplate({
        kicker: t.stepOneKicker,
        question: escapeHtml(t.stepOneQuestion),
        options: [
          { label: t.yes, value: "yes" },
          { label: t.no, value: "no", terminal: true }
        ]
      });
    }
  },
  {
    key: "serviceClause",
    render() {
      const t = copy[state.lang];
      return questionTemplate({
        kicker: t.stepTwoKicker,
        question: renderHotspots(t.stepTwoQuestion),
        afterQuestion: renderClauseReference(),
        options: [
          { label: t.stepTwoSame, value: "yes_quite_the_same" },
          { label: t.stepTwoSimilar, value: "yes_similar" },
          { label: t.no, value: "no" }
        ]
      });
    }
  },
  {
    key: "committee",
    render() {
      const t = copy[state.lang];
      return questionTemplate({
        kicker: t.stepThreeKicker,
        question: renderHotspots(t.stepThreeQuestion),
        options: [
          { label: t.stepThreeYes, value: "gladly" },
          { label: t.stepThreeMaybe, value: "only_if_needed" },
          { label: t.stepThreeNo, value: "no" }
        ]
      });
    }
  },
  {
    key: "contact",
    render() {
      const t = copy[state.lang];
      const consentChecked = state.answers.consent ? "checked" : "";
      const email = state.answers.email ? escapeAttribute(state.answers.email) : "";
      return `
        <p class="step-kicker">${escapeHtml(t.stepFourKicker)}</p>
        <h2 class="question-title">${escapeHtml(t.stepFourQuestion)}</h2>
        <form class="form-stack" data-contact-form>
          <label class="field-label">
            <span>${escapeHtml(t.emailLabel)}</span>
            <input type="email" name="email" autocomplete="email" inputmode="email" placeholder="${escapeAttribute(t.emailPlaceholder)}" value="${email}" required>
          </label>
          <label class="consent-label">
            <input type="checkbox" name="consent" ${consentChecked} required>
            <span>${renderHotspots(t.consent)}</span>
          </label>
          <div class="button-row">
            ${backButton()}
            <button class="submit-button" type="submit" data-submit-button ${state.answers.consent ? "" : "disabled"}>${escapeHtml(t.submit)}</button>
          </div>
          <p class="status-message" data-status-message aria-live="polite"></p>
        </form>
      `;
    }
  }
];

let views;
let questionContent;
let progressLabel;
let progressFill;
let tooltipLayer;
let tooltipText;
let tooltipCard;
let textDialog;
let textDialogKicker;
let textDialogTitle;
let textReader;
let articleDialog;
let articleKicker;
let articleTitle;
let articleBody;
let activeTooltipTrigger = null;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

function initApp() {
  views = document.querySelectorAll("[data-view]");
  questionContent = document.querySelector("[data-question-content]");
  progressLabel = document.querySelector("[data-progress-label]");
  progressFill = document.querySelector("[data-progress-fill]");
  tooltipLayer = document.querySelector("[data-tooltip-layer]");
  tooltipText = document.querySelector("[data-tooltip-text]");
  tooltipCard = document.querySelector(".tooltip-card");
  textDialog = document.querySelector("[data-text-dialog]");
  textDialogKicker = document.querySelector("[data-text-dialog-kicker]");
  textDialogTitle = document.querySelector("[data-text-dialog-title]");
  textReader = document.querySelector("[data-text-reader]");
  articleDialog = document.querySelector("[data-article-dialog]");
  articleKicker = document.querySelector("[data-article-kicker]");
  articleTitle = document.querySelector("[data-article-title]");
  articleBody = document.querySelector("[data-article-body]");

  if (!questionContent || !progressLabel || !progressFill || !tooltipLayer || !tooltipText || !tooltipCard || !textDialog || !textDialogKicker || !textDialogTitle || !textReader || !articleDialog || !articleKicker || !articleTitle || !articleBody) {
    console.error("The tenant initiative app could not find its required HTML elements.");
    return;
  }

  document.addEventListener("click", event => {
    const start = event.target.closest("[data-action='start']");
    const home = event.target.closest("[data-action='home']");
    const lang = event.target.closest("[data-lang]");
    const option = event.target.closest("[data-option-value]");
    const back = event.target.closest("[data-action='back']");
    const hotspot = event.target.closest("[data-hotspot]");
    const closeTooltip = event.target.closest("[data-tooltip-close]");
    const textAction = event.target.closest("[data-action='open-text'], [data-action='close-text']");
    const articleTrigger = event.target.closest("[data-article]");
    const articleClose = event.target.closest("[data-action='close-article']");
    const disabledArticleLink = event.target.closest("[data-disabled-link]");

    if (home) {
      event.preventDefault();
      resetToLanding();
    }

    if (start) {
      showView("wizard");
      setStep(0);
    }

    if (lang) {
      setLanguage(lang.dataset.lang);
    }

    if (option) {
      selectOption(option);
    }

    if (back) {
      goBack();
    }

    if (textAction) {
      handleTextAction(textAction.dataset.action);
    }

    if (articleTrigger) {
      openArticle(articleTrigger.dataset.article);
    }

    if (articleClose) {
      articleDialog.close();
    }

    if (disabledArticleLink) {
      event.preventDefault();
    }

    if (hotspot) {
      event.preventDefault();
      event.stopPropagation();
      showTooltip(hotspot);
    } else if (!event.target.closest(".tooltip-card") || closeTooltip) {
      hideTooltip();
    }
  });

  document.addEventListener("mouseover", event => {
    const hotspot = event.target.closest("[data-hotspot]");
    if (hotspot && window.matchMedia("(hover: hover) and (min-width: 621px)").matches) {
      showTooltip(hotspot);
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      hideTooltip();
    }
  });

  questionContent.addEventListener("input", event => {
    if (event.target.name === "email") {
      state.answers.email = event.target.value;
    }

    if (event.target.name === "consent") {
      state.answers.consent = event.target.checked;
      const submit = questionContent.querySelector("[data-submit-button]");
      if (submit) submit.disabled = !event.target.checked;
    }
  });

  questionContent.addEventListener("submit", async event => {
    event.preventDefault();
    await submitForm(event.target);
  });

  applyTranslations();
}

function setLanguage(lang) {
  if (!copy[lang]) return;
  state.lang = lang;
  document.documentElement.lang = lang;
  applyTranslations();
  document.querySelectorAll("[data-lang]").forEach(button => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  if (state.wizardMode === "success") {
    renderSuccess();
  } else if (state.wizardMode === "terminated") {
    renderTermination();
  } else if (document.querySelector("[data-view='wizard']").classList.contains("is-active")) {
    renderStep();
  }
}

function applyTranslations() {
  const t = copy[state.lang];
  document.title = state.lang === "nl" ? "Huurders Barnstijn Beheer B.V." : "Tenants Barnstijn Beheer B.V.";
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const value = t[node.dataset.i18n];
    if (typeof value === "string") node.textContent = value;
  });
}

function showView(name) {
  views.forEach(view => view.classList.toggle("is-active", view.dataset.view === name));
  hideTooltip();
}

function setStep(step) {
  state.wizardMode = "editing";
  state.currentStep = step;
  renderStep();
}

function renderStep() {
  const step = steps[state.currentStep];
  if (!step) return;

  const visibleStep = state.currentStep + 1;
  progressLabel.textContent = copy[state.lang].progress(visibleStep);
  progressFill.style.width = `${(visibleStep / steps.length) * 100}%`;

  questionContent.classList.remove("is-changing");
  void questionContent.offsetWidth;
  questionContent.innerHTML = step.render();
  questionContent.classList.add("is-changing");

  const image = questionContent.querySelector("[data-clause-image]");
  if (image) {
    image.addEventListener("error", () => {
      image.style.display = "none";
      const note = questionContent.querySelector("[data-image-note]");
      if (note) note.style.display = "block";
    });
  }
}

function questionTemplate({ kicker, question, options, afterQuestion = "" }) {
  const optionsMarkup = options.map(option => `
    <button class="option-button" type="button" data-option-value="${escapeAttribute(option.value)}" ${option.terminal ? "data-terminal='true'" : ""}>
      ${escapeHtml(option.label)}
    </button>
  `).join("");

  return `
    <p class="step-kicker">${escapeHtml(kicker)}</p>
    <h2 class="question-title">${question}</h2>
    ${afterQuestion}
    <div class="options">${optionsMarkup}</div>
    ${state.currentStep > 0 ? `<div class="button-row">${backButton()}</div>` : ""}
  `;
}

function renderClauseReference() {
  const t = copy[state.lang];
  const imageSrc = state.lang === "en" ? "servicekosten_eng.png" : "servicekosten.png";
  return `
    <figure class="clause-reference">
      <img class="clause-image" src="${imageSrc}" alt="${escapeAttribute(t.textVersionTitle)}" data-clause-image>
      <figcaption>
        <button class="text-version-action" type="button" data-action="open-text">
          ${escapeHtml(t.textVersionButton)}
        </button>
      </figcaption>
    </figure>
    <p class="image-note" data-image-note>${escapeHtml(t.imageFallback)}</p>
  `;
}

function backButton() {
  return `<button class="secondary-action" type="button" data-action="back">${escapeHtml(copy[state.lang].back)}</button>`;
}

function selectOption(option) {
  const step = steps[state.currentStep];
  state.answers[step.key] = option.dataset.optionValue;

  if (option.dataset.terminal === "true") {
    renderTermination();
    return;
  }

  setStep(Math.min(state.currentStep + 1, steps.length - 1));
}

function goBack() {
  if (state.currentStep === 0) {
    showView("landing");
    return;
  }
  setStep(state.currentStep - 1);
}

function renderTermination() {
  state.wizardMode = "terminated";
  const t = copy[state.lang];
  questionContent.innerHTML = `
    <div class="result-screen">
      <span class="result-icon" aria-hidden="true">i</span>
      <h2>${escapeHtml(t.terminatedTitle)}</h2>
      <p>${escapeHtml(t.terminatedBody)}</p>
      <div class="button-row">${backButton()}</div>
    </div>
  `;
}

function renderSuccess() {
  state.wizardMode = "success";
  const t = copy[state.lang];
  progressFill.style.width = "100%";
  questionContent.innerHTML = `
    <div class="result-screen">
      <span class="result-icon" aria-hidden="true">✓</span>
      <h2>${escapeHtml(t.successTitle)}</h2>
      <p>${escapeHtml(t.successBody)}</p>
    </div>
  `;
}

function handleTextAction(action) {
  if (action === "open-text") {
    openTextVersion();
    return;
  }

  if (action === "close-text") {
    textDialog.close();
  }
}

function openTextVersion() {
  const t = copy[state.lang];
  textDialogKicker.textContent = t.textVersionKicker;
  textDialogTitle.textContent = t.textVersionTitle;
  textReader.innerHTML = renderServiceText(t.serviceText);
  const closeButton = textDialog.querySelector("[data-action='close-text']");
  closeButton.textContent = t.closeText;
  closeButton.setAttribute("aria-label", t.closeText);
  textDialog.showModal();
}

function renderServiceText(text) {
  const items = text.items.map(item => `<li>${escapeHtml(item)}</li>`).join("");
  return `
    <h3>${escapeHtml(text.title)}</h3>
    <p>${escapeHtml(text.paragraph)}</p>
    <p>- ${escapeHtml(text.line)}</p>
    <ul>${items}</ul>
  `;
}

function resetToLanding() {
  state.currentStep = 0;
  state.wizardMode = "editing";
  state.submitting = false;
  hideTooltip();
  if (textDialog.open) textDialog.close();
  if (articleDialog.open) articleDialog.close();
  showView("landing");
}

function openArticle(articleId) {
  const article = copy[state.lang].articles[articleId];
  if (!article) return;

  articleKicker.textContent = article.kicker || copy[state.lang].articleKicker;
  articleTitle.textContent = article.title;
  articleBody.innerHTML = renderArticle(article);

  const closeButton = articleDialog.querySelector("[data-action='close-article']");
  closeButton.textContent = copy[state.lang].articleClose;
  closeButton.setAttribute("aria-label", copy[state.lang].articleClose);
  articleDialog.showModal();
}

function renderArticle(article) {
  const paragraphs = article.paragraphs
    .map(paragraph => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
  const link = article.linkUrl
    ? `<p><a class="article-link${article.isPlaceholderLink ? " is-disabled" : ""}" href="${escapeAttribute(article.linkUrl)}" ${article.isPlaceholderLink ? "aria-disabled='true' data-disabled-link='true'" : "target='_blank' rel='noopener noreferrer'"}>${escapeHtml(article.linkText)}</a></p>`
    : "";
  return `${paragraphs}${link}`;
}

function renderHotspots(text) {
  return text.replace(/\{hotspot:([a-z]+):([^}]+)\}/g, (_, key, label) => {
    const helper = state.lang === "nl" ? "meer informatie" : "more information";
    return `<button class="hotspot" type="button" data-hotspot="${escapeAttribute(key)}" aria-haspopup="dialog" aria-expanded="false" aria-label="${escapeAttribute(`${label} - ${helper}`)}">${escapeHtml(label)}</button>`;
  });
}

function showTooltip(trigger) {
  const key = trigger.dataset.hotspot;
  const text = copy[state.lang].tooltips[key];
  if (!text) return;

  if (activeTooltipTrigger && activeTooltipTrigger !== trigger) {
    activeTooltipTrigger.setAttribute("aria-expanded", "false");
  }

  activeTooltipTrigger = trigger;
  activeTooltipTrigger.setAttribute("aria-expanded", "true");
  tooltipText.textContent = text;
  tooltipLayer.hidden = false;

  const triggerRect = trigger.getBoundingClientRect();
  const cardRect = tooltipCard.getBoundingClientRect();
  const gap = 12;
  const left = Math.min(
    Math.max(16, triggerRect.left + triggerRect.width / 2 - cardRect.width / 2),
    window.innerWidth - cardRect.width - 16
  );
  const topSpace = triggerRect.top;
  const top = topSpace > cardRect.height + gap
    ? triggerRect.top - cardRect.height - gap
    : triggerRect.bottom + gap;

  tooltipCard.style.left = `${left}px`;
  tooltipCard.style.top = `${Math.min(top, window.innerHeight - cardRect.height - 16)}px`;
}

function hideTooltip() {
  if (activeTooltipTrigger) {
    activeTooltipTrigger.setAttribute("aria-expanded", "false");
    activeTooltipTrigger = null;
  }
  tooltipLayer.hidden = true;
}

async function submitForm(form) {
  if (state.submitting) return;

  const t = copy[state.lang];
  const status = form.querySelector("[data-status-message]");
  const submit = form.querySelector("[data-submit-button]");
  const email = form.elements.email.value.trim();
  const consent = form.elements.consent.checked;

  if (!form.reportValidity() || !consent) return;

  state.answers.email = email;
  state.answers.consent = consent;
  state.submitting = true;
  submit.disabled = true;
  status.className = "status-message";
  status.textContent = t.submitting;

  try {
    if (PUBLIC_KEY.includes("...") || !WEB3FORMS_ACCESS_KEY) {
      throw new Error("CONFIGURATION_REQUIRED");
    }

    if (typeof openpgp === "undefined") {
      throw new Error("OPENPGP_UNAVAILABLE");
    }

    const encryptedPayload = await encryptAnswers({
      submittedAt: new Date().toISOString(),
      language: state.lang,
      answers: state.answers
    });

    const formData = new URLSearchParams();
    formData.set("access_key", WEB3FORMS_ACCESS_KEY);
    formData.set("subject", "Encrypted Barnstijn tenant initiative response");
    formData.set("from_name", "Barnstijn tenant initiative");
    formData.set("message", encryptedPayload);

    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formData
    }).catch(error => {
      throwSubmitError(error.message || "Network request failed");
    });

    const responseText = await response.text();
    const responseData = parseJson(responseText);

    if (!response.ok || responseData?.success === false) {
      const detail = responseData?.message || responseText || `HTTP ${response.status}`;
      throwSubmitError(`HTTP ${response.status}: ${detail}`);
    }

    status.className = "status-message success";
    renderSuccess();
  } catch (error) {
    status.className = "status-message error";
    if (error.message === "CONFIGURATION_REQUIRED") {
      status.textContent = t.configError;
    } else if (error.message === "OPENPGP_UNAVAILABLE") {
      status.textContent = t.openPgpError;
    } else if (error.message === "ENCRYPTION_FAILED") {
      status.textContent = t.encryptionError;
    } else if (error.message === "SUBMIT_FAILED" && error.detail) {
      status.textContent = `${t.submitError} ${t.submitDetailPrefix} ${error.detail}`;
    } else {
      status.textContent = t.submitError;
    }
    submit.disabled = !form.elements.consent.checked;
  } finally {
    state.submitting = false;
  }
}

function parseJson(text) {
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function throwSubmitError(detail) {
  const error = new Error("SUBMIT_FAILED");
  error.detail = detail;
  throw error;
}

async function encryptAnswers(payload) {
  try {
    const publicKey = await openpgp.readKey({ armoredKey: PUBLIC_KEY });
    const message = await openpgp.createMessage({ text: JSON.stringify(payload, null, 2) });
    return openpgp.encrypt({ message, encryptionKeys: publicKey });
  } catch (error) {
    console.error("OpenPGP encryption failed", error);
    throw new Error("ENCRYPTION_FAILED");
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}
