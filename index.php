<?php  
    $title='TITLE HERE';
    include('header.php');
?>
    <!-------------HEADER------------>
<div class="page-header header-filter" data-parallax="true" style="background-image: url('assets/img/bg3.jpg')">
	<div class="container">
		<div class="row">
			<div class="col-md-8 ml-auto mr-auto">
				<div class="brand text-center">
					<h1>Your title here</h1>
					<h3 class="title text-center">Subtitle</h3>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- BODY -->
<div class="main main-raised">
	<div class="container">
		<div class="section text-center">
			<h2 class="title">Which Surgery are you doing today?</h2>

			<a href="csection">
				<button class="btn btn-primary btn-lg btn-round">
					<i class="material-icons">favorite</i> C Section
					<div class="ripple-container"></div>
				</button>
			</a>
			<a href="csection">
				<button class="btn btn-primary btn-lg btn-round">
					<i class="material-icons">healing</i> Hernia Surgery
					<div class="ripple-container"></div>
				</button>
			</a>
			<a href="csection">
			<button class="btn btn-primary btn-lg btn-round">
					<i class="material-icons">local_hospital</i> Others
					<div class="ripple-container"></div>
				</button>
			</a>

		</div>
	</div>
</div>

<!-- FOOTER -->
<?php include('footer.php');?>