import os

route = "./data/combinaciones"

names_docs = [
    "euas.json",
    "euam.json",
    "euoc.json",
    "afas.json",
    "afam.json",
    "afoc.json",
    "asam.json",
    "asoc.json",
    "amoc.json",
    "euafas.json",
    "euafam.json",
    "euafoc.json",
    "euasam.json",
    "euasoc.json",
    "euamoc.json",
    "afasam.json",
    "afasoc.json",
    "afamoc.json",
    "asamoc.json",
    "euafasam.json",
    "euafasoc.json",
    "euafamoc.json",
    "euasamoc.json",
    "afasamoc.json"
]

if not os.path.exists(route):
    os.makedirs(route)

names_docs = [file for file in names_docs if file.strip()]

for name_doc in names_docs:
    ruta_completa = os.path.join(route, name_doc)

    try:
        with open(ruta_completa, 'w', encoding='utf-8') as file:
            file.write("")
        
        print(f"Archivo creado: {ruta_completa}")
    
    except Exception as e:
        print(f"Error al crear el archivo {ruta_completa}: {e}")