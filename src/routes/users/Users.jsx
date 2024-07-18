import axios from "../../api/axios";
import MainTable from "../../components/MainTable";
import { useEffect, useState } from "react";


const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
 


  useEffect(() => {
    const loadData = async () => {
     try{
      setLoading(true)
      const response = await axios("/users?page=2")
      setUsers(response.data.data)
     }
     catch(error){
      console.log(error)
     }
     finally{
      setLoading(false);
     }
    }

    loadData()
  }, [])

  return (
    <div>
      <MainTable data={users} loading={loading}/>
    </div>
  )
}

export default Users