import "./Data.css";

export default function Data(props) {
  return (
    <div>
      <label className="label">
        {props.Nome }:        
      </label>   
      <div>
        <input className="input"/> 
      </div>        
    </div>
  );
}
