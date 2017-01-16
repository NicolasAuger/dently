/*

  	 * OCCanvas();
	 * void toggleArrow(e)
	 * void initialise()
	 * void draw_background()
	 * void touch_start(e)
	 * void touch_move(e)
     * void touch_end(e)
	 * void mouse_down(e)
     * void mouse_move(e)
     * void mouse_up(e)
     * void setColor(color)
     * void clear()

 * */
 
 
var oc_canvas = new OCCanvas();
oc_canvas.initialise();

function OCCanvas()
{
    this.cvs;
    this.ctx;
    this.rect;
    this.drag_enabled = false;
    this.dots;
	this.last_pos = {x:0, y:0};
	this.background = new Image();
	
	this.colors = ['red', 'blue'];
	

    this.toggleArrow = function(e)
    {
        if (e.className == "arrowUp")
            e.className = "arrowDown";
        else if (e.className == "arrowDown")
            e.className = "arrowNone";
        else e.className = "arrowUp";
    };

    this.initialise = function()
    {
        cvs = document.getElementById('oc_canvas');
        ctx = cvs.getContext("2d");
		ctx.strokeStyle = 'blue';
		ctx.lineWidth = 2;

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        {
            cvs.addEventListener("touchstart", this.touch_start.bind(this), false);
            cvs.addEventListener("touchend", this.touch_end.bind(this), false);
            cvs.addEventListener("touchmove", this.touch_move.bind(this), false);
            cvs.addEventListener("touchleave", this.touch_end.bind(this), false);
        }
        else
        {
            cvs.addEventListener("mousedown", this.mouse_down.bind(this), false);
            cvs.addEventListener("mouseup", this.mouse_up.bind(this), false);
            cvs.addEventListener("mousemove", this.mouse_move.bind(this), false);
            cvs.addEventListener("mouseleave", this.mouse_up.bind(this), false);
        }
        dots = new Array();
        this.background.src = "Images/arrow.png";
		this.background.onload = this.draw_background.bind(this);
		
		document.getElementById('oc_color_blue').addEventListener("click", this.setColor.bind(this, 'blue'), false);
		document.getElementById('oc_color_red').addEventListener("click", this.setColor.bind(this, 'red'), false);
    };
	
	this.draw_background = function()
	{
		ctx.drawImage(this.background, cvs.width/2 - this.background.width/2,
							cvs.height/2 - this.background.height/2);
	}

    this.touch_start = function(e)
    {
		this.rect = cvs.getBoundingClientRect();
	    this.drag_enabled = true;
		this.last_pos.x = e.targetTouches[0].clientX - this.rect.left;
		this.last_pos.y = e.targetTouches[0].clientY - this.rect.top;
		ctx.moveTo(e.targetTouches[0].clientX - this.rect.left,
		           e.targetTouches[0].clientY - this.rect.top);
    };
    this.touch_move = function(e)
    {
        e.preventDefault();
        if (this.drag_enabled)
        {
            this.rect = cvs.getBoundingClientRect();
            ctx.beginPath();
			ctx.moveTo(this.last_pos.x, this.last_pos.y);
			ctx.lineTo(	e.changedTouches[0].clientX - this.rect.left,
						e.changedTouches[0].clientY - this.rect.top);
            //ctx.arc(e.changedTouches[0].clientX - rect.left, e.changedTouches[0].clientY - rect.top, 1, 0, 2 * Math.PI, false);
            ctx.closePath();
            ctx.stroke();
			this.last_pos.x = e.changedTouches[0].clientX - this.rect.left;
			this.last_pos.y = e.changedTouches[0].clientY - this.rect.top;
        }
    };
    this.touch_end = function(e)
    {
        this.drag_enabled = false;
    };

    this.mouse_down = function(e)
    {
	    this.drag_enabled = true;
        //rect = cvs.getBoundingClientRect();
        //dots.push({x:e.clientX - rect.left, y:e.clientY - rect.top});
        //this.redraw();
		this.rect = cvs.getBoundingClientRect();
		this.last_pos.x = e.clientX - this.rect.left;
		this.last_pos.y = e.clientY - this.rect.top;
    };
    this.mouse_move = function(e)
    {
        if (this.drag_enabled)
        {
            this.rect = cvs.getBoundingClientRect();
			this.rect = cvs.getBoundingClientRect();
            ctx.beginPath();
			ctx.moveTo(this.last_pos.x,
					   this.last_pos.y);
			ctx.lineTo(e.clientX - this.rect.left, e.clientY - this.rect.top);
            //ctx.arc(e.changedTouches[0].clientX - rect.left, e.changedTouches[0].clientY - rect.top, 1, 0, 2 * Math.PI, false);
            ctx.closePath();
            ctx.stroke();
			this.last_pos.x = e.clientX - this.rect.left;
			this.last_pos.y = e.clientY - this.rect.top;
        }
    };
    this.mouse_up = function(e)
    {
        this.drag_enabled = false;
    };
	
	this.setColor = function(color)
	{
		ctx.strokeStyle = color;
	}

    this.clear = function()
    {
        ctx.clearRect(0, 0, cvs.width, cvs.height);
		this.draw_background();
    };
}
