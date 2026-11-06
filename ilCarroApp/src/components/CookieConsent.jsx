import { useEffect, useState } from "react";
import "../styles/cookie-consent.css";

const STORAGE_KEY = "ilcarro-cookie-consent";

function updateAnalyticsConsent(granted) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  }]);
}

export default function CookieConsent() {
  const [choice, setChoice] = useState(() => localStorage.getItem(STORAGE_KEY));
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (choice === "accepted" || choice === "rejected") {
      updateAnalyticsConsent(choice === "accepted");
    }
  }, [choice]);

  function saveChoice(granted) {
    const nextChoice = granted ? "accepted" : "rejected";
    localStorage.setItem(STORAGE_KEY, nextChoice);
    updateAnalyticsConsent(granted);
    setChoice(nextChoice);
    setShowSettings(false);
  }

  return (
    <>
      {choice === null && (
        <section className="cookie-banner" aria-label="Preferenze cookie" aria-live="polite">
          <div className="cookie-banner__copy">
            <h2>La tua privacy</h2>
            <p>
              Usiamo Google Analytics per capire come viene utilizzato il sito.
              Puoi accettare o rifiutare i cookie analitici. La scelta viene
              salvata su questo dispositivo e puoi modificarla in seguito.
            </p>
            <a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noreferrer">
              Informativa sulla privacy di Google
            </a>
          </div>
          <div className="cookie-banner__actions">
            <button type="button" className="cookie-button cookie-button--secondary" onClick={() => saveChoice(false)}>
              Rifiuta
            </button>
            <button type="button" className="cookie-button cookie-button--primary" onClick={() => saveChoice(true)}>
              Accetta
            </button>
          </div>
        </section>
      )}
      {choice !== null && (
        <button
          type="button"
          className="cookie-preferences"
          onClick={() => setShowSettings((open) => !open)}
          aria-expanded={showSettings}
        >
          Preferenze cookie
        </button>
      )}
      {showSettings && (
        <section className="cookie-settings" aria-label="Modifica preferenze cookie">
          <p>Cookie analitici Google Analytics</p>
          <button type="button" className="cookie-button cookie-button--secondary" onClick={() => saveChoice(false)}>
            Rifiuta
          </button>
          <button type="button" className="cookie-button cookie-button--primary" onClick={() => saveChoice(true)}>
            Accetta
          </button>
        </section>
      )}
    </>
  );
}
