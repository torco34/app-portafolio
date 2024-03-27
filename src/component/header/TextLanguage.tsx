import { Hooks } from "../../hook/Hooks";
import { useThemeContext } from "../../usecontext/ ContextProvider";
export const TextLanguage = () => {
  const { buttonText,  } = Hooks();
  const { setSelectedText } = useThemeContext() ?? {
    setSelectedText: undefined,
    selectedText: "",
  };
  const handleLanguageClick = (text: string) => {
    if (setSelectedText) {
      setSelectedText(text);
       
    }
   
  };

  return (
    <>
      <div className="relative  ">
        <div className="absolute shadow bg-dark rounded space-y-9 w-70 border top-7 p-10 text-stone-200  z-1">
          <div>
            {buttonText &&
              buttonText.map((text, index) => (
                <p key={index} onClick={() => handleLanguageClick(text)}>
                  {text}
                </p>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
