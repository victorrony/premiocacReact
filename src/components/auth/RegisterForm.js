import { useAuth } from "@/services/auth";
import { EmailAndPasswordFeild } from "../utils/Fields";
import {useState} from 'react';
import { toast } from 'react-toastify';

export default function RegisterForm({ onSubmit }) {
  const {user,register} = useAuth();
  const [credentials,setCredentials] = useState({email:"",password:null,tel:0});
  const [username,setUN] = useState("");
  const [accept,sept] = useState([false,"hidden"]);
  const submit = () => {
    if(accept[0]){
    console.log(register({
      email:credentials.email,//credentials.email,
      password:credentials.password,//credentials.password,
      provider:'local',
      tel:credentials.tel,
      username:username
    },
    false));}else{sept([false,""]); toast("Aceite os termos antes de continuar!");}
  }
  return (
    <form className=""
    onSubmit={(e)=>{
      e.preventDefault();
      if (!credentials.password) {
        toast('O campo da senha esta vazia.')
    }
    else if (String(credentials.password).length < 6) {
         toast('A senha tem que conter no minimo 6 letras.');
    } else if(String(credentials.password).length >=6){
      submit();
    } else toast("Algo ocorreu errado");
      
      console.log("HERE")

    }}
    >
      <input onChange={(e) => setUN(e.target.value)}/>
      <EmailAndPasswordFeild set={setCredentials} />
      <div className="form_register">
        <div className="div_input">
        </div>       
        <button>Registrar</button> 
        <a href="" className="btn_img">
        <input
     onChange={(e)=>{
       console.log(e.target.checked);
       sept([e.target.checked,e.target.checked?"hidden":""]);}} name="paymet" type="checkbox"
       className="" id="accept"/>
          Não possui uma conta? Registe-se aqui{" "}
        </a>
      </div>
    </form>
  );
}
