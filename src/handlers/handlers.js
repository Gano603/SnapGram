import axios from "axios";
import { setIsLoggedIn } from "../features/StateSlice";
import { setData } from "../features/userSlice";


export const fetchData = async (disp,nav) => {

    try {
      const res = await axios.get(import.meta.env.VITE_API_URL + "user/logCheck",
        { withCredentials: true }
      );

      if(res.status===200){
        disp(setIsLoggedIn(true))
        disp(setData(res.data.details))
        return nav('/');
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };