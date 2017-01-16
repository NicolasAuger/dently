var SectionVisibility = Array();
for (var i = 1 ; i < 21 ; ++i)
{
    SectionVisibility[i] = 0b100;
    var l = i.toString();
    if (i < 10) l = '0' + l;
    document.getElementById(l + 'neg').addEventListener('change', solveVisibility, false);
    document.getElementById(l + 'title').addEventListener('click', solveVisibility, false);
    document.getElementById(l + 'nor').addEventListener('change', solveVisibility, false);
}

function solveVisibility(e)
{
    var num = parseInt(e.target.id.substr(0, 2), 10);
    var trg = e.target.id.substr(2);
    var element = document.getElementById('block_' + num);

    switch(trg)
    {
        case 'neg':
            SectionVisibility[num] ^= 0b010;
            resetElement(element);
            break;
        case 'nor':
            SectionVisibility[num] ^= 0b001;
            break;
        case 'title':
            SectionVisibility[num] ^= 0b100;
            break;
        default: break;
    }


    if (SectionVisibility[num] & 0b100)
    {
        if (!(SectionVisibility[num] & 0b001) && !(SectionVisibility[num] & 0b010))
            element.style.display = 'inline';
    }
    else element.style.display = 'none';
}

function resetElement(element)
{
    for (var i = 0 ; i < element.childElementCount ; ++i)
    {

        if (element.children[i].type == "text" || element.children[i].type == "textarea")
            element.children[i].value = element.children[i].defaultValue;
        else if (element.children[i].type == "checkbox" || element.children[i].type == "radio")
            element.children[i].checked = element.children[i].defaultChecked;
        else if (element.children[i].tagName == "SELECT")
            element.children[i].selectedIndex = 0;

        resetElement(element.children[i]);
    }
}

document.getElementById('send_but').addEventListener('click', validateCheckboxes, false);

var DN4s = new Array();
DN4s[0] = 0;

var NumExamSup = 0;

{
	var e = document.getElementById('consultdate');
	if (e.value == "")
	{
		var d = new Date();
		e.value = d.getDate() + '/' + pad((d.getMonth()+1), 2) + '/' + d.getFullYear();
	}

}

