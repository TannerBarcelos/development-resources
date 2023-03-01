import Button from './interactive/Button';

const Header = ({ onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{'Task Manager'}</h1>
      <Button
        color={showAdd ? 'black' : 'steelblue'}
        text={showAdd ? 'Close' : 'Add Task'}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
