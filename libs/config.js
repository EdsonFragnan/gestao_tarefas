module.exports = {
  database: 'gestao_tarefas',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: 'gestao_tarefas.sqlite',
    define: {
      underscored: true
    },
    operatorsAliases: false,
    jwtSecret: 'G@@sta$_t@refa#-AP1',
    jwtSession: {session: false}
  }
};
