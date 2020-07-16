<?php  
    $title='TITLE HERE';
    include('header.php');
?>
    <!-------------HEADER------------>
    <div class="page-header header-filter" data-parallax="true" style="background-image: url('/img/profile_city.jpg');height:300px;">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
              <div class="brand">
                <br><br>
                <h2 class="title">C Section Checklist</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

<!-- BODY -->
<div class="main">
	<div class="container">
		<div class="section">
            <h3 class="title">1. Sign In<br>
            <span class="small">Before Induction of anaesthesia</span></h3>
            <form >
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
                      Patient has Confirmed:
                      <span class="circle">
                        <span class="check"></span>
                      </span>
                    </label>
                  </div>

                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
                      Site Marked/ Not Applicable
                      <span class="circle">
                        <span class="check"></span>
                      </span>
                    </label>
                  </div>

                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
                      Anaesthesia Safety Check Completed
                      <span class="circle">
                        <span class="check"></span>
                      </span>
                    </label>
                  </div>

                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
                      Pulse oximeter on patient and functioning
                      <span class="circle">
                        <span class="check"></span>
                      </span>
                    </label>
                  </div>

                  <button class="btn btn-primary btn-round">
                    <i class="material-icons">save</i> Next Step
                  <div class="ripple-container"></div></button>

            </form>

		</div>
	</div>
</div>

<!-- FOOTER -->
<?php include('footer.php');?>