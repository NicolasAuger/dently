/*
 * This file contains the script for the item XIX;
 * 
 * TeethDiagram();
 *  void checkLoadState()
 *	void rasterize()
 *	void initialise()
 *	void setTool(name, e)
 *	void setOcclColor(color, e)
 *	void drawBackground()
 *	void getTeethAt(x, y)
 *	void mouseRelease(e)
 *	 
 * 
 * Teeth()
 *	void draw();
 *	void contains(x, y);
 *	void addOcclusionPoint(posx, posy, pcolor);
 *	void printStatus();
 *	void toggleImplant();
 *	void toggleCrown();
 *	void togglePresence();
 *  
 * */

var tDiag = new TeethDiagram();
tDiag.initialise();

function Teeth(id, posx, posy)
{
    this.m_Exists = true;
    this.m_Id = id;
    this.m_Implant = false;
    this.m_Crown = false;
    this.m_Occlusion = new Array();
    this.m_Endo = false;
    this.m_ImgRaw = new Image();
    this.m_ImgImpl = new Image();
    this.m_Rect = { x:posx, y:posy, w:102, h:239 };
	this.m_OcclPoints = new Array();
    
    this.draw = function()
    {
        tDiag.m_Context.clearRect(this.m_Rect.x, this.m_Rect.y, this.m_Rect.w, this.m_Rect.h);
		if (this.m_Exists)
        {
            tDiag.m_Context.drawImage(this.m_ImgRaw, this.m_Rect.x, this.m_Rect.y);
            if (this.m_Implant)
                tDiag.m_Context.drawImage(this.m_ImgImpl, this.m_Rect.x, this.m_Rect.y);
            
            for (i = 0 ; i < this.m_OcclPoints.length ; ++i)
            {
                tDiag.m_Context.beginPath();
                tDiag.m_Context.arc(this.m_OcclPoints[i].x, this.m_OcclPoints[i].y, 6, 0, 2 * Math.PI, false);
                tDiag.m_Context.fillStyle = tDiag.CfColors[this.m_OcclPoints[i].color];
                tDiag.m_Context.fill();
                tDiag.m_Context.lineWidth = 1;
                tDiag.m_Context.strokeStyle = '#003300';
                tDiag.m_Context.stroke();
                tDiag.m_Context.closePath();
            }
        }
    }
	this.contains = function(x, y)
	{
		if (x < this.m_Rect.x + this.m_Rect.w && x > this.m_Rect.x
			&& y > this.m_Rect.y && y < this.m_Rect.y + this.m_Rect.h)
		{
			return true;
		}
		else return false;
	}
	this.addOcclusionPoint = function(posx, posy, pcolor)
	{
		this.m_OcclPoints.push({x:posx, y:posy, color:pcolor});
	}
	this.printStatus = function()
	{
		alert('Numéro : ' + this.m_Id +
			'\nExtraite : ' + this.m_Exists +
			'\nImplant : ' + this.m_Implant + 
			'\nPoints d\'occlusion : ' + this.m_OcclPoints.length);
	}
    this.toggleImplant = function()
    {
        this.m_Implant = !this.m_Implant;
    }
    this.toggleCrown = function()
    {
        this.m_Crown = !this.m_Crown;
    }
	this.togglePresence = function()
	{
		this.m_Exists = !this.m_Exists;
	}
}

