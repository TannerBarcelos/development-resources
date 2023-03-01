const Button = ({ color = 'steelblue', text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
      }}
      className='btn'
    >
      {text}
    </button>
  );
};

export default Button;
