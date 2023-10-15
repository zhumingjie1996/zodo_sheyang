<template>
	<view class="checkInfoContainer">
		<u-search :showAction="true"  placeholder="请输入姓名" actionText="筛选"></u-search>
		<u-empty
        	mode="data"
        	icon="http://cdn.uviewui.com/uview/empty/data.png"
		>
</u-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.checkInfoContainer{
	padding: 20px;
}
</style>
