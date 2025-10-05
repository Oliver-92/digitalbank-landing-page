# Digitalbank - Landing Page

Solución al [desafío de Digitalbank landing page en Frontend Mentor](https://www.frontendmentor.io/challenges/digital-bank-landing-page-WaUhkoDN). Este proyecto ayuda a mejorar las habilidades de desarrollo construyendo proyectos realistas.

## Tabla de contenidos

- [Resumen](#resumen)
  - [El desafío](#el-desafío)
  - [Captura de pantalla](#captura-de-pantalla)
  - [Enlaces](#enlaces)
- [Mi proceso](#mi-proceso)
  - [Construido con](#construido-con)
  - [Lo que aprendí](#lo-que-aprendí)
  - [Desarrollo continuo](#desarrollo-continuo)
- [Instalación y uso](#instalación-y-uso)
- [Autor](#autor)

## Resumen

### El desafío

Los usuarios deben poder:

- Ver el diseño óptimo del sitio según el tamaño de pantalla de su dispositivo
- Ver estados hover para todos los elementos interactivos de la página
- Navegar por un menú móvil funcional con overlay
- Experimentar animaciones suaves y transiciones

### Captura de pantalla

![Vista Desktop](./screenshot.jpg)

### Enlaces

- URL de la solución: [Frontend Mentor](https://your-solution-url.com)
- URL del sitio en vivo: [Demo en vivo](https://your-live-site-url.com)

## Mi proceso

### Construido con

- **HTML5 semántico** - Uso correcto de etiquetas semánticas (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- **CSS Variables** - Sistema de diseño con variables CSS reutilizables
- **Flexbox** - Para layouts flexibles y alineación
- **CSS Grid** - Para grillas responsivas de features y artículos
- **Mobile-first workflow** - Diseño comenzando desde dispositivos móviles
- **[React 19.1](https://reactjs.org/)** - Biblioteca de JavaScript
- **[Vite 7.1](https://vitejs.dev/)** - Build tool y dev server
- **Metodología BEM** - Para nomenclatura de clases CSS

### Lo que aprendí

Durante este proyecto, implementé varias mejoras y optimizaciones:

#### 1. Sistema de Variables CSS Centralizado

Creé un sistema de variables CSS reutilizables para mantener consistencia en todo el proyecto:

```css
:root {
  /* Colores */
  --color-green-500: hsl(136, 65%, 51%);
  --color-cyan-400: hsl(192, 70%, 51%);
  --color-blue-950: hsl(233, 26%, 24%);
  
  /* Gradientes */
  --gradient-primary: linear-gradient(90deg, var(--color-green-500), var(--color-cyan-400));
  
  /* Tipografía */
  --font-size-text-desktop: clamp(0.775rem, 1.12vw, 1.3rem);
  --font-size-title-desktop: min(3.889vw, 4.0625rem);
  
  /* Contenedores */
  --container-max-width: 1200px;
  --container-max-width-desktop: 90%;
}
```

#### 2. Componentes React Reutilizables

Estructuré los datos en arrays para evitar duplicación de código:

```jsx
const featuresData = [
  {
    id: 1,
    icon: iconOnline,
    title: 'Online Banking',
    description: 'Our modern web and mobile applications...'
  },
  // ...más features
];

// Renderizado dinámico
{featuresData.map(feature => (
  <article key={feature.id} className="feature-card">
    <img src={feature.icon} alt="" aria-hidden="true" />
    <h3>{feature.title}</h3>
    <p>{feature.description}</p>
  </article>
))}
```

#### 3. Accesibilidad Mejorada

Implementé mejores prácticas de accesibilidad:

```jsx
<button
  className="header__toggle"
  aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
  aria-expanded={menuOpen}
>
  <img src={menuOpen ? icon_close : icon_burger} alt="" aria-hidden="true" />
</button>
```

#### 4. Eliminación de Código Duplicado

- Consolidé valores repetidos en variables CSS
- Unifiqué media queries duplicados
- Reutilicé gradientes y transiciones
- Simplifiqué propiedades CSS redundantes

### Desarrollo continuo

Áreas en las que quiero seguir enfocándome:

- **Animaciones avanzadas** - Implementar animaciones más complejas con Framer Motion
- **Testing** - Agregar tests unitarios con React Testing Library
- **Performance** - Optimizar imágenes con lazy loading
- **TypeScript** - Migrar el proyecto a TypeScript para mejor type safety
- **Accesibilidad** - Implementar navegación por teclado completa y focus trap en el menú móvil

## Instalación y uso

### Requisitos previos

- Node.js (v16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/digitalbank-landing-page.git
```

2. Navega al directorio del proyecto:
```bash
cd digitalbank-landing-page
```

3. Instala las dependencias:
```bash
npm install
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

5. Abre tu navegador en `http://localhost:5173`

### Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## Autor

- Frontend Mentor - [@tuusuario](https://www.frontendmentor.io/profile/tuusuario)
- GitHub - [@tuusuario](https://github.com/tuusuario)
