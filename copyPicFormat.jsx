
var myDoc = app.activeDocument;

var mySel = app.selection[0];

var myLink = mySel.graphics[0].itemLink.filePath;

var Bound = mySel.geometricBounds;
var height = Bound[2] - Bound[0];
var width = Bound[3] - Bound[1];

var left = "" +  Bound[1];
var top = "" +  Bound[0];

var returnStr = left + "|" + top + "|" + width + "|" + height + "|" + myLink

copyTextToClipboard(returnStr);


function copyTextToClipboard(txt){
    var frameProps = {contents: txt}
    var myTextFrame = app.activeDocument.textFrames.add(frameProps);
    // myTextFrame.words.everyItem().select();
    myTextFrame.parentStory.texts[0].select();
    app.copy();
    // myTextFrame.select();
    myTextFrame.remove();
}//end function numToCopy
