import * as React from 'react';

interface Context {
  language: string;
  setLanguage: (language: string) => void;
}

export const LanguageContext = React.createContext<Context>({
  language: '',
  setLanguage: () => {
    console.warn('Provider is not initialized');
  },
});

export const LanguageProvider: React.FunctionComponent = props => {
  const [language, setLanguage] = React.useState('es');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};


// OTRA FORMA

const Wrapper: React.FunctionComponent  = props => {
  return <LanguageProvider>{props.children}</LanguageProvider>
  }

  describe('useLanguage specs', () => {
    it('should return a message with language equals "es" when it renders the hook', () => {
      // Arrange

      // Act
      const { result } = renderHook(() => useLanguage(), {
        wrapper: Wrapper,
      });

      act(() => {
        result.current.setLanguage('es');
      });

      // Assert
      expect(result.current.message).toEqual('The current language is: es');
    });
  });
