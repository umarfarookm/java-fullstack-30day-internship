# Day 14 – Frontend Mini-Project

## Learning Objectives

- Build a complete React application from scratch
- Apply Tailwind CSS for rapid UI development
- Combine routing, state management, and API consumption
- Practice component design and code organization
- Deploy a static React app

## Topics Covered

- Tailwind CSS: utility-first approach, configuration, responsive design
- Component library options (Headless UI, Radix, shadcn/ui)
- Project structure for medium-sized React apps
- Combining all React concepts: state, effects, context, routing
- Building for production with Vite

## Hands-On Task

Build a **Weather Dashboard** application:
1. Set up Tailwind CSS with Vite
2. Pages: Search, City Detail, Favorites
3. Search: input field that queries a weather API (use OpenWeatherMap free tier or mock data)
4. City Detail: display temperature, humidity, wind, and a 5-day forecast
5. Favorites: save cities to a favorites list (context + localStorage)
6. Responsive design: mobile-first with Tailwind breakpoints
7. Loading skeletons and error states throughout

## Practice / Homework

Add a dark mode toggle using Tailwind's `dark:` variant and persist the preference in localStorage. Ensure all components look good in both themes.

## References

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite + Tailwind Setup](https://tailwindcss.com/docs/guides/vite)
- [OpenWeatherMap API](https://openweathermap.org/api)
