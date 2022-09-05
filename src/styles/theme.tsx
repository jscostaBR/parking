export interface ThemeType {
  colors: {
    main: {
      purple: string,
      green: string,
      orange: string,
    },
    neutrals: {
      neutral_900: string,
      neutral_800: string,
      neutral_700: string,
      neutral_600: string,
      neutral_500: string,
      neutral_400: string,
      neutral_300: string,
      neutral_200: string,
      neutral_100: string,
      neutral_50: string,
    },
    blue: {
      blue_600: string,
      blue_500: string,
      blue_400: string,
    },
    green: {
      green_400: string,
      green_350: string,
    },
    rose: {
      rose_700: string,
      rose_600: string,
      rose_300: string,
    },
  }
}

export const theme: ThemeType = {
  colors: {
    main: {
      purple: '#A769B2',
      green: '#35E4BD',
      orange: '#F1B147',
    },
    neutrals: {
      neutral_900: '#000000',
      neutral_800: '#0A261D',
      neutral_700: '#4A4A4A',
      neutral_600: '#DADADA',
      neutral_500: '#9B9B9B',
      neutral_400: '#CCCCCC',
      neutral_300: '#E4E3E3',
      neutral_200: '#F2F2F2',
      neutral_100: '#FFFBE6',
      neutral_50: '#ffffff',
    },
    blue: {
      blue_600: '#4DD0E1',
      blue_500: '#26C6DA',
      blue_400: '#00BCD4',
    },
    green: {
      green_400: '#28DD91',
      green_350: '#32B68C26',
    },
    rose: {
      rose_700: '#FF174426',
      rose_600: '#FF0068',
      rose_300: '#A769B2',
    },
  },
}
