import Vue from 'vue';

import {mapGetters, mapActions} from 'vuex';


const validation = {
  install(Vue, options) {
    Vue.mixin({
      computed: ({
        ...mapGetters({
          getErrors: 'errors',
          getUser: 'getUser',
        })
      }),
      methods: ({
        ...mapActions({
          setErrors: 'setErrors',
          setUser: 'setUser',
          setAuth: 'setAuth'
        })
      })
    })
  }
}
Vue.use(validation);
