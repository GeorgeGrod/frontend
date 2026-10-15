interface HeaderProps {
  title: string;
  description: string;
}

function Header({ title, description }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <h1 className="site-title">{title}</h1>
        <p className="site-description">{description}</p>
      </div>
    </header>
  );
}

export default Header;
