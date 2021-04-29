<template>
    <div id="content">
		<div class="wrapper">
			<span>{{timeOne}}</span>
		</div>
	</div>
</template>
<script>
import moment from 'moment'
export default {
    data:() =>({
		timeOne: moment().format('LTS')
    }),
	methods: {
	},
	mounted: function() {
		setInterval(()=>{
			this.timeOne = moment().format('LTS')
		},1000)
	}
}

</script>