import Link from "next/link"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useInView } from "react-intersection-observer";

const CategoryCard = ({title, desc, img_src, link }) => {

  const {ref , inView} =useInView();

  return (
    <div  ref={ref}>
      <div className={`category_card  hiddenEl ${inView && 'show'}`}>
          <div className="category_img_box">
              <img
                  className="category_card_img"
                  alt="Category Card" 
                  src={img_src}
              />
          </div>
          <h1 className="text-2xl font-semibold text-left mt-3 pl-2">{title}</h1>
          <p className="text-lg text-left mt-3 pl-2 ">{desc}</p>
          <Link className="w-full mt-3 flex flex-col items-end" href={`${link}`}><ArrowForwardIosIcon/></Link>
      </div>
    </div>
    
  )
}

export default CategoryCard