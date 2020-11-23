
export const prepareElementClassName = (blockClassName, elementName, modifier) => !elementName 
    ? "" : addModifierClassName(mergeClassName(blockClassName, elementName), modifier);
  
export const mergeClassName = (componentClassName, propsClassName) => propsClassName 
    ? `${componentClassName}__${propsClassName}` : ""; 
  
export const addModifierClassName = (componentClassName, modifier) => !modifier
    ? componentClassName : `${componentClassName}--${modifier}`;