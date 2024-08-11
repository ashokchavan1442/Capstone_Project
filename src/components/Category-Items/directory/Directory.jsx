import CategoryItems from "../CategoryItems";
import './directory.styles.scss'

const Directory = ({categories}) =>{
    return(
<div className='.directory-container'>
        {categories.map((Category) => (
          <CategoryItems key={Category.id} category={Category}/>
        ))}
      </div>
    )
}
export default Directory;