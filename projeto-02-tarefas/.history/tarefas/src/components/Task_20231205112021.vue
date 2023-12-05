<template>
	<div class="task-grid">
		<template>
			<p>{{ task.name }}</p>
		</template>
	</div>
</template>

<script>
export default {
	props: {
			task: { type: Object, required: true}
		}
	}
</script>

<style>

</style>