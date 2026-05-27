# Documentación Técnica: ACUMEN INGENIERÍA S.A.S.

Esta carpeta contiene el código fuente y los archivos operativos del sitio web de Acumen (www.acumeningenieria.com). Originalmente, este proyecto se encontraba en una carpeta llamada `axioma-peritajes`, pero este es, en efecto, el código final y más actualizado del sitio web completo (incluye todas las secciones de Ingeniería Aumentada, ACUMEN OS, Liderazgo y Peritajes).

## 1. Código Fuente y Tecnologías
- **Framework:** El sitio está construido con **Next.js** (versión 16.x) y **React** (versión 19).
- **Estilos:** Se utiliza **Tailwind CSS** para un diseño moderno y *responsive* (adaptable a celulares y tablets).
- **Animaciones:** Integrado con **Framer Motion** para microinteracciones fluidas.
- **Iconos:** Se usa la librería **Lucide React**.
- **Lenguaje:** TypeScript, para asegurar la calidad y evitar errores en el código.

## 2. Dominio y Hosting (Plataforma)
- **Dominio:** `www.acumeningenieria.com` (Normalmente gestionado a través de proveedores como GoDaddy, Namecheap o Google Domains. El administrador de la empresa debe tener las credenciales de donde se compró).
- **Hosting / Despliegue:** Al ser una aplicación en Next.js, lo más estándar es que el sitio esté desplegado (alojado) en **Vercel** o **Netlify**. Cada vez que se hace un cambio en este código y se sube a la nube, la plataforma actualiza la página automáticamente.
- **Correos:** El correo corporativo está gestionado con **Google Workspace**.

## 3. Comandos Útiles para el Desarrollo
Si deseas correr la página web en tu computador localmente para ver cambios antes de publicarlos:
1. Abre la terminal en esta carpeta (`/Users/rafaelnanclares/Desktop/ACUMEN/AcumenIngenieria_Web`).
2. Instala las dependencias (solo si es la primera vez): `npm install`
3. Inicia el servidor de desarrollo: `npm run dev`
4. Abre tu navegador en `http://localhost:3000`.

## 4. Próximos Pasos (SEO)
El siguiente paso en la estrategia es optimizar este mismo código añadiéndole mejores etiquetas de SEO técnico, conectando Google Analytics y Search Console para medir cuántos usuarios visitan la página.
