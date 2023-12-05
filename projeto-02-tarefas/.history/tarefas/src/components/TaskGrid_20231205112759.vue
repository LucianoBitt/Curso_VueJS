<template>
	<div class="tasks">
		<template>
			<div v-for="task in tasks" :key="task.name">{{ task.name }}</div>
		</template>
	</div>
</template>

<script>
import Task from './Task.vue';

export default {
	props: {
		tasks: { type: Array, required: true }
	}
}
</script>

<style>

</style>