function pad(n, width, z)
{
	z = z || '0';
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function addExamSupp()
{
	var target = document.getElementById('examAnchor');
	NumExamSup++;

	var newExam = document.createElement("div");

	newExam.id = "examen_block" + NumExamSup;
	newExam.innerHTML = '\
		<div name="type_examen"><h4>Type d\'examen :</h4><input type="text" class="form-control" placeholder="Type d\'examen"></div><br> \
		<div style="text-align:center" class="no-print"> \
        <input type="button" class="btn btn-primary" onclick="document.getElementById(&quot;exampicker' + NumExamSup + '&quot;).click();" value="Télécharger une photo"/> \
		</div><br> \
		<div style="text-align:center;"><img id="exam_sup' + NumExamSup + '" style="max-width:90%;"><input type="file" id="exampicker' + NumExamSup + '" style="display:none"/><br></div> \
	<br>';
	target.parentNode.insertBefore(newExam, target);
	var q = "exam_sup" + NumExamSup;
	var d = 'exampicker' + NumExamSup;
	document.getElementById(d).addEventListener('change', function(e){handleFileSelect(q, e)}, false);
}

function remExamSupp()
{
	if (NumExamSup < 0) return;
	var x = "examen_block" + NumExamSup;
	var rem = document.getElementById(x);
	rem.parentNode.removeChild(rem);
	NumExamSup--;
}

/* */

function cbRevealHTML(e, id)
{
    var t = document.getElementById(id);

    if (e.checked)
    {
        t.style.display = 'inline';
    }
    else
    {
        t.style.display = 'none';
    }
}

function revealNode(id)
{

}

function hideInnerHTML(id)
{
    var element = document.getElementById(id);
    if (element.style.display == 'none')
        element.style.display = 'inline';
    else element.style.display = 'none';
}

function HandleEDAS(result)
{
	var scores = result.split("/");
    document.getElementById("3_edas_a").value = scores[0];
	document.getElementById("3_edas_d").value = scores[1];
	document.getElementById("3_edas_s").value = scores[2];
}

function uploadFile(output_target)
{
    var file    = document.querySelector('input[type=file]').files[0]; //sames as here
    var reader  = new FileReader();

    reader.onloadend = function () {
        output_target.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}

document.getElementById('facepicker').addEventListener('change', function(e){handleFileSelect("facepic", e)}, false);
document.getElementById('exampicker0').addEventListener('change', function(e){handleFileSelect("exam_sup0", e)}, false);
function handleFileSelect(target, evt)
{
	var files = evt.target.files;
	var f = files[0];
	var reader = new FileReader();

	reader.onload = (function(theFile)
	{
		return function(e)
		{
			document.getElementById(target).src= e.target.result;
		};
	})(f);

	reader.readAsDataURL(f);
}


/* ---------------------------------------------------------------------------------------
*	The following scripts generate the tables, with automatic naming.
*
*
*----------------------------------------------------------------------------------------*/


function createTable11()
{
	var DEF_MUSCLES = ['Temporal postérieur', 'Temporal moyen', 'Temporal antérieur', 'Masséter (origine angle mdb)', 'Masséter (corps)', 'Masséter (insertion)',
			'Pôle latéral 0,5 kg', 'Autour du pôle latéral 1 kg', 'Digastrique (région md post)', 'Ptérygoïdien médial (région submd)', 'Aire du ptérygoïdien latéral',
			'Tendon du temporal', 'Sterno-cléido-mastoïdien', 'Trapèze'];

	var table = document.createElement("table");
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	var th = document.createElement("th");

	table.appendChild(tr);
	tr.appendChild(td);
	th.innerHTML = "Côté droit";
	th.colSpan = "3";
	tr.appendChild(th);
	th = document.createElement("th");
	th.colSpan = "3";
	th.innerHTML = "Côté gauche";
	tr.appendChild(th);

	tr = document.createElement("tr");
	tr.innerHTML = '<td>Muscles 1kg</td>\
					<td class="cell_center">Douleur provoquée</td>\
					<td class="cell_center">Est-elle identique à la douleur habituelle ?</td>\
					<td class="cell_center">Douleur(s) référée(s)</td>\
					<td class="cell_center">Douleur provoquée</td>\
					<td class="cell_center">Est-elle identique à la douleur habituelle ?</td>\
					<td class="cell_center">Douleur(s) référée(s)</td>'
	table.appendChild(tr);

	for (var i = 0 ; i < DEF_MUSCLES.length ; ++i)
	{
		tr = document.createElement("tr");
		td = document.createElement("td");
		td.innerHTML = DEF_MUSCLES[i];
		tr.appendChild(td);
		tr.innerHTML +=
		'<td class="cell_center"><input name="11d_dp' + i + '" type="checkbox" /></td>\
		<td class="cell_center"><input name="11d_idh' + i + '" type="checkbox" /></td>\
		<td class="cell_center">\
		<select name="11d_dref' + i + '" onchange="if(this.value==4)this.parentElement.children[1].style.display=&quot;inline&quot;;else this.parentElement.children[1].style.display=&quot;none&quot;;\">\
			<option value="0"></option>\
			<option value="1">Temporale</option>\
			<option value="2">ATM</option>\
			<option value="3">Masséter</option>\
			<option value="4">Autres</option>\
		</select>\
		<input type="text" name="11d_else' + i + '" style="text-align:center" class="hidden"/></td>\
		<td class="cell_center"><input name="11g_dp' + i + '" type="checkbox" /></td>\
		<td class="cell_center"><input name="11g_idh' + i + '" type="checkbox" /></td>\
		<td class="cell_center"><select name="11g_dref' + i + '" onchange="if(this.value==4)this.parentElement.children[1].style.display=&quot;inline&quot;;else this.parentElement.children[1].style.display=&quot;none&quot;;\">\
			<option value="0"></option>\
			<option value="1">Temporale</option>\
			<option value="2">ATM</option>\
			<option value="3">Masséter</option>\
			<option value="4">Autres</option>\
		</select><input type="text" name="11g_else' + i + '" style="text-align:center" class="hidden"/></td>';


		table.appendChild(tr);
	}

	tr = document.createElement("tr");
	tr.innerHTML = '<td colspan="7">Est-ce que la palpation des muscles temporaux provoque des maux de tête identiques à ceux ressentis habituellement ? \
		<input type="radio" name="11_pmt" value="1" />Oui <input type="radio" name="11_pmt" value="0"/>Non</td></tr>';
	table.insertBefore(tr, table.children[5]);

	tr = document.createElement("tr");
	tr.innerHTML = '<td colspan="7">Autres muscles masticateurs</td>';
	table.insertBefore(tr, table.children[11]);

	tr = document.createElement("tr");
	tr.innerHTML = '<td colspan="7">Autres muscles cervico-scapulaires 0,5kg</td>';
	table.insertBefore(tr, table.children[16]);

	tr = document.createElement("tr");
	tr.innerHTML = '<td colspan="7">Autre(s) muscle(s)</td>';
	table.appendChild(tr);

	for (var i = DEF_MUSCLES.length ; i < (DEF_MUSCLES.length + 3) ; ++i)
	{
		tr = document.createElement("tr");
		tr.innerHTML += '<td><input name="11d_txt' + i + '" type="text" style="width:auto;"/></td> \
		<td class="cell_center"><input name="11d_dp' + i + '" type="checkbox" /></td>\
		<td class="cell_center"><input name="11d_idh' + i + '" type="checkbox" /></td>\
		<td class="cell_center">\
		<select name="11d_dref' + i + '" onchange="if(this.value==4)this.parentElement.children[1].style.display=&quot;inline&quot;;else this.parentElement.children[1].style.display=&quot;none&quot;;\">\
			<option value="0"></option>\
			<option value="1">Temporale</option>\
			<option value="2">ATM</option>\
			<option value="3">Masséter</option>\
			<option value="4">Autres</option>\
		</select>\
		<input type="text" name="11d_else' + i + '" style="width:90%;text-align:center" class="hidden"/></td>\
		<td class="cell_center"><input name="11g_dp' + i + '" type="checkbox" /></td>\
		<td class="cell_center"><input name="11g_idh' + i + '" type="checkbox" /></td>\
		<td class="cell_center"><select name="11g_dref' + i + '" onchange="if(this.value==4)this.parentElement.children[1].style.display=&quot;inline&quot;;else this.parentElement.children[1].style.display=&quot;none&quot;;\">\
			<option value="0"></option>\
			<option value="1">Temporale</option>\
			<option value="2">ATM</option>\
			<option value="3">Masséter</option>\
			<option value="4">Autres</option>\
		</select><input type="text" name="11g_else' + i + '" style="width:90%;text-align:center" class="hidden"/></td>';

		table.appendChild(tr);
	}

	document.getElementById("block_11").appendChild(table);
	table.className = "vtable";
}

function computePSQI()
{
    var score = 0;

    //6
	score += parseInt(document.querySelector('input[name="psqi6"]:checked').value);

    //2
    var pts = parseInt(document.getElementById('timeToSleep').value);
    if (pts <= 15) pts = 0;
    else if (pts > 15 && pts < 31) pts = 1;
    else if (pts > 30 && pts < 61) pts = 2;
    else if (pts > 60) pts = 3;

	score += Math.ceil((pts + parseInt(document.querySelector('input[name="psqi51"]:checked').value)) / 2);

    //q4
    pts = parseInt(document.getElementById('effectiveSleep').value);
    if (pts > 7);
    else if (pts <= 7 && pts >= 6) score += 1;
    else if (pts < 6 && pts >= 5) score += 2;
    else if (pts < 5) score += 3;

    //composante 4
    pts = parseInt(document.getElementById('wakeUpTime').value + 24) - parseInt(document.getElementById('goToBedTime').value);
    pts = (parseInt(document.getElementById('effectiveSleep').value) / pts) * 100;
    if (pts > 85);
    else if (pts <= 85 && pts >= 75) score += 1
    else if (pts < 75 && pts >= 65) score += 2;
    else if (pts < 65) score += 3;

    //composante 5
    var tmp = 0;
    for (var i = 2 ; i <= 10 ; ++i)
    {
        tmp += parseInt(document.querySelector('input[name="psqi5' + i + '"]:checked').value);
    }
    if (tmp > 0 && tmp <= 9) score += 1;
    else if (tmp >= 10 && tmp <= 18) score += 2;
    else if (tmp > 18) score += 3;

    // composante 6
    score += parseInt(document.querySelector('input[name="psqi7"]:checked').value);

    // composante 7
    score += Math.ceil(((document.querySelector('input[name="psqi8"]:checked').value) +
        (document.querySelector('input[name="psqi9"]:checked').value)) / 2);

	if (document.getElementById('score_psqi'))
        document.getElementById('score_psqi').value = score;
	document.getElementById('psqi_inner_score').value = score;
}

function computeISI()
{
	var score = 0;
	for (var i = 1 ; i < 16 ; ++i)
	{
		score += parseInt(document.querySelector('input[name="isi_' + i + '"]:checked').value);
	}
	if (document.getElementById('score_isi'))
        document.getElementById('score_isi').value = score;
	document.getElementById('isi_inner_score').value = score;
}

function createTable13()
{
	var ENTRIES = [
		'Ouv. max. non assistée : <input type="text" name="13_mm_omna" style="width:30px;text-align:center" value="0" class="text_field_e">mm',
		'Ouv. max. assistée : <input type="text" name="13_mm_oma" style="width:30px;text-align:center" value="0" class="text_field_e">mm',
		'Ouv. contre résistance : ',
		'Fermeture contre résistance : ',
		'Latéralité droite : <input type="text" name="13_mm_ld" style="width:30px;text-align:center" value="0" class="text_field_e">mm',
		'Latéralité droite assistée : <input type="text" name="13_mm_lda" style="width:30px;text-align:center" value="0" class="text_field_e">mm',
		'Latéralité droite contre résistance : ',
		'Latéralité gauche : <input type="text" name="13_mm_lg" style="width:30px;text-align:center" value="0" class="text_field_e">mm',
		'Latéralité gauche assistée : <input type="text" name="13_mm_lga" style="width:30px;text-align:center" value="0" class="text_field_e">mm',
		'Latéralité gauche contre résistance : ',
		'Propulsion : <input type="text" name="13_mm_prop" style="width:30px;text-align:center" value="0" class="text_field_e">mm',
		'Propulsion contre résistance : '
	];

	var table = document.createElement("table");
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	var th = document.createElement("th");

	table.appendChild(tr);
	tr.appendChild(td);
	th.innerHTML = "Côté droit";
	th.colSpan = "3";
	tr.appendChild(th);
	th = document.createElement("th");
	th.colSpan = "3";
	th.innerHTML = "Côté gauche";
	tr.appendChild(th);

	tr = document.createElement("tr");
	tr.innerHTML = '<td>Ouverture non douloureuse : <input type="text" name="13_ond" value="0" style="width:30px;text-align:center" class="text_field_e"/>mm</td>\
					<td class="cell_center">Douleur provoquée</td>\
					<td class="cell_center">Est-elle identique à la douleur habituelle ?</td>\
					<td class="cell_center">Douleur(s) référée(s)</td>\
					<td class="cell_center">Douleur provoquée</td>\
					<td class="cell_center">Est-elle identique à la douleur habituelle ?</td>\
					<td class="cell_center">Douleur(s) référée(s)</td>'
	table.appendChild(tr);



	for (var i = 0 ; i < ENTRIES.length ; ++i)
	{
		tr = document.createElement("tr");
		td = document.createElement("td");
		td.innerHTML = ENTRIES[i];
		tr.appendChild(td);
		tr.innerHTML +=
		   '<td class="cell_center"><input name="13d_dp' + i + '" type="checkbox" > \
		   </td>\
		<td class="cell_center"><input name="13d_idh' + i + '" type="checkbox" >\
		<select name="13d_dloc' + i + '" onchange="if(this.value==4)this.parentElement.children[2].style.display=&quot;inline&quot;;else this.parentElement.children[2].style.display=&quot;none&quot;;\">\
				<option value="0"></option>\
				<option value="1">Temporale</option>\
				<option value="2">ATM</option>\
				<option value="3">Masséter</option>\
				<option value="4">Autres</option>\
				</select>\
				<input type="text" name="13d_loc_else' + i + '" style="text-align:center" class="hidden"/></td>\
		</td>\
		<td class="cell_center">\
		<select name="13d_dref' + i + '" onchange="if(this.value==4)this.parentElement.children[1].style.display=&quot;inline&quot;;else this.parentElement.children[1].style.display=&quot;none&quot;;\">\
			<option value="0"></option>\
			<option value="1">Temporale</option>\
			<option value="2">ATM</option>\
			<option value="3">Masséter</option>\
			<option value="4">Autres</option>\
		</select>\
		<input type="text" name="13d_else' + i + '" style="text-align:center" class="hidden"/></td>\
		<td class="cell_center"><input name="13g_dp' + i + '" type="checkbox" >\
		</td>\
		<td class="cell_center"><input name="13g_idh' + i + '" type="checkbox" >\
		<select name="13g_dloc' + i + '" onchange="if(this.value==4)this.parentElement.children[2].style.display=&quot;inline&quot;;else this.parentElement.children[2].style.display=&quot;none&quot;;\">\
				<option value="0"></option>\
				<option value="1">Temporale</option>\
				<option value="2">ATM</option>\
				<option value="3">Masséter</option>\
				<option value="4">Autres</option>\
				</select>\
				<input type="text" name="13g_loc_else' + i + '" style="text-align:center" class="hidden"/></td>\
		</td>\
		<td class="cell_center"><select name="13g_dref' + i + '" onchange="if(this.value==4)this.parentElement.children[1].style.display=&quot;inline&quot;;else this.parentElement.children[1].style.display=&quot;none&quot;;\">\
			<option value="0"></option>\
			<option value="1">Temporale</option>\
			<option value="2">ATM</option>\
			<option value="3">Masséter</option>\
			<option value="4">Autres</option>\
		</select><input type="text" name="13g_else' + i + '" style="width:90%;text-align:center" class="hidden" ></td>';


		table.appendChild(tr);
	}

	document.getElementById("block_13").insertBefore(table, document.getElementById("block_13").firstChild);
	table.className = "vtable";
}

function createTable15()
{
	var ENTRIES = ['Ouverture', 'Fermeture', 'Latéralité gauche', 'Latéralité droite', 'Propulsion'];

	var table = document.createElement("table");
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	var th = document.createElement("th");

	table.innerHTML = '<tr>\
        <td colspan="2" rowspan="2"></td>\
        <th colspan="2">Praticien</th>\
        <th colspan="2">Patient</th>\
		<th colspan="2"></th>\
    </tr>\
    <tr>\
        <td class="cell_center">Claquement</td>\
        <td class="cell_center">Crépitement</td>\
        <td class="cell_center">Claquement</td>\
        <td class="cell_center">Crépitement</td>\
        <td class="cell_center">Douleur</td>\
        <td class="cell_center">Douleur habituelle ?</td>\
    </tr>';

	for (var i = 0 ; i < ENTRIES.length ; ++i)
	{
		tr = document.createElement("tr");

		tr.innerHTML = '<td style="background:#fcfcfc" rowspan="2">' + ENTRIES[i] + '</td>\
            <td>ATM droite</td>\
            <td class="cell_center"><input name="15_d_rcl' + i + '" type="checkbox" /></td>\
            <td class="cell_center"><input name="15_d_rcr' + i + '" type="checkbox" /></td>\
            <td class="cell_center"><input name="15_d_acl' + i + '" type="checkbox" /></td>\
            <td class="cell_center"><input name="15_d_acr' + i + '" type="checkbox" /></td>\
            <td class="cell_center"><input name="15_d_dlr' + i + '" type="checkbox" /></td>\
            <td class="cell_center"><input name="15_d_hab' + i + '" type="checkbox" />\
			<select name="15_d_dref' + i + '" onchange="if(this.value==4)this.parentElement.children[2].style.display=&quot;inline&quot;;else this.parentElement.children[2].style.display=&quot;none&quot;;\">\
                <option value="0"></option>\
                <option value="1">Temporale</option>\
                <option value="2">ATM</option>\
                <option value="3">Masséter</option>\
                <option value="4">Autres</option>\
            </select>\
		<input name="15_d_txt' + i + '" type="text" class="hidden"/></td>';
		table.appendChild(tr);

		tr = document.createElement("tr");

		tr.innerHTML = '<td>ATM gauche</td>\
            <td class="cell_center"><input name="15_g_rcl' + i + '" type="checkbox" /></td>\
            <td class="cell_center"><input name="15_g_rcr' + i + '" type="checkbox" /></td>\
            <td class="cell_center"><input name="15_g_acl' + i + '" type="checkbox" /></td>\
            <td class="cell_center"><input name="15_g_acr' + i + '" type="checkbox" /></td>\
            <td class="cell_center"><input name="15_g_dlr' + i + '" type="checkbox" /></td>\
            <td class="cell_center"><input name="15_g_hab' + i + '" type="checkbox" />\
			<select name="15_g_dref' + i + '" onchange="if(this.value==4)this.parentElement.children[3].style.display=&quot;inline&quot;;\
                            else this.parentElement.children[3].style.display=&quot;none&quot;;">\
                <option value="0"></option>\
                <option value="1">Temporale</option>\
                <option value="2">ATM</option>\
                <option value="3">Masséter</option>\
                <option value="4">Autres</option>\
            </select>\
		<input name="15_g_txt' + i + '" type="text" class="hidden"/></td>';

		table.appendChild(tr);
	}

	document.getElementById("block_15").appendChild(table);
	table.className = "vtable";
}

//createTable11();
//createTable13();
//createTable15();

function validateCheckboxes()
{
	var inputs = document.querySelectorAll("input[type='checkbox']");
	var inputsv = new Array(inputs.length);
	for(var i = 0; i < inputs.length; i++)
	{
		if (inputs[i].checked)
		{
			inputs[i].value = "1"
			inputsv[i] = 1;
		}
		else
		{
			inputs[i].value = "0";
			inputsv[i] = 0;
		}
		inputs[i].checked = true;
	}

	document.getElementById('submit_but').click();

	for(var i = 0; i < inputs.length; i++)
	{
		if (inputsv[i] == 1)
			inputs[i].checked = true;
		else inputs[i].checked = false;
	}
}

function setFriedman(s)
{
    document.getElementById('friedman').value = s;
}

function setMallampati(s)
{
    document.getElementById('mallampati').value = s;
}
