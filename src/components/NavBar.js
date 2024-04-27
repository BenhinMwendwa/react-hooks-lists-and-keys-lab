function NavBar() {
  const links = ["home", "about", "projects"];

  const value= links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));
  return <nav>{value}</nav>;
}


export default NavBar;
