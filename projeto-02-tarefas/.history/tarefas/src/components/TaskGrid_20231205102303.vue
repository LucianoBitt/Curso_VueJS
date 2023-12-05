<template>
	<div class="tasks">
	<template>
		<dir v-for="task in tasks"></dir>
	</template>
	</div>
</template>

<script>
export default {
	props: {
		tasks: { type: Array, required: true }
	}
}
</script>

<style>

</style>