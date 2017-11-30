new Vue({
        el: '#exercise',
        data: {
            value: 0, 
            width: 100, 
            color: 'red' 
        },
        watch: {
          result: function() {
            const vm = this;
            setTimeout(function() {
              console.log('timeout');
              vm.value = 0;
            }, 3000)
          }
        }, 
        computed: {
          result: function() {
            console.log(this.value);
            if (this.value === 37) {
              return 'done'; 
            }
            return 'not done yet';
          }
        }
    });