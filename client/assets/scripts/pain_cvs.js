/*------------------------------------------------------------
   This file contains the script for the fist canvas.

	 * PainDiagram();
	 * void changeTab(event);
	 * void insertColor(pain = "", evaf = "", evap = "", date = "", quality = "", duration = "", frequency = "", why = "", mod_by = "", treatment = "", dnf = "0");
	 * void removeColor();
	 * void pop_dlr();
	 * void setDlrColor();
	 * void initDlr();
	 * void afterLoad();
	 * void touch_start(e);
	 * void touch_end(e);
	 * void touch_move(e);
	 * void setDlrTool(tool);
	 * void insert_dlr(pain, evaf, evap, date, quality, duration, frequency, why, mod_by, treatment, dnf);
	 * void mouseDownDlr(e);
	 * void mouseUpDlr(e);
	 * void mouseMoveDlr(e);
	 * void add_symbol(x, y);
	 * void draw_arrow(x1, y1, x2, y2);
	 * void redrawDlr();
	 * void clear_dlr();
	 * void openDN4(v);
	 * void HandlePopupResult(result, s_bitfield);
	 * void setDN4Fields(current);
	 * void compute_dn4();

------------------------------------------------------------*/

/* ---------------------- ELEMENTS ---------------------- */

var pDiagram = new PainDiagram();
pDiagram.initDlr();

