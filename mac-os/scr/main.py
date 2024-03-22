texto = ""

def function(index): 
    index_int = int(index)
    
    if index_int == 1 : 
        texto = 'Hola'
        
    elif index_int == 2 or index_int == 3 or index_int == 4 :
        texto = 'Adiós'
        
    return texto

nuevo_texto = "3"
print(function(nuevo_texto))