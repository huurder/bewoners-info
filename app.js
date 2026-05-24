/*
 * Replace this placeholder with the full public PGP key that should receive the
 * form responses. Keep the BEGIN/END lines and all line breaks exactly as
 * exported by your PGP tool. The private key must never be placed in this site.
 */
const PUBLIC_KEY = `-----BEGIN PGP PUBLIC KEY BLOCK-----

PASTE YOUR PUBLIC KEY HERE

-----END PGP PUBLIC KEY BLOCK-----`;

/*
 * Replace this with your production form endpoint. For Web3Forms you will
 * usually also need to include an access key in the submitted body; this file
 * keeps that out as a placeholder so GitHub Pages can be published safely.
 */
const FORM_ENDPOINT = 'https://api.web3forms.com/submit';

/*
 * Optional: Web3Forms requires an access key. Leave this placeholder unchanged
 * if you use a different endpoint, or replace it with your Web3Forms access key.
 */
const FORM_ACCESS_KEY = 'PASTE YOUR WEB3FORMS ACCESS KEY HERE';

const translations = {
  nl: {
    eyebrow: 'Huurdersinitiatief',
    title: 'Barnstijn Beheer B.V.',
    step1Legend: 'Huurderfilter',
    step1Question: 'Bent u een huurder van Barnstijn Beheer B.V.?',
    step2Legend: 'Bestuurslidmaatschap',
    step2Question:
      'Zou u bereid zijn om bestuurslid te worden van een "Huurderscommissie in de zin van de Wet overleg huurders verhuurder"?',
    step2Help: 'Verwachte tijdsinvestering: 2-5 (rond)mails per jaar.',
    step3Legend: 'Servicekostenclausule',
    step3Question:
      'Heeft u een clausule in uw huurcontract die lijkt op de bovenstaande afbeelding?',
    step4Legend: 'Contact en toestemming',
    step4Question: 'Contact en toestemming',
    yes: 'Ja',
    no: 'Nee',
    boardGladly: 'Graag',
    boardFallback: 'Alleen als niemand anders het wil doen',
    boardNo: 'Nee',
    emailLabel: 'E-mailadres',
    consentText:
      'Ik ga ermee akkoord dat mijn gegevens veilig en versleuteld worden opgeslagen om contact met mij op te nemen over een samenwerking van de huurders van Barnstijn Beheer B.V. Ik weet dat ik deze toestemming op elk moment vormvrij kan intrekken.',
    privacyTitle: 'Privacygegevens',
    privacyControllerLabel: 'Verwerkingsverantwoordelijke',
    privacyController: 'P. Beyer, bereikbaar via huurder-barnstijn@proton.me.',
    privacyPurposeLabel: 'Doel',
    privacyPurpose:
      'Uw gegevens worden uitsluitend gebruikt om gezamenlijke belangen tegenover Barnstijn Beheer B.V. te organiseren en te vertegenwoordigen.',
    privacySecurityLabel: 'Beveiliging',
    privacySecurity:
      'Uw invoer wordt direct in uw browser versleuteld. Niemand behalve de initiatiefnemer kan deze lezen. Delen met derden is strikt uitgesloten.',
    privacyRetentionLabel: 'Bewaartermijn en intrekking',
    privacyRetention:
      'Bewaard voor de duur van de samenwerking. Stuur een e-mail om gegevens volledig te laten verwijderen.',
    tenantStop:
      'Dank u voor uw interesse, maar dit formulier is alleen bedoeld voor huurders van Barnstijn Beheer B.V.',
    stepCount: (current, total) => `Stap ${current} van ${total}`,
    back: 'Terug',
    next: 'Volgende',
    submit: 'Versturen',
    sending: 'Versleutelen...',
    navLabel: 'Formuliernavigatie',
    clauseImageAlt: 'Voorbeeld van een servicekostenclausule',
    emailRequired: 'Vul een geldig e-mailadres in.',
    fieldRequired: 'Kies een antwoord om verder te gaan.',
    consentRequired: 'Geef toestemming om uw reactie te kunnen versturen.',
    keyMissing:
      'De publieke PGP-sleutel ontbreekt nog. Vervang de placeholder in app.js voordat u dit formulier publiceert.',
    encryptionFailed:
      'Versleutelen is niet gelukt. Controleer de publieke PGP-sleutel en probeer het opnieuw.',
    submitFailed:
      'Versturen is niet gelukt. Controleer de formulierendpoint en probeer het opnieuw.',
    successTitle: 'Bedankt, uw reactie is veilig verstuurd.',
    successBody: 'De gegevens zijn in uw browser versleuteld voordat ze zijn verzonden.',
  },
  en: {
    eyebrow: 'Tenant initiative',
    title: 'Barnstijn Beheer B.V.',
    step1Legend: 'Tenant filter',
    step1Question: 'Are you a tenant of Barnstijn Beheer B.V.?',
    step2Legend: 'Board membership',
    step2Question:
      'Would you be willing to become a board member of a "Huurderscommissie in de zin van de Wet overleg huurders verhuurder" (official tenant committee)?',
    step2Help: 'Expected effort: 2-5 mass emails per year.',
    step3Legend: 'Service costs clause',
    step3Question:
      'Do you have a clause in your rental agreement that looks similar to the image above?',
    step4Legend: 'Contact and consent',
    step4Question: 'Contact and consent',
    yes: 'Yes',
    no: 'No',
    boardGladly: 'Gladly',
    boardFallback: 'Only if no one else steps up',
    boardNo: 'No',
    emailLabel: 'Email address',
    consentText:
      'I agree that my data will be securely encrypted and stored for the purpose of contacting me regarding a coalition of tenants of Barnstijn Beheer B.V. I understand that I can withdraw this consent informally at any time.',
    privacyTitle: 'Privacy details',
    privacyControllerLabel: 'Data Controller',
    privacyController: 'P. Beyer, reachable at huurder-barnstijn@proton.me.',
    privacyPurposeLabel: 'Purpose',
    privacyPurpose:
      'Your data will be used exclusively to organize and represent common interests against Barnstijn Beheer B.V.',
    privacySecurityLabel: 'Security',
    privacySecurity:
      'Your inputs are encrypted directly in your browser. No one except the initiator can read them. Sharing with third parties is strictly excluded.',
    privacyRetentionLabel: 'Retention & Withdrawal',
    privacyRetention:
      'Kept for the duration of cooperation. Send an email to have data completely deleted.',
    tenantStop:
      'Thank you for your interest, but this form is only for tenants of Barnstijn Beheer B.V.',
    stepCount: (current, total) => `Step ${current} of ${total}`,
    back: 'Back',
    next: 'Next',
    submit: 'Submit',
    sending: 'Encrypting...',
    navLabel: 'Form navigation',
    clauseImageAlt: 'Example of a service costs clause',
    emailRequired: 'Enter a valid email address.',
    fieldRequired: 'Choose an answer to continue.',
    consentRequired: 'Give consent before submitting your response.',
    keyMissing:
      'The public PGP key is still missing. Replace the placeholder in app.js before publishing this form.',
    encryptionFailed:
      'Encryption failed. Check the public PGP key and try again.',
    submitFailed: 'Submission failed. Check the form endpoint and try again.',
    successTitle: 'Thank you, your response was sent securely.',
    successBody: 'The data was encrypted in your browser before it was submitted.',
  },
};

