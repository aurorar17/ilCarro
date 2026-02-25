import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/Menu.css";

const MenuDE = () => {
  // ...existing code...
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
                  Vorsp.
                </button>
              </td>
              <td style={{ textAlign: "center" }}>
                <button onClick={() => scrollToSection("primi")}>Erst.</button>
              </td>
              <td style={{ textAlign: "center" }}>
                <button onClick={() => scrollToSection("secondi")}>
                  Haupt.
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>
                <button onClick={() => scrollToSection("contorni")}>
                  Beil.
                </button>
              </td>
              <td style={{ textAlign: "center" }}>
                <button onClick={() => scrollToSection("pizze")}>Pizza</button>
              </td>
              <td style={{ textAlign: "center" }}>
                <button onClick={() => scrollToSection("bevande")}>
                  Geträ.
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                <button onClick={() => scrollToSection("vini")}>Weine</button>
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
              <h4>Rohes Fischplatte</h4>
              <p>(Thunfisch, Lachs, Wolfsbarsch, Scampi, rote Garnelen)</p>
            </li>
            <li>
              <h4>Gemischte Vorspeise der Adria</h4>
              <p>
                (Denticecreme, Sardinen in Saor, Moschuskrake, Garnelenschwanz,
                Sepia, Canocchie)
              </p>
            </li>
            <li>
              <h4>Geräucherte Fischvorspeise</h4>
              <p>(Sepia, Lachs, Thunfisch, Ombrina, Schwertfisch)</p>
            </li>
            <li>
              <h4>Venezianische Häppchen</h4>
              <p>
                (Sardinen in Saor, Stockfischcreme, Canocchie, Moschuskrake)
              </p>
            </li>
            <li>
              <h4>Garnelen in Saor</h4>
            </li>
            <li>
              <h4>Sardinen in Saor</h4>
            </li>
            <li>
              <h4>Stockfischcreme</h4>
            </li>
            <li>
              <h4>Miesmuscheln und Venusmuscheln</h4>
            </li>
            <li>
              <h4>Miesmuscheln nach Marinara-Art</h4>
            </li>
            <li>
              <h4>Gegrillte Jakobsmuscheln</h4>
            </li>
            <li>
              <h4>Baby-Oktopus aus Caorle</h4>
            </li>
            <li>
              <h4>Krebs mit Rosmarin</h4>
            </li>
            <li>
              <h4>Schie und Polenta</h4>
            </li>
            <li>
              <h4>Marinierte Sardellen</h4>
            </li>
          </ul>
          <h3>Fleischvorspeisen</h3>
          <ul>
            <li>
              <h4>Büffelmozzarella mit Tomaten</h4>
            </li>
            <li>
              <h4>Rohschinken mit Burrata</h4>
            </li>
            <li>
              <h4>Rohschinken und Melone</h4>
            </li>
            <li>
              <h4>Auberginen Parmigiana</h4>
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
              <h4>Spaghetti mit Meeresfrüchten</h4>
            </li>
            <li>
              <h4>Spaghetti mit Venusmuscheln</h4>
            </li>
            <li>
              <h4>Hausgemachte Tagliolini mit Krebsfleisch</h4>
            </li>
            <li>
              <h4>Hausgemachte Tagliolini mit Sepiatinte</h4>
            </li>
            <li>
              <h4>
                Risotto mit Meeresfrüchten
                <br />
                (Mindestens 2 Personen)
              </h4>
            </li>
            <li>
              <h4>
                Hausgemachte Gnocchi mit Garnelen, Pesto und Kirschtomaten
              </h4>
            </li>
          </ul>
          <h3>Fleischgerichte</h3>
          <ul>
            <li>
              <h4>Lasagne alla Bolognese</h4>
            </li>
            <li>
              <h4>Spaghetti alla Carbonara</h4>
            </li>
            <li>
              <h4>Gnocchi mit Gorgonzola und Speck</h4>
            </li>
            <li>
              <h4>Penne mit Fleischsauce</h4>
            </li>
            <li>
              <h4>Penne mit Tomatensauce</h4>
            </li>
          </ul>
        </section>
        <span id="mobilespan"></span>
        <section id="secondi">
          <h2>Hauptgerichte</h2>
          <h3>Fischhauptgerichte</h3>
          <ul>
            <li>
              <h4>Gebratener Fisch mit Gemüse</h4>
              <p>(Gebratener Wolfsbarsch, Dorade, Steinbutt mit Gemüse)</p>
            </li>
            <li>
              <h4>Gegrillter Fisch mit Gemüse</h4>
              <p>(Gegrillter Wolfsbarsch, Dorade, Steinbutt mit Gemüse)</p>
            </li>
            <li>
              <h4>Gemischter gegrillter Fisch und Polenta</h4>
              <p>
                (Gegrillte Seezunge, Wolfsbarschfilet, Garnele, Sepia und
                Polenta)
              </p>
            </li>
            <li>
              <h4>Gemischter frittierter Fisch mit frittiertem Gemüse</h4>
            </li>
            <li>
              <h4>Frittierte Calamari mit frittiertem Gemüse</h4>
            </li>
            <li>
              <h4>Gegrillte Seezunge mit gegrillter Polenta</h4>
            </li>
            <li>
              <h4>Gegrillte Sepia</h4>
            </li>
            <li>
              <h4>Gedünstete Sepia mit Polenta</h4>
            </li>
            <li>
              <h4>
                Gebratener Wolfsbarsch mit Taggiasca-Oliven und Kirschtomaten
              </h4>
            </li>
          </ul>
          <h3>Fleischhauptgerichte</h3>
          <ul>
            <li>
              <h4>Gemischtes gegrilltes Fleisch mit gegrillter Polenta</h4>
            </li>
            <li>
              <h4>Rinder-Tagliata mit Rucola, Parmesan und Kirschtomaten</h4>
            </li>
            <li>
              <h4>Schweineschnitzel Mailänder Art mit Pommes frites</h4>
            </li>
          </ul>
        </section>
        <span id="mobilespan"></span>
        <section id="contorni">
          <h2>Beilagen</h2>
          <ul>
            <li>
              <h4>French Fries</h4>
            </li>
            <li>
              <h4>Browned Vegetables</h4>
            </li>
            <li>
              <h4>Mixed Salad</h4>
              (Green salad, tomatoes, carrots, cucumbers)
            </li>
            <li>
              <h4>Green Salad</h4>
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
              <p>(Mozzarella, cherry tomatoes, pesto)</p>
            </li>
            <li>
              <h4>Meraviglia</h4>
              <p>(Brie, porcini, pesto di rucola, cherry tomatoes)</p>
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
