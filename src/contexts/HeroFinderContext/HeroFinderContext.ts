import { createContext } from 'react';
import { HeroFinderContextProps } from './heroFinderContext.types'

export const HeroFinderContext = createContext<HeroFinderContextProps>({} as HeroFinderContextProps);