function TeethDiagram()
{
	this.CfColors = ['blue', 'red'];
	this.ToolList = {
		Occl : 0,
		Impl : 1,
		Crwn : 2,
		Endo : 3,
		Abs : 4
	};
	this.ToolBox = [{v:this.ToolList.Occl, name:'dd_occl'},
					{v:this.ToolList.Impl, name:'dd_impl'},
					{v:this.ToolList.Crwn, name:'dd_crwn'},
					{v:this.ToolList.Endo, name:'dd_endo'},
					{v:this.ToolList.Abs, name:'dd_abs'}];
	
    this.m_Canvas = document.getElementById('DentalDiagram');
    this.m_Context = this.m_Canvas.getContext('2d');
    this.m_CellWidth;
    this.m_CellHeight;
    
    this.m_Teeth = new Array(64);
    
    this.m_MaxTeeth = new Array(16);
    this.m_MdbTeeth = new Array(16);
    this.m_MaxUTeeth = new Array(16);
    this.m_MdbUTeeth = new Array(16);
    this.m_LeftToLoad = 64;
    this.m_OcclColor = 0;
	this.m_CurrentTool = 0;
	
    this.checkLoadState = function()
    {
        --this.m_LeftToLoad;
        if (this.m_LeftToLoad == 0)
        {
            this.drawBackground();
            var img = document.getElementById('rasterisedDiag');
            img.src = this.m_Canvas.toDataURL();
            this.m_Rect = this.m_Canvas.getBoundingClientRect();
        }
    }
    
    this.rasterize = function()
    {
        var img = document.getElementById('rasterisedDiag');
        img.src = this.m_Canvas.toDataURL();
    }
    
    this.initialise = function()
    {
        this.m_Canvas.width = 1632;
        this.m_Canvas.height = 956;
        this.m_Rect;
        
        this.m_CellWidth = this.m_Canvas.width / 16;
        this.m_CellHeight = this.m_Canvas.height / 4;
        
        for (var i = 11 ; i < 19 ; i++)
        {
            this.m_Teeth[i - 11] = new Teeth(i, this.m_CellWidth * - (i - 18), 0);
            this.m_Teeth[i - 11].m_ImgRaw.src = "Images/bbd/" + i + ".png";
            this.m_Teeth[i - 11].m_ImgImpl.src = "Images/bbd/implants/" + i + "_impl.png";
            this.m_Teeth[i - 11].m_ImgRaw.onload = this.checkLoadState.bind(this); 
            this.m_Teeth[i - 3] = new Teeth(i, this.m_CellWidth * - (i - 18), this.m_CellHeight);                      
            this.m_Teeth[i - 3].m_ImgRaw.src = "Images/bbd/" + i + "u.png";      
            this.m_Teeth[i - 3].m_ImgRaw.onload = this.checkLoadState.bind(this);
        }
        for (var i = 21 ; i < 29 ; i++)
        {
            this.m_Teeth[i - 5] = new Teeth(i, this.m_CellWidth * (i-13), 0);
            this.m_Teeth[i - 5].m_ImgRaw.src = "Images/bbd/" + i + ".png";        
            this.m_Teeth[i - 5].m_ImgRaw.onload = this.checkLoadState.bind(this); 
            this.m_Teeth[i + 3] = new Teeth(i, this.m_CellWidth * (i - 13), this.m_CellHeight);                 
            this.m_Teeth[i + 3].m_ImgRaw.src = "Images/bbd/" + i + "u.png";      
            this.m_Teeth[i + 3].m_ImgRaw.onload = this.checkLoadState.bind(this);
        }
        for (var i = 31 ; i < 39 ; i++)
        {
            this.m_Teeth[i + 17] = new Teeth(i, this.m_CellWidth * -(i-38), 717);
            this.m_Teeth[i + 17].m_ImgRaw.src = "Images/bbd/" + i + ".png";        
            this.m_Teeth[i + 17].m_ImgRaw.onload = this.checkLoadState.bind(this); 
            this.m_Teeth[i + 25] = new Teeth(i, this.m_CellWidth * -(i - 38), 478);                 
            this.m_Teeth[i + 25].m_ImgRaw.src = "Images/bbd/" + i + "u.png";      
            this.m_Teeth[i + 25].m_ImgRaw.onload = this.checkLoadState.bind(this);
        }
        for (var i = 41 ; i < 49 ; i++)
        {
            this.m_Teeth[i - 9] = new Teeth(i, this.m_CellWidth * (i-33), 717);
            this.m_Teeth[i - 9].m_ImgRaw.src = "Images/bbd/" + i + ".png";        
            this.m_Teeth[i - 9].m_ImgRaw.onload = this.checkLoadState.bind(this); 
            this.m_Teeth[i - 1] = new Teeth(i, this.m_CellWidth * (i - 33), 478);                  
            this.m_Teeth[i - 1].m_ImgRaw.src = "Images/bbd/" + i + "u.png";      
            this.m_Teeth[i - 1].m_ImgRaw.onload = this.checkLoadState.bind(this);
        }
    
		this.m_Canvas.addEventListener('mouseup', this.mouseRelease.bind(this), false);
		this.m_Canvas.oncontextmenu = function(e)
		{
			e.preventDefault();
		}
		
		document.getElementById('dd_impl').addEventListener('click', this.setTool.bind(this, 'dd_impl'), false);
		document.getElementById('dd_occl').addEventListener('click', this.setTool.bind(this, 'dd_occl'), false);
		document.getElementById('dd_crwn').addEventListener('click', this.setTool.bind(this, 'dd_crwn'), false);
		document.getElementById('dd_endo').addEventListener('click', this.setTool.bind(this, 'dd_endo'), false);
        document.getElementById('dd_abs').addEventListener('click', this.setTool.bind(this, 'dd_abs'), false);
		
		document.getElementById('dd_slctclrb').addEventListener('click', this.setOcclColor.bind(this, 0), false);
		document.getElementById('dd_slctclrr').addEventListener('click', this.setOcclColor.bind(this, 1), false);
    }
	
	this.setTool = function(name, e)
	{
		document.getElementById(name).className = 'li_button li_button_checked';
		var k = this.m_CurrentTool;
		for (var i = 0 ; i < this.ToolBox.length ; ++i)
		{
			if (k == this.ToolBox[i].v)
			{
				document.getElementById(this.ToolBox[i].name).className = 'li_button';
			}
			if (this.ToolBox[i].name == name)
			{
				this.m_CurrentTool = this.ToolBox[i].v;
			}			
		}
	}
	
	this.setOcclColor = function(color, e)
	{
		this.m_OcclColor = color;
	}
    
    this.drawBackground = function()
    {
		this.m_Context.fillStyle="#353535";
        this.m_Context.clearRect(0, 0, this.m_Canvas.width, this.m_Canvas.height);
        
        for (var i = 0 ; i < 64 ; ++i)
        {
            this.m_Teeth[i].draw();
        }
    }
    
	this.getTeethAt = function(x, y)
	{
		for (var i = 0 ; i < 64 ; ++i)
        {
            if (this.m_Teeth[i].contains(x, y))
            {
				return this.m_Teeth[i];
            }
        }
	}
	
    this.mouseRelease = function(e)
    {
		var scale = this.m_Canvas.clientHeight / this.m_Canvas.height;
		var clickp =  {x:(e.offsetX/scale), y:(e.offsetY/scale)};
		
		if (e.which == 1)
		{
			switch(this.m_CurrentTool)
			{
				case this.ToolList.Occl :
				{
					this.getTeethAt(clickp.x, clickp.y).addOcclusionPoint(clickp.x, clickp.y, this.m_OcclColor);
					
					
                    
                    this.getTeethAt(clickp.x, clickp.y).draw();
					break;
				}
                case this.ToolList.Impl :
                {
                    this.getTeethAt(clickp.x, clickp.y).toggleImplant();
                    this.getTeethAt(clickp.x, clickp.y).draw();
                    break;
                }
                case this.ToolList.Crwn :
                {
                    this.getTeethAt(clickp.x, clickp.y).toggleCrown();
                    this.getTeethAt(clickp.x, clickp.y).draw();
                    break;
                }
				case this.ToolList.Abs :
				{
					this.getTeethAt(clickp.x, clickp.y).togglePresence();
					this.getTeethAt(clickp.x, clickp.y).draw();
				}
                default:break;
			}
			
		}
		else if (e.which == 3)
		{
			this.getTeethAt(clickp.x, clickp.y).printStatus();
		}
    }
}