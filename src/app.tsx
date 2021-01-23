import * as React from 'react';
import { LanguageContext, LanguageProvider } from './language.context';

export const App: React.FunctionComponent = () => {
  return (
    <>
      <LanguageProvider>
      <Component1 />
        <h1>05-Testing / 01 React</h1>;
      </LanguageProvider>
    </>
  );
};

const Component1 = () => {
  const { language } = React.useContext(LanguageContext);

  return <h1>{language}</h1>;
};
