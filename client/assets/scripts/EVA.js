var eva_cvs = new EVA();
eva_cvs.initialise();


function EVA()
{
    this.m_Score = 0;
    this.m_Target = "";
    this.m_Canvas;
    this.m_Context;
	this.m_Drag = false;
	
	
	this.m_Rect = {x:0, y:0, w:30, h:200};
    this.m_MIN = 140 - this.m_Rect.w / 2;
	this.m_MAX = 810 - this.m_Rect.w / 2;
    this.m_MouseOffset = 0;
	
    this.initialise = function()
    {
        this.m_Canvas = document.getElementById('EVA_cvs');
        this.m_Context = this.m_Canvas.getContext('2d');
        
        this.m_Canvas.width = 960;
        this.m_Canvas.height = 360;
		
		this.m_Rect.y = (360 - this.m_Rect.h) / 2;
		this.m_Rect.x = this.m_MIN;
        
		this.m_Canvas.addEventListener('mouseup', this.mouseUp.bind(this), false);
		this.m_Canvas.addEventListener('mousedown', this.mouseDown.bind(this), false);
		this.m_Canvas.addEventListener('mousemove', this.mouseMove.bind(this), false);
		
        this.draw();
    }
    
    this.draw = function()
    {
		this.m_Context.clearRect(0, 0, this.m_Canvas.width, this.m_Canvas.height);
        
        this.m_Context.font = '15pt Calibri';
        
		this.m_Context.fillStyle = "#2b2b2b";
        this.m_Context.textAlign = 'center';
		this.m_Context.fillText("pas de",  65, 160);
		this.m_Context.fillText("douleur", 65, 190);
		this.m_Context.fillText("douleur",    885, 150);
		this.m_Context.fillText("maximale",   885, 180);
		this.m_Context.fillText("imaginable", 885, 210);
        
        this.m_Context.lineWidth = 1;
        this.m_Context.beginPath();
        this.m_Context.moveTo(20.5, 10.5); // topleft + radius offset
        this.m_Context.lineTo(110.5, 10.5);
        this.m_Context.arcTo(120.5, 10.5, 120.5, 20.5, 10);
        this.m_Context.lineTo(120.5, 100.5);
        this.m_Context.lineTo(830.5, 100.5);
        this.m_Context.lineTo(830.5, 20.5);
        this.m_Context.arcTo(830.5, 10.5, 840.5, 10.5, 10);
        this.m_Context.lineTo(940.5, 10.5);
        this.m_Context.arcTo(950.5, 10.5, 950.5, 20.5, 10);
        this.m_Context.lineTo(950.5, 320.5);
        this.m_Context.arcTo(950.5, 340.5, 940.5, 340.5, 10);
        this.m_Context.lineTo(840.5, 340.5);
        this.m_Context.arcTo(830.5, 340.5, 830.5, 330.5, 10);
        this.m_Context.lineTo(830.5, 260.5);
        this.m_Context.lineTo(120.5, 260.5);
        this.m_Context.lineTo(120.5, 330.5);
        this.m_Context.arcTo(120.5, 340.5, 110.5, 340.5, 10);
        this.m_Context.lineTo(20.5, 340.5);
        this.m_Context.arcTo(10.5, 340.5, 10.5, 330.5, 10);
        this.m_Context.lineTo(10.5, 20.5);
        this.m_Context.arcTo(10.5, 10.5, 20.5, 10.5, 10);
        this.m_Context.closePath();
        
        this.m_Context.stroke();
        
        this.m_Context.fillStyle = "#69a0c0";
        this.m_Context.fillRect(140.5, 160.5, 670, 40);
		
		this.m_Context.fillStyle = "#efefef";
		
		this.m_Context.globalAlpha = 0.8;
		this.m_Context.fillRect(this.m_Rect.x, this.m_Rect.y, this.m_Rect.w, this.m_Rect.h);
		this.m_Context.strokeRect(this.m_Rect.x, this.m_Rect.y, this.m_Rect.w, this.m_Rect.h);
		this.m_Context.fillStyle = "#ef0000";
		this.m_Context.fillRect(this.m_Rect.x+13, this.m_Rect.y, this.m_Rect.w-26, this.m_Rect.h);
		this.m_Context.globalAlpha = 1.0;
    }
	
	this.mouseDown = function(e)
	{
		var scale = this.m_Canvas.clientHeight / this.m_Canvas.height;
		var clickp =  {x:(e.offsetX/scale), y:(e.offsetY/scale)};
		if (this.pointInRect(clickp.x, clickp.y, this.m_Rect.x, this.m_Rect.y, this.m_Rect.w, this.m_Rect.h))
		{
            this.m_MouseOffset = this.m_Rect.x - clickp.x;
			this.m_Drag = true;
		}
		else
		{
			if (this.m_MIN > clickp.x)
			{
				this.m_Rect.x = this.m_MIN;
				this.draw();
				return;
			}
			if (this.m_MAX - this.m_Rect.w < clickp.x)
			{
				this.m_Rect.x = this.m_MAX;
				this.draw();
				return;
			}
			this.m_Rect.x = clickp.x - this.m_Rect.w / 2;
            this.m_MouseOffset = - this.m_Rect.w / 2;
			this.m_Drag = true;
			this.draw();
		}
	}
	this.mouseMove = function(e)
	{
		var scale = this.m_Canvas.clientHeight / this.m_Canvas.height;
		var clickp =  {x:(e.offsetX/scale), y:(e.offsetY/scale)};
		if (this.m_Drag)
		{
			if (this.m_MIN > clickp.x + this.m_MouseOffset)
			{
				this.m_Rect.x = this.m_MIN;
				this.draw();
				return;
			}
			if (this.m_MAX < clickp.x + this.m_MouseOffset)
			{
				this.m_Rect.x = this.m_MAX;
				this.draw();
				return;
			}
			this.m_Rect.x = clickp.x + this.m_MouseOffset;
			this.draw();
		}
	}
	this.mouseUp = function(e)
	{
		this.m_Drag = false;
	}
	
	this.pointInRect = function(cx, cy, rx, ry, rw, rh)
	{
		if (cx >= rx && cx <= rx + rw
		&& cy >= ry && cy <= ry + rh) /* very nice to see how weakly typed languages prevent asm optimisation... */
		{
			return true;
		}
		return false;
	}
	
	this.getScore = function()
	{
		var sc = Math.round((this.getCursorVPos() - this.m_MIN) / ((this.m_MAX - this.m_MIN) / 20))/2;
		document.getElementById(this.m_Target).value = sc;
	}
	
	this.getCursorVPos = function()
	{
		return this.m_Rect.x - this.m_Rect.w / 2;
	}
	
	this.setTarget = function(t)
	{
		this.m_Target = t;
	}
}