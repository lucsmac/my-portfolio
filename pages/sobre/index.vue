<template>
  <div class="about">
    <div class="header">
      <div class="header__title">
        <div class="name">
          <span class="name-bg">Lucas Macedo</span>
          <h1>Lucas Macedo</h1>
        </div>
        <h3>Desenvolver web e designer gráfico</h3>
      </div>
    </div>
    <Logo class="logo-brokenline" :fillColor="'#FFF'" />
    <div class="bio">
      <p>Dedicado a estar sempre evoluindo, passei os últimos 2 anos adquirindo e colocando em prática habilidades na área de desenvolvimento de sites. Sempre tive um pé na tecnologia e outro no design, graças à isso, meu caminho foi se moldando para que eu me dedicasse especialmente ao desenvolvimento web front-end e à criação de interfaces.</p>
      <p>Hoje sou freelancer e trabalho como bolsista na Diretoria de Meio Ambiente (DMA) da Universidade Federal do Rio Grande do Norte (UFRN). Além disso, trabalho na criação de projetos pessoais para o meu próprio desenvolvimento em outras áreas, como no motion graphics e no backend de aplicações mais complexas.</p>
    </div>
    <div class="skills">
      <h3 class="skills-title">Habilidades</h3>
      <span class="skills-items">#VueJs #GreenSock #PreProcessadoresCSS #Node #Express #MySQL #MongoDB #Python #Github #SVG #SEO #Analytics #Photoshop #AdobeXD #Illustrator #Premiere</span>
    </div>
    <div class="contact">
      <h3 class="contact-title">Contato</h3>
      <span class="contact-desc">Entre em contato comigo através do e-mail <b>lucasmdc57@gmail.com</b>, ou através das redes sociais.</span>
      <div class="contact-items">
        <a class="contact-social-media" href="https://www.instagram.com/lucs_macedo/" target="_blank">Instagram</a>
        <a class="contact-social-media" href="https://github.com/lucsmac" target="_blank">Github</a>
        <a class="contact-social-media" href="https://www.linkedin.com/in/lucsmac/" target="_blank">Linkedin</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Sobre | Lucas Macedo Portfólio'
    }
  }
};
</script>

<style lang="scss">
.about {
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30vh 10vw 20vh 10vw;
  box-sizing: border-box;

  @include max('tablet-wide') {
    padding: 20vh 7vw 10vh 7vw;
  }

  @include max('phone-wide') {
    padding: 20vh 3vw 10vh 3vw;
  }

  .header {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-rows: 1fr;
    padding-bottom: 100px;

    &__img {
      grid-row: 1;
      grid-column: 1;
      opacity: .05;
      width: 20vw;
    }

    &__title {
      grid-row: 1;
      grid-column: 1;
      padding-top: 50px;

      .name {
        display: grid;
        align-items: center;
        justify-items: center;

        h1 {
          @include s-type(2rem, 1, 'medium', $p-color);
          text-transform: uppercase;
          letter-spacing: 12px;
          text-align: center;
          padding-bottom: 10px;
          grid-row: 1 / -1;
          grid-column: 1 / -1;

          @include max('phone-wide') {
            font-size: 1.4rem;
            letter-spacing: 5px;
          }

          @include max('phone-wide') {
            font-size: 1.4rem;
            letter-spacing: 5px;
          }
        }

        &-bg {
          display: block;
          @include p-type(9rem, .8, 'bold', #161616);
          text-transform: uppercase;
          letter-spacing: 0px;
          grid-column: 1 / -1;
          grid-row: 1 / -1;

          @include max('tablet-wide') {
            font-size: 6rem;
          }

          @include max('phone-wide') {
            font-size: 3.5rem;
          }
        }
      }

      h3 {
        @include s-type(.7rem, 1, 'reg', white);
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 8px;

        @include max('tablet-wide') {
          font-size: .6rem;
          letter-spacing: 4px;
        }

        @include max('phone-wide') {
          font-size: .4rem;
          letter-spacing: 2px;
        }
      }
    }
  }

  .logo-brokenline {
    width: 30px;
    padding-bottom: 100px;
  }

  .bio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 50vw;
    padding-bottom: 100px;

    @include max('tablet-wide') {
      max-width: 100vw;
      padding: 0 5vw 100px 5vw;
    }

    p {
      text-align: center;
      @include s-type('normal', 1.4, 'reg', white);
      opacity: .9;

      & + p {
        margin-top: 20px;
      }
    }
  }

  .skills {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 50vw;
    padding-bottom: 100px;

    @include max('tablet-wide') {
      max-width: 100vw;
    }

    &-title {
      @include p-type('mid', 1, 'bold', white);
      padding-bottom: 25px;
    }

    &-items {
      @include s-type('small', 1.5, 'bold', white);
      max-width: 75%;
      text-align: center;
      font-weight: 300;
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 50vw;

    @include max('tablet-wide') {
      max-width: 100vw;
    }

    &-title {
      @include p-type('mid', 1, 'bold', white);
      padding-bottom: 25px;
    }

    &-desc {
      @include s-type('normal', 1.5, 'reg', white);
      padding-bottom: 25px;
      font-weight: 300;
      text-align: center;

      b {
        color: $p-color;
        font-weight: 700;
      }
    }

    &-items {
      @include p-type('small', 1.5, 'reg', white);
      max-width: 75%;
      text-align: center;
      .contact-social-media {
        color: white;
        padding: 7px 10px;
      }
    }
  }
}
</style>
