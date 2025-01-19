import os

route = "./data/asia"

names_docs = [
    "afganistán.json",
    "azerbaiyán.json",
    "bangladesh.json",
    "bután.json",
    "camboya.json",
    "catar.json",
    "china.json",
    "chipre.json",
    "corea del norte.json",
    "corea del sur.json",
    "emiratos árabes unidos.json",
    "india.json",
    "indonesia.json",
    "irán.json",
    "iraq.json",
    "israel.json",
    "japón.json",
    "jordania.json",
    "kazajistán.json",
    "kirguistán.json",
    "laos.json",
    "líbano.json",
    "malasia.json",
    "maldivas.json",
    "mongolia.json",
    "nepal.json",
    "omán.json",
    "pakistán.json",
    "palestina.json",
    "filipinas.json",
    "arabia saudita.json",
    "singapur.json",
    "siria.json",
    "sri lanka.json",
    "tailandia.json",
    "turquía.json",
    "taiwán.json",
    "tayikistán.json",
    "turkmenistán.json",
    "uzbekistán.json",
    "vietnam.json",
    "yemen.json"
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