function Greetings({ lang, children }) {
  // de
  const translator = {
    de: 'Hallo ',
    en: 'Hello ',
    es: 'Hola ',
    fr: 'Bonjour ',
    tx: 'Howdy ',
  };
  // let greet = '';
  // switch (lang) {
  //   case 'de':
  //     greet = 'Hallo ';
  //     break;
  //   case 'en':
  //     greet = 'Hello ';
  //     break;
  //   case 'es':
  //     greet = 'Hola ';
  //     break;
  //   case 'fr':
  //     greet = 'Bonjour ';
  //     break;
  //   default:
  //     greet = "Let's talk Wingding!";
  // }
  return (
    <>
      <div className="container">
        {translator[lang]} {children}
      </div>
    </>
  );
}

export default Greetings;
