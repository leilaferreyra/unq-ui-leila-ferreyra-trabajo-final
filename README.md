# Palabras Encadenadas

UIs » Trabajo Final Integrador (TFI)

## El Juego

Formá la cadena más larga posible de palabras válidas antes de que se agote el tiempo.

- Cada palabra nueva debe empezar con la última letra de la palabra anterior.
- No se puede repetir una palabra ya usada en la partida.
- Cada palabra se valida contra un diccionario real.
- Cada letra de una palabra válida suma 1 punto.
- Tenés 15 segundos por turno — se reinician con cada palabra válida. Si se acaban, termina la partida.
- El contador empieza a correr a partir de la primer palabra ingresada (sea valida o no).

## Instalación

Requisitos: Node.js 20+

```bash
# Clonar el repositorio
git clone https://github.com/leilaferreyra/unq-ui-leila-ferreyra-trabajo-final.git

# Entrar a la carpeta
cd unq-ui-leila-ferreyra-trabajo-final

# Instalar dependencias
npm install
```

## Cómo correrlo

```bash
npm run dev
```

Abrí [http://localhost:5173](http://localhost:5173) en el navegador.

## Extras

- Interfaz responsive.
- Posibilidad de jugar más de una partida.
- Leaderboard local con los mejores 10 puntajes.
- Pantalla de instrucciones del juego (accesible desde el menú principal).
