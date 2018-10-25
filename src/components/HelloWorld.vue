<template>
  <v-layout row align-content-space-around="" wrap>
    <v-flex xs12>
      <v-layout align-center column justify-center>
        <h1 class="black--text display-2 font-weight-thin mb-3">Encuentra tu colegio</h1>
        <h3 class="black--text subheading">¡Empieza el año con toda!</h3>
        <span class="pa-3">
          <v-text-field solo append-icon="school" placeholder="Colegio"></v-text-field>
        </span>
      </v-layout>
    </v-flex>

    <v-flex xs12 sm6 md4 lg4 v-for="cat in categories.data" :key="cat.id">
      <v-card class="pa-3 ma-2">
        <v-img :to="`#category/${cat.id}`" :src="cat.image_url" aspect-ratio="1.4"></v-img>
        <v-card-title primary-title>
          <div :to="`#category/${cat.id}`">
            <h3>{{cat.nombre}}</h3>
            <span>{{cat.descripcion}}</span>
            <a :href="`#category/${child.id}`" v-for="child in cat.children" :key="child.id">{{ child.nombre }}</a>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="primary">Ver</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
	async mounted() {
		await this.ready;
		if (this.user) {
			this.get("categorias-productos?with[]=children&whereNull[]=parent_id&paginate=50").then((resp) => {
				this.categories = resp.data;
			});
		}
	},
	data: function() {
		return {
			products: {},
			categories: {}
		};
	},
	methods: {
		select(p) {
			console.log(p);
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
	font-weight: normal;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
