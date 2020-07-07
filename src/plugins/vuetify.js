import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import RdIcon from '@/components/RdIcon';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    values: {
      custom: {
        component: RdIcon
      },
    },
  }
});
