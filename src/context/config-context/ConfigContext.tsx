import React, {createContext, useState, FC, ReactElement} from "react";
import { ConfigContextState } from "./types";
const contextDefaultValues: ConfigContextState = {
  configs: {},
  addConfig: () => {}
};
type ConfigObject = {
  key: string
  value: any
};
export const ConfigContext = createContext<ConfigContextState>(
  contextDefaultValues
);
type ProviderPorps = {
  configJson: any,
  children: ReactElement
}
const ConfigsProvider: FC<ProviderPorps> = (props) => {
  const [configs, setConfigs] = useState<any>(props.configJson);
  const addConfig = (prevConfig:any, newConfig: ConfigObject) => {
  prevConfig[newConfig.key] = newConfig.value;
  setConfigs(prevConfig);
}
return (
  <ConfigContext.Provider value={{configs,addConfig}}>
    {props.children}
  </ConfigContext.Provider>
);
};
export default ConfigsProvider;