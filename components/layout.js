import Nav from "./nav"

const Layout = ({ children, seo, languages, covers, binding, inside, edge, spine  }) => (
  <>
    <Nav languages={languages} covers={covers} binding={binding} inside={inside} edge={edge} spine={spine}/>
    {children}
  </>
)

export default Layout
