import json

listed_data = list()
with open('hieroglyphs.json', 'r') as f:
    data = json.load(f)
    for cat in data:
        for hiero in cat['hieroglyphs']:
            hiero['category'] = cat['id']
            listed_data.append(hiero)
            
with open('hieroglyphs2.json', 'w') as g:
    g.write(json.dumps(listed_data, indent=2, ensure_ascii=False))
