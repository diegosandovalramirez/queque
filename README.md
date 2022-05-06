# Gestionador de ventas, Cake Store Santiago

## Información general
Dashboard en línea creado con utilizando un stack PERN. Existe con el fin de permitir a la empresa un mayor control respecto a sus clientes, notificando respecto a ventas totales para distintos periodos, junto con datos de cumpleaños, etc.

### Tecnologías Utilizadas:
- [PG-Promise](https://github.com/vitaly-t/pg-promise)
  * Para conectarse a PostgresSQL
- [Express.js](https://expressjs.com/)
  * Framework para el servidor API
- [React.js](https://facebook.github.io/react/)
  * Utilizado para el lado del cliente
- [Webpack](http://webpack.github.io/docs/)
  * Bundler de aplicación para el cliente React
- [Dotenv](https://github.com/motdotla/dotenv)
  * Carga variables `ENV` desde un archivo `.env`

editar/revisar el de abajo (importante para Frond-End) v v v
- [CSS Modules](https://github.com/css-modules/css-modules) - [Demo of CSS Modules with Webpack](https://github.com/css-modules/webpack-demo)

## Características Principales:
- Registro de ventas comphrehensivo; se detallan datos respecto a las compras realizadas, incluyendo:
	* Número de gestión
	* Nombre completo del usuario
	* R.U.N.
	* Fecha de compra
	* Método de pago
	* Calificación para cada usuario (determinado en base de su comportamiento relacionado al negocio)

## Uso del Programa