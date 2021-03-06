module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      dark: '#181a1b',
    }),
    extend: {
      backgroundImage: {
        featured: `url('https://supabase.io/new/images/blog/hacktoberfest-hackathon/hacktoberfest_banner.png')`,
      },
      blur: {
        px: `1px`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
