"use client"
import React, { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';

export interface CustomizerState {
  activeDir?: string | any;
  activeMode?: string;
  activeTheme?: string;
  SidebarWidth?: number;
  MiniSidebarWidth?: number;
  TopbarHeight?: number;
  isCollapse?: boolean;
  isLayout?: string;
  isSidebarHover?: boolean;
  isMobileSidebar?: boolean;
  isHorizontal?: boolean;
  isLanguage?: string;
  isCardShadow?: boolean;
  borderRadius?: number | any;
}

interface CustomizerActions {
  setTheme: Dispatch< string>;
  setDarkMode: Dispatch<string>;
  setDir: Dispatch<string>;
  setLanguage: Dispatch<string>;
  setCardShadow: Dispatch<boolean>;
  toggleSidebar: Dispatch<void>;
  hoverSidebar: Dispatch<boolean>;
  toggleMobileSidebar: Dispatch<void>;
  toggleLayout: Dispatch<string>;
  toggleHorizontal: Dispatch<boolean>;
  setBorderRadius: Dispatch<number | any>;
}

interface CustomizerContextProps {
  state: CustomizerState;
  actions: CustomizerActions;
}

const initialState = {
    activeDir: 'ltr',
    activeMode: 'light', // This can be light or dark
    activeTheme: 'BLUE_THEME', // BLUE_THEME, GREEN_THEME, BLACK_THEME, PURPLE_THEME, ORANGE_THEME
    SidebarWidth: 270,
    MiniSidebarWidth: 87,
    TopbarHeight: 70,
    isLayout: 'boxed', // This can be full or boxed
    isCollapse: false, // to make sidebar Mini by default
    isSidebarHover: false,
    isMobileSidebar: false,
    isHorizontal: false,
    isLanguage: 'en',
    isCardShadow: true,
    borderRadius: 18,
  };

const CustomizerContext = createContext<CustomizerContextProps | undefined>(undefined);

export const CustomizerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(customizerReducer, initialState);

  const actions: CustomizerActions = {
    setTheme: (payload) => dispatch({ type: 'setTheme', payload }),
    setDarkMode: (payload) => dispatch({ type: 'setDarkMode', payload }),
    setDir: (payload) => dispatch({ type: 'setDir', payload }),
    setLanguage: (payload) => dispatch({ type: 'setLanguage', payload }),
    setCardShadow: (payload) => dispatch({ type: 'setCardShadow', payload }),
    toggleSidebar: () => dispatch({ type: 'toggleSidebar' }),
    hoverSidebar: (payload) => dispatch({ type: 'hoverSidebar', payload }),
    toggleMobileSidebar: () => dispatch({ type: 'toggleMobileSidebar' }),
    toggleLayout: (payload) => dispatch({ type: 'toggleLayout', payload }),
    toggleHorizontal: (payload) => dispatch({ type: 'toggleHorizontal', payload }),
    setBorderRadius: (payload) => dispatch({ type: 'setBorderRadius', payload }),
  };

  return (
    <CustomizerContext.Provider value={{ state, actions }}>
      {children}
    </CustomizerContext.Provider>
  );
};

export const useCustomizer = () => {
  const context = useContext(CustomizerContext);
  if (!context) {
    throw new Error('useCustomizer must be used within a CustomizerProvider');
  }
  return context;
};

const customizerReducer = (state: CustomizerState, action: any) => {
  switch (action.type) {
    case 'setTheme':
      return { ...state, activeTheme: action };
    case 'setDarkMode':
      return { ...state, activeMode: action };
    case 'setDir':
      return { ...state, activeDir: action };
    case 'setLanguage':
      return { ...state, isLanguage: action };
    case 'setCardShadow':
      return { ...state, isCardShadow: action };
    case 'toggleSidebar':
      return { ...state, isCollapse: !state };
    case 'hoverSidebar':
      return { ...state, isSidebarHover: action };
    case 'toggleMobileSidebar':
      return { ...state, isMobileSidebar: !state.isMobileSidebar };
    case 'toggleLayout':
      return { ...state, isLayout: action };
    case 'toggleHorizontal':
      return { ...state, isHorizontal: action };
    case 'setBorderRadius':
      return { ...state, borderRadius: action };
    default:
      return state;
  }
};
