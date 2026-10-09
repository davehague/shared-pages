import pathlib, re
d = pathlib.Path(__file__).parent; src = d.parent/'carmel'
def fold(t):
    out=[];ins=False;i=0
    while i<len(t):
        c=t[i]
        if ins and c=='\\': out.append(t[i:i+2]); i+=2; continue
        if c=="'": ins=not ins
        if c=='\n' and ins: c=' '
        out.append(c); i+=1
    return ''.join(out)
parts=[fold('\n'.join(l for l in (src/f).read_text().split('\n') if not l.startswith('//'))) for f in ['hotels.js','roadtrip.js','carmel.js','indy.js']]
data=(d/'meta.js').read_text()+'\nconst GEO='+(src/'geo.json').read_text()+';\nconst ITEMS=[\n'+'\n'.join(parts)+'\n];\n'+(d/'slots.js').read_text()
out=(d/'shell.html').read_text().replace('/*__DATA__*/',data)
(d/'index.html').write_text(out); print('built',len(out),'bytes')
