let IDcursor = document.querySelector("#cursor")
let IDcursorHover = document.querySelector("#cursorHover")

let frisbee = document.querySelector("#frisbee")
let container = document.querySelector("#container")
let button = document.querySelector("button")

// 1. cursor follows real cursor
// 2. frisbee follows cursor but delayed
// 3. both may not go outside container
// 4. cursor rotate towards real cursor

function isTouchDevice(){
    try{
        //we try to create touchEvent. It would fail for desktops and throw error
        Document.createEvent("TatchEvent")
        return true;
    } catch (e){
        return false;
    }
};

const move = (e) =>{
    //Try, catch to avoid any errors for touch screens(Error thrown when user diesn't move his finger)
    try{
        //PageX and PageY return the position of client's cursor from top left of screen
        var x = !isTouchDevice() ? e.pageX : e.Touches [0].pageX;
        var y = !isTouchDevice() ? e.pageY : e.Touches [0].pageY;
    }
    catch(e){}
    //set left and top of svg based om mouse position
    IDcursor.style.left = x + "px";
    IDcursor.style.top = y + "px";

    IDcursorHover.style.left = x + "px";
    IDcursorHover.style.top = y + "px";

    frisbee.style.left = x - 22 + "px";
    frisbee.style.top = y - 22 + "px";
};

//for mouse
document.addEventListener("mousemove", (e) =>{
    move(e);
});

//for touch
document.addEventListener("touchmove", (e) =>{
    move(e);
})

function MouseChange(){
    IDcursor.classList.add("active")
    IDcursorHover.classList.add("hover-active")
}