<template>
	<div class="task-grid"
		:class="stateClass">
		
			<p>{{ task.name }}</p>
		</template>
	</div>
</template>

<script>
export default {
	props: {
			task: { type: Object, required: true}
	}, computed: {
		stateClass() {
			return {
				pending: this.task.pending,
				done: !this.task.pending
			}
		}
	}
}
</script>

<style>

</style>