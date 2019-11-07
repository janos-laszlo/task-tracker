import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { mapActions } from 'vuex';
import FocusDirective from '@/directives/focus';
import CronExpression from '@/components/cron-expression/cron-expression.vue';
import * as Constants from '@/constants/constants';
import cronstrue from 'cronstrue';

library.add(faClock);

export default {
  name: 'add-task',
  components: {
    FontAwesomeIcon,
    CronExpression
  },
  directives: {
    focus: FocusDirective
  },
  data() {
    return {
      title: '',
      remindAt: null,
      cronExpression: null
    }
  },
  computed: {
    frequencies: function () { return Constants.FREQUENCIES; },    
    humanReadableCron: function () { return this.cronExpression ? cronstrue.toString(this.cronExpression, { use24HourTimeFormat: true }) : ''; }
  },
  methods: {
    ...mapActions(['addTask']),
    onSubmit,
    cancel
  }
}

function onSubmit() {
  this.addTask({ taskListId: this.$route.params.id, task: { title: this.title, cronExpression: this.cronExpression } });
  this.$router.go(-1);
}

function cancel() {
  this.$router.go(-1);
}