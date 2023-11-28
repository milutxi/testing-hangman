
const KEYS = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const Keyboard = ({ addLetter, letterList
   
  }) => {
    return (
      <div>
        {console.log({letterList})}
        {KEYS.map((key) => {
          return (
            <button onClick = { ()=> addLetter(key)}
              disabled = {letterList.includes(key)}

              key={key}
            >
              {key}
            </button>
          );
        })}
      </div>
    );
  };
  
  export default Keyboard;