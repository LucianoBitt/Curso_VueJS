<template>
	<div class="tasks">
		<template v-if="tasks.length">
			<Task v-for="task in tasks" :key="task.name" :task="task"></Task>
		</template>
		<p v-else class="no-task">Sua vida está em dia!!! \o/ \o/ \o/</p>
	</div>
</template>

<script>
import Task from './Task.vue';

export default {
	components: { Task },
	props: {
		tasks: { type: Array, required: true }
	}
}
</script>

<style>
	.task-grid {
		display: flex;
		justify-content: center;
	}

	.task {
		margin: 10px;
		flex-wrap: wrap;
	}

	.no-task {
		color: #AAA;
		font-size: 1.7rem;
	}
</style>