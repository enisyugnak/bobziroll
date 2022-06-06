PersonCard
PersonCardStar

click handler fonksiyonu. 
bir alt elemandan üst elemanı trigger etmece. 


/** Derived State */

bir alt componentin state ini  props gondererek degistirmek. 
cok saglıklı bir yontem degil. yerine  gereki state i  bir ust  
componentte  tutup,  tum  child elemanları state in yeni degeriyle
tekrar olusturmak. 
-- passing prop to a component to change the state is not  good
because it doesnt  change the array data on the upper component
it just changes own value. 