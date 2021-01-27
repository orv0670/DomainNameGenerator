var pronombre = ["the","our","your","my","me"];
var adjetivo = ["great","big","awasome","cool","happy"];
var sustantivo = ["racoon","dog","evilcat","groot","ironman"];
var extension = [".com",".net",".org",".us",".io"];

    for (let i = 0; i < pronombre.length; i++) {
        for (let j = 0; j < adjetivo.length; j++) {
            for (let k = 0; k < sustantivo.length; k++) {
                for (let l = 0; l < extension.length; l++) {
                    console.log("www."+pronombre[i]+adjetivo[j]+sustantivo[k]+extension[l]);
                    
                    
                }
                
            }
            
        }
        
    }