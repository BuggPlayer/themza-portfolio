import { useEffect, useState } from "react";
import "./MvpLetsWorkTogether.scss";

export const MvpLetsWorkTogether = () => {
  const fields = {
    title: "Yearly Horizontal Timeline",
    years_timeline: [
      {
        year: "DAY 1-2",
        body: "Fei amoi Brezn, Buam a bissal mogsd a Bussal Obazda so. Bradwurschtsemmal zünftig hoggd Charivari zwoa Edlweiss Griasnoggalsubbm fei noch da Giasinga Heiwog! Ned a fescha Bua is ma Wuascht griasd eich midnand, Marterl gor hoam Lewakaas nia need hoggd. Hetschapfah großherzig gscheit Zidern Prosd Brezn Radi da Kini Griasnoggalsubbm Klampfn kimmt! Des basd scho gelbe Rüam scheans Sepp amoi Kaiwe, großherzig Schneid. Kloan umma gor Lewakaas.",
      },
      {
        body: "Bavaria ipsum dolor sit amet schoo Engelgwand Milli ded Edlweiss, Engelgwand am acht’n Tag schuf Gott des Bia. A geh dahoam Schdeckalfisch Engelgwand i moan oiwei auf’d Schellnsau Haferl fei vui. Da, hog di hi Enzian Engelgwand Spezi, schnacksln vui Brodzeid resch nia so Hetschapfah. Oans, zwoa, gsuffa nackata Mamalad, in da Auffisteign dahoam. Mechad Engelgwand is des liab weida pfundig, Biawambn.",
        year: "DAY 3-30",
      },
      {
        body: "Noch da Giasinga Heiwog des wiad a Mordsgaudi de Obazda koa, Maibam wia. Dei oba des is a gmahde Wiesn, a liabs Deandl. Spezi blärrd liberalitas Bavariae heid gfoids ma sagrisch guad wos is ma Wuascht jo mei amoi vui dei Namidog? Wolln nimma kumm geh Maderln auf’d Schellnsau Gamsbart Weiznglasl, großherzig de. Oans wo hi Wiesn i daad i waar soweid Leonhardifahrt Wiesn a ganze a Hoiwe.",
        year: "DAY 30-45",
      },
      {
        body: "Sog i Kuaschwanz Lewakaas Steckerleis wos Graudwiggal. Wuid is unbandig, Milli Milli. Reiwadatschi kimmt nimmds, i daad. Obandeln a bissal wos gehd ollaweil no de Brotzeit mi! Jedza Marterl in da vo de Griasnoggalsubbm ham des is a gmahde Wiesn obacht? Spuiratz nia need ognudelt, Gams. Spezi sog i griaß God beinand Klampfn sog i Charivari, nia?",
        year: "NEXT ITERATION",
      },
    ],
  };
  const [yearSelected, setYearSelected] = useState("1999");
  const [keySelected, setKeySelected] = useState(0);
  const { title, years_timeline } = fields;

  const handleOnTimelineClick = (e, year, key) => {
    setYearSelected(year);
    setKeySelected(key);
  };

  useEffect(() => {
    setYearSelected(years_timeline[keySelected].year);
  }, [keySelected]);

  return (
    <section className="wrapper">
      <h2>{title}</h2>
      <div className="timeline">
        <ul>
          {years_timeline.map((item, key) => (
            <li
              key={key}
              className={item.year === yearSelected ? "active" : ""}
            >
              <a
                onClick={(e) => handleOnTimelineClick(e, item.year, key)}
                id={item.year}
              >
                {item.year}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="panel">
        <div className="content">
          {years_timeline.map((item, key) => (
            <div
              key={key}
              className={`tab ${yearSelected === item.year && "selected"}`}
            >
              <h4>{item.year}</h4>

              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
