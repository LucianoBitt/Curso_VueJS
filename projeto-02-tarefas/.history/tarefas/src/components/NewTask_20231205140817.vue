<template>
	<div class="new-task">
		<input v-model="name" @keydown.enter="add" type="text"
			class="form-element" placeholder="Nova tarefa">
		<button class="form-element" @click="add">+</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: ''
		}
	},
	methods: {
		add() {
			this.$emit('taskAdded', { name: this.name })
			this.name = ''
		}
	}
}
</script>

<style>
	.new-task {
		margin: 35px;
	}

	.form-element {
		outline: none;
		font-size: 2rem;
		border: 1px solid #FFF;
	}
</style>