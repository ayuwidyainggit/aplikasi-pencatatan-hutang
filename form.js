<!DOCTYPE html>
<html>
<head>
	<title>Form</title>
</head>
<body>
	<center><h2>WWW.MALASNGODING.COM</h2></center>
	<div class="login">
		<form action="#" method="POST" onSubmit="validasi()">
			<div>
				<label>No:</label>
				<input type="text" name="no" id="no" />
			</div>
			<div>
				<label>keterangan:</label>
				<input type="text" name="keterangan" id="keterangan" />
			</div>
			<div>
				<label>debet:</label>
				<input type="text" name="debet" id="debet" />
			</div>
			<div>
				<label>kredit:</label>
				<input type="text" name="kredit" id="kredit" />
			</div>
			<div>
				<input type="submit" value="Daftar" class="tombol">
			</div>
		</form>
	</div>
</body>
<script type="text/javascript">
	function validasi() {
		var No = document.getElementById("no").value;
		var keterangan = document.getElementById("keterangan").value;
		var debet = document.getElementById("debet").value;
		var kredit = document.getElementById("kredit").value;
		if (no != "" && keterangan!="" && debet !="") {
			return true;
		}else{
			alert('Anda harus mengisi data dengan lengkap !');
		}
	}
</script>
</html>