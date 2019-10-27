import datetime from 'vuejs-datetimepicker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faClock);

export default {
  name: 'add-task-list',
  components: {
    datetime,
    FontAwesomeIcon
  },
  data() {
    return {
      reminder: null
    }
  }
}