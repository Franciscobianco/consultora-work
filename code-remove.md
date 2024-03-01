 <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>

se comento una linea de importacion de css, la cual daba error y no llevaba
al localhost:5173 propio de react, largaba una imagen que en la terminal
tambien mostraba los errores por consola

solo se modifico el {code.html} despues del return de la function app e 
imprimio solo el codigo sin su estilo predefinido.
        {

            'styled' es una libreria de componentes y se debe instalar
            desde node.js: se abre una terminal y se inicia:

            --  npm install styled-components -- 
            
            //ya esta instalado en consultora-webpage_work

            se debe crear una carpeta "estilos" donde allí, ahora con
            la extension de archivo .js y el codigo  
                   ( export const eje-card = styled.etiqueta'
                        justify-content: center;
                        display: flex;
                        margin: 1.2em;
                   )
                   exportar la constante 'eje-card' nos sirve para luego
                   importar la constante tanto en las anteriores
                   como en la porpia etiqueta a utilizar, se utiliza
                   un template para ese .css especifico
        }

        para el SEO de la pagina, se utiliza un JSON interno con el cual le damos
        un titulo y una descripcion a nuestra pagina, la cual, a medida que vamos
        creando este json(que esta dentro de nuestro archivo a modificar y que se
        utiliza con una exportacion de una constante) se van creando las etiquetas
        <meta> dentro de nuestro html, el cual podemos verificar en la consola
        del navegador..
        
        lo mismo sucede cuando dentro de una funcion exportada colocamos un return
        y dentro del body agregamos informacion.. tambien podemos importar a la 
        caracteristica de librerías, la etiqueta <link> en vez de <a> 