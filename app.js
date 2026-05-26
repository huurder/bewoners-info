const PUBLIC_KEY = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mFIEahVwSBMIKoZIzj0DAQcCAwTUODOSRc/cXuopoVBZQSf0O/TMdBkjULi2zbi/
tI8qoAeJuiHUBgKI82sTPxrOM0BAhKKCZUTV8A8EFt3Df7pvtCZQLiBCZXllciA8
aHV1cmRlci1iYXJuc3Rpam5AcHJvdG9uLm1lPoiQBBMTCAA4FiEE/zSZWyP2JX5I
sEUg1FoSiM/JxaMFAmoVcEgCGwMFCwkIBwIGFQoJCAsCBBYCAwECHgECF4AACgkQ
1FoSiM/JxaPQEwD/WzeoaV+SHKKWu6U6Nih9bS0nMMa/Fy8UVlpnCEUlKasBAK/7
3LJ1G+KuEZkazQcLZ3nTYWhJ0O7mVC5KPzzaC+Bm
=/xIv
-----END PGP PUBLIC KEY BLOCK-----`;

const FORM_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "5cb97146-6a95-4a46-8a4a-41d1e9103a7b";

const state = {
  lang: "nl",
  currentStep: 0,
  answers: {},
  submitting: false
};

const copy = {
  nl: {
    brandSubtitle: "Huurdersinitiatief",
    landingEyebrow: "Samen organiseren",
    landingHeadline: "Huurders van Barnstijn Beheer B.V. – Laten we samen sterk staan.",
    landingBody: "Veel huurders hebben clausules in hun contract waardoor de verhuurder mogelijk onterecht kosten aan ons doorberekent (zoals afschrijving van meubilair via de servicekosten). Door ons te verenigen kunnen we meer transparantie eisen, kosten verlagen en als één blok onderhandelen. Dit initiatief is 100% veilig en uw gegevens worden lokaal versleuteld.",
    ctaStart: "Start / Doe mee",
    trustOneTitle: "Lokaal versleuteld",
    trustOneBody: "Uw antwoorden worden in de browser versleuteld voordat ze worden verzonden.",
    trustTwoTitle: "Heldere belangen",
    trustTwoBody: "Het doel is transparantie, lagere kosten en gezamenlijke vertegenwoordiging.",
    trustThreeTitle: "Minimale gegevens",
    trustThreeBody: "Alleen de antwoorden en uw e-mailadres worden verwerkt.",
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
    submitError: "Verzenden is niet gelukt. Controleer de configuratie of probeer het later opnieuw.",
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
    }
  },
  en: {
    brandSubtitle: "Tenant initiative",
    landingEyebrow: "Organizing together",
    landingHeadline: "Tenants of Barnstijn Beheer B.V. – Let's stand together.",
    landingBody: "Many tenants have clauses in their contracts that might unlawfully shift landlord costs onto us (like depreciation of furniture via service costs). By uniting, we can demand transparency, lower costs, and negotiate as a united front. This initiative is 100% secure and your data is encrypted locally.",
    ctaStart: "Start / Join us",
    trustOneTitle: "Encrypted locally",
    trustOneBody: "Your answers are encrypted in your browser before they are sent.",
    trustTwoTitle: "Clear interests",
    trustTwoBody: "The purpose is transparency, lower costs, and shared representation.",
    trustThreeTitle: "Minimal data",
    trustThreeBody: "Only your answers and email address are processed.",
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
    submitError: "Submission failed. Check the configuration or try again later.",
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

  if (!questionContent || !progressLabel || !progressFill || !tooltipLayer || !tooltipText || !tooltipCard || !textDialog || !textDialogKicker || !textDialogTitle || !textReader) {
    console.error("The tenant initiative app could not find its required HTML elements.");
    return;
  }

  document.addEventListener("click", event => {
    const start = event.target.closest("[data-action='start']");
    const lang = event.target.closest("[data-lang]");
    const option = event.target.closest("[data-option-value]");
    const back = event.target.closest("[data-action='back']");
    const hotspot = event.target.closest("[data-hotspot]");
    const closeTooltip = event.target.closest("[data-tooltip-close]");
    const textAction = event.target.closest("[data-action='open-text'], [data-action='close-text']");

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

  if (document.querySelector("[data-view='wizard']").classList.contains("is-active")) {
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

    const encryptedPayload = await encryptAnswers({
      submittedAt: new Date().toISOString(),
      language: state.lang,
      answers: state.answers
    });

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Encrypted Barnstijn tenant initiative response");
    formData.append("from_name", "Barnstijn tenant initiative");
    formData.append("email", email);
    formData.append("message", encryptedPayload);
    formData.append("encrypted_payload", encryptedPayload);

    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      throw new Error("SUBMIT_FAILED");
    }

    status.className = "status-message success";
    renderSuccess();
  } catch (error) {
    status.className = "status-message error";
    status.textContent = error.message === "CONFIGURATION_REQUIRED" ? t.configError : t.submitError;
    submit.disabled = !form.elements.consent.checked;
  } finally {
    state.submitting = false;
  }
}

async function encryptAnswers(payload) {
  const publicKey = await openpgp.readKey({ armoredKey: PUBLIC_KEY });
  const message = await openpgp.createMessage({ text: JSON.stringify(payload, null, 2) });
  return openpgp.encrypt({ message, encryptionKeys: publicKey });
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
