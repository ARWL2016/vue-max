<template>
    <div class="container">
			<my-header></my-header>
        <hr>
			
        	<server-list></server-list>
			
			
        <hr>
  		<my-footer></my-footer>
    </div>
</template>

<script>
	import ServerList from './ServerList.vue';
	
	export default {
		components: {
			'server-list': ServerList
		}
	}
	
</script>

<style>

</style>
