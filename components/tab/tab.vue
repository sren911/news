<template>
	<view class="tab">
		<scroll-view class="tab-scrol" scroll-x="">
			<view class="tab-scroll-box">
				<view v-for="(item, index) in list" :key="index" class="tab-scroll-item" 
				@click="clickTab(item, index)" :class="{active: activeIndex === index}">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			},
			tabIndex: {
				type: Number,
				default: 0
			}
		},
		watch: {
			tabIndex(newValue) {
				this.activeIndex = newValue
			}
		},
		data() {
			return {
				activeIndex: 0
			};
		},
		methods:{
			clickTab (item, index) {
				this.activeIndex = index
				this.$emit('tab', {
					data: item,
					index: index
				})
			}
		}
	}
</script>

<style lang="scss">
	.tab {
			background-color: #FFFFFF;
			border-bottom: 1px #f5f5f5 solid;
			width: 100%;
			box-sizing: border-box;
			display: flex;
			.tab-scrol {
				flex: 1;
				overflow: hidden;
				box-sizing: border-box;
				.tab-scroll-box{
					display: flex;
					height: 45px;
					align-items: center;
					flex-wrap: nowrap;
					box-sizing: border-box;
					.tab-scroll-item{
						flex-shrink: 0;
						padding: 0 10px;
						color: #333333;
						font-size: 14px;
						&.active{
							color: $mk-base-color;
						}
					}
				}
			}
			.tab-icons {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 45px;
				&::after {
					content: '';
					position: absolute;
					top: 12px;
					bottom: 12px;
					left: 0;
					width: 1px;
					background-color: #ddd;
				}
				
			}
		}
</style>
