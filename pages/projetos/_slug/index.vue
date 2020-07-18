<template>
  <div class="project">
    <div class="header">
      <div class="hero">
        <img class="hero-img" :src="require(`~/static/images/sites/${project.imgsFolder}/${project.mainImg}`)" :alt="project.name">
        <span class="hero-name">{{project.name}}</span>
      </div>
      <div class="title">
        <div class="name">
          <span class="name-bg">{{project.name}}</span>
          <h1>{{project.name}}</h1>
          <h3>{{project.year}}</h3>
        </div>
      </div>
      <div class="circle-text">
        <div class="circular-text">
          <span ref="circleText" class="rotated">Desenvolvimento web - UI Design - Desenvolvimento web - UI Design - Desenvolvimento web - UI Design - </span>
        </div>
      </div>
    </div>

    <div class="project-info-wrapper">
      <div class="project-info">
        <div class="tools">
          <h3 class="title">Ferramentas</h3>
          <ul class="tools-list">
            <li v-for="(tool, index) in project.tools" :key="index" class="tools-list-item">{{tool}}</li>
          </ul>
        </div>
        <div class="description">
          <h3 class="title">Descrição</h3>
          <div class="description-text">
            <p v-for="(paragraph, index) in project.description" :key="index" class="description-paragraph">{{paragraph}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="project-links">
      <a :href="project.siteLink" target="_blank">Ir para o site <span :v-if="project.warning.have">({{ project.warning.msg }})</span></a>
      <a :href="project.codeLink" target="_blank">Ver código</a>
    </div>

    <div class="ui-imgs">
      <img v-for="(uiImg, index) in project.uiImgs" :key="index" :src="require(`~/static/images/sites/${project.imgsFolder}/${uiImg}`)" alt="Interface" class="ui-img">
    </div>

    <Logo :fillColor="'#FFF'" class="logo-broken-line" />

    <div class="next">
      <nuxt-link class="next-btn" :to="`/projetos/${project.next.slug}`">Próximo</nuxt-link>
      <span class="counter">0{{ project.next.id }} <span class="counter-minor">/ 03</span></span>

      <nuxt-link :to="`/projetos/${project.next.slug}`" class="next-card">

        <div class="next-card__title back">
          <h2 class="title">{{ project.next.nameSplit[0] }}</h2>
        </div>

        <div class="img">
          <img :src="require(`~/static/images/sites/${project.next.img}`)" :alt="`${project.next.nameSplit[0]}${project.next.name}`">
        </div>

        <div class="next-card__title front">
          <h2 class="title">{{ project.next.nameSplit[1] }}</h2>
        </div>

      </nuxt-link>
    </div>
  </div>
</template>

<script>
import CircleType from 'circletype';
import { mapGetters } from 'vuex';

export default {
  name: 'Project',
  head() {
    return {
      title: `${this.project.name} | Lucas Macedo Portfólio`
    }
  },
  methods: {
    circleTextCreate() {
      const { circleText } = this.$refs;
      new CircleType(circleText).radius(80);
    },
  },
  computed: {
    ...mapGetters(['oneSite']),
    project() {
      return this.oneSite(this.$route.params.slug)
    }
  },
  mounted() {
    this.circleTextCreate();
  },
};
</script>

<style lang="scss">
.project {
  min-height: 100vh;
  padding: 30vh 0 20vh 0;

  @include max('tablet-wide') {
    padding: 20vh 0 10vh 0;
  }

  .header {
    .hero {
      display: grid;
      justify-items: center;
      align-items: center;
      margin-bottom: 150px;

      @include max('phone-wide') {
        margin-bottom: 75px;
      }

      &-name {
        grid-row: 1;
        grid-column: 1;
        @include p-type(7.25rem, .8, 'bold', #161616);
        text-transform: uppercase;
        letter-spacing: 0px;
        max-width: 95vw;
        text-align: center;

        @include max('tablet-wide') {
          font-size: 4.5rem;
        }

        @include max('tablet') {
          font-size: 4.2rem;
        }

        @include max('phone-wide') {
          font-size: 3rem;
        }
      }
      &-img {
        grid-row: 1;
        grid-column: 1;
        max-width: 500px;
        border-radius: 6px;
        margin: 0 7px;
        z-index: 20;

        @include max('tablet-wide') {
          max-width: 60vw;
        }

        @include max('phone-wide') {
          max-width: 90vw;
        }
      }
    }

    .title {
      padding-bottom: 150px;
      .name {
        display: grid;
        align-items: center;
        justify-items: center;
        justify-content: center;

        h1 {
          @include s-type(2rem, 1, 'medium', #FFF);
          text-transform: uppercase;
          letter-spacing: 12px;
          text-align: center;
          padding-bottom: 10px;
          transform: translate3d(0, 70%, 0);
          grid-row: 1 / -1;
          grid-column: 1 / -1;

          @include max('tablet-wide') {
            font-size: 1.5rem;
            letter-spacing: 7px;
          }

          @include max('tablet') {
            font-size: 1.2rem;
            letter-spacing: 4px;
          }

          @include max('phone-wide') {
            font-size: 1rem;
            letter-spacing: 2px;
          }
        }

        &-bg {
          display: block;
          @include p-type(5rem, .8, 'bold', #000);
          text-transform: uppercase;
          text-align: center;
          grid-column: 1 / -1;
          grid-row: 1 / -1;

          @include max('tablet-wide') {
            font-size: 4.5rem;
          }

          @include max('tablet') {
            font-size: 3rem;
          }

          @include max('phone-wide') {
            font-size: 2rem;
          }
        }

        h3 {
          @include p-type('normal', 1, 'reg', white);
          justify-self: end;
          text-align: right;
          text-transform: uppercase;
          letter-spacing: 8px;
          padding-top: 25px;
          padding-right: 25px;

          @include max('phone-wide') {
            font-size: .7rem;
            padding-top: 15px;
          }
        }
      }
    }

    .circle-text {
      position: absolute;
      transform: translate3d(-25%, -25%, 0);
      width: 400px;
      height: 400px;
      overflow: hidden;

      @include max('tablet-wide') {
        width: 325px;
        height: 325px;
      }

      @include max('tablet') {
        width: 250px;
        height: 250px;
      }

      @include max('tablet-small') {
        transform: translate3d(0, -40%, 0);
        right: 0;
        margin-right: 5vw;
      }

      @include max('phone-wide') {
        width: 160px;
        height: 160px;
        transform: translate3d(0, -60%, 0);
        display: none;
      }

      .circular-text {
        @include p-type(1.25rem, .8, 'medium', $p-color);
        animation: spin 15s linear infinite;

        @include max('tablet-wide') {
          font-size: 1rem;
        }

        @include max('tablet') {
          font-size: 0.75rem;
        }

        @include max('phone-wide') {
          font-size: .5rem;
        }
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    }
  }

  .project-info {
    &-wrapper {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding: 0 7vw 100px 7vw;

      @include max('tablet-small') {
        flex-direction: column;
      }
    }

    display: grid;
    justify-content: space-between;
    width: 70%;
    grid-template-columns: 1fr 2fr;

    @include max('tablet-wide') {
      grid-template-columns: 1fr;
    }

    @include max('tablet-small') {
      width: 100%;
    }

    .title {
      @include p-type(1.75rem, 1, 'medium', #FFF);
      text-transform: uppercase;
      margin-bottom: 30px;

      @include max('tablet-small') {
        font-size: 1.5rem;
        margin-bottom: 15px;
      }
    }

    .tools {
      margin-right: 50px;

      @include max('tablet-small') {
        margin-right: 0px;
      }

      &-list-item {
        @include s-type(.75rem, 1.3, 'reg', #FFF);
        padding: 2.5px 0;
      }
    }

    .description {
      @include max('tablet-wide') {
        margin-top: 45px;
      }

      &-text {
        display: grid;
        row-gap: 10px;
      }
      &-paragraph {
        @include s-type(.9rem, 1.3, 'reg', #FFF);
      }
    }
  }

  .project-links {
    display: flex;
    align-items: flex-end;
    padding-right: 10vw;
    padding-bottom: 150px;
    flex-direction: column;

    @include max('phone-wide') {
      padding: 0 5vw 100px 5vw;
    }

    a {
      @include p-type('normal', 1, 'reg', white);
      text-transform: uppercase;
      letter-spacing: 3px;
      padding: 5px 0;
      transition: all .2s ease;

      &:hover {
        color: $p-color;
      }
    }
  }

  .ui-imgs {
    display: grid;
    padding: 0 15vw;

    @include max('tablet') {
      padding: 0 7vw;
    }

    .ui-img {
      @include shadow;
      max-width: 50%;
      transform: scale(1.07);

      @include max('tablet') {
        max-width: 100%;
        transform: scale(1);
        margin-bottom: 100px;
      }

      &:nth-child(2n) {
        justify-self: end;
        z-index: 20;
      }
    }
  }

  .logo-broken-line {
    margin: 150px auto 100px auto;
    width: 40px;
    display: flex;
    justify-content: center;

    @include max('phone-wide') {
      margin: 50px auto 50px auto;
    }
  }

  .next {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-btn {
      @include p-type(3rem, 1, 'bold', #FFF);
      text-transform: uppercase;
      letter-spacing: 4px;
      transition: all .3s ease;

      &:hover {
        color: $p-color;
      }
    }

    .counter {
      @include p-type(1.5rem, 1, 'bold', #FFF);
      margin-top: 30px;

      @include max('phone-wide') {
        margin-top: 15px;
      }

      &-minor {
        font-weight: 500;
        font-size: 1rem;
        color: rgba(255, 255, 255, .5);
      }
    }

    &-card {
      position: relative;
      display: grid;
      justify-items: center;
      align-items: center;
      grid-template-rows: 1fr;
      margin-top: 75px;

      @include max('tablet') {
        display: none;
      }

      .img {
        padding: 50px 0;
        display: flex;
        align-self: center;
        grid-row: 1;
        grid-column: 1;
        max-width: 500px;
        margin: 0 7px;
        z-index: 20;

        img {
        border-radius: 6px;
        }
      }

      &__title {
        grid-row: 1;
        grid-column: 1;

        &.back {
          align-self: start;
          justify-self: start;
          transform: translate3d(-100px, 0, 0);
          z-index: 10;
        }

        &.front {
          align-self: end;
          justify-self: end;
          transform: translate3d(100px, 0, 0);
          z-index: 30;
        }
      }

      .title {
        @include p-type('giant', .8, 'semibold',  $p-color);
        text-transform: uppercase;
        transition: all .3s ease;
      }
    }
  }
}
</style>
