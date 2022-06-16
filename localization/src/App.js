import './App.css';
import {IntlProvider, FormattedMessage} from 'react-intl' 
import { useState,useEffect } from 'react';

const messages = {
"tr":{ 
   title: "Merhaba Dünya",
  description:"{count} yeni mesajınız var.",
  },
"en":{  title: "Hello World",
description:"You have {count} new messages."
},
}

function App() {
  const isLocale=localStorage.getItem("locale");//localStorage'da yer alan locale kaydını getir
                                                // ve isLocale ata.
  const defaultLocale=isLocale ? isLocale:navigator.language;
  //defaultLocale'nin değerini isLocale varsa isLocale olarak yoksa tarayıcı dili olarak ata.
  const [locale,setLocale]=useState(defaultLocale);
  console.log(defaultLocale)

  useEffect(
    ()=> {
      localStorage.setItem("locale",locale);
    },[locale]);
    
  return (
    <div className="App"> 
    <IntlProvider locale={locale} messages={messages[locale]}>
    <FormattedMessage id="title"/>
    <p>
    <FormattedMessage id="description" values={{count:10}}/>
    {/* messages içine değer yollamak istediğimizde values={{count:5}} şeklinde yollamamız yeterlidir. */}
    </p>

     <br/>

        <button onClick={() => setLocale("tr")}>TR</button>
        <button onClick={() => setLocale("en")}>EN</button>

    </IntlProvider>
    </div>
  );
}

export default App;
