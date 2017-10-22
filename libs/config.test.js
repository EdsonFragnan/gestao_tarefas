module.exports = {
  database: 'gestao_tarefas_test',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: 'gestao_tarefas.sqlite',
    define: {
      underscored: true
    }
  },
  jwtSecret: 'GESTAO_TAREFAS_TEST',
  jwtSession: {session: false}
};
