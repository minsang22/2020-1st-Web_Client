function sizeset(e, img){ 
  if(e.wheelDelta > 0){
    img.width -= img.width * 0.05; 
    img.height -= img.height * 0.05;
  }

  else{
    img.width += img.width * 0.05;
    img.height += img.height * 0.05;
  }
}