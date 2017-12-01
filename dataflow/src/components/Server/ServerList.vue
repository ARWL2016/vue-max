<template>
	<li class="list-group-item" v-on:click="resetStatus">
		Server #{{ id }} Status: {{ status}} 
	</li>
</template>

<script>
	export default {
		props: ['id', 'status'], 
		methods: {
			resetStatus() {
				this.$emit('resetStatus', this.id);
			}
		}
	}
</script>