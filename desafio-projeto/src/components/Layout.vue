<template>
  <v-app>
  <v-navigation-drawer app v-model="drawer" permanent>
  <v-list>
  <v-list-item link>

<v-list-item-title class="alunos">Alunos</v-list-item-title>

  </v-list-item>
  </v-list>
  </v-navigation-drawer>
  
   
  
    <v-app-bar >
      <v-text-field
        v-model="search"
        
        label="Consulta de alunos"
        hide-details
        solo-inverted
        clearable
        @keyup.enter="performSearch"
></v-text-field>  


  <v-btn append-icon="mdi-magnify"
  @click="performSearch"
  >Pesquisar</v-btn>
 <v-spacer></v-spacer>

 

      <v-btn color="primary" dark @click="openCadastroAlunoDialog">
        Cadastrar Aluno
</v-btn>
</v-app-bar>

 

        <v-content>
    <v-container fluid>
    <!-- Conteúdo da página -->
    </v-container>
    </v-content>

 

            <v-dialog v-model="cadastroAlunoDialog" max-width="500">
        <v-card>
        <v-card-title>Cadastrar Aluno</v-card-title>

 

              <v-card-text>
      <!-- Formulário de cadastro de aluno -->
      <v-text-field v-model="nome" label="Nome" placeholder="informe o nome completo"></v-text-field>
      <v-text-field v-model="email" label="Email" placeholder="informe apenas um e-mail"></v-text-field>
      <v-text-field v-model="ra" label="RA" placeholder="informe o registro acadêmico"></v-text-field>
      <v-text-field v-model="cpf" label="CPF" placeholder="informe o numero do documento"></v-text-field>
      </v-card-text>

      

              <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="salvarCadastroAluno">Salvar</v-btn>
      <v-btn color="secondary" @click="cancelarCadastroAluno">Cancelar</v-btn>
      </v-card-actions>
      </v-card>
      </v-dialog>
      </v-app>


  
  
      <v-content>
    <v-container fluid>
    <!-- Conteúdo da página -->
    <router-view></router-view>
    </v-container>
    </v-content>
 
  </template>
  
   
  
  <script>
export default {
  data() {
    return {
      drawer: true,
      search: '',
      cadastroAlunoDialog: false,
      nome: '',
      email: '',
      ra: '',
      cpf: ''
    };
  },
  methods: {
    performSearch() {
      // Implemente a lógica da pesquisa aqui
      console.log('Realizando pesquisa:', this.search);
    },
    openCadastroAlunoDialog() {
      this.cadastroAlunoDialog = true;
    },
    salvarCadastroAluno() {
      // Implemente a lógica para salvar o cadastro do aluno aqui
      console.log('Salvando cadastro do aluno:', {
        nome: this.nome,
        email: this.email,
        ra: this.ra,
        cpf: this.cpf
      });
      this.cancelarCadastroAluno();
    },
    cancelarCadastroAluno() {
      this.cadastroAlunoDialog = false;
      this.nome = '';
      this.email = '';
      this.ra = '';
      this.cpf = '';
    }
  }
};
  </script>


<style>
.alunos{
  text-align: center;
}
.form-items{
  text-align: right;
  
}
</style>
