import { createContext, useContext, useState } from "react";

export const GeneralContext = createContext({});

const GeneralProvider = (props: any) => {
  const [name, setName] = useState<String>("Ministries");
  return (
    <GeneralContext.Provider value={{ name, setName }}>
      {props.children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => {
  const context = useContext(GeneralContext);
  return context;
};

export default GeneralProvider;
