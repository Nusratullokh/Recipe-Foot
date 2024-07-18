import { useSelector } from "react-redux";
import MainTable from "../../components/MainTable";

const Promoted = () => {
  const {promotedUsers} = useSelector(state => state)
  return (
    <div>
      <MainTable data={promotedUsers} loading={false}/>
        
    </div>
  )
}

export default Promoted