# Listado de Prompts Utilizados

A continuación se muestra un listado de ejemplo de los prompts empleados para el desarrollo de este proyecto.

---

## Generación de Clases de Dominio y DTOs desde Schemas

**Prompt**
A partir de este listado de atributos de estos schemas, dame las clases para los dominios de dichas entidades, a la par, brindame los dtos correspondientes basandote en los tipos de datos que se declaran.

**Descripción:**  
A partir de los schemas definidos en el archivo `DESIGN.md`, se solicita la creación de las entidades de dominio y los DTOs correspondientes, basándose en los tipos de datos declarados. Esto permite reducir el tiempo de conversión entre formatos.

**Observaciones realizadas:**  
- Se corrigieron errores en los tipados de datos.
- Se separaron las clases en archivos individuales para mejorar la legibilidad.
- Se verificó que los atributos y formatos sean los esperados.

---

## Generación de Pruebas Unitarias para DTOs y Casos de Uso

**Prompt**
Teniendo este dto y este usecase, genera pruebas unitarias para probar la correcta funcionalidad de las funciones correspondientes, así mismo, basandote de este objeto de prueba, genera el dto correspondiente para los test.

**Descripción:**  
Con el objetivo de optimizar tiempos, se solicita a la IA la generación de pruebas unitarias que permitan validar la funcionalidad correcta del código implementado.

**Observaciones realizadas:**  
- Se corrigieron los mocks generados por la IA, reemplazándolos por estructuras de datos reales.
- Las pruebas pueden ejecutarse correctamente con los DTOs y objetos de prueba adecuados.

---

## Revisión y Mejora de Archivos Markdown

**Prompt**
Revisa el formato de los archivos md, corrige los errores ortograficos que encuentres y mejora el diseño de ciertos bloques de texto.

**Descripción:**  
Para reducir errores humanos, se solicita la revisión ortográfica de la documentación en los distintos archivos Markdown, mejorando la redacción y el formato visual para aumentar la calidad del producto.

**Observaciones realizadas:**  
- Se corrigieron textos modificados por la IA.
- Se mejoraron los bloques de texto y se reorganizó el contenido para mayor claridad.

---

## Generación de Schemas Mongoose desde Modelado de Datos

**Prompt**
A partir del modelado de datos encontrado en el archivo DESIGN.md, genera los schemas para el proyecto nodejs, tomando en cuenta que se requiere el formato para Mongoose, implementando a su vez los indices descritos en el mismo documento.

**Descripción:**  
Con el modelado de datos presente en el archivo `DESIGN.md`, se solicita la generación de schemas en TypeScript para Mongoose, incluyendo los índices descritos en el documento. Esto agiliza el desarrollo y reduce errores humanos.

**Observaciones realizadas:**  
- Se corrigieron atributos y tipos de datos en los schemas.
- Se verificó la correspondencia de los atributos con lo estipulado en el archivo `DESIGN.md`.
- Se implementaron los índices requeridos.

---

> **Nota:**  
> La colaboración con IA ha permitido acelerar el desarrollo, mejorar la calidad del código y la documentación, y reducir errores en el proceso de implementación.