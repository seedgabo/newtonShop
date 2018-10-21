<template>
  <v-layout column>
    <v-flex xs12 class="text-xs-center">
      <h1 class="display-3">
        ¿Quienes somos y qué hacemos?
      </h1>
      <br>
      <h2 class="title">
        ¿Pierdes mucho tiempo buscando útiles escolares y comparando calidades?
        <br>
        ¿Aburrido de decidir todos los años entre tantas marcas distintas por cada uno de los útiles que le piden a tus hijos?
      </h2>
      <br>
      <br>
      <h1 class="display-1 orange--text">
        Imagina que no tuvieras que hacer esta actividad cada año.
        ¿En qué usarías ese tiempo?
      </h1>
      <br>
      <v-card class="elevation-5">
        <v-card-title>
          <h3 class="headline green--text">Y si te dijéramos que este año… </h3>
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon class="orange--text">edit</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  No te toca buscar los útiles escolares y comparar entre cientos de ellos.
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon class="orange--text">edit</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  No tienes que hacer filas interminable tan solo para preguntar por algo que no encuentras.
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon class="orange--text">edit</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  Otros se encargan de esa tarea y tú inviertes tu tiempo disfrutando los últimos días de vacaciones escolares con tus hijos mientras los útiles llegan a la puerta de tu casa. </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
            </v-list-tile>

          </v-list>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
	async mounted() {
		await this.ready;
		if (this.user) {
		}
	},
	data: function() {
		return {};
	},
	methods: {}
};
