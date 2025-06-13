import Button from "@components/Button";
import React from "react";

import useToggleTheme from "@components/ThemeProvider/useToggleTheme";

const App: React.FC = () => {
  const { toggle } = useToggleTheme();

  return (
    <div>
      <Button onClick={() => toggle()}>Toggle Theme</Button>
      <h1>Hello Themed World</h1>
    </div>
  );
};

export default App;
