import Api from './api';

export default {
  getTasks() {
    return Api().get('/tasks');
  },
  addTask(form) {
    return Api().post('/tasks', form);
  },
  deleteTask(id) {
    return Api().delete(`/tasks/${id}`);
  },
};
