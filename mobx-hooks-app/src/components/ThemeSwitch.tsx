import React,{useRef,useState} from "react";
import { observer } from "mobx-react";
import { useStore } from "../store";

const ThemeSwitch = () => {
  const {
    themeStore: { theme, setTheme }
  } = useStore();

  const inputRef = useRef(null);

  const [checked,setChecked] = useState(()=>theme==='dark')

  return (
    <div className="row mt-2">
      <div className="col">
        <h2>
          Theme:
        </h2>
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            ref={inputRef}
            checked={checked}
            onChange={()=>{
              setChecked(!checked)
              setTheme(checked?'light':'dark')
            }}
          />
          <label className="custom-control-label" htmlFor="customSwitch1">
            {theme}
          </label>
        </div>
      </div>
    </div>
  );
};
export default observer(ThemeSwitch);
// export default ThemeSwitch;
