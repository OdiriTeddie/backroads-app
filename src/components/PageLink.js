



const PageLink = ({link, itemClass}) => {
  return (
    <li link={link.id}>
        <a href={link.href} className={itemClass} > {link.text} </a>
    </li>
  )
}
export default PageLink