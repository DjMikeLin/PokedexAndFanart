import requests;

results = requests.get('https://pokeapi.co/api/v2/pokemon/?offset=30&limit=30').json()['results'];
print(results);
