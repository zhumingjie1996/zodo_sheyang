<template>
	<view>
		<u-tabbar :value="pageValue" activeColor="#1b9b66" @change="name => pageValue = name" :fixed="true"
			:placeholder="true" :safeAreaInsetBottom="true">
			<u-tabbar-item text="首页" icon="home"></u-tabbar-item>
			<u-tabbar-item text="我的" icon="account"></u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
export default {
	data() {
		return {
			pageValue: 0
		};
	},

}
</script>

<style lang="scss"></style>
