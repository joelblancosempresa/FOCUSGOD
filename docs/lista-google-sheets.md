# Lista de espera → Google Sheets

Cada persona que se apunta en `focusgodapp.com/app` se guarda en una hoja de Google Sheets, con fecha, nombre, email, plataforma (iPhone o Android) y origen. No hay emails repetidos.

El origen sale del enlace. Si en el libro pones `focusgodapp.com/app?o=libro`, en la hoja verás "libro". Sin `?o=`, el origen es "web".

## 1. Crear la hoja y el script (5 minutos)

1. Crea una hoja nueva en Google Sheets. Llámala, por ejemplo, **FocusGod — Lista de espera**.
2. Menú **Extensiones → Apps Script**.
3. Borra lo que haya y pega este código. En la primera línea, cambia `PEGA_AQUI_UNA_CLAVE` por una clave larga inventada: por ejemplo, 30 letras y números al azar. Guárdala, la usarás en el paso 3.

```js
const SECRET = "PEGA_AQUI_UNA_CLAVE";

function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  if (d.secret !== SECRET) return out({ ok: false });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName("Lista") || ss.insertSheet("Lista");
    if (sh.getLastRow() === 0) {
      sh.appendRow(["Fecha", "Nombre", "Email", "Plataforma", "Origen", "Consentimiento"]);
    }
    const last = sh.getLastRow();
    const emails = last > 1 ? sh.getRange(2, 3, last - 1, 1).getValues().flat() : [];
    if (emails.indexOf(d.email) === -1) {
      sh.appendRow([new Date(d.fecha), d.nombre, d.email, d.plataforma, d.origen, "Sí"]);
    }
  } finally {
    lock.releaseLock();
  }
  return out({ ok: true });
}

function out(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
```

4. Pulsa **Guardar** (el disquete).
5. **Implementar → Nueva implementación** → en "Seleccionar tipo", el engranaje → **Aplicación web**.
   - **Ejecutar como:** Yo.
   - **Quién tiene acceso:** Cualquier usuario.
   - Pulsa **Implementar**. Google te pedirá permisos para tu cuenta: acepta.
6. Copia la **URL de la aplicación web**. Termina en `/exec`.

## 2. Conectarla a la web (Vercel)

En vercel.com → proyecto de focusgodapp.com → **Settings → Environment Variables**, añade:

| Nombre | Valor |
|---|---|
| `SHEETS_WEBHOOK_URL` | La URL `/exec` del paso 6 |
| `SHEETS_SECRET` | La misma clave que pusiste en la primera línea del script |

Guarda y vuelve a desplegar la web: **Deployments → … → Redeploy**.

## 3. Probarlo

Apúntate tú mismo en `focusgodapp.com/app` y comprueba que aparece una fila nueva en la pestaña **Lista** de la hoja.

## Notas

- Si cambias el código del script, hay que hacer **Implementar → Gestionar implementaciones → Editar → Versión nueva**. Si no, sigue funcionando la versión anterior.
- La clave evita que alguien que encuentre la URL del script pueda meter filas falsas.
- Para pasar la lista a Kit (o a otra herramienta): **Archivo → Descargar → CSV** e impórtalo.
