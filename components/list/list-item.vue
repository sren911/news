<template>
	<list-scroll class="list-scroll">
		<list-card mode="base" :item="item" v-for="(item, index) in list" :key="item.id"></list-card>
	</list-scroll>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			}
		}
	}
</script>

<style lang="scss">
	.list-scroll {
		height: 100%;
	}
</style>
