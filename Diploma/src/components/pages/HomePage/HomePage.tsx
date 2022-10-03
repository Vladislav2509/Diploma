import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GridLoader from "react-spinners/GridLoader";
import { AllInformationPixemaProps } from './allInformationPixema-Props';
import './homePageStyle.css';



export function HomePage() {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // SPINNER
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 500)

  }, [])

  return (
    <div className='body'>
      <div className='containerHomePage'>

        <div className='blokHomePage'>
          {
            loading ?
              <div className='gridLoader'><GridLoader color={'#7B61FF'} loading={loading} size={30} /></div>
              :
              <div className='contentHomePage'>
                <div className='textHomePage'>Welcome to <span className="colorTextPix">Pix</span>
                  <span className='colorTextEma'>ema</span>
                </div>
                <div className='pixemaWrapper'>
                  <div className='previewAndButton'>
                    <div className='previewPixema'>
                      Pixema — the largest English-language Internet information service about cinema,
                      with several thousand films, serials, cartoons,
                      including premieres and exclusives.
                    </div>
                    <button className='buttonLearnMore' onClick={() => setOpen(!open)}>Learn More</button>
                  </div>


                  {open && (<div className='allInformationPixema' >
                    <AllInformationPixemaProps onClick={() => setOpen(!open)}
                      allInformationPixema={'Pixema provides information about films, television series, including frames, trailers, posters, wallpapers, as well as data on persons associated with film and television production: actors,directors, producers, screenwriters, cameramen, composers, artists and editors.'} />

                    <div className='buttonHomePage'>
                      <button
                        className='buttonLetsGetStarted'
                        onClick={() => { navigate("/all_films") }}
                      >
                        Let's get started
                      </button>
                    </div>
                  </div>)}

                  {/* {open && (<div className='allInformationPixema' onClick={() => setOpen(!open)}>
                    Pixema provides information about films, television series,
                    including frames, trailers, posters, wallpapers, as well
                    as data on persons associated with film and television production: actors,
                    directors, producers, screenwriters, cameramen, composers, artists and editors.

                    <button
                      className='buttonLetsGetStarted'
                      onClick={() => { navigate("/all_films") }}
                    >
                      Let's get started
                    </button>

                  </div>)} */}
                </div>


              </div>
          }
        </div>
      </div>
    </div>
  )
};



