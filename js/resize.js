export const resize_column = (leftElement,rightElement,holderEvent) => {
    const dx=(holderEvent.pageX-holderEvent.target.offsetLeft-(holderEvent.target.clientWidth/2).toFixed(0));
    leftElement.style.width=(leftElement.clientWidth+dx)+"px";
    rightElement.style.width=(rightElement.clientWidth-dx)+"px";
}

export const resize_row = (topElement,bottomElement,holderEvent) => {
    const dy=(holderEvent.pageY-holderEvent.target.offsetTop-(holderEvent.target.clientHeight/2).toFixed(0));
    topElement.style.height=(topElement.clientHeight+dy)+"px";
    bottomElement.style.height=(bottomElement.clientHeight-dy)+"px";
}