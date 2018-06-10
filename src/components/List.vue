<!-- HTML-->
<template>
	<div class="todoList">
		<input id="addTodo" v-model="newStr" @keyup.enter="addData" placeholder="+ Add Task"/>

		<div class="view">
			
			<h1 class="title titleLight">
				<div class="titleTxt">
					<!-- {{title}} -->
					<input text=""/>
				</div>
				<div class="titleIcon">
					<i class="fa fa-star starEdit"></i>
          			<i class="fa fa-pencil penEdit"></i>
          		</div>
			</h1>
			<div class="editContent">
				<form>
					<div class="form-row">
						<i class="fa fa-calendar"></i>
						<label> Deadline</label>
					</div>
					<div class="form-row">					    
					      <input type="text" class="form-control" placeholder="yyyy/mm/dd">
					    
					      <input type="text" class="form-control" placeholder="hh:mm">
					    
				  	</div>
				  	<div class="form-row">
						<i class="fa fa-file-o"></i>
						<label>File</label>
					</div>
					<div class="form-row">
						<div id="fileName"></div>
						<div>
							<button class="btn mb-2 btn-block addfileBtn"><i class="fa fa-plus"></i></button>							
						</div>
					</div>

					<div class="form-row">
						<i class="fa fa-commenting-o"></i>
						<label> Comment</label>
					</div>
					<div class="form-row">
						<textarea class="form-control" rows="3"></textarea>
					</div>
					<br/>
					
					<div class="clear"></div>
					
				</form>
				<div class="">
					<button class="btn Cancel"><i class="fa fa-times"></i>Cancel</button>
					<button class="btn Save"><i class="fa fa-plus"></i>Save</button>					
				</div>
				<div class="clear"></div>
			</div>

			
			<div v-for="item in items" class="todo">
				<h1 v-bind:class="{title: true, titleNormal: !item.isHighLight, titleLight: item.isHighLight }" @click="toggleFinish(item)">

					<div :class="{titleTxt: true, finish:item.isFinished}">
						<!-- <input id="checkBox" type="checkbox" v-bind="{checked:item.isFinished}" class="checkbox-primary"> -->


						<div class="form-check ">
							<label>
								<input type="checkbox" name="check" v-bind="{checked:item.isFinished}"> <span class="label-text"></span>
							</label>
						</div>

						{{item.text}}
						<!-- <input text=""/> -->
					</div>
					<div class="titleIcon">
						<!-- fa, fa-star ,starEdit:itme.isHighLight -->
						<i v-bind:class="{fa: true, 'fa-star': true, starEdit: item.isHighLight }"></i>
	          			<i v-bind:class="{fa: true, 'fa-pencil': true, penEdit: item.isEdit }"></i>
	          		</div>
				</h1>
			</div>

			<!-- <ul>
				<li v-for="item in items" v-bind:class="{finish:item.isFinished}" @click="toggleFinish(item)">
					<input id="checkBox" type="checkbox" v-bind="{checked:item.isFinished}">
					<i class="far fa-star"></i>
					{{item.text}}
				</li>
			</ul> -->
		</div>
	</div>
</template>

<!-- JS-->
<script>
export default{
	name: "List",
	data (){
		return{
			title: "My Tasks",  //標題
			items: [			//代辦事項
				{
					text: "晚上18:00跑步",
					isFinished: false,
					isHighLight: true,
					isEdit: false
				},
				{
					text: "繳帳單",
					isFinished: true,
					isHighLight: true,
					isEdit: false
				},
				{
					text: "買菜",
					isFinished: false,
					isHighLight: false,
					isEdit: false
				},
			],
			newStr: '',
			

		}
	},	
	methods:{
		toggleFinish: function(item){
			item.isFinished = !item.isFinished;


		},
		addData: function(){
			//console.log(this.newStr);

			this.items.push(
				{
					text: this.newStr,
					isFinished: false
				}
			);

			//將輸入框中的數據 傳遞給父組件 App
			//觸發myMsg事件，並且傳遞參數
			this.$emit('myMsg', this.newStr);

			//clear
			this.newStr = '';

		}
	}
}
</script>

