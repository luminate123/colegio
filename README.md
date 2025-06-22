# Sitio Web del Colegio

Este es el sitio web del colegio construido con Astro, React y Tailwind CSS.

## 🚀 Publicación en GitHub Pages

### Pasos para publicar:

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Construir el proyecto:**
   ```bash
   npm run build
   ```

3. **Publicar en GitHub Pages:**
   ```bash
   npm run deploy
   ```

### Configuración manual (alternativa):

Si prefieres configurar GitHub Pages manualmente:

1. Ve a tu repositorio en GitHub
2. Ve a Settings > Pages
3. En "Source", selecciona "Deploy from a branch"
4. Selecciona la rama `gh-pages` y la carpeta `/ (root)`
5. Haz clic en "Save"

### Notas importantes:

- El sitio estará disponible en: `https://sebastian1.github.io/colegio`
- Asegúrate de que tu repositorio se llame `colegio` para que la URL funcione correctamente
- Si cambias el nombre del repositorio, actualiza el `base` en `astro.config.mjs`

## 🛠️ Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar la construcción
npm run preview
```

## 📁 Estructura del proyecto

- `src/pages/` - Páginas de Astro
- `src/components/` - Componentes reutilizables
- `src/layouts/` - Layouts de página
- `public/` - Archivos estáticos
