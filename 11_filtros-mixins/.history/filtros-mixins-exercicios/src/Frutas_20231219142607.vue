<template>
	<div>
		<ul>
			<li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
		</ul>
		<input type="text" v-model="fruta" @keydown.enter="add">
	</div>
</template>

<script>
export default {
	mixins: [frutasMixin],
}
</script>

<style>

</style>