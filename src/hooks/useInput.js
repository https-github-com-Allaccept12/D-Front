import { useState } from "react"

const useInput = (initialValue, validators) => {
    const [value, setValue] = useState(initialValue);
    
    const [errors, setErrors] = useState(false);
    let onChange = null;
    if(validators) { // 밸리데이션 필요한 경우
      try {
        if(!Array.isArray(validators) || typeof validators[0] !== "function"){
          throw new Error("second parameter must be array includes function");
        } 
      } catch (error) {
        console.log(error)
      }
  
      let willUpdate = [];
      validators.forEach((v, i)=> willUpdate[i]=true);
  
      onChange = e => {
        const {target: {value}} = e;
  
        validators.forEach((valid, i)=> willUpdate[i] = valid(value));
  
        if(willUpdate.every((v) => v === true)) { 
            setErrors(false)
            setValue(value); 
      }
        else if(willUpdate.every((v) => v === false)) {
            setErrors(true)
            onChange = e => {
                const {target: {value}} = e;
                setValue(value);
      }
    }
}
    }

    return { value, onChange, errors };
  }

export default useInput;