const form = document.querySelector('#tenant-form');
const steps = Array.from(document.querySelectorAll('.step'));
const backButton = document.querySelector('#back-button');
const nextButton = document.querySelector('#next-button');
const submitButton = document.querySelector('#submit-button');
const progressBar = document.querySelector('#progress-bar');
const stepCount = document.querySelector('#step-count');
const formError = document.querySelector('#form-error');
const emailError = document.querySelector('#email-error');
const tenantStopMessage = document.querySelector('#tenant-stop-message');
const successPanel = document.querySelector('#success-panel');
const consentInput = document.querySelector('#consent');
const emailInput = document.querySelector('#email');
const languageButtons = Array.from(document.querySelectorAll('.lang-button'));

let currentStep = 0;
let currentLanguage = 'nl';

function t(key, ...args) {
  const value = translations[currentLanguage][key];
  return typeof value === 'function' ? value(...args) : value;
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
    element.dataset.i18nAttr.split(',').forEach((pair) => {
      const [attribute, key] = pair.split(':').map((part) => part.trim());
      element.setAttribute(attribute, t(key));
    });
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  updateControls();
}

function selectedValue(name) {
  return form.elements[name]?.value || '';
}

function setStep(index, direction = 'forward') {
  currentStep = index;

  steps.forEach((step, stepIndex) => {
    const isActive = stepIndex === currentStep;
    step.classList.toggle('is-active', isActive);
    step.classList.toggle('is-reversing', direction === 'back');
    step.toggleAttribute('inert', !isActive);
    step.setAttribute('aria-hidden', String(!isActive));
  });

  const heading = steps[currentStep].querySelector('h2');
  requestAnimationFrame(() => heading?.focus({ preventScroll: true }));
  updateControls();
  clearErrors();
}

