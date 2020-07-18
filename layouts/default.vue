<template>
  <div class="app">
    <header class="header">
      <nav class="nav">
        <nuxt-link to="/">Lucas Macedo</nuxt-link>
        <nuxt-link class="sobre" to="/sobre">Sobre</nuxt-link>
      </nav>
    </header>
    <Nuxt />
  </div>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;500;700&family=Teko:wght@300;400;500;600;700&display=swap');

body {
  overflow-x: hidden;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background-color: rgba(0,0,0,0.8);
}

::-webkit-scrollbar {
  width: 10px;
  background-color: rgba(0,0,0,0.3);
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.9);
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.app {
  background-color: #111111;
  width: 100vw;
  min-height: calc(100vh - 56px);

  .header {
    .nav {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 7vh 7vw 0 7vw;
      position: fixed;
      z-index: 1000;

      @include max('tablet-wide') {
        position: absolute;
      }

      a {
        @include p-type('normal', 1, 'reg', #FFF);
        z-index: 1000;
        transition: all .1s ease;

        &.sobre {
          &.nuxt-link-exact-active, &.sobre:hover {
            color: $p-color;
          }
        }
      }
    }
  }
}
</style>
