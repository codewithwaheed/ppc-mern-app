import { SERVER_URL } from "./configs";
import Axios from "axios";
export default Axios.create({
  baseURL: SERVER_URL,
});