function updateControls() {
  const total = steps.length;
  const isFinalStep = currentStep === total - 1;
  const tenantRejected = currentStep === 0 && selectedValue('isTenant') === 'no';
  const progress = ((currentStep + 1) / total) * 100;

  progressBar.style.width = `${progress}%`;
  stepCount.textContent = t('stepCount', currentStep + 1, total);

  tenantStopMessage.hidden = !tenantRejected;
  backButton.hidden = currentStep === 0;
  nextButton.hidden = isFinalStep || tenantRejected;
  submitButton.hidden = !isFinalStep;
  submitButton.disabled = !isFinalStep || !consentInput.checked || submitButton.dataset.busy === 'true';
}

function clearErrors() {
  formError.textContent = '';
  emailError.textContent = '';
  emailInput.removeAttribute('aria-invalid');
}

function isCurrentStepValid() {
  clearErrors();

  const currentFieldset = steps[currentStep];
  const requiredRadio = currentFieldset.querySelector('input[type="radio"][required]');

  if (requiredRadio && !selectedValue(requiredRadio.name)) {
    formError.textContent = t('fieldRequired');
    return false;
  }

  if (currentStep === steps.length - 1) {
    if (!emailInput.validity.valid) {
      emailError.textContent = t('emailRequired');
      emailInput.setAttribute('aria-invalid', 'true');
      emailInput.focus();
      return false;
    }

    if (!consentInput.checked) {
      formError.textContent = t('consentRequired');
      consentInput.focus();
      return false;
    }
  }

  return true;
}

function buildPayload() {
  return {
    submittedAt: new Date().toISOString(),
    language: currentLanguage,
    tenantOfBarnstijn: selectedValue('isTenant'),
    boardMemberWillingness: selectedValue('boardMember'),
    serviceCostsClausePresent: selectedValue('serviceCostsClause'),
    email: emailInput.value.trim(),
    consentGiven: consentInput.checked,
    consentText: t('consentText'),
  };
}

function publicKeyLooksConfigured() {
  return !PUBLIC_KEY.includes('PASTE YOUR PUBLIC KEY HERE');
}

async function encryptPayload(payload) {
  if (!window.openpgp) {
    throw new Error('openpgp.js was not loaded');
  }

  if (!publicKeyLooksConfigured()) {
    throw new Error('PGP public key placeholder still present');
  }

  const publicKey = await openpgp.readKey({ armoredKey: PUBLIC_KEY });
  const message = await openpgp.createMessage({
    text: JSON.stringify(payload, null, 2),
  });

  return openpgp.encrypt({
    message,
    encryptionKeys: publicKey,
  });
}

async function submitEncryptedMessage(encryptedMessage) {
  const body = {
    subject: 'Nieuwe reactie huurdersinitiatief Barnstijn Beheer B.V.',
    encrypted_message: encryptedMessage,
  };

  if (!FORM_ACCESS_KEY.includes('PASTE YOUR WEB3FORMS ACCESS KEY HERE')) {
    body.access_key = FORM_ACCESS_KEY;
  }

  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Endpoint returned ${response.status}`);
  }
}

function setBusy(isBusy) {
  submitButton.dataset.busy = String(isBusy);
  submitButton.textContent = isBusy ? t('sending') : t('submit');
  updateControls();
}

function showSuccess() {
  form.hidden = true;
  successPanel.hidden = false;
  successPanel.focus();
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentLanguage = button.dataset.lang;
    applyTranslations();
  });
});

form.addEventListener('change', (event) => {
  if (event.target.matches('input')) {
    clearErrors();
    updateControls();
  }
});

nextButton.addEventListener('click', () => {
  if (!isCurrentStepValid()) {
    return;
  }

  if (currentStep < steps.length - 1) {
    setStep(currentStep + 1, 'forward');
  }
});

backButton.addEventListener('click', () => {
  if (currentStep > 0) {
    setStep(currentStep - 1, 'back');
  }
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!isCurrentStepValid()) {
    return;
  }

  setBusy(true);
  clearErrors();

  try {
    const encryptedMessage = await encryptPayload(buildPayload());
    await submitEncryptedMessage(encryptedMessage);
    showSuccess();
  } catch (error) {
    const message = publicKeyLooksConfigured() ? t('submitFailed') : t('keyMissing');
    formError.textContent =
      error.message === 'openpgp.js was not loaded' || error.message.includes('key')
        ? t('encryptionFailed')
        : message;

    if (!publicKeyLooksConfigured()) {
      formError.textContent = t('keyMissing');
    }
  } finally {
    setBusy(false);
  }
});

applyTranslations();
setStep(0);
