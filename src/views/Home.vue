<template>

  <section class="hero is-light">
    <div class="hero-body">
      <div class="container is-size-5">
        <h1 class="title is-capitalized	">Negocie e Consulte suas Ações</h1>
        <div class="hero is-info has-text-centered">
          <span>
            <b-icon
              pack="fas"
              icon="info-circle"
              size="is-small">
            </b-icon>
            Você pode salvar & Carregar os dados 
          </span>
        </div>
        <div class="hero is-success has-text-centered">
          <span>
            <b-icon
              pack="fas"
              icon="info-circle"
              size="is-small">
            </b-icon>
            Clique em 'Finalizar Dia' para iniciar um novo dia!
          </span>
        </div>
        <p class="is-size-3"><strong>Seu Saldo: </strong>{{ funds | currency }}</p>
      </div>
    </div>
  </section>

</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { Getter, namespace } from 'vuex-class';

const portfolio = namespace('portfolio');

@Component({})
export default class Home extends Vue {
  @portfolio.Getter funds;
}
</script>

<style scoped>
div.hero {
  margin-bottom: 20px;
  padding: 10px;
}
</style>
