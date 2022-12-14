import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react'

import { light, dark } from 'theme'
import { globalStyle } from 'stitches.config'
import { useLocalStorage } from 'hooks';
import { isBrowser } from 'utils';
import { ThemeContextData, ThemeProviderProps, DARK_THEME, LIGHT_THEME } from './types';

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

const LOCAL_STORAGE_KEY = '@censuradho'
export const THEME_KEY = LOCAL_STORAGE_KEY ? `${LOCAL_STORAGE_KEY}:theme` : '@planningPoker:theme'

export function ThemeProvider ({ children }: ThemeProviderProps) {
  const _isBrowser = isBrowser()

	const getIsDarkThemePreferences = useCallback(() => {
    return _isBrowser && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }, [_isBrowser])

  const [themeStorage, setThemeStorage] = useLocalStorage(THEME_KEY, '')
  const [_isDarkThemePreferences, setIsDarkThemePreferences] = useState(getIsDarkThemePreferences())

	const mapTheme = useMemo(() => ({
		[DARK_THEME]: dark,
		[LIGHT_THEME]: light
	}), [])

	const savedTheme = 
    themeStorage
    || (_isDarkThemePreferences ? DARK_THEME : LIGHT_THEME)

	const [currentTheme, setCurrentTheme] = useState(savedTheme)
	const [theme, setTheme] = useState(mapTheme[currentTheme as keyof typeof mapTheme])

	useEffect(() => {
		_isBrowser && window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
			const newColorScheme = event.matches ? DARK_THEME : LIGHT_THEME
			setCurrentTheme(newColorScheme)
		})
	}, [_isBrowser])



	const toggleTheme = useCallback(() => {
		setCurrentTheme(prevState => prevState === LIGHT_THEME ? DARK_THEME : LIGHT_THEME)
	}, [])

	const handleSavePreference = useCallback((currentTheme: string) => {
		setThemeStorage(currentTheme)
	}, [])

	useEffect(() => {
		document.body.classList.remove('theme-default', dark)
		document.body.classList.add(mapTheme[currentTheme as keyof typeof mapTheme])

		setTheme(mapTheme[currentTheme as keyof typeof mapTheme])
		handleSavePreference(currentTheme)
	}, [currentTheme, handleSavePreference, mapTheme])

	useEffect(() => {
		globalStyle()
		setIsDarkThemePreferences(getIsDarkThemePreferences())
	}, [_isBrowser, getIsDarkThemePreferences])

		return (
		<ThemeContext.Provider value={{ 
			toggleTheme, 
			theme, 
			currentTheme 
		}}>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => useContext(ThemeContext)