function PainDiagram()
{
	this.clr_tabs = document.getElementById('pain_clr');
	this.canvas = document.getElementById('cvsDlr');
	this.context = document.getElementById('cvsDlr').getContext("2d");
	
	this.a_Cross = new Array();
	this.a_Circle = new Array();
	this.a_Text = new Array();
	this.a_Arrow = new Array();
 
	this.colors = ["red","blue","yellow","green","cyan","magenta"];
	this.current_color = 0;
	this.context.font = '18pt Calibri';
	this.context.lineWidth = 2;
	this.context.textAlign = 'center';
	this.context.textBaseline = 'middle';
	this.rect;
	this.tab_amount = 0;

	this.openedDN4 = -1;
	this.DN4_bitfields = new Array();

	/* ---------------------- TOOLS ---------------------- */
	this.tools = ["O", "X", "A", "T"]; //standing for circle, cross, arrow, text
	this.current_tool = "T";
	this.clic_pos = {x:0,y:0};
	this.drag_pos = {x:0,y:0};
	this.drag_enabled = false;


	this.dlrBg = new Image();
	this.DN4Current = 0;
	
	//this.m_postData = new Array(6);
	
	this.changeTab = function(event)
	{
		event = event || window.event;
		var current_tab = event.target || event.srcElement;
		for (i = 0 ; i < this.clr_tabs.childElementCount ; ++i)
		{
			if (current_tab == this.clr_tabs.children[i])
			{
				this.clr_tabs.children[this.current_color].style.width = "30px";
				current_tab.style.width = "35px";
				this.current_color = i;
				return;
			}
		}
	}	
	this.ul = document.getElementById('pain_clr');
	this.ul.addEventListener("click", this.changeTab.bind(this), false);
	/*this.ul.onclick = function(event)
	{
		event = event || window.event;
		var current_tab = event.target || event.srcElement;
		
		//if (current_tab == clr_tabs.lastChild)
		//{
		//    insertColor();
		//    return;
		//}
		for (i = 0 ; i < this.clr_tabs.childElementCount ; ++i)
			if (current_tab == this.clr_tabs.children[i])
			{
				this.clr_tabs.children[this.current_color].style.width = "30px";
				current_tab.style.width = "35px";
				this.current_color = i;
				return;
			}
	};*/

	this.insertColor = function(pain = "", evaf = "", evap = "", date = "", quality = "", duration = "", frequency = "", why = "", mod_by = "", treatment = "", dnf = "0")
	{
		if (this.tab_amount < this.colors.length)
		{
			var tag = document.createElement("li");
			tag.style.background = this.colors[this.tab_amount];
			this.clr_tabs.appendChild(tag);
			++this.tab_amount;
            if (date=="") pain = "";
			this.insert_dlr(pain, evaf, evap, date, quality, duration, frequency, why, mod_by, treatment, dnf);
		}
	}

	this.removeColor = function()
	{
		if (this.tab_amount > 1)
		{
			for (i = 0 ; i < this.a_Arrow.length ; ++i)
			{
				if (this.a_Arrow[i].color == this.colors[this.tab_amount-1])
				{
					this.a_Arrow.splice(i, 1);
					i--;
				}
			}
			for (i = 0 ; i < this.a_Circle.length ; ++i)
			{
				if (this.a_Circle[i].color == this.colors[this.tab_amount-1])
				{
					this.a_Circle.splice(i, 1);
					i--;
				}
			}
			for (i = 0 ; i < this.a_Cross.length ; ++i)
			{
				if (this.a_Cross[i].color == this.colors[this.tab_amount-1])
				{
					this.a_Cross.splice(i, 1);
					i--;
				}
			}
			for (i = 0 ; i < this.a_Text.length ; ++i)
			{
				if (this.a_Text[i].color == this.colors[this.tab_amount-1])
				{
					this.a_Text.splice(i, 1);
					i--;
				}
			}

			if (this.current_color == this.tab_amount)
			{
				this.current_color--;
			}

			this.clr_tabs.removeChild(document.getElementById('pain_clr').lastChild);
			document.getElementById('pain_stack').removeChild(document.getElementById('pain_stack').lastChild);
			--this.tab_amount;
			
			this.DN4_bitfields.pop();

			this.redrawDlr();
		}
	}

	this.pop_dlr = function()
	{
		switch(this.current_tool)
		{
			case "O" :
			{
				this.a_Circle.pop();
				break;
			}
			case "X" :
			{
				this.a_Cross.pop();
				break;
			}
			case "A" :
			{
				this.a_Arrow.pop();
				break;
			}
			case "T" :
			{
				this.a_Text.pop();
				break;
			}
		}
		redrawDlr();
	}


	this.setDlrColor = function()
	{
		current_color = document.getElementById("dlrColor").value;
	}

	this.initDlr = function()
	{
		//this.clr_tabs.innerHTML += '<li style="background:' + this.colors[0] + ';"></li>';
		//this.clr_tabs.children[0].style.width = "35px";

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
		{
			this.canvas.addEventListener("touchstart", this.touch_start.bind(this), false);
			this.canvas.addEventListener("touchend", this.touch_end.bind(this), false);
			this.canvas.addEventListener("touchmove", this.touch_move.bind(this), false);
		}
		else
		{
			this.canvas.addEventListener("mousedown", this.mouseDownDlr.bind(this), false);
			this.canvas.addEventListener("mouseup", this.mouseUpDlr.bind(this), false);
			this.canvas.addEventListener("mousemove", this.mouseMoveDlr.bind(this), false);
		}
		this.dlrBg.src = "Images/eval_dlr.jpg";
		this.dlrBg.onload = this.afterLoad.bind(this);
	}

	this.afterLoad = function()
	{
		this.redrawDlr();
		
		//this.insert_dlr("", "", "", "", "", "", "", "", "", "", "0");
		
		
		document.getElementById('X').addEventListener("click", this.setDlrTool.bind(this, "X"), false);													
		document.getElementById('O').addEventListener("click", this.setDlrTool.bind(this, "O"), false);
		document.getElementById('A').addEventListener("click", this.setDlrTool.bind(this, "A"), false);
		document.getElementById('T').addEventListener("click", this.setDlrTool.bind(this, "T"), false);
		document.getElementById('EA').addEventListener("click", this.clear_dlr.bind(this), false);
		document.getElementById('EF').addEventListener("click", this.pop_dlr.bind(this), false);
		document.getElementById('AC').addEventListener("click", this.insertColor.bind(this), false);
		document.getElementById('RC').addEventListener("click", this.removeColor.bind(this), false);
        document.getElementById('AC_e').addEventListener("click", this.insertColor.bind(this), false);
		document.getElementById('RC_e').addEventListener("click", this.removeColor.bind(this), false);
	}

	this.touch_start = function(e)
	{
		if (this.current_tool == "A")
		{
			this.rect = this.canvas.getBoundingClientRect();
			this.clic_pos.x = e.targetTouches[0].clientX - this.rect.left;
			this.clic_pos.y = e.targetTouches[0].clientY - this.rect.top;
			this.drag_enabled = true;
		}
	}
	this.touch_end = function(e)
	{
		
		this.rect = this.canvas.getBoundingClientRect();
		this.drag_pos.x = e.changedTouches[0].clientX - this.rect.left;
		this.drag_pos.y = e.changedTouches[0].clientY - this.rect.top;
		this.add_symbol(this.drag_pos.x, this.drag_pos.y);
	}
	this.touch_move = function(e)
	{
		e.preventDefault();
		if (this.drag_enabled && this.current_tool == "A")
		{
			this.rect = this.canvas.getBoundingClientRect();
			this.drag_pos.x = e.changedTouches[0].clientX - this.rect.left;
			this.drag_pos.y = e.changedTouches[0].clientY - this.rect.top;
			this.redrawDlr();
		}
	}
	
	this.setDlrTool = function(tool)
	{
		this.current_tool = tool;
	}

	this.insert_dlr = function(pain, evaf, evap, date, quality, duration, frequency, why, mod_by, treatment, dnf)
	{
		inner = document.createElement('div');
        inner.style.fontSize = '1rem';
		inner.innerHTML = '<table><tr><td><a style="color:' + this.colors[this.tab_amount - 1] + '">Douleur ' + this.tab_amount + '<a/></td> \
                <td><input name="2_dlr' + this.tab_amount + '" autocomplete="off" type="text" style="width:200px;text-align:center" value="' + pain + '"></td></tr>\
                <tr><td>EVA</td><td><select id="2_eva_fond' + this.tab_amount + '" name="2_eva_fond' + this.tab_amount + '"></select> \
                (fond douloureux) <input type="button" class="eva_icon no-print" onclick="eva_cvs.setTarget(&quot;2_eva_fond' + this.tab_amount 
                + '&quot;);document.getElementById(&quot;eva_win&quot;).style.transform=&quot;scale(1)&quot;;"></td><td><select id="2_eva_pic' + this.tab_amount + '" name="2_eva_pic' + this.tab_amount + '"></select> \
                (pic douloureux). <input type="button" class="eva_icon no-print" onclick="eva_cvs.setTarget(&quot;2_eva_pic' + this.tab_amount 
                + '&quot;);document.getElementById(&quot;eva_win&quot;).style.transform=&quot;scale(1)&quot;;"></td></tr> \
                <tr><td>Date de début : </td><td><input name="2_date' + this.tab_amount + '" autocomplete="off" type="text" style="text-align:center" value="' + date + '"></td>\
				<td>Qualité : </td><td><input name="2_qua' + this.tab_amount + '" autocomplete="off" type="text" value="' + quality + '"></td></tr> \
				<tr><td>Durée : </td><td><input name="2_dur' + this.tab_amount + '" autocomplete="off" type="text" value="' + duration + '"></td> \
				<td>Fréquence : </td><td><input name="2_fre' + this.tab_amount + '" autocomplete="off" type="text" value="' + frequency + '"></td> </tr>\
				<tr><td>Circonstances du début : </td><td><input name="2_cir' + this.tab_amount + '" autocomplete="off" type="text" value="' + why + '"></td> \
				<td>Modifié par : </td><td><input name="2_mod' + this.tab_amount + '" autocomplete="off" type="text" value="' + mod_by + '"></td></tr> \
				<tr><td>Traitement : </td><td><input name="2_ttt' + this.tab_amount + '" autocomplete="off" type="text" value="' + treatment + '"></td></tr> \
                <tr><td><input type="button" class="tool no-print" onclick="document.getElementById(&quot;dn4_win&quot;).style.transform=&quot;scale(1)&quot;;pDiagram.setDN4Fields(' + this.tab_amount + ');" value="Questionnaire DN4"></td>\
                <td><input id="dn4_score_' + this.tab_amount + '" name="2_dn4s' + this.tab_amount + '" value="' + dnf + '" type="text"></td> \
                <td><div id="dn4q_' + this.tab_amount + '" style="display: none;"></div></td></tr></table>';
		document.getElementById('pain_stack').appendChild(inner);
		
		var sel = document.getElementById('2_eva_fond' + this.tab_amount);
		var sel2 = document.getElementById('2_eva_pic' + this.tab_amount);
		
		for (i = 0 ; i < 10.5 ; i += 0.5)
		{
			var op = document.createElement('option');
			op.value = i;
			op.innerHTML = i;
			if (op.value == evaf) op.selected = true;
			sel.appendChild(op);
			var op2 = document.createElement('option');
			op2.value = i;
			op2.innerHTML = i;
			if (op2.value == evap) op2.selected = true;
			sel2.appendChild(op2);
		}
	}

	this.mouseDownDlr = function(e)
	{
		if (this.current_tool == "A")
		{
			this.rect = this.canvas.getBoundingClientRect();
			this.clic_pos.x = e.clientX - this.rect.left;
			this.clic_pos.y = e.clientY - this.rect.top;
			this.drag_enabled = true;
		}
	}

	this.mouseUpDlr = function(e)
	{
		this.rect = this.canvas.getBoundingClientRect();
		this.drag_pos.x = e.clientX - this.rect.left;
		this.drag_pos.y = e.clientY - this.rect.top;
		this.add_symbol(this.drag_pos.x, this.drag_pos.y);
	}

	this.mouseMoveDlr = function(e)
	{
		if (this.drag_enabled && this.current_tool == "A")
		{
			this.rect = this.canvas.getBoundingClientRect();
			this.drag_pos.x = e.clientX - this.rect.left;
			this.drag_pos.y = e.clientY - this.rect.top;
			this.redrawDlr();
		}
	}


	this.add_symbol = function(x, y)
	{
		switch(this.current_tool)
		{
			case "X" :
			{
				this.a_Cross.push({x:x, y:y, color:this.colors[this.current_color]});
				break;
			}
			case "O" :
			{
				this.a_Circle.push({x:x, y:y, color:this.colors[this.current_color]});
				break;
			}
			case "T" :
			{
				var text = prompt("Entrez le texte : ");
				if (text != null)
					this.a_Text.push({x:x, y:y,
						color:this.colors[this.current_color],text:text});
				break;
			}
			case "A" :
			{
				if (this.drag_enabled)
				{
					this.drag_enabled = false;
					this.a_Arrow.push({x:this.clic_pos.x,y:this.clic_pos.y,
						x2:x,
						y2:y,
						color:this.colors[this.current_color]});
				}
				break;
			}
			default:break;
		}
		this.redrawDlr();
	}

	this.draw_arrow = function(x1, y1, x2, y2)
	{
		this.context.beginPath();
		this.context.moveTo(x1, y1);
		this.context.lineTo(x2, y2);
		var angle = 120;
		var vector = [x2 - x1, y2 - y1];
		var length = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);
		vector[0] = (vector[0] / length) * 8;
		vector[1] = (vector[1] / length) * 8;
		
		var r_vector = [vector[0] * Math.cos(angle) - vector[1] * Math.sin(angle),
						vector[0] * Math.sin(angle) + vector[1] * Math.cos(angle)];
		this.context.moveTo(x2, y2);
		this.context.lineTo(x2 - r_vector[0], y2 - r_vector[1]);
		this.context.moveTo(x2, y2);
		r_vector = [vector[0] * Math.cos(-angle) - vector[1] * Math.sin(-angle),
						vector[0] * Math.sin(-angle) + vector[1] * Math.cos(-angle)];
		this.context.lineTo(x2 - r_vector[0], y2 - r_vector[1]);

		this.context.closePath();
		this.context.stroke();
	}

	this.redrawDlr = function()
	{
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		
		this.context.drawImage(this.dlrBg, this.canvas.width/2 - this.dlrBg.width/2, this.canvas.height/2 - this.dlrBg.height/2);

		for (i = 0 ; i < this.a_Cross.length ; ++i)
		{
			this.context.fillStyle = this.a_Cross[i].color;
			this.context.fillText("X", this.a_Cross[i].x, this.a_Cross[i].y);
		}
		for (i = 0 ; i < this.a_Circle.length ; ++i)
		{
			this.context.fillStyle = this.a_Circle[i].color;
			this.context.fillText("O", this.a_Circle[i].x, this.a_Circle[i].y);
		}
		for (i = 0 ; i < this.a_Text.length ; ++i)
		{
			this.context.fillStyle = this.a_Text[i].color;
			this.context.fillText(this.a_Text[i].text, this.a_Text[i].x, this.a_Text[i].y);
		}
		for (i=0 ; i  < this.a_Arrow.length ; ++i)
		{
			this.context.strokeStyle = this.a_Arrow[i].color;
			this.draw_arrow(this.a_Arrow[i].x, this.a_Arrow[i].y, this.a_Arrow[i].x2, this.a_Arrow[i].y2);
		}
		if (this.drag_enabled)
		{
			this.context.strokeStyle = this.colors[this.current_color];
			this.draw_arrow(this.clic_pos.x, this.clic_pos.y, this.drag_pos.x, this.drag_pos.y);
		}
	}

	this.clear_dlr = function()
	{
		this.a_Arrow.length = 0;
		this.a_Circle.length = 0;
		this.a_Cross.length = 0;
		this.a_Text.length = 0;
		
		this.redrawDlr();
	}

	this.openDN4 = function(v)
	{
		openedDN4 = v; 
		var w = window.open('dn4.html');
		w.opener = window;
	}

	this.HandlePopupResult = function(result, s_bitfield)
	{
		DN4s.push(s_bitfield);
		document.getElementById('dn4_score_' + openedDN4 + '').value = result;
	}

	this.setDN4Fields = function(current)
	{ 
		this.DN4Current = current;
		for (i = 1 ; i < 11 ; ++i)        
		{
			if ((this.DN4_bitfields[this.DN4Current-1]) & (1<<i))
				document.getElementsByName("q_dn4_" + i)[0].checked = true;
			else document.getElementsByName("q_dn4_" + i)[1].checked = true;
		}
	}
	this.compute_dn4 = function()
	{
		var score = 0;
		var bitfield = 0;
		for (i = 1 ; i < 11 ; i++)
		{
			var q = 'q_dn4_' + (i).toString();
			var elements = document.getElementsByName(q);
			if (elements[0].checked) 
			{
				bitfield |= (1<<i);
				score++;
			}
		}
		
		if (this.DN4Current <= this.DN4_bitfields.length) 
			this.DN4_bitfields[this.DN4Current - 1] = bitfield;
		else this.DN4_bitfields.push(bitfield);
		
        if (document.getElementById('dn4_score_' + (this.DN4Current)))
            document.getElementById('dn4_score_' + (this.DN4Current)).value = score;
        document.getElementById('dn4_inner_score').value = score;
		//document.getElementById('dn4_win').style.transform = 'scale(0)';
	}
}

