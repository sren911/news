<template>
	<view>
		<view v-if="item.mode === 'base'" class="listcard">
			<view class="listcard-image">
				<image :src="item.cover[0]" mode="aspectFill"></image>
			</view>
			<view class="listcard-content">
				<view class="listcard-content-title">
					<text>{{item.title}}</text>
				</view>
				<view class="listcard-content-des">
					<view class="listcard-content-des-label">
						<view class="listcard-content-des-label-item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard-content-des-brose">{{item.browse_count}}浏览</view>
				</view>
			</view>
		</view>
		
		<view v-if="item.mode === 'column'" class="listcard mode-column">	
			<view class="listcard-content">
				<view class="listcard-content-title">
					<text>{{item.title}}</text>
				</view>
				<view class="listcard-image">
					<view v-if="index < 3" v-for="(img, index) in item.cover" :key="index" class="listcard-image-item">
						<image :src="img" mode="aspectFill"></image>
					</view>
				</view>
				<view class="listcard-content-des">
					<view class="listcard-content-des-label">
						<view class="listcard-content-des-label-item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard-content-des-brose">{{item.browse_count}}浏览</view>
				</view>
			</view>
		</view>
		
		
		
		<view v-if="item.mode === 'image'" class="listcard mode-image">
			<view class="listcard-image">
					<image :src="item.cover[0]" mode="aspectFill"></image>
			</view>
			<view class="listcard-content">
				
				<view class="listcard-content-title">
					<text>{{item.title}}</text>
				</view>
				
				<view class="listcard-content-des">
					<view class="listcard-content-des-label">
						<view class="listcard-content-des-label-item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard-content-des-brose">{{item.browse_count}}浏览</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.listcard{
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color: #000, $alpha:0.1 );
		box-sizing: border-box;
		.listcard-image {
			width: 60px;
			height: 60px;
			border-radius: 5px;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.listcard-content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 10px;
			width: 100%;
			.listcard-content-title {
				font-size: 14px;
				color: #333;
				font-weight: 400;
				line-height: 1.2;	
				text {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}
			.listcard-content-des {
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				.listcard-content-des-label {
					display: flex;
					.listcard-content-des-label-item {
						padding: 0 5px;
						margin-right: 5px;
						border-radius: 15px;
						color: $mk-base-color;
						border: 1px $mk-base-color solid;
					}
				}
				.listcard-content-des-brose {
					color: #999;
					line-height: 1.5;
				}
			}
		}
		
		&.mode-column{
			.list-content {
				width: 100%;
				padding-left: 0;
			}
			.listcard-image {
				display: flex;
				margin-top: 10px;
				width: 100%;	
				height: 70px;
				.listcard-image-item {
					margin-left: 10px;
					width: 100%;
					border-radius: 5px;
					overflow: hidden;
					&:first-child {
						margin-left: 0;
					}
					image {
						width: 100%;
						height: 100%;
					}	
				}
			}
			.listcard-content-des {
				margin-top: 10px;
			}
		}
		&.mode-image {
			flex-direction: column;
			.listcard-image {
				width: 100%;
				height: 100px;
			}
			.listcard-content {
				padding-left: 0;
				margin-top: 10px;
				.listcard-content-des {
					display: flex;
					align-items: center;
					margin-top: 10px;
				}
			}
		}
	}
</style>
