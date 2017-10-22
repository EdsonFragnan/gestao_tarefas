module.exports = app => {
  if (process.env.NODE_ENV !== 'test') {
    app.db.sequelize.sync().done(() => {
      app.listen(app.get('port'), () => {
        console.log('Gestão de tarefas - porta ' + app.get('port'));
      });
    });
  }
};
