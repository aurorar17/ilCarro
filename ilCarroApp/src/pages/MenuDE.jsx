import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/Menu.css";

const MenuDE = () => {
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
                  Appetizer
                </button>
              </td>
              <td style={{ textAlign: "center" }}>
                <button onClick={() => scrollToSection("primi")}>First</button>
              </td>
              <td style={{ textAlign: "center" }}>
                <button onClick={() => scrollToSection("secondi")}>
                  Second
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>
                <button onClick={() => scrollToSection("contorni")}>
                  Sides
                </button>
              </td>
              <td style={{ textAlign: "center" }}>
                <button onClick={() => scrollToSection("pizze")}>Pizze</button>
              </td>
              <td style={{ textAlign: "center" }}>
                <button onClick={() => scrollToSection("bevande")}>
                  Beverages
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                <button onClick={() => scrollToSection("vini")}>Wines</button>
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
          <h2>Vorspeisen</h2>
          <h3>Fischvorspeisen</h3>
          <ul>
            <li>
              <h4>Tavolozza di Crudo</h4>
              <p>(Thunfisch, Lachs, Wolfsbarsch, Scampi, rote Garnelen)</p>
            </li>
            <li>
              <h4>Antipasto Misto dell' Adriatico</h4>
              <p>
                (Denticecreme, Sardinen in Saor, Moschuskrake, Garnelenschwanz,
                Sepia, Canocchie)
              </p>
            </li>
            <li>
              <h4>Antipasto di Pesce Affumicato</h4>
              <p>(Sepia, Lachs, Thunfisch, Ombrina, Schwertfisch)</p>
            </li>
            <li>
              <h4>Cicchetti Veneziani</h4>
              <p>
                (Sardinen in Saor, Stockfischcreme, Canocchie, Moschuskrake)
              </p>
            </li>
            <li>
              <h4>Gamberi in Saor</h4>
              <p>(Garnelen, Zwiebeln, Essig, Pinienkerne, Rosinen)</p>
            </li>
            <li>
              <h4>Sarde in Saor</h4>
              <p>(Sardinen, Zwiebeln, Essig, Pinienkerne, Rosinen)</p>
            </li>
            <li>
              <h4>Baccalà Mantecato</h4>
              <p>(Stockfischcreme, Olivenöl, Knoblauch)</p>
            </li>
            <li>
              <h4>Cozze e Vongole</h4>
              <p>(Miesmuscheln, Venusmuscheln)</p>
            </li>
            <li>
              <h4>Cozze alla Marinara</h4>
              <p>(Miesmuscheln, Tomatensauce, Knoblauch, Petersilie)</p>
            </li>
            <li>
              <h4>Capesante grigliate</h4>
              <p>(Gegrillte Jakobsmuscheln)</p>
            </li>
            <li>
              <h4>Moscardino di Caorle</h4>
              <p>(Kleine Moschuskraken aus Caorle, Tomatensauce)</p>
            </li>
            <li>
              <h4>Granchio al Rosmarino</h4>
              <p>(Krabbe, Rosmarin)</p>
            </li>
            <li>
              <h4>Schie e Polenta</h4>
              <p>(Kleine Lagunengarnelen, Polenta)</p>
            </li>
            <li>
              <h4>Alici Marinate</h4>
              <p>(Marinierte Sardellen, Zitrone, Olivenöl)</p>
            </li>
          </ul>

          <h3>Fleischvorspeisen</h3>
          <ul>
            <li>
              <h4>Caprese con Bufala e Pomodoro</h4>
              <p>(Büffelmozzarella, Tomaten, Basilikum)</p>
            </li>
            <li>
              <h4>Prosciutto Crudo con Burrata</h4>
              <p>(Rohschinken, Burrata)</p>
            </li>
            <li>
              <h4>Prosciutto e Melone</h4>
              <p>(Rohschinken, Melone)</p>
            </li>
            <li>
              <h4>Parmigiana di Melanzane</h4>
              <p>(Auberginen, Tomatensauce, Parmesan)</p>
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
          <h2>Erste Gänge</h2>
          <h3>Fischgerichte</h3>
          <ul>
            <li>
              <h4>Spaghetti allo Scoglio</h4>
              <p>(Spaghetti, Miesmuscheln, Venusmuscheln, Garnelen, Sepia)</p>
            </li>
            <li>
              <h4>Spaghetti alle Vongole</h4>
              <p>(Spaghetti, Venusmuscheln, Knoblauch, Petersilie)</p>
            </li>
            <li>
              <h4>Tagliolini al Granchio</h4>
              <p>(Hausgemachte Tagliolini, Krabbe)</p>
            </li>
            <li>
              <h4>Tagliolini al Nero di Seppia</h4>
              <p>(Hausgemachte Tagliolini, Sepiatinte)</p>
            </li>
            <li>
              <h4>
                Risotto ai Frutti di Mare
                <br />
                (Mindestens 2 Personen)
              </h4>
              <p>(Risotto, Miesmuscheln, Venusmuscheln, Garnelen, Sepia)</p>
            </li>
            <li>
              <h4>Gnocchi con Gamberi, Pesto e Pomodorini</h4>
              <p>(Gnocchi, Garnelen, Pesto, Kirschtomaten)</p>
            </li>
          </ul>

          <h3>Fleischgerichte</h3>
          <ul>
            <li>
              <h4>Lasagne alla Bolognese</h4>
              <p>(Lasagne, Fleischragù, Béchamelsauce)</p>
            </li>
            <li>
              <h4>Spaghetti alla Carbonara</h4>
              <p>(Spaghetti, Ei, Guanciale, Pecorino)</p>
            </li>
            <li>
              <h4>Gnocchi Gorgonzola e Speck</h4>
              <p>(Gnocchi, Gorgonzola, Speck)</p>
            </li>
            <li>
              <h4>Penne al Ragù</h4>
              <p>(Penne, Fleischragù)</p>
            </li>
            <li>
              <h4>Penne al Pomodoro</h4>
              <p>(Penne, Tomatensauce)</p>
            </li>
          </ul>
        </section>

        <span id="mobilespan"></span>
        <section id="secondi">
          <h2>Hauptgerichte</h2>
          <h3>Fischhauptgerichte</h3>
          <ul>
            <li>
              <h4>Pesce al Forno</h4>
              <p>(Gebratener Wolfsbarsch, Dorade, Steinbutt mit Gemüse)</p>
            </li>
            <li>
              <h4>Pesce alla Griglia</h4>
              <p>(Gegrillter Wolfsbarsch, Dorade, Steinbutt mit Gemüse)</p>
            </li>
            <li>
              <h4>Grigliata Mista di Pesce</h4>
              <p>
                (Gegrillte Seezunge, Wolfsbarschfilet, Garnele, Sepia und
                Polenta)
              </p>
            </li>
            <li>
              <h4>Frittura Mista di Pesce con Verdurine Fritte</h4>
              <p>(Frittierter Fisch, Garnelen, Calamari, frittierte Gemüse)</p>
            </li>
            <li>
              <h4>Calamarini Fritti con Verdurine Fritte</h4>
              <p>(Frittierte Calamari, frittierte Gemüse)</p>
            </li>
            <li>
              <h4>Sogliola alla Griglia con Polenta</h4>
              <p>(Gegrillte Seezunge, Polenta)</p>
            </li>
            <li>
              <h4>Seppie alla Griglia</h4>
              <p>(Gegrillte Sepia)</p>
            </li>
            <li>
              <h4>Seppie in Umido con Polenta</h4>
              <p>(Sepia in Tomatensauce, Polenta)</p>
            </li>
            <li>
              <h4>
                Filetto di Branzino al Forno con Pomodorini e Olive Taggiasche
              </h4>
              <p>(Wolfsbarschfilet, Kirschtomaten, Taggiasca-Oliven)</p>
            </li>
          </ul>

          <h3>Fleischhauptgerichte</h3>
          <ul>
            <li>
              <h4>Grigliata Mista di Carne</h4>
              <p>(Gemischtes gegrilltes Fleisch)</p>
            </li>
            <li>
              <h4>Tagliata di Manzo con Rucola, Grana e Pomodorini</h4>
              <p>(Rindersteakstreifen, Rucola, Grana, Kirschtomaten)</p>
            </li>
            <li>
              <h4>Cotoletta di Maiale alla Milanese con Patatine Fritte</h4>
              <p>(Paniertes Schweinekotelett, Pommes frites)</p>
            </li>
          </ul>
        </section>

        <span id="mobilespan"></span>
        <section id="contorni">
          <h2>Beilagen</h2>
          <ul>
            <li>
              <h4>Patatine Fritte</h4>
              <p>(Pommes frites)</p>
            </li>
            <li>
              <h4>Verdure Rosolate</h4>
              <p>(Gebratenes Gemüse)</p>
            </li>
            <li>
              <h4>Insalata Mista</h4>
              <p>(Grüner Salat, Tomaten, Karotten, Gurken)</p>
            </li>
            <li>
              <h4>Insalata Verde</h4>
              <p>(Grüner Salat)</p>
            </li>
          </ul>
        </section>
        <span id="mobilespan"></span>
        <section id="pizze">
          <h2>Pizza</h2>
          <ul>
            <li>
              <h4>Margherita</h4>
              <p>(Tomatensauce, Mozzarella)</p>
            </li>
            <li>
              <h4>Marinara</h4>
              <p>(Tomatensauce, Knoblauch, Oregano)</p>
            </li>
            <li>
              <h4>Prosciutto e Funghi</h4>
              <p>(Tomatensauce, Mozzarella, Schinken, Champignons)</p>
            </li>
            <li>
              <h4>Capricciosa</h4>
              <p>
                (Tomatensauce, Mozzarella, Champignons, Artischocken, Schinken)
              </p>
            </li>
            <li>
              <h4>Napoli</h4>
              <p>(Tomatensauce, Mozzarella, Kapern, Sardellen)</p>
            </li>
            <li>
              <h4>Tonno e Cipolla</h4>
              <p>(Tomatensauce, Mozzarella, Thunfisch, Zwiebel)</p>
            </li>
            <li>
              <h4>4 Stagioni</h4>
              <p>
                (Tomatensauce, Mozzarella, Schinken, Champignons, Artischocken,
                Salami)
              </p>
            </li>
            <li>
              <h4>Viennese</h4>
              <p>(Tomatensauce, Mozzarella, Würstel)</p>
            </li>
            <li>
              <h4>Quattro Formaggi</h4>
              <p>(Tomatensauce, Mozzarella, Brie, Gorgonzola)</p>
            </li>
            <li>
              <h4>Patatosa</h4>
              <p>(Tomatensauce, Mozzarella, Pommes frites)</p>
            </li>
            <li>
              <h4>Pugliese</h4>
              <p>(Tomatensauce, Mozzarella, Zwiebel)</p>
            </li>
            <li>
              <h4>Diavola</h4>
              <p>(Tomatensauce, Mozzarella, scharfe Salami)</p>
            </li>
            <li>
              <h4>San Daniele</h4>
              <p>(Tomatensauce, Mozzarella, roher Schinken San Daniele)</p>
            </li>
            <li>
              <h4>Frutti di Mare</h4>
              <p>(Tomatensauce, Mozzarella, Meeresfrüchte)</p>
            </li>
            <li>
              <h4>Sorrentina</h4>
              <p>
                (Tomatensauce, Mozzarella, Champignons, Artischocken, Paprika,
                scharfe Salami, Schinken, Zwiebel, Knoblauch)
              </p>
            </li>
            <li>
              <h4>Zingara</h4>
              <p>(Tomatensauce, Mozzarella, Champignons, Paprika)</p>
            </li>
            <li>
              <h4>Vegetariana</h4>
              <p>
                (Tomatensauce, Mozzarella, Zucchini, Auberginen, gegrillte
                Paprika)
              </p>
            </li>
            <li>
              <h4>Fresca</h4>
              <p>(Tomatensauce, Mozzarella, Rucola, Kirschtomaten, Parmesan)</p>
            </li>
            <li>
              <h4>"il Carro"</h4>
              <p>
                (Tomatensauce, Mozzarella, Champignons, Ei, Artischocken, roher
                Schinken)
              </p>
            </li>
            <li>
              <h4>Bresaola Rucola e Grana</h4>
              <p>(Tomatensauce, Mozzarella, Bresaola, Rucola, Parmesan)</p>
            </li>
            <li>
              <h4>Hawaii</h4>
              <p>(Tomatensauce, Mozzarella, Schinken, Ananas)</p>
            </li>
            <li>
              <h4>Malga</h4>
              <p>(Tomatensauce, Mozzarella, Brie, Speck, Steinpilze)</p>
            </li>
            <li>
              <h4>Calzone Classico</h4>
              <p>(Tomatensauce, Mozzarella, Schinken, Champignons)</p>
            </li>
            <li>
              <h4>Estate</h4>
              <p>(Mozzarella, Kirschtomaten, pesto)</p>
            </li>
            <li>
              <h4>Meraviglia</h4>
              <p>(Brie, Steinpilze, rucola pesto, Kirschtomaten)</p>
            </li>
          </ul>
        </section>
        <span id="mobilespan"></span>
        <section id="bevande">
          <h2>Beverages</h2>
          <h3>Water</h3>
          <ul>
            <h4>Water</h4>
            <h4>Sparkling Water</h4>
          </ul>
          <h3>Draft Drinks</h3>
          <ul>
            <li>
              <h4>Pepsi Cola</h4>
              <p>(Small and medium)</p>
            </li>
            <li>
              <h4>Aranciata</h4>
              <p>(Small and medium)</p>
            </li>
            <li>
              <h4>Lemon Soda</h4>
              <p>(Small and medium)</p>
            </li>
          </ul>
          <h3>Draft Beers</h3>
          <ul>
            <li>
              <h4>Artisanal Beer Ca' Barley</h4>
              <p>(Small and medium)</p>
            </li>
            <li>
              <h4>Radler</h4>
              <p>(Small and medium)</p>
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
          <h3>Cans</h3>
          <ul>
            <li>
              <h4>Coca Cola</h4>
            </li>
            <li>
              <h4>Coca Cola Zero</h4>
            </li>
            <li>
              <h4>Lemon The</h4>
            </li>
            <li>
              <h4>Peach The</h4>
            </li>
            <li>
              <h4>Fanta</h4>
            </li>
            <li>
              <h4>Sprite</h4>
            </li>
          </ul>
          <h3>Beer Bottles</h3>
          <ul>
            <li>
              <h4>Waitzen</h4>
            </li>
            <li>
              <h4>No Alcohol</h4>
            </li>
          </ul>
          <h3>Draft Wine</h3>
          <ul>
            <li>
              <h4>Sparkling Wine</h4>
              <p>(0,25l, 0,50l, 1l)</p>
            </li>
            <li>
              <h4>White Wine</h4>
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
          <h3>White Wines</h3>
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
          <h3>Red Wines</h3>
          <ul>
            <h4>Azienda Agricola "Vie D'alt" (Prepotto, Udine)</h4>
            <li>Merlot</li>
            <li>Cabernet Franc</li>
          </ul>
          <h3>Dessert Wines</h3>
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
          <h3>Sparkling</h3>
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

export default MenuDE;
