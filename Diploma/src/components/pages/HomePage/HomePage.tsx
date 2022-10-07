import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";
import { Footer } from "../../Footer/Footer";
import "./homePageStyle.css";

export function HomePage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // SPINNER
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="homePageContainer">
      {loading ? (
        <div className="gridLoader">
          <GridLoader color={"#7B61FF"} loading={loading} size={30} />
        </div>
      ) : (
        <div className="homePageContent">
          <div className="textWelcome">
            Welcome to <span className="textPix">Pix</span>
            <span className="textEma">ema</span>
          </div>
          <div className="pixemaWrapper">
            <div className="previewAndButton">
              <div className="previewPixema">
                Pixema — the largest English-language Internet information
                service about cinema, with several thousand films, serials,
                cartoons, including premieres and exclusives.
              </div>

              <button
                className="buttonLearnMore"
                onClick={() => setOpen(!open)}
              >
                Learn More
              </button>
            </div>

            {open && (
              <div className="fullDescription">
                Pixema provides information about films, television series,
                including frames, trailers, posters, wallpapers, as well as
                data on persons associated with film and television production:
                actors,directors, producers, screenwriters, cameramen,
                composers, artists and editors.

                <div className="buttonWrapper">
                  <button
                    className="buttonMoviesInformathion"
                    onClick={() => {
                      navigate("/all_films");
                    }}
                  >
                    Movies Informathion
                  </button>
                </div>
              </div>
            )}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
