function Words ({ word }) {
  return (
    <div data-testid={`hangman-word ${word}`}>
      {word && typeof word === 'string' && word.split('').map((letter, index) => (
        <span data-testid="letter" key={index}>_</span>
      ))}
    </div>
  );
}

export default Words;

