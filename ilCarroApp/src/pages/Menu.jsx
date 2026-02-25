import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/Menu.css";

const Menu = () => {
  const [showScrollButton, setShowScrollButton] = React.useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header isMenuPage={true} />
      <main>
        <table className="menu-table" id="menu-table">
          <tbody>
            <tr>
              <td style={{ textAlign: "center" }}>
                <button onClick={() => scrollToSection("antipasti")}>
                  Antipasti
                </button>
              </td>
              <td style={{ textAlign: "center" }}>
                <button onClick={() => scrollToSection("primi")}>Primi</button>
              </td>
              <td style={{ textAlign: "center" }}>
                <button onClick={() => scrollToSection("secondi")}>
                  Secondi
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>
                <button onClick={() => scrollToSection("contorni")}>
                  Contorni
                </button>
              </td>
              <td style={{ textAlign: "center" }}>
                <button onClick={() => scrollToSection("pizze")}>Pizze</button>
              </td>
              <td style={{ textAlign: "center" }}>
                <button onClick={() => scrollToSection("bevande")}>
                  Bevande
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                <button onClick={() => scrollToSection("vini")}>
                  Carta dei Vini
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        {showScrollButton && (
          <button
            style={{
              position: "fixed",
              top: "50%",
              right: "2vw",
              transform: "translateY(-50%)",
              zIndex: 1000,
              padding: "1rem",
              color: "rgb(255, 255, 255)",
              border: "2px solid rgb(116, 91, 62)",
              borderRadius: "50%",
              background: "#ffffff",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
            onClick={() => {
              const menuTable = document.getElementById("menu-table");
              if (menuTable) menuTable.scrollIntoView({ behavior: "smooth" });
            }}
          ></button>
        )}
        <span id="mobilespan"></span>
        <section id="antipasti">
          <h2>Antipasti</h2>
          <h3>Antipasti di Pesce</h3>
          <ul>
            <li>
              <h4>Tavolozza di Crudo</h4>
              <p>(Tonno, salmone, branzino, scampi, gamberi rossi)</p>
            </li>
            <li>
              <h4>Antipasto Misto dell' Adriatico</h4>
              <p>
                (Crema di dentice, sarde in saor, moscardino, coda di gamberi,
                seppie, canace)
              </p>
            </li>
            <li>
              <h4>Antipasto di Pesce Affumicato</h4>
              <p>(Seppie, salmone, tonno, ombrina, spada)</p>
            </li>
            <li>
              <h4>Cicchetti Veneziani</h4>
              <p>(Sarde in saor, baccalà mantecato, canoce, moscardino)</p>
            </li>
            <li>
              <h4>Gamberi in Saor</h4>
            </li>
            <li>
              <h4>Sarde in Saor</h4>
            </li>
            <li>
              <h4>Baccalà Mantecato</h4>
            </li>
            <li>
              <h4>Cozze e vongole</h4>
            </li>
            <li>
              <h4>Cozze alla Marinara</h4>
            </li>
            <li>
              <h4>Capesante grigliate</h4>
            </li>
            <li>
              <h4>Moscardino di Caorle</h4>
            </li>
            <li>
              <h4>Granchio al Rosmarino</h4>
            </li>
            <li>
              <h4>Schie e Polenta</h4>
            </li>
            <li>
              <h4>Alici Marinate</h4>
            </li>
          </ul>
          <h3>Antipasti di Carne</h3>
          <ul>
            <li>
              <h4>Caprese con Bufala e Pomodoro</h4>
            </li>
            <li>
              <h4>Prosciutto Crudo con Burrata</h4>
            </li>
            <li>
              <h4>Prosciutto e Melone</h4>
            </li>
            <li>
              <h4>Parmigiana di Melanzane</h4>
            </li>
          </ul>
          {showScrollButton && (
            <button
              style={{
                position: "fixed",
                top: "50%",
                right: "2vw",
                transform: "translateY(-50%)",
                zIndex: 1000,
                padding: "1rem",
                color: "rgb(255, 255, 255)",
                border: "2px solid rgb(116, 91, 62)",
                borderRadius: "50%",
                background: "#ffffff",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
              onClick={() => {
                const menuTable = document.getElementById("menu-table");
                if (menuTable) menuTable.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label="Torna al menu"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8L16 24"
                  stroke="rgb(116, 91, 62)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M8 16L16 8L24 16"
                  stroke="rgb(116, 91, 62)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        </section>
        <span id="mobilespan"></span>
        <section id="primi">
          <h2>Primi</h2>
          <h3>Primi di Pesce</h3>
          <ul>
            <li>
              <h4>Spaghetti allo Scoglio</h4>
            </li>
            <li>
              <h4>Spaghetti alle Vongole</h4>
            </li>
            <li>
              <h4>Tagliolini al Granchio</h4>
            </li>
            <li>
              <h4>Tagliolini al Nero di Seppia</h4>
            </li>
            <li>
              <h4>
                Risotto ai Frutti di Mare
                <br />
                (Minimo 2 persone)
              </h4>
            </li>
            <li>
              <h4>Gnocchi con Gamberi, Pesto e Pomodorini</h4>
            </li>
          </ul>
          <h3>Primi di Carne</h3>
          <ul>
            <li>
              <h4>Lasagne alla Bolognese</h4>
            </li>
            <li>
              <h4>Spaghetti alla Carbonara</h4>
            </li>
            <li>
              <h4>Gnocchi Gorgonzola e Speck</h4>
            </li>
            <li>
              <h4>Penne al Ragù</h4>
            </li>
            <li>
              <h4>Penne al Pomodoro</h4>
            </li>
          </ul>
        </section>
        <span id="mobilespan"></span>
        <section id="secondi">
          <h2>Secondi</h2>
          <h3>Secondi di Pesce</h3>
          <ul>
            <li>
              <h4>Pesce al Forno</h4>
              <p>(Branzino, orata, rombo con verdure)</p>
            </li>
            <li>
              <h4>Pesce alla Griglia</h4>
              <p>(Branzino, orata, rombo con verdure)</p>
            </li>
            <li>
              <h4>Grigliata Mista di Pesce</h4>
              <p>(Sogliola, Branzino, Mazzancolle, Seppie e Polenta)</p>
            </li>
            <li>
              <h4>Frittura Mista di Pesce con Verdurine Fritte</h4>
            </li>
            <li>
              <h4>Calamarini Fritti con Verdurine Fritte</h4>
            </li>
            <li>
              <h4>Sogliola alla Griglia con Polenta</h4>
            </li>
            <li>
              <h4>Seppie alla Griglia</h4>
            </li>
            <li>
              <h4>Seppie in Umido con Polenta</h4>
            </li>
            <li>
              <h4>
                Filetto di Branzino al Forno con Pomodorini e Olive Taggiasche
              </h4>
            </li>
          </ul>
          <h3>Secondi di Carne</h3>
          <ul>
            <li>
              <h4>Grigliata Mista di Carne</h4>
            </li>
            <li>
              <h4>Tagliata di Manzo con Rucola, Grana e Pomodorini</h4>
            </li>
            <li>
              <h4>Cotoletta di Maiale alla Milanese con Patatine Fritte</h4>
            </li>
          </ul>
        </section>
        <span id="mobilespan"></span>
        <section id="contorni">
          <h2>Contorni</h2>
          <ul>
            <li>
              <h4>Patatine Fritte</h4>
            </li>
            <li>
              <h4>Verdure Rosolate</h4>
            </li>
            <li>
              <h4>Insalata Mista</h4>
              (Insalata Verde, pomodori, carote, Cetrioli)
            </li>
            <li>
              <h4>Insalata Verde</h4>
            </li>
          </ul>
        </section>
        <span id="mobilespan"></span>
        <section id="pizze">
          <h2>Pizze</h2>
          <ul>
            <li>
              <h4>Margherita</h4>
              <p>(Pomodoro, mozzarella)</p>
            </li>
            <li>
              <h4>Marinara</h4>
              <p>(Pomodoro, aglio, origano)</p>
            </li>
            <li>
              <h4>Prosciutto e Funghi</h4>
              <p>(Pomodoro, mozzarella, prosciutto cotto, funghi)</p>
            </li>
            <li>
              <h4>Capricciosa</h4>
              <p>
                (Pomodoro, mozzarella, funghi, carciofini, prosciutto cotto )
              </p>
            </li>
            <li>
              <h4>Napoli</h4>
              <p>(Pomodoro, mozzarella, capperi, acciughe)</p>
            </li>
            <li>
              <h4>Tonno e Cipolla</h4>
              <p>(Pomodoro, mozzarella, tonno, cipolla)</p>
            </li>
            <li>
              <h4>4 Stagioni</h4>
              <p>
                (Pomodoro, mozzarella, prosciutto cotto, funghi, carciofini,
                salamino )
              </p>
            </li>
            <li>
              <h4>Viennese</h4>
              <p>(Pomodoro, mozzarella, wurstel)</p>
            </li>
            <li>
              <h4>Quattro Formaggi</h4>
              <p>(Pomodoro, mozzarella, brie, gorgonzola)</p>
            </li>
            <li>
              <h4>Patatosa</h4>
              <p>(Pomodoro, mozzarella, patatine fritte)</p>
            </li>
            <li>
              <h4>Pugliese</h4>
              <p>(Pomodoro, mozzarella, cipolla)</p>
            </li>
            <li>
              <h4>Diavola</h4>
              <p>(Pomodoro, mozzarella, salamino piccante)</p>
            </li>
            <li>
              <h4>San Daniele</h4>
              <p>(Pomodoro, mozzarella, prosciutto crudo San Daniele)</p>
            </li>
            <li>
              <h4>Frutti di Mare</h4>
              <p>(Pomodoro, mozzarella, frutti di mare)</p>
            </li>
            <li>
              <h4>Sorrentina</h4>
              <p>
                (Pomodoro, mozzarella, funghi, carciofi, peperoni, salamino,
                prosciutto cotto, cipolla, aglio)
              </p>
            </li>
            <li>
              <h4>Zingara</h4>
              <p>(Pomodoro, mozzarella, funghi, peperoni)</p>
            </li>
            <li>
              <h4>Vegetariana</h4>
              <p>
                (Pomodoro, mozzarella, zucchine, melanzane, peperoni grigliati)
              </p>
            </li>
            <li>
              <h4>Fresca</h4>
              <p>(Pomodoro, mozzarella, rucola, pomodorini, grana)</p>
            </li>
            <li>
              <h4>"il Carro"</h4>
              <p>
                (Pomodoro, mozzarella, funghi, uovo, carciofi, prosciutto crudo)
              </p>
            </li>
            <li>
              <h4>Bresaola Rucola e Grana</h4>
              <p>(Pomodoro, mozzarella, bresaola, rucola, grana padano)</p>
            </li>
            <li>
              <h4>Hawaii</h4>
              <p>(Pomodoro, mozzarella, prosciutto, ananas)</p>
            </li>
            <li>
              <h4>Malga</h4>
              <p>(Pomodoro, mozzarella, brie, speck, porcini)</p>
            </li>
            <li>
              <h4>Calzone Classico</h4>
              <p>(Pomodoro, mozzarella, prosciutto cotto, funghi)</p>
            </li>
            <li>
              <h4>Estate</h4>
              <p>(Mozzarella, pomodorini, pesto)</p>
            </li>
            <li>
              <h4>Meraviglia</h4>
              <p>(Brie, porcini, pesto di rucola, pomodorini)</p>
            </li>
          </ul>
        </section>
        <span id="mobilespan"></span>
        <section id="bevande">
          <h2>Bevande</h2>
          <h3>Acqua</h3>
          <ul>
            <h4>Acqua Naturale</h4>
            <h4>Acqua Frizzante</h4>
          </ul>
          <h3>Bibite alla Spina</h3>
          <ul>
            <li>
              <h4>Pepsi Cola</h4>
              <p>(Piccola e media)</p>
            </li>
            <li>
              <h4>Aranciata</h4>
              <p>(Piccola e media)</p>
            </li>
            <li>
              <h4>Lemon Soda</h4>
              <p>(Piccola e media)</p>
            </li>
          </ul>
          <h3>Birre alla Spina</h3>
          <ul>
            <li>
              <h4>Birra Artigianale Ca' Barley</h4>
              <p>(Piccola e media)</p>
            </li>
            <li>
              <h4>Radler</h4>
              <p>(Piccola e media)</p>
            </li>
          </ul>
          <h3>Aperitivi</h3>
          <ul>
            <li>
              <h4>Spritz Bianco</h4>
            </li>
            <li>
              <h4>Spritz Aperol</h4>
            </li>
            <li>
              <h4>Spritz Campari</h4>
            </li>
            <li>
              <h4>Spritz Hugo</h4>
            </li>
          </ul>
          <h3>Bibite in Lattina</h3>
          <ul>
            <li>
              <h4>Coca Cola</h4>
            </li>
            <li>
              <h4>Coca Cola Zero</h4>
            </li>
            <li>
              <h4>Te al Limone</h4>
            </li>
            <li>
              <h4>Te alla Pesca</h4>
            </li>
            <li>
              <h4>Fanta</h4>
            </li>
            <li>
              <h4>Sprite</h4>
            </li>
          </ul>
          <h3>Birre in Bottiglia</h3>
          <ul>
            <li>
              <h4>Waitzen</h4>
            </li>
            <li>
              <h4>Analcolica</h4>
            </li>
          </ul>
          <h3>Vino alla Spina</h3>
          <ul>
            <li>
              <h4>Vino Frizzante</h4>
              <p>(0,25l, 0,50l, 1l)</p>
            </li>
            <li>
              <h4>Vino Bianco Fermo</h4>
              <p>(0,25l, 0,50l, 1l)</p>
            </li>
            <li>
              <h4>Cabernet</h4>
              <p>(0,25l, 0,50l, 1l)</p>
            </li>
          </ul>
        </section>
        <span id="mobilespan"></span>
        <section id="vini">
          <h2>Carta dei Vini</h2>
          <h3>Vini Bianchi</h3>
          <ul>
            <h4>Azienda Agricola "Vie D'alt" (Prepotto, Udine)</h4>
            <li>Friulano</li>
            <li>Sauvignon</li>
            <li>Pinot Grigio</li>
            <li>Chardonnay</li>
          </ul>
          <ul>
            <h4>Azienda Agricola "Col Saliz" (Refrontolo, Treviso)</h4>
            <li>Prosecco Extra Dry</li>
          </ul>
          <h3>Vini Rossi</h3>
          <ul>
            <h4>Azienda Agricola "Vie D'alt" (Prepotto, Udine)</h4>
            <li>Merlot</li>
            <li>Cabernet Franc</li>
          </ul>
          <h3>Vini Dessert</h3>
          <ul>
            <h4>Azienda Agricola "Vie D'alt" (Prepotto, Udine)</h4>
            <li>Verduzzo</li>
            <li>Moscato Giallo</li>
          </ul>
          <h3>Vini Rosati</h3>
          <ul>
            <h4>Azienda Agricola "Ca Maiol" (Desenzano del Garda, Brescia)</h4>
            <li>Chiaretto Rosè</li>
          </ul>
          <h3>Bollicine</h3>
          <ul>
            <h4>Azienda Agricola "Col Saliz" (Refrontolo, Treviso)</h4>
            <li>Prosecco Extra Dry</li>
            <li>Prosecco Servo Suo Rosè Brut</li>
          </ul>
          <ul>
            <h4>Azienda Vinicola "Col Vetoraz" (Valdobbiadene, Treviso)</h4>
            <li>Prosecco Extra Dry</li>
            <li>Prosecco Brut</li>
            <li>Prosecco Millesimato</li>
          </ul>
          <ul>
            <h4>Azienda Vinicola "Kettmeir" (Caldaro, Bolzano)</h4>
            <li>Athesis metodo classico Brut</li>
            <li>Athesis metodo classico Rosè</li>
          </ul>
          <ul>
            <h4>Azienda Agricola "Maria Luisa Santus" (Passirano, Bolzano)</h4>
            <li>Santus Franciacorta Brut</li>
            <li>Santus Franciacorta Saten</li>
            <li>Santus Franciacorta Rosè</li>
          </ul>
          <ul>
            <h4>Azienda Agricola "Quadra Franciacorta" (Cologna, Bolzano)</h4>
            <li>Quadra Franciacorta Q Cuveè</li>
            <li>Quadra Franciacorta Q Saten</li>
            <li>Quadra Franciacorta Q Zero</li>
            <li>Quadra Franciacorta Q Zero Nero</li>
            <li>Quadra Franciacorta Q Black</li>
          </ul>
          <ul>
            <h4>Azienda Agricola "Guido F. Fendi" (Vipiteno, Bolzano)</h4>
            <li>Franca Fendi Millesimato</li>
          </ul>
          <ul>
            <h4>Azienda Agricola "Ca' del Bosco" (Erbusco, Bolzano)</h4>
            <li>Cuveè Prestige</li>
          </ul>
          <h3>Champagne</h3>
          <ul>
            <li>Paul Cluet "Gran Reserve"</li>
            <li>Paul Cluet "Grand Cru" Blanc de Noir</li>
            <li>Bonnaire Blanc de Blanc</li>
          </ul>
          <span id="mobilespan"></span>
          <h3>Regioni d' Italia - Vini Bianchi</h3>
          <h3 id="regioni">Veneto</h3>
          <ul>
            <h4>Azienda Agricola "Monte del Fra" (Sommacampagna, Verona)</h4>
            <li>Soave Classico</li>
            <li>Custoza Superiore</li>
          </ul>
          <ul>
            <h4>
              Azienda Agricola "S. Cristina" (Peschiera del Garda, Verona)
            </h4>
            <li>Lugana</li>
          </ul>
          <h3 id="regioni">Trentino Alto Adige</h3>
          <ul>
            <h4>Azienda Agricola "Ketmeier" (Caldaro, Bolzano)</h4>
            <li>Muller Thurgau</li>
            <li>Gemurz Traminer</li>
            <li>Pinot Bianco</li>
          </ul>
          <h3 id="regioni">Marche</h3>
          <ul>
            <h4>Azienda Agricola "Fazi Battaglia" (Castel Plamio, Ancona)</h4>
            <li>Verdicchio</li>
          </ul>
          <h3 id="regioni">Sardegna</h3>
          <ul>
            <h4>Cantina "Santa Maria la Talma"</h4>
            <li>Vermentino</li>
          </ul>
          <h3 id="regioni">Friuli Venezia Giulia</h3>
          <ul>
            <h4>Azienda Agricola "Vie d' alt" (Prepotto, Udine)</h4>
            <li>Friulano</li>
            <li>Chardonnay</li>
            <li>Sauvignon</li>
            <li>Pinot Grigio</li>
          </ul>
          <ul>
            <h4>Azienda Agricola "Muzic" (San Floriano Collio, Gorizia)</h4>
            <li>Friulano</li>
            <li>Chardonnay</li>
            <li>Sauvignon</li>
            <li>Pinot Grigio</li>
            <li>Malvasia</li>
            <li>Ribolla Gialla</li>
          </ul>
          <ul>
            <h4>Cantina "Fantinel" (Tauriano, Pordenone)</h4>
            <li>Sauvignon</li>
          </ul>
          <span id="mobilespan"></span>
          <h3>Regioni d' Italia - Vini Rossi</h3>
          <h3 id="regioni">Veneto</h3>
          <ul>
            <h4>Azienda Agricola "Bertani" (Grezzana, Verona)</h4>
            <li>Vlpolicella Classico</li>
            <li>Valpolicella Ripasso</li>
          </ul>
          <ul>
            <h4>Azienda Agricola "Bertani" (Lazise, Verona)</h4>
            <li>Amarone della Valpolicella</li>
          </ul>
          <h3 id="regioni">Trentino Alto Adige</h3>
          <ul>
            <h4>Azienda Agricola "Ketmeier" (Caldaro, Bolzano)</h4>
            <li>Pinot Nero</li>
            <li>Kaltaresse Schiava</li>
          </ul>
          <h3 id="regioni">Friuli Venezia Giulia</h3>
          <ul>
            <h4>Azienda Agricola "Vie d' Alt" (Prepotto, Udine)</h4>
            <li>Merlot</li>
            <li>Cabernet Franc</li>
            <li>Schioppettino</li>
          </ul>
          <h3 id="regioni">Toscana</h3>
          <ul>
            <h4>Cantina "Fresco Baldi" (Pontassieve, Firenze)</h4>
            <li>Chianti "Castiglioni"</li>
            <li>Brunello Montalcino</li>
          </ul>
          <ul>
            <h4>Azienda Agricola "Baiocchi" (Monte Pulciano, Siena)</h4>
            <li>Nobile di Monte Pulciano</li>
          </ul>
          <h3 id="regioni">Marche</h3>
          <ul>
            <h4>Cantina "Fontezolla" (Civitanove, Macerata)</h4>
            <li>Pepato</li>
          </ul>
          <h3 id="regioni">Sardegna</h3>
          <ul>
            <h4>Cantina "Santa Maria la Palma" (Alghero, Sassari)</h4>
            <li>Cannonau</li>
          </ul>
          <h3 id="regioni">Sicilia</h3>
          <ul>
            <h4>Cantina "Duca di Salapatura" (Casteldaccia, Palermo)</h4>
            <li>Nero d'Avola</li>
          </ul>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Menu;