<!-- CSS-->
<style>
/*@import url("https://use.fontawesome.com/releases/v5.0.11/css/all.css");*/

	.todoList{
		background: #E1E1E1;
		height: 1024px;
	}
	.view{
		width: 620px;
		/*border: 1px solid gray;*/
		margin: 20px auto;
	}
	.view .title{
		padding-top: 24px;
		height: 76px;
		/*border-bottom: 1px solid gray;*/
		font-family: Roboto-Medium;
		font-size: 24px;
		color: #000000;
		/*background: #F2F2F2;*/
		border-radius: 5px 5px 0 0;
		box-shadow: 0 -5px #C8C8C8 inset;
	}
	
	.titleNormal{
		background: #F2F2F2;
	}
	.titleLight{
		background: #FFF2DC;
	}

	.view ul li{
		margin: 10px 0;
		list-style: none;
	}

	.view .finish{
		color: gray;
		text-decoration: line-through;
	}

	.view .btn-default{
		background: #FFF;
	}

	.titleTxt{
		float: left;
		margin-left: 70px;
	}
	.titleIcon{
		float: right;
	}
	.titleIcon i{
		margin-right: 30px;
	}
	.starEdit{
		color: #F5A623 ;
	}
	.penEdit{
		color: #4A90E2;		
	}

	#addTodo{
		width: 620px;
		height: 65px;
		font-family: Roboto-Regular;
		font-size: 24px;
		color: #C8C8C8;
		text-align: left;
	}

	.editContent{
		margin-top: -10px;
		background: #F2F2F2;
		box-shadow: 0 4px 4px 0 #C8C8C8;
		border-radius: 0  0  5px 5px;
	}
	
	.editContent form{
		padding-top: 14px;
		margin-left: 72px;
		margin-right: 10px;
	}
	
	.editContent .form-row{
		/*padding-top: 10px;*/
		margin-top: 10px;
	}
	.editContent input{
		width: 162px;
		height: 35px;
		background: #FFFFFF;
		border-radius: 2px;
		font-family: Roboto-Regular;
		font-size: 16px;
		color: #000000;
	}
	.editContent textarea{
		width: 450px;
		height: 120px;
		font-family: Roboto-Regular;
		font-size: 16px;
		color: #000000;
		line-height: 24px;
	}

	.addfileBtn{
		color: #FFF;
	}

	.Cancel{
		font-family: Roboto-Regular;
		font-size: 24px;
		color: #D0021B;
		text-align: center;
		background: #FFF;
		width: 50%;
		float:left;
		border-radius: 0  0  0 5px;
	}

	.Save{
		font-family: Roboto-Regular;
		font-size: 24px;
		color: #FFF;
		background: #4A90E2;
		width: 50%;
		float:left;
		border-radius: 0  0  5px 0;
	}

	.fileName{
		width: 140px;
	}
	.clear{
		clear: both;
	}

	.todo{
		margin-top: 20px;
	}
    
    .form-check{
    	display: inline;
    }


label{
	position: relative;
	cursor: pointer;
	color: #666;
	font-size: 30px;
}

input[type="checkbox"]{
	position: absolute;
	right: 9000px;
}

/*Check box*/
input[type="checkbox"] + .label-text:before{
	content: "\f0c8";
	font-family: FontAwesome;
	speak: none;
	font-style: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	-webkit-font-smoothing:antialiased;
	width: 1em;
	display: inline-block;
	margin-right: 5px;
	color: #FFF;
}

input[type="checkbox"]:checked + .label-text:before{
	content: "\f14a";
	font-family: FontAwesome;
    
	color: #2980b9;
	animation: effect 250ms ease-in;
	font-weight: 900;
}

input[type="checkbox"]:disabled + .label-text{
	color: #aaa;
}

input[type="checkbox"]:disabled + .label-text:before{
	content: "\f0c8";
	font-family: FontAwesome;
	color: #ccc;
}
</style>