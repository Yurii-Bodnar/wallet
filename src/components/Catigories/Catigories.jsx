import Headers from './../Header/Header';
import Proptypes from 'prop-types'



 const Catigories = ({ categoryList }) => {
  return (
    <>
      <Headers title="Catigories"/>
      <ul>
      {categoryList.map({category,id} => {
        <li key={id}>
          <button>{category}</button>
          <button>...</button>
        </li>;
      })}
      </ul>
      
    </>
  );
};

{/* CategoryList.propTypes = {
    categoryList: PropTypes.arayOf(
        Proptypes.shape(
            {
                id.PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequared,
                category
            }
        )
    )
} */}

export default Catigories;
