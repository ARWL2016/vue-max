<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server-list v-for="server in servers" :id="server.id" :status="server.status" @resetStatus="resetStatus($event)"></server-list>
        </ul>
    </div>
</template>

<script>
	import ServerList from './ServerList.vue';
	export default {
		components: {
			'server-list': ServerList
		},
		data: function() {
			return {
				servers: [
					{id: 1, status: 'Normal'},
					{id: 2, status: 'Critical'}, 
					{id: 3, status: 'Unknown'}, 
					{id: 4, status: 'Normal'} 
				]
			}
		}, 
		methods: {
			resetStatus(id) {
				console.log({id});
				this.servers.forEach(server => {
					if (server.id === id) {
						server.status = 'Normal';
					}
				})
			}
		}
	}
</script>

<style>

</style>

<!--
- loop through servers
- create comp for the list item 
- pass down the id and status 
be able to click the component and change the status back to normal
-->
