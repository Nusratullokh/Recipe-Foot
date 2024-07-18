import { useSelector } from "react-redux"
import MainTable from "../../components/MainTable";



const Products = () => {
  const data = useSelector(state => state);
  console.log(data)
  return (
    <div>
      <MainTable data={data} loading={false}/>
    </div>
  )
}

export default Products