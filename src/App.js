 
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Kontakt from './Kontakt';
import { useState } from 'react';
import Pocetna from './Pocetna';
import Korpa from './Korpa';
function App() {
  const [putovanja] = useState([
    {
      id: 1,
      slika: "https://www.vivatravel.rs/photo/119036/p/16:10",
      destinacija: "Bec",    
      broj_dana:  2,
      vreme: "10.02.",
      opis: "Beč je jedna od najstarijih metropola u srcu Evrope, carski grad i mesto ukrštanja raznih kultura i uticaja. Jedno je od najomiljenijih evropskih odredišta turista iz čitavog sveta pa se sa pravom može reći za Beč da je pravi poliglota.",
      cena: 170,
      korpa:0
    },
    {
      id: 2,
      slika: "https://www.vivatravel.rs/photo/118134/p/16:10",
      destinacija: "Istanbul",    
      broj_dana:  5,
      vreme: "25.02.",
      opis: "Istanbul – grad koji leži na dva kontinenta, spoj istoka i zapada, Evrope i Azije, sa svojom raskošnom kulturnom ostavštinom, nikad ne prestaje da oduševljava.",
      cena: 379,
      korpa:0
    },
    {
      id: 3,
      slika: "https://www.vivatravel.rs/photo/118389/p/16:10",
      destinacija: "Kefalonija",    
      broj_dana:  10,
      vreme: "10.06.",
      opis: " KEFALONIJA  je najveće ostrvo Jonskog arhipelaga sa površinom od 780 km². Nalazi se južno od Lefkade i Itake i severno od Zakintosa.",
      cena: 780,
      korpa:0
    },
    {
      id: 4,
      slika: "https://www.vivatravel.rs/photo/118054/p/16:10",
      destinacija: "Prag",    
      broj_dana:  3,
      vreme: "10.02.",
      opis: "Još od srednjeg veka, Prag se smatra jednim od najlepših evropskih gradova. Često ga nazivaju zlatnim gradom zbog bogate istorije i laskave titule stecišta kulturne elite",
      cena: 250,
      korpa:0
    },
  ])

  const [korpa, setKorpa] = useState([]);

  function osvezi() {
    let k = putovanja.filter((p) => p.korpa > 0);
    setKorpa (k);
    
  }
  function dodaj( id) {
    
   
    putovanja.forEach((d) => {
      if (d.id === id) {
        d.korpa=1;
        
      }
    });
    osvezi();

  }








  return (
    <div className="App">
      <BrowserRouter  >
        <Navbar ></Navbar>
        <Routes>
        <Route path="/" element={<Pocetna putovanja={putovanja} dodaj={dodaj}></Pocetna>}></Route>
        <Route path="/korpa" element={<Korpa putovanja={korpa}></Korpa>}></Route>
          
          
        <Route path="/kontakt" element={<Kontakt></Kontakt>}></Route>
          
      
          
        </Routes>
          <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
