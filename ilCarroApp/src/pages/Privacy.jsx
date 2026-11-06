import { Link } from "react-router-dom";
import "../styles/privacy.css";

export default function Privacy() {
  return (
    <main className="privacy-page">
      <Link to="/" className="privacy-page__back">← Torna al sito</Link>
      <h1>Informativa privacy e cookie</h1>
      <p className="privacy-page__updated">Ultimo aggiornamento: 6 novembre 2026</p>

      <h2>Titolare del trattamento</h2>
      <p>
        Il titolare del trattamento è il gestore del Ristorante Il Carro, con
        sede in Viale Selva Rosata 30, Caorle (VE). Per informazioni o richieste
        relative ai dati personali: ristoranteilcarro.dunaverde@gmail.com.
      </p>

      <h2>Dati e servizi utilizzati</h2>
      <p>
        Il sito non offre account né moduli di registrazione. Quando lo visiti,
        i servizi tecnici e i contenuti incorporati possono trattare dati
        tecnici come indirizzo IP, informazioni sul browser e richieste
        effettuate. Il sito integra Google Maps e contenuti/widget di
        Tripadvisor, che possono ricevere dati dal browser quando la pagina
        viene caricata.
      </p>

      <h2>Google Analytics</h2>
      <p>
        Google Analytics è gestito tramite Google Tag Manager per produrre
        statistiche aggregate sull’uso del sito. Lo spazio di archiviazione
        Analytics è impostato come negato fino alla scelta dell’utente. Se
        accetti, il consenso viene registrato su questo dispositivo e il tag
        Analytics può raccogliere dati di utilizzo. Se rifiuti, Analytics resta
        disattivato. Puoi cambiare la scelta in qualsiasi momento dal pulsante
        “Preferenze cookie”.
      </p>
      <p>
        Per maggiori informazioni consulta l’
        <a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noreferrer">
          informativa privacy di Google
        </a>
        .
      </p>

      <h2>Cookie e preferenze</h2>
      <p>
        La scelta viene salvata nel local storage del browser con la chiave
        “ilcarro-cookie-consent”, così il banner non viene riproposto a ogni
        visita. La scelta non viene inviata al server del sito. Puoi cancellare
        i dati del sito dal browser per azzerarla; alla visita successiva potrai
        scegliere di nuovo.
      </p>

      <h2>Conservazione e diritti</h2>
      <p>
        I dati trattati dai servizi esterni sono conservati secondo i tempi e le
        modalità stabiliti dai rispettivi fornitori. Per esercitare i diritti
        previsti dalla normativa applicabile o chiedere informazioni sul
        trattamento, contatta il titolare all’indirizzo email indicato sopra.
        È inoltre possibile presentare reclamo al Garante per la protezione dei
        dati personali.
      </p>

      <p className="privacy-page__note">
        Questa informativa descrive le funzioni rilevate nel sito. Prima della
        pubblicazione, il titolare deve verificare i dettagli dei servizi,
        completare eventuali dati identificativi mancanti e confermare le
        impostazioni effettive di Analytics, Maps e Tripadvisor.
      </p>
    </main>
  );
}
