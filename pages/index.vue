<template>
  <div class="home">
    <Logo :fillColor="'#171717'" class="logo-bg"/>

    <div class="card-slide">
      <div class="card-wrapper" v-for="project in projects" :key="project.id">
        <router-link v-if="currProject === project.id" :to="`/projetos/${project.slug}`" class="card">

          <div class="card__title back">
            <h2 class="title">{{project.nameSplit[0]}}</h2>
          </div>

          <div class="card__img">
            <span class="year">{{project.year}}</span>
            <img class="img" :src="require(`~/static/images/sites/${project.imgsFolder}/${project.mainImg}`)" :alt="project.name">
            <span class="type">{{project.category}}</span>
          </div>

          <div class="card__title front">
            <h2 class="title">{{project.nameSplit[1]}}</h2>
          </div>

        </router-link>
      </div>
    </div>
    <div class="home-footer">
      <div class="counter">
        <span class="counter-current">0{{currProject}}</span>
        <span class="counter-total">0{{totalProjects}}</span>
      </div>
      <div class="social">
        <a href="#" target="_blank" class="social-item">ig</a>
        <a href="#" target="_blank" class="social-item">in</a>
        <a href="#" target="_blank" class="social-item">git</a>
      </div>
    </div>
    <div class="controls">
      <span @click="prev" class="prev controls-item">&larr;</span>
      <span @click="next" class="next controls-item">&rarr;</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  head() {
    return {
      title: 'Home | Lucas Macedo Portfólio'
    }
  },
  data() {
    return {
      currProject: 1,
      totalProjects: 3,
    };
  },
  computed: {
    ...mapGetters(['projects']),
  },
  methods: {
    next() {
      if (this.currProject === this.totalProjects) {
        this.currProject = 1;
      } else {
        this.currProject += 1;
      }
    },
    prev() {
      if (this.currProject === 1) {
        this.currProject = 3;
      } else {
        this.currProject -= 1;
      }
    },
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 7vh 0;

  .logo-bg {
    position: absolute;
    z-index: 0;
    opacity: .6;
    height: 75vh;
    transform: rotate(32deg);

    @include max('tablet-wide') {
      height: 25vh;
    }

    @include max('phone-wide') {
      height: 45vh;
    }
  }
}

.card-slide {
  width: 100%;
  padding: 0 5vw;
}

.card {
  justify-content: center;
  height: 60vh;
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 1fr;

  @include max('tablet-wide') {
    height: 50vh;
  }

  @include max('tablet') {
    height: 48vh;
  }

  @include max('phone-wide') {
    height: 40vh;
  }

  &__img {
    display: flex;
    grid-row: 1;
    grid-column: 1;

    .img {
      max-width: 500px;
      border-radius: 6px;
      margin: 0 7px;
      z-index: 20;
      @include shadow;

      @include max('tablet-wide') {
        max-width: 400px;
      }

      @include max('phone-wide') {
        max-width: 85vw;
        margin-bottom: 20px;
      }
    }

    .year, .type {
      @include s-type(.6rem, 1, 'reg', white);
      writing-mode: vertical-rl;
      text-orientation: mixed;
      opacity: .9;
    }

    .year {
      padding-bottom: 20px;
      align-self: flex-end;

      @include max('phone-wide') {
        padding-bottom: 35px;
      }
    }

    .type {
      padding-top: 20px;
    }
  }

  &__title {
    grid-row: 1;
    grid-column: 1;

    @include max('phone-wide') {
      grid-row: initial;
    }

    &.back {
      align-self: start;
      justify-self: start;
      transform: translate3d(-100px, 0, 0);
      z-index: 10;

      @include max('tablet-wide') {
        transform: translate3d(-50px, 0, 0);
      }

      @include max('phone-wide') {
        transform: translate3d(0, 0, 0);
        justify-self: center;
      }
    }

    &.front {
      align-self: end;
      justify-self: end;
      transform: translate3d(100px, 0, 0);
      z-index: 30;

      @include max('tablet-wide') {
        transform: translate3d(50px, 0, 0);
      }

      @include max('phone-wide') {
        transform: translate3d(0, 0, 0);
        justify-self: center;
      }
    }

    .title {
      @include p-type('giant', .8, 'semibold',  $p-color);
      text-transform: uppercase;
      transition: all .3s ease;

      @include max('tablet-wide') {
        font-size: 5rem;
      }

      @include max('tablet') {
        font-size: 4rem;
      }

      @include max('phone-wide') {
        font-size: 3.25rem;
      }
    }
  }
}

.home-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 7vh 7vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  @include p-type('normal', 1, 'medium', white);

  @include max('phone-wide') {
    padding: 0vh 5vw;
  }

  .counter {
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    justify-self: start;

    &-current {
      @include p-type(3rem, 1, 'bold', white);
      padding-right: 15px;
      text-align: center;
      width: 65px;

      @include max('phone-wide') {
        font-size: 1.5rem;
      }
    }

    &-total {
      @include p-type(1.25rem, .5, 'reg', rgba(255, 255, 255, .7));
      display: flex;
      align-items: center;

      @include max('phone-wide') {
        font-size: 1rem;
      }

      &::before {
        content: '';
        width: 75px;
        height: 10px;
        background: white;
        display: block;
        margin-right: 15px;
        margin-bottom: 4px;

        @include max('phone-wide') {
          width: 50px;
          height: 7px;
        }
      }
    }
  }

  .social {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    justify-self: end;

    &-item {
      color: white;
    }
  }
}

.controls {
  position: absolute;
  width: 100%;
  padding: 0 7vw;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  display: flex;
  justify-content: space-between;

  @include max('phone-wide') {
    top: 85%;
    padding: 0 3vw;
  }

  &-item {
    @include p-type(2rem, 1, 'bold', white);
    opacity: .8;
    text-transform: uppercase;
  }
}
</style>
